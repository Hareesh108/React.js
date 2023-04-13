import { useTable } from 'react-table';
import { Table,TableContainer, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const data = [
  { name: 'John Doe', age: 28, email: 'john.doe@example.com' },
  { name: 'Jane Doe', age: 32, email: 'jane.doe@example.com' },
];

const columns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Email', accessor: 'email' },
  {
    Header: 'Actions',
    Cell: ({ row }) => (
      <>
        <FaEdit />
        <FaTrash />
      </>
    ),
  },
];

function TableComponent() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <TableContainer h={'100vh'} p="20" bg='ButtonShadow' >
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
            ))}
          </Tr>
        ))}
      </thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
    </TableContainer>
  );
}

export default TableComponent;
