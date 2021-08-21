import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>LP</Text>
        <Text color="gray.300" fontSize="small">
          lp@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="John Doe" />
    </Flex>
  );
}