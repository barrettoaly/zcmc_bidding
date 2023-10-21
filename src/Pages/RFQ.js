import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import DisplayRFQ from "../Components/DisplayRFQ";

function RFQ(props) {
  return (
    <div>
      {" "}
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box pt={20}>
          <DisplayRFQ />
        </Box>
      </Box>
    </div>
  );
}

export default RFQ;
