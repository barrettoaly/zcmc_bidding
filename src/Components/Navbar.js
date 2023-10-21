import {
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import zcmc from "../Assets/zcmc.png";
import { BiChevronDown, BiLogOut, BiUser, BiWrench } from "react-icons/bi";

function Navbar(props) {
  return (
    <>
      <Box
        w="100%"
        position="fixed"
        bgColor="white"
        boxShadow="base"
        h="60px"
        s
        display="flex"
        alignItems="center"
        zIndex={50}
      >
        <Container maxW="container.xl">
          <Flex alignItems="center">
            <img src={zcmc} style={{ height: "40px", w: "40px" }} />
            <Box lineHeight={1.3} ml={2}>
              <Text fontSize={13} fontWeight={700}>
                ZAMBOANGA CITY MEDICAL CENTER
              </Text>
              <Text fontSize={12}>Materials Management</Text>
            </Box>
            <Spacer />
            <Box>
              <Menu isLazy>
                <Flex>
                  <Text fontWeight={500} fontSize={15} mr={2}>
                    John Doe
                  </Text>
                  <MenuButton>
                    <BiChevronDown />
                  </MenuButton>
                </Flex>

                <MenuList>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem icon={<BiUser />}>Profile</MenuItem>
                  <MenuItem icon={<BiWrench />}>Settings</MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<BiLogOut />}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
