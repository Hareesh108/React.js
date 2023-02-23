import React from "react";
import { useEffect, useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log('Component did update.');
  
      // This function will be called when the component is unmounted or when the count changes.
      return () => {
        console.log('Component will unmount or count will change.');
      }
    }, [count]);
  
    const handleClick = () => {
      setCount(count + 1);
    }
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
}

export default App;