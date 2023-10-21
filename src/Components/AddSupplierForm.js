import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
  Select,
  Wrap,
  WrapItem,
  Link,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import {
  BiArrowBack,
  BiChevronLeft,
  BiChevronLeftCircle,
  BiLeftArrow,
  BiLeftArrowCircle,
  BiMinus,
  BiPlus,
  BiSave,
  BiSend,
  BiTrash,
} from "react-icons/bi";

function AddSupplierForm(props) {
  const [supplierList, setSupplierList] = useState([
    {
      sName: "",
      sPerson: "",
      sContact: "",
      sType: "",
      sAddress: "",
    },
  ]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...supplierList];
    list[index][name] = value;
    setSupplierList(list);
  };
  const handleRemove = (index) => {
    const list = [...supplierList];
    list.splice(index, 1);
    setSupplierList(list);
  };
  const handleAddClick = () => {
    setSupplierList([
      ...supplierList,
      { sName: "", sPerson: "", sContact: "", sType: "", sAddress: "" },
    ]);
  };
  const postSupplier = () => {
    console.log(supplierList);
    setSupplierList([
      { sName: "", sPerson: "", sContact: "", sType: "", sAddress: "" },
    ]);
  };
  return (
    <div>
      <Container maxW="container.2xl" p={3}>
        <HStack
          bg="white"
          position="fixed"
          zIndex="40"
          py={14}
          align="center"
          w="full"
          px={44}
        >
          {/* <Button
            as={Link}
            href="/dashboard"
            borderRadius="full"
            colorScheme="green"
            variant="ghost"
            leftIcon={<BiChevronLeft />}
          >
            Back to Home
          </Button> */}
          <Heading fontSize="26px">Add Supplier</Heading>
          <Spacer />
          <Button
            colorScheme="green"
            onClick={handleAddClick}
            variant="outline"
            size="sm"
            leftIcon={<BiPlus />}
          >
            Add more
          </Button>

          <Button
            onClick={postSupplier}
            colorScheme="teal"
            variant="solid"
            rightIcon={<BiSend />}
            size="sm"
          >
            Submit
          </Button>
        </HStack>

        <Wrap justify="center" spacing="35px" mt="180px">
          {supplierList.map((x, i) => {
            return (
              <>
                <WrapItem>
                  <Box>
                    {supplierList.length !== 1 && (
                      <Box align="right">
                        <Button
                          colorScheme="red"
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemove(i)}
                        >
                          <BiTrash />
                        </Button>
                      </Box>
                    )}
                    <Box
                      bg="white"
                      borderRadius="md"
                      boxShadow="base"
                      mt={3}
                      mb={2}
                    >
                      <Box
                        bg="teal.400"
                        borderTopLeftRadius="md"
                        borderTopRightRadius="md"
                      >
                        <Text
                          textAlign="center"
                          fontWeight={600}
                          p={2}
                          color="white"
                        >
                          Supplier {i + 1}
                        </Text>
                      </Box>

                      <Box p={3}>
                        <HStack>
                          <FormControl isRequired>
                            <FormLabel fontSize={14} fontWeight={600}>
                              Supplier Name
                            </FormLabel>
                            <Input
                              type="text"
                              fontSize={14}
                              name="sName"
                              value={x.sName}
                              onChange={(e) => handleInputChange(e, i)}
                              textTransform="capitalize"
                            />
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel fontSize={14} fontWeight={600}>
                              Contact Person
                            </FormLabel>
                            <Input
                              type="text"
                              fontSize={14}
                              name="sPerson"
                              value={x.sPerson}
                              onChange={(e) => handleInputChange(e, i)}
                              textTransform="capitalize"
                            />
                          </FormControl>
                        </HStack>

                        <HStack mt={3}>
                          <FormControl isRequired>
                            <FormLabel fontSize={14} fontWeight={600}>
                              Contact Type
                            </FormLabel>
                            <Select
                              fontSize={14}
                              name="sType"
                              value={x.sType}
                              onChange={(e) => handleInputChange(e, i)}
                              placeholder="Select..."
                            >
                              <option value="Phone">Phone</option>
                              <option value="Email">Email</option>
                            </Select>
                          </FormControl>
                          {x.sType === "Phone" ? (
                            <FormControl isRequired>
                              <FormLabel fontSize={14} fontWeight={600}>
                                Contact Number
                              </FormLabel>
                              <Input
                                type="tel"
                                fontSize={14}
                                name="sContact"
                                value={x.sContact}
                                onChange={(e) => handleInputChange(e, i)}
                              />
                            </FormControl>
                          ) : x.sType === "Email" ? (
                            <FormControl isRequired>
                              <FormLabel fontSize={14} fontWeight={600}>
                                Email
                              </FormLabel>
                              <Input
                                type="tel"
                                fontSize={14}
                                name="sContact"
                                value={x.sContact}
                                onChange={(e) => handleInputChange(e, i)}
                              />
                            </FormControl>
                          ) : (
                            ""
                          )}
                        </HStack>
                        <FormControl mt={3} isRequired>
                          <FormLabel fontSize={14} fontWeight={600}>
                            Address
                          </FormLabel>
                          <Input
                            type="text"
                            fontSize={14}
                            name="sAddress"
                            value={x.sAddress}
                            onChange={(e) => handleInputChange(e, i)}
                            textTransform="capitalize"
                          />
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>
                </WrapItem>
              </>
            );
          })}
        </Wrap>
      </Container>
    </div>
  );
}

export default AddSupplierForm;
