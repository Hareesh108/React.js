import { Name, Age } from './Parent';
import React, {useContext} from 'react';

function GrandChild() {
  const name = useContext(Name);
  const age = useContext(Age)
  return (
    <>
    <h1>{name} {age}</h1>
    </>
  );
}

export default GrandChild;
