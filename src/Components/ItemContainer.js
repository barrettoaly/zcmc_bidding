import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  BiBox,
  BiMinus,
  BiPlus,
  BiSend,
  BiTrash,
  BiTrashAlt,
} from "react-icons/bi";
import { Select } from "chakra-react-select";
import api from "../API/Api";

function ItemContainer(props) {
  const [supplier, setSupplier] = useState([]);
  const [list, setList] = useState([]);
  const [items, setItems] = useState([]);
  const [supplierData, setSupplierData] = useState([]);
  const [data, setData] = useState([
    {
      itemCode: "",
      unit: "",
      qty: "",
      supplierList: [{ supplierId: "", unitCost: 0 }],
    },
  ]);

  // handle click event of the Remove button
  const handleRemoveClick = (key, i) => {
    const list = [...data];
    let newList = list[key]["supplierList"];
    newList.splice(list[i], 1);

    setData(list);
  };

  const removeAll = () => {
    setSupplierData([]);
  };

  // handle click event of the Add button
  const handleAddSupplier = (index) => {
    data[index]["supplierList"].push({ supplierId: "", unitCost: 0 });
  };

  // SELECT SUPPLIER
  const handleSelectSupplier = (key, i, value, att) => {
    const newList = [...data];
    newList[key]["supplierList"][i][att] = value;
    setData(newList);
  };

  const handleInput = (i, value, att) => {
    const newList = [...data];
    newList[i][att] = value;
    setData(newList);
  };

  const handleAddItem = () => {
    setData([
      ...data,
      {
        itemCode: 0,
        unit: "",
        qty: "",
        supplierList: [{ supplierId: 0, unitCost: 0 }],
      },
    ]);
  };

  const handleRemoveItem = (index) => {
    const list = [...data];

    list.splice(list[index], 1);
    setData(list);
  };

  // QUERIES
  const getList = async () => {
    const response = await api.get("/get_suppliers.php");
    setList(response.data);
  };

  const getItems = async () => {
    const res = await api.get("/get_items.php");
    setItems(res.data);
    setItems((current) => [...current, { value: 0, label: "Add new item" }]);
  };

  useEffect(() => {
    getList();
    getItems();
  });

  return (
    <Box maxW="container.lg">
      <Flex>
        <Button
          colorScheme="green"
          w={150}
          rightIcon={<BiBox />}
          size="sm"
          mb={3}
          onClick={handleAddItem}
        >
          Add more item
        </Button>
        <Spacer />
      </Flex>

      {data.map((d, key) => {
        return (
          <>
            <Box mt={4}>
              <div
                style={{
                  position: "absolute",
                }}
              >
                <Text
                  bg="gray.500"
                  color="white"
                  border="round"
                  borderRadius="100%"
                  px={2}
                  py={0.5}
                  mt={5}
                  ml={-2}
                  fontSize={13}
                >
                  {key + 1}
                </Text>
              </div>{" "}
              <Flex
                justifyContent="right"
                mb={2}
                fontWeight={500}
                color="red.500"
                fontSize={13}
                alignItems="center"
              >
                <BiTrashAlt />
                <Link
                  ml={1}
                  onClick={(e) => {
                    handleRemoveItem(key);
                  }}
                >
                  Remove item
                </Link>
              </Flex>
              <Box bg="white" p={6} borderRadius={5} mt={2} h="auto">
                <Flex>
                  <FormControl isRequired mr={3}>
                    <FormLabel fontSize={13}>Item Description</FormLabel>
                    <Select
                      fontSize={13}
                      size="sm"
                      borderRadius={5}
                      options={items}
                      useBasicStyles
                      name="itemCode"
                      onChange={(e) => {
                        handleInput(key, e.value, "itemCode");
                      }}
                    />
                  </FormControl>
                  <FormControl isRequired mr={3} w={200}>
                    <FormLabel fontSize={13}>Unit</FormLabel>
                    <Input
                      type="text"
                      fontSize={13}
                      size="sm"
                      name="unit"
                      value={d.unit}
                      onChange={(e) => {
                        handleInput(key, e.target.value, "unit");
                      }}
                    />
                  </FormControl>
                  <FormControl isRequired w={150}>
                    <FormLabel fontSize={13}>Quantity</FormLabel>
                    <Input
                      type="number"
                      fontSize={13}
                      size="sm"
                      name="qty"
                      value={d.qty}
                      onChange={(e) => {
                        handleInput(key, e.target.value, "qty");
                      }}
                    />
                  </FormControl>
                </Flex>
                <Flex alignItems="center" my={6}>
                  <Button
                    size="sm"
                    fontSize={12}
                    rightIcon={<BiPlus />}
                    onClick={() => {
                      handleAddSupplier(key);
                    }}
                    mr={3}
                  >
                    Add supplier
                  </Button>
                  {supplierData.length >= 1 ? (
                    <Button
                      size="sm"
                      fontSize={12}
                      onClick={removeAll}
                      colorScheme="red"
                      variant="outline"
                      rightIcon={<BiMinus />}
                    >
                      Remove all
                    </Button>
                  ) : (
                    ""
                  )}
                </Flex>
                {Object.values(d.supplierList).map((a, i) => {
                  return (
                    <>
                      <Box mt={5} key={i}>
                        <Flex mt={3} alignItems="center">
                          <FormControl isRequired mr={3} lineHeight={0.8}>
                            <FormLabel fontSize={12}>
                              {i + 1}. Supplier name
                            </FormLabel>
                            <Select
                              fontSize={12}
                              size="sm"
                              borderRadius={5}
                              useBasicStyles
                              options={list}
                              defaultValue={a.supplierId}
                              name="supplierId"
                              onChange={(e) => {
                                handleSelectSupplier(
                                  key,
                                  i,
                                  e.value,
                                  "supplierId"
                                );
                              }}
                            />
                          </FormControl>

                          <FormControl isRequired w={300} lineHeight={0.8}>
                            <FormLabel fontSize={12}>Unit Cost</FormLabel>
                            <InputGroup size="sm">
                              <InputLeftElement
                                pointerEvents="none"
                                color="gray.500"
                                children="₱"
                              />
                              <Input
                                type="number"
                                value={a.unitCost}
                                fontSize={13}
                                size="sm"
                                onChange={(e) => {
                                  handleSelectSupplier(
                                    key,
                                    i,
                                    e.target.value,
                                    "unitCost"
                                  );
                                }}
                              />
                            </InputGroup>
                          </FormControl>
                          <Button
                            mt={3}
                            colorScheme="red"
                            variant="ghost"
                            size="sm"
                            ml={1}
                            onClick={() => handleRemoveClick(key, i)}
                          >
                            <BiTrash fontSize={20} />
                          </Button>
                        </Flex>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
          </>
        );
      })}
      <Flex mt={10} justifyContent="end">
        <Button
          w={130}
          variant="solid"
          colorScheme="green"
          size="sm"
          rightIcon={<BiSend />}
          onClick={() => {
            console.log(data);
          }}
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
}

export default ItemContainer;
