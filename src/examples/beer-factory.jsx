import React from 'react';

class BeerFactory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        const { counter } = this.state;
        console.log('MyClassComponent - Render',counter);

        return <div>
            <span>Counter: {counter}</span> 
            <button onClick={this.increment}>+</button>
        </div>;
    }
}

export default BeerFactory


