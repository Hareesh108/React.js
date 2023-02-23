import React, { useState, useEffect, useRef } from 'react';

const Mutable = () => {
  const [field, setField] = useState('');

  // Problem
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   // setCount(() => count + 1);

  // });

  // SOLUTION
  const count = useRef(0);

  useEffect(() => {
    // It is mutable without re-render the component.
    count.current = count.current + 1;
    console.log(count.current);
  });

  // useEffect(() => {
  //   count.current = count.current + 1;
  //   console.log(count.current);
  // },[field]);

  return (
    <>
      <label htmlFor="">Write here</label>
      <input
        type="text"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
      <p>The number of times render is: {count.current}</p>
    </>
  );
};

export default Mutable;
