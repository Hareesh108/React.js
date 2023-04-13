import {
  Table,
  Thead,
  Button,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import Feedback from '../Feedback/Feedback';
import { useToast } from '@chakra-ui/react';
import { NavLink,Link,useLocation} from 'react-router-dom';
import React from 'react';

function MyTable({ data, onDelete }) {

  const location = useLocation();

  const item = location.state?.state;

  console.log(item);

  // const [myData, setMyData] = React.useState(data);

  const toast = useToast();

  return (
    <Table m={'5'} size={'sm'} variant="striped">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map(item => (
          <Tr key={item.id}>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>
              <Button
                onClick={() =>
                  toast({
                    title: 'Successfully Deleted',
                    description:
                      'ID: ' +
                      item.id +
                      ' Name: ' +
                      item.first_name +
                      ' Email: ' +
                      item.email,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                }
              >
                <IconButton
                  colorScheme="red"
                  size="sm"
                  icon={<DeleteIcon />}
                  onClick={() => onDelete(item.id)}
                />
              </Button>
              <Feedback onDelete={onDelete} data={item} />

              <Link to='/edit' state={{state:item}}  >
                <Button colorScheme={'green'} > Edit </Button>
              </Link>

            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default MyTable;
