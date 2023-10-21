import {
  Box,
  Container,
  Heading,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Spacer,
  Stack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Link,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalOverlay,
  ModalFooter,
  Link,
} from "@chakra-ui/react";
import React from "react";
import {
  BiBarChart,
  BiCar,
  BiChevronDown,
  BiCoinStack,
  BiFile,
  BiLineChart,
  BiListUl,
  BiMoney,
  BiPlus,
} from "react-icons/bi";
import NewBiddingModal from "../Components/Modals/NewBiddingModal";
import Navbar from "../Components/Navbar";
import RecentBidding from "../Components/RecentBidding";

function Dashboard(props) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box pt={20} bg="#eee" h="100vh">
          <Container maxW="container.xl">
            <HStack mt={5}>
              <Heading color="blackAlpha.700">Dashboard</Heading>{" "}
              <BiLineChart fontSize={20} pr={5} />
              <Spacer />
              <Button
                leftIcon={<BiPlus />}
                colorScheme="green"
                variant="outline"
                onClick={onOpen}
              >
                New bidding
              </Button>{" "}
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<BiChevronDown />}
                  colorScheme="green"
                >
                  Reports
                </MenuButton>

                <MenuList>
                  <MenuItem
                    icon={<BiFile />}
                    as={Link}
                    href="/rfq"
                    _hover={{ textDecoration: "none" }}
                  >
                    Daily RFQ
                  </MenuItem>
                  <MenuItem icon={<BiCar />}>Per Supplier (Total)</MenuItem>
                  <MenuItem icon={<BiCoinStack />}>For Accounting</MenuItem>
                  <MenuItem icon={<BiMoney />}>Overall Daily Bidding</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<BiChevronDown />}
                  colorScheme="green"
                >
                  Suppliers
                </MenuButton>

                <MenuList>
                  <MenuItem
                    as={Link}
                    icon={<BiPlus />}
                    href="/addsupplier"
                    _hover={{ textDecoration: "none" }}
                  >
                    Add Supplier
                  </MenuItem>

                  <MenuItem
                    as={Link}
                    icon={<BiListUl />}
                    href="/supplier"
                    _hover={{ textDecoration: "none" }}
                  >
                    Manage Suppliers
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>

            <HStack>
              <Box w="80%" mt={14}>
                <Flex alignItems="center" color="blackAlpha.800">
                  <Text fontSize={14} fontWeight={600} pr={1}>
                    Top Suppliers
                  </Text>
                  <BiCar />
                </Flex>
                <TableContainer
                  bg="white"
                  borderRadius={5}
                  mt={3}
                  color="blackAlpha.800"
                >
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th w="50%">Supplier name</Th>
                        <Th>Address</Th>
                        <Th isNumeric>Awards</Th>
                      </Tr>
                    </Thead>
                    <Tbody fontSize={13}>
                      {[...Array(4)].map((i, k) => {
                        return (
                          <Tr>
                            <Td> Joan's Pharmacy</Td>
                            <Td>Zamboanga City, Philippines 7000</Td>
                            <Td isNumeric fontWeight={700}>
                              20
                            </Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
              {/* RIGHT */}
              <Spacer />
              <Box w="30%" pt={20}>
                <Stack>
                  <Box bg="white" pt={5} borderRadius={5}>
                    <Flex alignItems="center" px={6} pb={4}>
                      <Stack color="blackAlpha.700">
                        <Text
                          mb={-2}
                          textTransform="uppercase"
                          fontSize={13}
                          fontWeight={800}
                        >
                          No. of Suppliers
                        </Text>
                        <Heading pt={2}>12</Heading>
                      </Stack>
                      <Spacer />

                      <BiCar fontSize={40} color="#38A169" />
                    </Flex>
                    <Box h={3} bgColor="green.500" borderBottomRadius={5} />
                  </Box>

                  <Box bg="white" pt={5} borderRadius={5}>
                    <Flex alignItems="center" px={6} pb={4}>
                      <Stack color="blackAlpha.700">
                        <Text
                          mb={-2}
                          textTransform="uppercase"
                          fontSize={13}
                          fontWeight={800}
                        >
                          No. of Biddings
                        </Text>
                        <Heading pt={2}>0</Heading>
                      </Stack>
                      <Spacer />

                      <BiBarChart fontSize={40} color="#38A169" />
                    </Flex>
                    <Box h={3} bgColor="green.500" borderBottomRadius={5} />
                  </Box>
                </Stack>
              </Box>
            </HStack>

            {/* BIDDING */}
            <Box mt={14}>
              <Flex alignItems="center" color="blackAlpha.800">
                <Text fontSize={14} fontWeight={600} pr={1}>
                  Recent Biddings
                </Text>
                <BiBarChart />
              </Flex>

              {[...Array(5)].map((i) => {
                return <RecentBidding />;
              })}
            </Box>
          </Container>

          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>New Bidding</ModalHeader> <ModalCloseButton />
              <NewBiddingModal />
            </ModalContent>
          </Modal>
        </Box>
      </Box>
      {/* <Modal isOpen={isSupplierOpen} onClose={onSupplierClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Suppliers</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={5}>
            <AddSupplierModal />
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  );
}

export default Dashboard;
