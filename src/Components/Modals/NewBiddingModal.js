import React from "react";
import {
  Button,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  Link,
} from "@chakra-ui/react";
import { BiCalendar, BiRightArrowAlt } from "react-icons/bi";

function NewBiddingModal(props) {
  return (
    <div>
      <ModalBody pt={5}>
        {/* <Text>Add New Bidding</Text> */}
        <FormControl isRequired>
          <FormLabel>Bidding Date</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiCalendar color="gray.300" />}
            />
            <Input type="date" placeholder="Phone number" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired mt={6}>
          <FormLabel>Category</FormLabel>
          <Select placeholder="Select option">
            <option value="Drugs and Meds">Drugs and Meds</option>
            <option value="" disabled>
              Coming Soon
            </option>
          </Select>
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button rightIcon={<BiRightArrowAlt />} as={Link} href="/new-bidding">
          Proceed
        </Button>
      </ModalFooter>
    </div>
  );
}

export default NewBiddingModal;
