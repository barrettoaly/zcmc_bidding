
import { Container, Box, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import ManageSuppliers from "../Components/ManageSuppliers";


function Supplier(props) {
  return (
    <div>

      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box pt={20} bg="#eee" h="100vh">
          <ManageSuppliers />
        </Box>
      </Box>
    </div>
  );
}

export default Supplier;
