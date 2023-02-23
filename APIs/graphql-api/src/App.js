
import './App.css';

import { useState, useEffect } from 'react';

const query = `{
  allLifts{
    name,
    elevationGain,
    status
  }
}`;

const option = {
  method:"POST",
  headers : {"content-type" : "application/json"},
  body : JSON.stringify({query})
}

function Lift({name,Elevation,status}) {
  return(
    <div>
      <h2>{name}</h2>
      <h4>{Elevation} {status}</h4>
    </div>
  )
}

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() =>{
    setLoading(true);
    fetch(
      `http://snowtooth.moonhighway.com/`,option
      ).then((response) => response.json()
      ).then(setData).then(()=>setLoading(false)
      ).catch(setError)
  },[])

  if(!data) return null;
  if(loading) return <h3>Loading...</h3>
  if(error) return <pre>{JSON.stringify(error)}</pre>

  return (
    <div className='App'>
        {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
        {data.data.allLifts.map((lift)=>( 
          <Lift 
            name={lift.name}
            elevationGain={lift.elevationGain}
            status={lift.status}
          />
        ))}
    </div>
  );
}

export default App;
