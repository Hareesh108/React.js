import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Flex, Thead } from '@chakra-ui/react';
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditableControls,
  Input,
  EditablePreview,
  TableCaption,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
} from '@chakra-ui/react';

const RecordEdit = props => {
  const location = useLocation();

  const item = location.state?.state;

  console.log(item.id);

  const [value1, setValue1] = React.useState(item);
  const [value2, setValue2] = React.useState(item);
  const [value3, setValue3] = React.useState(item);

  return (
    <>
      <Table variant={'simple'} w="60%" align="center">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Editable w={'100px'} value={value1 ? value1.id : 'Enter id'}>
                <EditablePreview />
                <EditableInput onChange={e => setValue1(e.target.value)} />
              </Editable>
            </Td>
            <Td>
              <Editable w={'100px'} value={value2 ? value2.name : 'Enter name'}>
                <EditablePreview />
                <EditableInput onChange={e => setValue2(e.target.value)} />
              </Editable>
            </Td>
            <Td>
              <Editable w={'200px'} value={value3 ? value3.email : 'Enter email'}>
                <EditablePreview />
                <EditableInput onChange={e => setValue3(e.target.value)} />
              </Editable>
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Flex justify={'center'}>
        <NavLink to="/">
          <Button m={'10'} colorScheme={'red'}>
            Cancel
          </Button>
        </NavLink>
        <NavLink to="/" state={{ state: value2 }}>
          <Button m={'10'} colorScheme={'green'}>
            Update
          </Button>
        </NavLink>
      </Flex>
    </>
  );
};

export default RecordEdit;

//  <Editable value={location ? value.name : 'Enter name'} textAlign="center">
//     <label htmlFor="">Name</label>
//     <EditablePreview ml={'10'} w={'40%'} />
//     <EditableInput
//       ml={'10'}
//       w={'40%'}
//       onChange={e => setValue(e.target.value)}
//     />
//   </Editable>
//   <Editable value={location ? value.email : 'Enter name'} textAlign="center">
//     <label htmlFor="">Email</label>
//     <EditablePreview ml={'10'} w={'40%'} />
//     <EditableInput
//       ml={'10'}
//       w={'40%'}
//       onChange={e => setValue(e.target.value)}
//     />
//   </Editable>
