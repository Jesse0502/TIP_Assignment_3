import { Box, Center, Flex, Image, Progress, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import QuizTab from "../components/QuizTab";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SpinnerIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootState) => state.user);
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
        <Flex justify={"space-between"} align={"center"}>
          <Text fontWeight={"bold"} fontSize={"xx-large"}>
            Welcome, {userInfo.fullname}
          </Text>
          <Flex
            mr="10"
            align={"center"}
            justify={"center"}
            p="5px"
            cursor={"pointer"}
            shadow={"md"}
            _active={{ shadow: "none" }}
            onClick={() => {
              window.location.reload();
            }}
            // _hover={{ shadow: "none" }}
            rounded="30px"
            border={"1px solid gray"}
          >
            <SpinnerIcon />
            <Text ml="1">Refresh</Text>
          </Flex>
        </Flex>
        <Text fontWeight={"bold"} mt="5" fontSize={"x-large"}>
          Featured Quizzes
        </Text>
        <Box mt="5">
          <Flex gap="10px" w="100%" overflowX="auto">
            <QuizTab
              name="Science Quiz"
              questions="10"
              rating="4"
              image="https://static.vecteezy.com/system/resources/thumbnails/013/717/509/small/school-education-and-science-doodle-background-free-vector.jpg"
            />

            <QuizTab
              name="Math Quiz"
              questions="10"
              rating="3"
              image="https://t3.ftcdn.net/jpg/04/83/90/18/360_F_483901821_46VsNR67uJC3xIKQN4aaxR6GtAZhx9G8.jpg"
            />
            <QuizTab
              name="Biology Quiz"
              questions="10"
              rating="4"
              image="https://img.freepik.com/free-vector/flat-national-science-day-background_23-2149283127.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714867200&semt=ais"
            />
            <QuizTab
              name="Art Quiz"
              questions="10"
              rating="4.3"
              image="https://t3.ftcdn.net/jpg/02/28/18/62/360_F_228186227_hTEQS8k4VtopmEVnkBbPvOaSIfXsqWON.jpg"
            />
            <QuizTab
              name="Music Quiz"
              questions="10"
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
            <Center
              onClick={() => {
                navigate("/search");
              }}
              p="4"
              rounded="lg"
              _hover={{ shadow: "md", cursor: "pointer" }}
              flexDir={"column"}
              bg="lightgray"
            >
              <Image src="./search.png" w="7" />
              <Text fontSize={"small"}>Search Quizzes</Text>
            </Center>
            <Center
              p="4"
              onClick={() => {
                navigate("/search?q=science");
              }}
              rounded="lg"
              flexDir={"column"}
              _hover={{ shadow: "md", cursor: "pointer" }}
              border="1px solid gray"
            >
              <Image src="./science-icon.png" w="7" />
              <Text>Science Quizzes</Text>
            </Center>
            <Center
              onClick={() => {
                navigate("/search?q=math");
              }}
              p="4"
              bg="lightgray"
              rounded="lg"
              _hover={{ shadow: "md", cursor: "pointer" }}
              flexDir={"column"}
            >
              <Image src="./math-icon.png" w="7" />
              <Text>Math Quizzes</Text>
            </Center>
            <Center
              p="4"
              _hover={{ shadow: "md", cursor: "pointer" }}
              border="1px solid gray"
              rounded="lg"
              onClick={() => {
                navigate("/search?q=creative");
              }}
              flexDir={"column"}
            >
              <Image w="7" src="./creative-icon.png" />
              <Text>Creative Skills</Text>
            </Center>
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
