import React, { useState } from "react";
import { Box, Button, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import TitlePage from "../Components/TitlePage";
import ItemContainer from "../Components/ItemContainer";
import { BiPlus, BiPlusCircle } from "react-icons/bi";

function AddNewBidding(props) {
  const [category, setCategory] = useState("Drugs and Medicines");
  return (
    <div style={{ backgroundColor: "#eee", paddingBottom: 50 }}>
      <Box>
        <Navbar />
      </Box>
      <Box pt={24}>
        <Container maxW="container.lg">
          <Flex alignItems="center">
            <Box>
              <TitlePage title="New Bidding" />
            </Box>
            <Spacer />
            <Box lineHeight={1.5}>
              <Text textTransform="uppercase" fontWeight={600} fontSize={16}>
                {category}
              </Text>
              <Text fontSize={13} float="right">
                Category
              </Text>
            </Box>
          </Flex>

          <Box mt={10}>
            <Text mb={4}>TOTAL ITEMS: 1</Text>

            <Box mb={5}>
              <ItemContainer />
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default AddNewBidding;
