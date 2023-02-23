
import './App.css';
import { useState, useEffect } from "react";

function GithubUser({name,avatar}) {
  return(
    <>
      <h2>{name}</h2>
      <img src={avatar} alt="" height={200} />
    </>
  )
}

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>{
    setLoading(true);
    fetch(
      `https://api.github.com/users/Hareesh108`
      ).then((response) => response.json()
      ).then(setData).then(()=>setLoading(false)
      ).catch(setError)
  },[])

  if(!data) return null;
  if(loading) return <h3>Loading...</h3>
  if(error) return <pre>{JSON.stringify(error)}</pre>

  return (
    <div >
        <GithubUser 
        name={data.name}
        avatar={data.avatar_url}
         />

        <h3>GitHub : https://api.github.com/users/Hareesh108</h3>
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}

export default App;
