import React, { createContext } from 'react';
import Child from './Child';

// First, create a new context using the createContext() method:
const Name = createContext();
const Age = createContext();

function Parent1() {
  return (
    <div>
    {/* Provide with value attribute */}
      <Name.Provider value={"Hareesh Bhittam"}>
          <Age.Provider value={"23"}>
            <Child/>
          </Age.Provider>
      </Name.Provider>
    </div>
  );
}

export default Parent1;
export {Name,Age};
