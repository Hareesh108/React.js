

import { useState } from "react";
import { Editable, EditableInput, EditablePreview, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

function SampleEdit() {
  const [tableData, setTableData] = useState([
    { name: "John Doe", age: 25, occupation: "Software Engineer" },
    { name: "Jane Smith", age: 30, occupation: "Web Developer" },
    { name: "Bob Johnson", age: 35, occupation: "Data Analyst" },
  ]);

  const handleCellUpdate = (newValue, rowIndex, key) => {
    const newData = [...tableData];
    newData[rowIndex][key] = newValue;
    setTableData(newData);
  };

  return (
    <Table variant='striped'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>Occupation</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Editable defaultValue={row.name} onSubmit={(newValue) => handleCellUpdate(newValue, rowIndex, "name")}>
              <Td>
                <EditablePreview />
                <EditableInput />
              </Td>
            </Editable>
            <Editable defaultValue={row.age} onSubmit={(newValue) => handleCellUpdate(newValue, rowIndex, "age")}>
              <Td>
                <EditablePreview />
                <EditableInput />
              </Td>
            </Editable>
            <Editable defaultValue={row.occupation} onSubmit={(newValue) => handleCellUpdate(newValue, rowIndex, "occupation")}>
              <Td>
                <EditablePreview />
                <EditableInput />
              </Td>
            </Editable>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default SampleEdit;
