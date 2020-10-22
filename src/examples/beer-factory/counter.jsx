import * as React from 'react';

class Counter extends React.Component {
    render() {
        const { title, counter, id } = this.props;
        
        console.log('COUNTER RENDER:', id );

        return ( <span>{title}: {counter}</span>)
    }
}

export default Counter;