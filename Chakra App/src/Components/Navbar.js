import { FcGlobe } from 'react-icons/fc';
import { FiAlignJustify } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';
import {
  Box,
  Button,
  Stack,
  Flex,
  Icon,
  List,
  ListItem,
  Spacer,
} from '@chakra-ui/react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import Home from './Home';
import About from './About';
import TableComponent from './TableComponent';
import TableData from '../Tables/TableData';

const data = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
];

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="box">
      <Stack position={'fixed'} top="0" bg="#3e4a61" w="100%">
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="5"
          bg={'#ff5722'}
          p={'12px'}
        >
          <Box onClick={showSidebar}>
            {sidebar ? (
              <Icon as={VscClose} h="40px" w="40px" />
            ) : (
              <Icon as={FiAlignJustify} h="40px" w="40px" />
            )}
          </Box>
          <Box>
            <Icon as={FcGlobe} h="50px" w="50px" />
          </Box>
          <Box>
            <List h={50} p="10px" fontSize="xl">
              <Flex justify="flex-start" gap="25px">
                <Link to="./home">
                  <ListItem>Home</ListItem>
                </Link>
                <Link to="./project">
                  <ListItem>Project</ListItem>
                </Link>
                <Link to="./about">
                  <ListItem>About</ListItem>
                </Link>
              </Flex>
            </List>
          </Box>
          <Spacer />
          <Box>
            <Button colorScheme="teal">Logout</Button>
          </Box>
        </Flex>
      </Stack>

      <div className="parent">
        <div className="child1">
          {sidebar ? (
            <Sidebar data={data} />
          ) : (
            <List position={'fixed'} mt="20">
              {data.map((item, index) => {
                return (
                  <>
                    <ListItem
                      borderBottom={'2px dotted'}
                      borderRight="2px dotted"
                      h="6.9vh"
                      p="10px"
                      w="50px"
                      bg="#ff9a3c"
                      key={index}
                      className={item.cName}
                    >
                      <NavLink to={item.path}>
                        <Flex gap={5} padding={1}>
                          {item.icon}
                        </Flex>
                      </NavLink>
                    </ListItem>
                  </>
                );
              })}
            </List>
          )}
        </div>
        <div className="child2">
          <Home />
          <About />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
