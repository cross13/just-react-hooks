import React, { useState, useEffect } from 'react';

const FirstHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('mounted');
    return () => {
      alert('unmount');
    }
  }, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>bleh</button>
    </div>
  )
}


export default FirstHook;
