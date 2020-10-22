import * as React from 'react';

class BeerActions extends React.Component {
    render() {
        const { addBeer, removeBeer, sendTruck } = this.props;
        return (<div className="row demo-row">
            <div className="col">
                <button className="btn btn-lg btn-danger" onClick={removeBeer}>Destroy Beer :(</button>
            </div>
            <div className="col">
                <button className="btn btn-lg btn-primary" onClick={addBeer}>Create Beer :)</button>            
            </div>
            <div className="col">
                <button className="btn btn-lg btn-info" onClick={sendTruck}>Send Truck</button>
            </div>
        </div>)
    }
}

export default BeerActions;
