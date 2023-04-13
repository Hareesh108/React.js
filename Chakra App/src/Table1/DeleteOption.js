import React from "react";
import MyTable from "./myTable";
import myData from '../Tables/MOCK_DATA.json';

function DeleteOption({data, setData}) {
    
  // const [data, setData] = React.useState([
  //   { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
  //   { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
  //   { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' },
  //   { id: 4, name: 'John Doe', email: 'johndoe@example.com' },
  //   { id: 5, name: 'Jane Doe', email: 'janedoe@example.com' },
  //   { id: 6, name: 'Bob Smith', email: 'bobsmith@example.com' },
  //   { id: 7, name: 'John Doe', email: 'johndoe@example.com' },
  //   { id: 8, name: 'Jane Doe', email: 'janedoe@example.com' },
  //   { id: 9, name: 'Bob Smith', email: 'bobsmith@example.com' },
  //   { id: 10, name: 'John Doe', email: 'johndoe@example.com' },
  //   { id: 11, name: 'Jane Doe', email: 'janedoe@example.com' },
  //   { id: 12, name: 'Bob Smith', email: 'bobsmith@example.com' },
  // ]);

  // const [data, setData] = React.useState(myData);

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  return <MyTable data={data} onDelete={handleDelete} />;
}

export default DeleteOption;
