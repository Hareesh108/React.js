import React from 'react';
import GrandChild from './GrandChild';

function Child(props) {

  const {name,age,setName} = props;

  return (
    <div>
      <GrandChild name={name} age={age} setName={setName}/>
    </div>
  );
}

export default Child;
