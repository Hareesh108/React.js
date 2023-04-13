import React from 'react';
import './App.css';
import Login from './Login';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import TableData from './Tables/TableData';
import Feedback from './Feedback/Feedback';
import DeleteOption from './Table1/DeleteOption';
import RecordEdit from './Edit/RecordEdit'
import Error from './Edit/Error';
import SampleEdit from './Edit/SampleEdit';



function App() {

  const [data, setData] = React.useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' },
    { id: 4, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 5, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 6, name: 'Bob Smith', email: 'bobsmith@example.com' },
    { id: 7, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 8, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 9, name: 'Bob Smith', email: 'bobsmith@example.com' },
    { id: 10, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 11, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 12, name: 'Bob Smith', email: 'bobsmith@example.com' },
  ]);

  // data.map(item => )

  // console.log(data.item);

  return (
    <>
      {/* <Login/> */}
      {/* <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter> */}
      {/* <TableData /> */}
      {/* <Feedback/> */}

      <Routes>
        <Route path='/' element={<DeleteOption data={data} setData={setData} />} />
        <Route path="/edit" element={<RecordEdit />} />
      </Routes>

      {/* <SampleEdit/> */}
    </>
  );
}

export default App;
