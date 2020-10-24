import * as React from 'react';

import BeerActions from './beer-actions';
import Counter from './counter';

const ACTIONS = {
    ADD_BEER: 'addBeer',
    REMOVE_BEER: 'removeBeer',
    SEND_TRUCK: 'sendTruck',
    ENABLE_FACTORY: 'ENABLE_FACTORY'
}

const initialState = {
    beer: 0,
    sixPack: 0,
    enableFactory: false
}

const addBeer = (state) => {
    const { beer, sixPack } = state;
    const isSixPack = beer === 5;
    const beerCount = isSixPack ? 0 : beer + 1;
    const sixPackCount = isSixPack ? sixPack + 1 : sixPack;

    return { ...state, beer: beerCount, sixPack: sixPackCount };
}

const beerReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_BEER :
            return addBeer(state);
        case ACTIONS.REMOVE_BEER :
            return { ...state, beer: state.beer - 1 }
        case ACTIONS.SEND_TRUCK :
            return { ...state, sixPack: 0 }
        case ACTIONS.ENABLE_FACTORY :
            return { ...state, enableFactory: true }
        default:
            return state;
    }
}


const BeerFactory = () => {

    const [state, dispatch] = React.useReducer(beerReducer, initialState);

    const { beer , sixPack, enableFactory } = state;

    const sendTruck = () => dispatch({ type: ACTIONS.SEND_TRUCK});
    const addBeer = () => dispatch({ type: ACTIONS.ADD_BEER});
    const removeBeer = () =>dispatch({ type: ACTIONS.REMOVE_BEER});
    const setEnableFactory = () => dispatch({ type: ACTIONS.ENABLE_FACTORY});

    const beerCounter = React.useMemo(() => <Counter title="Beers" counter={beer} id="BeerCounter" />, [beer]);
    const SixPackCounter = React.useMemo(() => <Counter title="SixPack" counter={sixPack} id="SixPackCounter" />, [sixPack]);

    return <div style={{marginTop: 50, width: 550}}>
        { enableFactory && <>
            <div className="row demo-row" style={{margin: 50, width: 250}}>
            <div className="col">
                {beerCounter}
            </div>
            <div className="col">
                {SixPackCounter}
            </div>
            </div>
            <BeerActions addBeer={addBeer} removeBeer={removeBeer} sendTruck={sendTruck} />
            </>
        }
        { !enableFactory && <button onClick={() => setEnableFactory(true)}>Turn On</button> }
    </div>;
}

export default BeerFactory


