import * as React from 'react';

import BeerActions from './beer-actions';
import Counter from './counter';

class BeerFactory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: 0,
            sixPack: 0,
            enableFactory: false,
        }
        this.addBeer = this.addBeer.bind(this);
        this.removeBeer = this.removeBeer.bind(this);
        this.sendTruck = this.sendTruck.bind(this);
    }

    componentDidUpdate() {
        // Make Six
        const { beer, sixPack } = this.state;

        if (beer === 6) {
            this.setState({
                beer: 0,
                sixPack: sixPack + 1,
            });
        }
    }

    sendTruck() {
        this.setState({sixPack: 0});
    }

    addBeer() {
        this.setState({beer: this.state.beer + 1});
    }

    removeBeer() {
        this.setState({beer: this.state.beer - 1});
    }

    render() {
        const { beer, sixPack } = this.state;
        console.log('BeerFactory - Render', beer);

        return <div style={{marginTop: 50, width: 550}}>
            <div className="row demo-row" style={{margin: 50, width: 250}}>
                <div className="col">
                    <Counter title="Beers" counter={beer} id="BeerCounter" />
                </div>
                <div className="col">
                    <Counter title="SixPack" counter={sixPack} id="SixPackCounter" />
                </div>
            </div>
            <BeerActions addBeer={this.addBeer} removeBeer={this.removeBeer} sendTruck={this.sendTruck} />
        </div>;
    }
}

export default BeerFactory


