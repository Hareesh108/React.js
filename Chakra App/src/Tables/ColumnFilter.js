import React from 'react';
import { Text, Input } from '@chakra-ui/react';

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <Text h={'57px'} w="100px">
      Search:{' '}
      <Input
        bg={'linkedin.400'}
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
      />
    </Text>
  );
};
