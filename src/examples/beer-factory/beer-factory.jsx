import React, { useMemo, useReducer } from 'react';
import BeerActions from './beer-actions';
import Counter from './counter';

// action types
const ADD_BEER = 'ADD_BEER';
const REMOVE_BEER = 'REMOVE_BEER';
const SEND_TRUCK = 'SEND_TRUCK';
const ENABLE_FACTORY = 'ENABLE_FACTORY';

const initialState = {
  beer: 0,
  sixPack: 0,
  enableFactory: false
};

const addBeer = state => {
  const { beer, sixPack } = state;
  const isSixPack = beer === 5;
  const beerCount = isSixPack ? 0 : beer + 1;
  const sixPackCount = isSixPack ? sixPack + 1 : sixPack;

  return {
    ...state,
    beer: beerCount,
    sixPack: sixPackCount
  };
};

const beerReducer = (state, action) => {
  switch (action.type) {
    case ADD_BEER: {
      return addBeer(state);
    }
    case REMOVE_BEER: {
      return { ...state, beer: state.beer - 1 };
    }
    case SEND_TRUCK: {
      return { ...state, sixPack: 0};
    }
    case ENABLE_FACTORY: {
      return { ...state, enableFactory: true };
    }
    default:
      return state;
  }
};

const BeerFactory = () => {
  const [state, dispatch] = useReducer(beerReducer, initialState);

  const { beer, sixPack, enableFactory } = state;

  const sendTruck = () => dispatch({ type: SEND_TRUCK });
  const addBeer = () => dispatch({ type: ADD_BEER });
  const removeBeer = () => dispatch({ type: REMOVE_BEER });

  const beerCounter = useMemo(() => <Counter title="Beers" counter={beer} id="BeerCounter"/>, [beer]);
  const sixPackCounter = useMemo(() => <Counter title="SixPack" counter={sixPack} id="SixPackCounter" />, [sixPack]);

  return (
    <div style={{marginTop: 50, width: 550}}>
      { enableFactory ? (
        <>
          <div className="row demo-row" style={{margin: 50, width: 250}}>
            <div className="col">
              {beerCounter}
            </div>
            <div className="col">
              {sixPackCounter}
            </div>
          </div>
          <BeerActions addBeer={addBeer} removeBeer={removeBeer} sendTruck={sendTruck} />
      </> 
      ) : (
        <button onClick={dispatch({ type: ENABLE_FACTORY })}>
          Turn on
        </button>
      )
    }
    </div>
  );
}

export default BeerFactory


