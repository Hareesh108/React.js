import React from 'react';
import {
  FormLabel,
  Input,
  Box,
  Flex,
  Button,
  VStack,
  FormControl,
} from '@chakra-ui/react';

import { Formik } from 'formik';

function Login() {
  return (
    <Flex bg="grey" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            username: '',
            password: '',
            remember: false,
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form action="" onSubmit={handleSubmit}>
              <VStack>
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input type="text" id="username" name="username" />
                </FormControl>
                <FormControl m={'5px'}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input type="password" id="password" name="password" />
                </FormControl>

                <Button colorScheme="teal" size="md" ml="65px">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

export default Login;
