import React from 'react';
import Parent1 from './createContext/Parent';
import Parent2 from './propsDrilling/Parent'
import Parent3 from './useContext/Parent';


function App() {
  return (
    <div>
      <Parent1 />
      <Parent3/>
      <Parent2/>
    </div>
  );
}

export default App;
