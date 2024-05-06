import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Leaderboard = () => {
  const leaderboard = useSelector(
    (state: RootState) => state.leaderboard.leaderboard
  );
  const currentUser = useSelector((state: RootState) => state.user);
  console.log("leaderboard", leaderboard);
  return (
    <Flex>
      <Navbar />
      <Box
        pr="4"
        pt="30px"
        ml="5"
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
          {leaderboard.slice(0, 3).map((i, idx) => (
            <Flex
              color="white"
              p="2"
              alignItems={"center"}
              //   color="white"
              w="full"
              bg="#38a169"
              rounded="md"
            >
              <Text>{idx + 1}.</Text>
              <Avatar mx="3" size="md" name={i.username} />
              <Box>
                <Text fontWeight={"bold"}>
                  {currentUser.username === i.username ? "You" : i.username}
                </Text>
                <Text fontWeight={"small"}>{i.totalPoints ?? 0} points</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
        <Text mt="5" fontWeight={"bold"} fontSize={"x-large"}>
          Leaderboard List
        </Text>
        {leaderboard.slice(3).map((i, idx) => (
          <Flex
            my="3"
            p="2"
            alignItems={"center"}
            bg="lightgray"
            rounded="md"
            w="full"
          >
            <Text>{idx + 4}.</Text>
            <Avatar mx="3" size="md" name={i.username} />
            <Box>
              <Text fontWeight={"bold"}>
                {i.username === currentUser.username ? "You" : i.username}
              </Text>
              <Text fontWeight={"medium"}>{i.totalPoints} points</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};

export default Leaderboard;
