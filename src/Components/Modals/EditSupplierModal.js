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
  Textarea,
  Icon,
  Select,
  Wrap,
  WrapItem,
  Spacer,
  InputLeftAddon,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

function EditSupplierModal(props) {
  const [name, setName] = useState("");
  const [person, setPerson] = useState("");
  const [type, setType] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <HStack>
        <FormControl isRequired>
          <FormLabel fontSize={14} fontWeight={600}>
            Supplier Name
          </FormLabel>

          <Input
            type="text"
            fontSize={14}
            name="sName"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={person}
            onChange={(e) => setPerson(e.target.value)}
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
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Select..."
          >
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
          </Select>
        </FormControl>
        {type === "Phone" ? (
          <FormControl isRequired>
            <FormLabel fontSize={14} fontWeight={600}>
              Contact Number
            </FormLabel>
            <Input
              type="tel"
              fontSize={14}
              name="sContact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </FormControl>
        ) : type === "Email" ? (
          <FormControl isRequired>
            <FormLabel fontSize={14} fontWeight={600}>
              Email
            </FormLabel>
            <Input
              type="tel"
              fontSize={14}
              name="sContact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          textTransform="capitalize"
        />
      </FormControl>
    </div>
  );
}

export default EditSupplierModal;
