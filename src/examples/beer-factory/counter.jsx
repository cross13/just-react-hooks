import React from 'react';

const Counter = props => {
    const { title, counter, id } = props;
        
    console.log('COUNTER RENDER:', id );

    return ( <span>{title}: {counter}</span>)
};

export default Counter;
