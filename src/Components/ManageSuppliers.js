import React from "react";
import {
  Container,
  Box,
  Heading,
  HStack,
  Spacer,
  Button,
  Link,
  TableContainer,
  Thead,
  Th,
  Table,
  Input,
  Tr,
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BiEdit, BiPlus, BiChevronLeft } from "react-icons/bi";
import EditSupplierModal from "./Modals/EditSupplierModal";

function ManageSuppliers(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Container maxW="container.xl">
        {/* <Button
          as={Link}
          href="/dashboard"
          borderRadius="full"
          colorScheme="black"
          variant="ghost"
        >
          <BiChevronLeft fontSize="40px" />
        </Button> */}
        <HStack mt={10}>
          <Heading fontSize="26px">Manage Suppliers</Heading>
          <Spacer />
          <Button
            as={Link}
            href="/addsupplier"
            leftIcon={<BiPlus />}
            _hover={{ textDecoration: "none" }}
            colorScheme="teal"
            size="sm"
            variant="solid"
          >
            Add Supplier
          </Button>
        </HStack>

        <Box bg="white" borderRadius="md" boxShadow="md" my={10}>
          <HStack p={8}>
            <Heading fontSize={20} px={20} color="teal.700">
              Supplier List
            </Heading>
            <Spacer />

            <Input
              fontSize="13px"
              type="text"
              //   onChange={(e) => setSearch(e.target.value)}
              placeholder="Search supplier..."
              width="300px"
              _hover={{ borderColor: "green" }}
              _focus={{
                boxShadow: "none",
                outline: "none",
                borderColor: "green",
              }}
              backgroundColor="white"
              borderRadius={20}
            />
          </HStack>
          <TableContainer>
            <Table>
              <Thead>
                <Tr bg="#456d79" p={5}>
                  <Th color="white">No.</Th>
                  <Th color="white">Name</Th>
                  <Th color="white">Contact Person</Th>
                  <Th color="white">Contact</Th>
                  <Th color="white">Address</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody fontSize={12}>
                {[...Array(4)].map((i, k) => {
                  return (
                    <Tr>
                      <Td>{k + 1}</Td>
                      <Td> Joan's Pharmacy</Td>
                      <Td>Krizelle Falcasantos</Td>

                      <Td>09876543211</Td>
                      <Td>Zamboanga City, Philippines 7000</Td>
                      <Td>
                        <Button size="sm" colorScheme="orange" onClick={onOpen}>
                          <BiEdit />
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={16}>Edit Supplier Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditSupplierModal />
          </ModalBody>

          <ModalFooter>
            <Button variant="solid" colorScheme="green" size="sm" mr={3}>
              Save
            </Button>
            <Button colorScheme="blue" onClick={onClose} size="sm">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ManageSuppliers;
