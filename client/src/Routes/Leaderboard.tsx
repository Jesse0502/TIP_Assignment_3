import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Leaderboard = () => {
  return (
    <Flex>
      <Navbar />
      <Box
        pr="4"
        pt="30px"
        // bg="lightgray"
        w="full"
        maxHeight={"100vh"}
        overflowY={"scroll"}
      >
        <Text fontWeight={"bold"} fontSize={"xxx-large"}>
          Top 3
        </Text>
        <Text mt="5" fontWeight={"medium"} fontSize={"x-large"}></Text>
        <Flex mt="4" justify="space-between" gap="3">
          {Array.from({ length: 3 }).map((i, idx) => (
            <Flex
              p="2"
              alignItems={"center"}
              //   color="white"
              w="full"
              bg="#38a169"
              rounded="md"
            >
              <Text>{idx + 1}.</Text>
              <Avatar mx="3" size="md" />
              <Box>
                <Text fontWeight={"bold"}>User{idx + 3}</Text>
                <Text fontWeight={"small"}>10000 points</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
        <Text mt="5" fontWeight={"bold"} fontSize={"x-large"}>
          Leaderboard List
        </Text>
        {Array.from({ length: 7 }).map((i, idx) => (
          <Flex
            my="3"
            p="2"
            alignItems={"center"}
            bg="lightgray"
            rounded="md"
            w="full"
          >
            <Text>{idx + 4}.</Text>
            <Avatar mx="3" size="md" />
            <Box>
              <Text fontWeight={"bold"}>User{idx + 4}</Text>
              <Text fontWeight={"medium"}>{8000 - idx + 4} points</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};

export default Leaderboard;
