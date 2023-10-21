import React from "react";
import { Box, HStack, Text, Spacer, Button, Flex } from "@chakra-ui/react";
import {
  BiMoney,
  BiCalendar,
  BiLayer,
  BiChevronRight,
  BiCube,
} from "react-icons/bi";

function RecentBidding(props) {
  return (
    <div>
      <Box
        mt={3}
        bg="white"
        borderRadius={5}
        py={4}
        px={6}
        color="blackAlpha.700"
      >
        <Flex alignItems="center">
          <HStack>
            <BiCalendar fontSize={25} mr={2} />
            <Box lineHeight={1.3}>
              <Text fontSize={12.5} fontWeight={600}>
                February 14, 2023
              </Text>
              <Text fontSize={11}>Tuesday</Text>
            </Box>
          </HStack>

          <Spacer />
          <HStack>
            <BiCube fontSize={25} mr={2} />
            <Box lineHeight={1.3}>
              <Text fontSize={12.5} fontWeight={600}>
                DRUGS AND MEDICINES
              </Text>
              <Text fontSize={11}>Category</Text>
            </Box>
          </HStack>

          <Spacer />
          <HStack>
            <BiMoney fontSize={25} mr={2} />
            <Box lineHeight={1.3}>
              <Text fontSize={12.5} fontWeight={600}>
                100,000,211
              </Text>
              <Text fontSize={11}>Total Cost</Text>
            </Box>
          </HStack>

          <Spacer />
          <HStack>
            <BiLayer fontSize={25} mr={2} />
            <Box lineHeight={1.3}>
              <Text fontSize={12.5} fontWeight={600}>
                15 items
              </Text>
              <Text fontSize={11}>Total Items</Text>
            </Box>
          </HStack>

          <Spacer />

          <Button p={0} variant="ghost" size="sm">
            <BiChevronRight fontSize={20} fontWeight={500} />
          </Button>
        </Flex>
      </Box>
    </div>
  );
}

export default RecentBidding;
