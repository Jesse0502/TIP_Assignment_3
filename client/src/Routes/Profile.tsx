import { Avatar, Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import QuizTab from "../components/QuizTab";

const Profile = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  const userPosition = useSelector(
    (state: RootState) => state.leaderboard.userCurrentPosition
  );
  const quizTaken = useSelector((state: RootState) => state.quiz.quizzesTaken);
  return (
    <Flex>
      <Navbar />
      <Flex
        // h="90vh"
        maxHeight={"100vh"}
        overflowY={"scroll"}
        ml="5"
        w="full"
        flexDir={"column"}
        pt="10"
      >
        <Box flex="3">
          <Flex gap="4" align={"center"} h="20vh" mb="5">
            <Avatar name={userInfo.fullname} size="lg" />
            <Box>
              <Text fontWeight={"bold"} fontSize={"xx-large"}>
                {userInfo.fullname}
              </Text>
              <Text>Username: {userInfo.username}</Text>
              <Text>Total Points: {userInfo.totalPoints}</Text>
            </Box>
          </Flex>
          <Flex gap="2" w="98%">
            {[
              { title: "Current Position", thing: userPosition },
              { title: "Quizzes Taken", thing: quizTaken.length },

              {
                title: "Recommended Position",
                thing: userPosition - 1 === 0 ? 1 : userPosition - 1,
              },
            ].map((i) => (
              <Center
                flexDir={"column"}
                flex="1"
                rounded="md"
                bg="rgba(128, 128, 128, 0.29)"
                p="2"
              >
                <Box bg="white" px="16" py="5" rounded="md">
                  {i.title === "Current Position" && (
                    <Image
                      src="/leaderboard-colored.png"
                      height={"10vh"}
                      width={"10vh"}
                    />
                  )}
                  {i.title === "Quizzes Taken" && (
                    <Image src="/quiz-gif.gif" height={"10vh"} width={"10vh"} />
                  )}
                  {i.title === "Recommended Position" && (
                    <Image
                      src="/progress-gif.gif"
                      height={"10vh"}
                      width={"10vh"}
                    />
                  )}
                </Box>
                <Text>{i?.title}</Text>
                <Text fontSize={"x-large"} fontWeight={"bold"}>
                  {i?.thing}
                </Text>
              </Center>
            ))}
          </Flex>
        </Box>
        <Box flex="2" pb="5">
          <Text fontSize={"x-large"} fontWeight={"bold"} py="5">
            Quiz Suggestions
          </Text>
          <Flex gap="2">
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
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Profile;
