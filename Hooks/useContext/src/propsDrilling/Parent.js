import React, {useState} from 'react';
import Child from './Child';


function Parent2() {
  const [name, setName] = useState("Hareesh");
  const [age, setAge] = useState(23);

  return (
    <div>
    {/* Yes, we can pass the useState function as a prop to a child component. */}
      <Child name={name} age={age} setName={setName} />
      <button onClick={() => setAge(25)} >setAgeFromOwnArea</button>
    </div>
  );
}

export default Parent2;
