import React from 'react';
import demoData from './MOCK_DATA.json';
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useFilters,
  usePagination,
} from 'react-table';

import {
  Table,
  Flex,
  Thead,
  Tbody,
  Tfoot,
  Box,
  Tr,
  Th,
  Td,
  Text,
  Input,
  Button,
  Select,
  headerGroups,
  TableCaption,
  TableContainer,
  Stack,
  filter,
} from '@chakra-ui/react';

import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';
import Feedback from '../Feedback/Feedback';

const TableData = () => {
  const data = React.useMemo(() => demoData, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter,
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter,
      },
      {
        Header: 'Email',
        accessor: 'email',
        Filter: ColumnFilter,
      },
      {
        Header: 'Gender',
        accessor: 'gender',
        Filter: ColumnFilter,
      },
      {
        Header: 'University',
        accessor: 'university',
        Filter: ColumnFilter,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    prepareRow,
    gotoPage,
    pageCount,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <Stack h={'1180px'} p="10" bg="pink">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      <Table variant={'striped'} size={'sm'} {...getTableProps}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <Text
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    h={'6'}
                    w="70px"
                    borderRadius={'7'}
                    textAlign="center"
                    fontSize={'10px'}
                    bg={'whiteAlpha.500'}
                    p="1"
                    color={'black'}
                    mb="5"
                  >
                    Sort
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ⬇️'
                        : ' ⬆️'
                      : ''}
                  </Text>
                  {column.canFilter ? column.render('Filter') : null}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <Td key={data.id} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                ))}
                <Td>
                  <Feedback key={data.id} data={data} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex gap={'3'} justify={'center'}>
        <Text>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </Text>
        <Button onClick={() => gotoPage(0)} isDisabled={!canPreviousPage}>
          First Page
        </Button>
        <Button onClick={() => previousPage()} isDisabled={!canPreviousPage}>
          Previous
        </Button>
        <Button onClick={() => nextPage()} isDisabled={!canNextPage}>
          Next
        </Button>
        <Button
          onClick={() => gotoPage(pageCount - 1)}
          isDisabled={!canNextPage}
        >
          Last Page
        </Button>
        <Flex gap={'3'} align={'center'}>
          <Text w={'100%'}>Jump To Page = </Text>
          <Input
            type={'number'}
            bg={'orange.200'}
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
          <Select
            value={pageSize}
            bg={'deeppink'}
            onChange={e => setPageSize(e.target.value)}
          >
            {[10, 20, 30].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default TableData;
