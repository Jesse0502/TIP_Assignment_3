import { Box, Center, Flex, Image, Progress, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import QuizTab from "../components/QuizTab";

const Dashboard = () => {
  return (
    <Flex>
      <Navbar />
      <Box
        ml="5"
        pr="3"
        pt="30px"
        w="full"
        maxHeight={"100vh"}
        overflowY={"scroll"}
      >
        <Text fontWeight={"bold"} fontSize={"xx-large"}>
          Featured Quizzes
        </Text>
        <Box mt="5">
          <Flex gap="10px" w="100%" overflowX="auto">
            <QuizTab
              name="Science Quiz"
              duration="20min"
              rating="4"
              image="https://static.vecteezy.com/system/resources/thumbnails/013/717/509/small/school-education-and-science-doodle-background-free-vector.jpg"
            />

            <QuizTab
              name="Math Quiz"
              duration="10min"
              rating="3"
              image="https://t3.ftcdn.net/jpg/04/83/90/18/360_F_483901821_46VsNR67uJC3xIKQN4aaxR6GtAZhx9G8.jpg"
            />
            <QuizTab
              name="Art Quiz"
              duration="20min"
              rating="4.3"
              image="https://t3.ftcdn.net/jpg/02/28/18/62/360_F_228186227_hTEQS8k4VtopmEVnkBbPvOaSIfXsqWON.jpg"
            />
            <QuizTab
              name="Music Quiz"
              duration="15min"
              rating="4"
              image="https://t3.ftcdn.net/jpg/02/23/60/54/360_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg"
            />
          </Flex>
        </Box>
        <Box py="4">
          <Text fontWeight={"bold"} fontSize={"xx-large"}>
            Quiz Categories
          </Text>
          <Flex gap="3" mt="5">
            <Center p="4" rounded="lg" flexDir={"column"} bg="lightgray">
              <Image src="./search.png" w="7" />
              <Text fontSize={"small"}>Search Quizzes</Text>
            </Center>
            <Center
              p="4"
              rounded="lg"
              flexDir={"column"}
              border="1px solid gray"
            >
              <Image src="./science-icon.png" w="7" />
              <Text>Science Quizzes</Text>
            </Center>
            <Center p="4" bg="lightgray" rounded="lg" flexDir={"column"}>
              <Image src="./math-icon.png" w="7" />
              <Text>Math Quizzes</Text>
            </Center>
            <Center
              p="4"
              border="1px solid gray"
              rounded="lg"
              flexDir={"column"}
            >
              <Image w="7" src="./creative-icon.png" />
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
