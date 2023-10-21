import {
  Container,
  HStack,
  Spacer,
  Box,
  Input,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Select } from "chakra-react-select";

function DisplayRFQ(props) {
  const options = [
    {
      label: "Joan's Pharmacy",
      value: "Joan's Pharmacy",
    },
    {
      label: "DailyMed Pharmacy",
      value: "DailyMed Pharmacy",
    },
    {
      label: "DigiMed Pharmacy",
      value: "DigiMed Pharmacy",
    },
  ];

  return (
    <div>
      <Container maxW="container.xl" pt={10}>
        <Heading fontSize="26px">Request for Quotation</Heading>
        <HStack py={10}>
          <Box width="500px">
            <FormControl isRequired>
              <FormLabel fontSize={14}>Supplier</FormLabel>
              <Select
                options={options}
                size="md"
                focusBorderColor="green.500"
                selectedOptionStyle="check"
                variant="filled"
              />
            </FormControl>
          </Box>
          <Spacer />
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input width="300px" type="date" />
          </FormControl>
        </HStack>
      </Container>
    </div>
  );
}

export default DisplayRFQ;
