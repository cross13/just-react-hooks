import * as React from 'react';

const FirstHook = () => {
    const [ count, setCount ] = React.useState(0);

    React.useEffect(() => {
        console.log('mount');
        return () => {
            alert('unmount')
        }
    }, []);

    return <div>Counter: {count}  <button onClick={() => setCount(count + 1)}>increase</button></div>
}

export default FirstHook;