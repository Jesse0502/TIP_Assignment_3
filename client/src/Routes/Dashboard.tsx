import { Box, Center, Flex, Image, Progress, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import QuizTab from "../components/QuizTab";

const Dashboard = () => {
  return (
    <Flex>
      <Navbar />
      <Box pr="3" pt="30px" w="full" maxHeight={"100vh"} overflowY={"scroll"}>
        <Text fontWeight={"bold"} fontSize={"xx-large"}>
          Featured Quizzes
        </Text>
        <Box mt="5">
          <Flex gap="10px">
            <QuizTab />
            <QuizTab />
            <QuizTab />
          </Flex>
        </Box>
        <Box py="4">
          <Text fontWeight={"bold"} fontSize={"xx-large"}>
            Quiz Categories
          </Text>
          <Flex>
            <Center p="4" bg="lightgray">
              icon
              <Text>Search Quizzes</Text>
            </Center>
            <Center p="4" bg="lightgray">
              icon
              <Text>Science Quizzes</Text>
            </Center>
            <Center p="4" bg="lightgray">
              icon
              <Text>Math Quizzes</Text>
            </Center>
            <Center p="4" bg="lightgray">
              icon
              <Text>Creative Skills</Text>
            </Center>
          </Flex>
        </Box>
        <Box py="4">
          <Text fontWeight={"bold"} fontSize={"xx-large"}>
            My Quizzes
          </Text>
          <Flex
            w="full"
            overflow={"auto"}
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
            mt="2"
            // mr="3"
            gap="2"
          >
            <MyQuizTab />
            <MyQuizTab />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const MyQuizTab = () => {
  return (
    <Flex p="2" w="max" rounded="md" bg="lightgray">
      <Image
        h="150px"
        w="200px"
        rounded="md"
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
      />
      <Flex justify="space-between" flexDir={"column"} px="5" py="5" w="350px">
        <Flex flexDir={"column"} justify={"space-around"}>
          <Text fontSize={"larger"} fontWeight={"bold"}>
            Quiz Title
          </Text>
          <Text fontSize={"medium"} fontWeight={"thin"}>
            Quiz Creator
          </Text>
          <Progress value={30} mt="2" />
        </Flex>
        <Text opacity="0.8">In Progress</Text>
      </Flex>
    </Flex>
  );
};
export default Dashboard;
