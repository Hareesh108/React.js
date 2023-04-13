import { List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

const Sidebar = ({ data }) => {
  return (
    <>
      <nav>
        <List position={'fixed'} mt="20">
          {data.map((item, index) => {
            return (
              <>
                <ListItem
                  borderBottom={'2px dotted'}
                  borderRight="2px dotted"
                  h="6.9vh"
                  p="10px"
                  w="200px"
                  bg="#ff9a3c"
                  key={index}
                  className={item.cName}
                >
                  <NavLink to={item.path}>
                    <Flex gap={5} padding={1}>
                      {item.icon}
                      {item.title}
                    </Flex>
                  </NavLink>
                </ListItem>
              </>
            );
          })}
        </List>
      </nav>
    </>
  );
};

export default Sidebar;
