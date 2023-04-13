import React from 'react';
import { Box, Input } from '@chakra-ui/react';

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <Box>
      Search:{' '}
      <Input
        bg={'hotpink'}
        color="white"
        value={filter || ''}
        onChange={e => setFilter(e.target.value)}
      />
    </Box>
  );
};
