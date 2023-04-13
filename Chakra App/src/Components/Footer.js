import { Box,Flex,Icon } from "@chakra-ui/react";
import { List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';

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
  }
]
const Footer = () => {
    return (
        <>
        <Box position={'fixed'} bottom='0' bg='#3e4a61' w='100%' h="104px" >
            <List>
            <Flex align='center' pt='50px' gap={3} justify='center' color='white' >

            { data.map((item,index)=>{
                return(
                    <>
                        <ListItem key={index}> {item.icon} </ListItem>
                    </>
                )
            }) }

            </Flex>

            </List>
        </Box>

        </>
    )
}

export default Footer;