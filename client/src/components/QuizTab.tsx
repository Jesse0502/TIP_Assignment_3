import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";

const QuizTab = ({ name = "", questions = "", rating = "", image = "" }) => {
  const navigate = useNavigate();
  const [quizTaken, setQuizTaken] = useState(null);
  const quizzes = useSelector((state: RootState) => state.quiz);
  useEffect(() => {
    const quizFound = quizzes.quizzesTaken.find((i) => i.quiz_name === name);
    if (quizFound) {
      setQuizTaken(quizFound);
    }
  }, [quizzes]);

  return (
    <Box
      //   h="40"
      w="300px"
      p="2"
      //  overflow={"clip"}
      bg="lightgray"
      rounded={"10px"}
    >
      <Box pos="relative">
        {quizTaken && (
          <Text
            right={1}
            bg="white"
            p="1"
            rounded="lg"
            shadow={"md"}
            top="1"
            fontWeight={"bold"}
            pos={"absolute"}
          >
            You Scored: {quizTaken?.score}
          </Text>
        )}
        <Image
          h="120px"
          rounded="10px"
          w={"full"}
          objectFit={"cover"}
          src={image}
        />
        <Flex
          rounded={"40px"}
          pos="absolute"
          bottom="-6"
          p="1"
          alignItems={"center"}
          bg="white"
          left={"2"}
          pr="10px"
        >
          <Image h="35px" w="auto" rounded={"full"} src="./app-logo.png" />
          <Text fontWeight={"bold"}>QuizWiz</Text>
        </Flex>
      </Box>
      <Text pl="2" py="2" fontWeight={"bold"} fontSize={"larger"} pt="10">
        {name}
      </Text>
      <Flex
        textAlign={"center"}
        px="2"
        pb="2"
        alignItems="center"
        justify={"space-between"}
      >
        <Text>
          Questions{" "}
          <Text fontWeight={"bold"} fontSize={"medium"}>
            {" "}
            {questions}
          </Text>
        </Text>
        <Text>
          Rating{" "}
          <Flex>
            {Array.from({ length: +rating }).map(() => (
              <>⭐</>
            ))}
          </Flex>
          {/* <Text fontWeight={"bold"} fontSize={"medium"}>
            {" "}
            {rating}
          </Text> */}
        </Text>
        <Button
          onClick={() => {
            navigate(`/quiz?name=${name}`);
          }}
          colorScheme="green"
          rounded="20px"
          px="25px"
        >
          {quizTaken ? "Retake" : "Start"}
        </Button>
      </Flex>
    </Box>
  );
};

export default QuizTab;
