import { Box, Stack, Text } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import TableData from '../Tables/TableData.js';

const Home = () => {
  return (
    <>
      <Stack h={'90vh'} mt="20" p="20" bg='lightblue'>
        <TableContainer>
          <Table variant={'striped'} colorScheme="whatsapp">
            <Thead>
              <TableCaption fontSize={'20'}>Employee Information</TableCaption>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Salary</Th>
                <Th>DOJ</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Rahul</Td>
                <Td>rahul@gmail.com</Td>
                <Td>30,000</Td>
                <Td>9/05/2023</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Kiran</Td>
                <Td>kiran@gmail.com</Td>
                <Td>50,000</Td>
                <Td>22/05/2023</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Vishal</Td>
                <Td>vishal@gmail.com</Td>
                <Td>20,000</Td>
                <Td>8/05/2023</Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>Keshav</Td>
                <Td>keshav@gmail.com</Td>
                <Td>30,000</Td>
                <Td>22/8/2023</Td>
              </Tr>
              <Tr>
                <Td>5</Td>
                <Td>Prince</Td>
                <Td>prince@gmail.com</Td>
                <Td>40,000</Td>
                <Td>22/05/2023</Td>
              </Tr>
              <Tr>
                <Td>6</Td>
                <Td>Digya</Td>
                <Td>digya@gmail.com</Td>
                <Td>45,000</Td>
                <Td>22/09/2022</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th fontSize={16} isNumeric>
                  Total:
                </Th>
                <Th fontSize={16}>100000</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
};

export default Home;
