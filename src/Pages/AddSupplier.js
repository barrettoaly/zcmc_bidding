import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import AddSupplierForm from "../Components/AddSupplierForm";
import Navbar from "../Components/Navbar";

function AddSupplier(props) {
  return (
    <div>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box pt={10}>
          <AddSupplierForm />
        </Box>
      </Box>
    </div>
  );
}

export default AddSupplier;
