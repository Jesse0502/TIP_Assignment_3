import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Profile = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  return (
    <Flex>
      <Navbar />
      <Flex ml="5" w="full" pt="10">
        <Box flex="1">
          <Flex>
            <Avatar size={"lg"} />
            <Box px="5">
              <Text fontWeight={"bold"}>User Profile</Text>
              <Flex p="2" bg="gray" rounded={"md"}>
                <Box bg="white">
                  <Text>3</Text>
                  <Text>Position</Text>
                </Box>
                <Box bg="white">
                  <Text>3</Text>
                  <Text>Total Quizzes</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Box>FullName: {userInfo.fullname}</Box>
          <Box>
            <Text>Quiz Milestones</Text>
          </Box>
        </Box>
        <Box flex="1">
          <Text>Quiz Suggestions</Text>
          <Box p="3" rounded="md">
            <Flex>
              <Avatar />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Profile;
