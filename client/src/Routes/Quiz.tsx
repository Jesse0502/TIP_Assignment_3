import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import quizLoader from "../helpers/quizLoader";
import { science_quiz } from "../helpers/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Quiz = () => {
  const loc = new URLSearchParams(useLocation().search);
  const [quiz, setQuiz] = useState<null | typeof science_quiz>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const query = loc.get("name")?.toLocaleLowerCase();

    if (query) {
      const quizInfo = quizLoader(query);
      if (quizInfo) setQuiz(quizInfo);
    } else {
      navigate("/dashboard");
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const [userResponses, setUserResponses] = useState<
    [] | { question: string; response: string; answer: string[] }[]
  >([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleNext = () => {
    setCurrentQuestion((prevIndex) => prevIndex + 1);
  };

  const goBack = () => {
    setCurrentQuestion((prevIndex) => prevIndex - 1);
  };

  const onSubmit = (
    response: string,
    currQuestion: { question: string; answer: string[] }
  ) => {
    const alreadyAnswered = userResponses.findIndex(
      (i) => i?.question === currQuestion.question
    );
    if (alreadyAnswered !== -1) {
      const updatedUserResponses = [...userResponses];
      updatedUserResponses[alreadyAnswered] = { ...currQuestion, response };
      setUserResponses(updatedUserResponses);
    } else {
      setUserResponses((prev) => [...prev, { ...currQuestion, response }]);
    }
    if (currentQuestion + 1 !== quiz?.questions) handleNext();
    else {
      userResponses.forEach((i) => {
        setScore((res) => (i.answer === i.response ? res + 1 : res));
      });
      console.log("userResponses", userResponses);
      setShowAnswers(true);
    }
  };

  return (
    <Flex>
      <Navbar />
      {loading ? (
        <Center h="100vh" w="full">
          <Flex gap="5" alignItems={"center"} justify={"center"} opacity={0.6}>
            <Text fontSize={"xx-large"} fontWeight={"bold"}>
              Loading Quiz
            </Text>
            <CircularProgress isIndeterminate color="gray" />
          </Flex>
        </Center>
      ) : (
        <Box w="full" h="100vh" overflowY={"auto"}>
          <Flex
            alignItems={"center"}
            py="3"
            px="3"
            shadow={"md"}
            justify={"space-between"}
          >
            <Text fontWeight={"bold"} fontSize={"large"}>
              {quiz?.name}
            </Text>
            <Flex alignItems={"center"} gap="2">
              <Text opacity={0.7}>Question 1/{quiz?.questions}</Text>
              <Button colorScheme="green">Exit Quiz</Button>
            </Flex>
          </Flex>
          {/* {quiz?.quiz.map((question, index) => ( */}
          {!showAnswers ? (
            <SingleQuestion
              index={currentQuestion}
              //   question={currentQuestion}
              //   index={index}
              goBack={goBack}
              onSubmit={onSubmit}
              currentQuestion={quiz?.quiz[+currentQuestion]}
              userResponses={userResponses}
            />
          ) : (
            <Box>
              <Text textAlign={"center"} pb="2" pt="10">
                Your Score
              </Text>
              <Center>
                <Text
                  pb="10"
                  px="2"
                  //   border="3px solid gray"
                  rounded="full"
                  //   shadow={"md"}
                  w="fit-content"
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={"xx-large"}
                >
                  {score}/{quiz?.questions}
                </Text>
              </Center>
              <Accordion allowMultiple px="10" defaultIndex={[0]} allowToggle>
                {userResponses.map((i, index) => (
                  <AccordionItem
                    color="black"
                    bgColor={
                      i.response === i.answer
                        ? "rgba(56, 161,105, 0.5)"
                        : "rgba(224, 0, 2, 0.21)"
                    }
                  >
                    <AccordionButton>
                      <Flex
                        justify={"space-between"}
                        alignItems={"center"}
                        w="full"
                      >
                        <Text>
                          {index + 1}. {i.question}
                        </Text>
                        <AccordionIcon />
                      </Flex>
                    </AccordionButton>
                    <AccordionPanel
                      bgColor={
                        i.response === i.answer
                          ? "rgba(56, 161,105, 0.5)"
                          : "rgba(224, 0, 2, 0.11)"
                      }
                    >
                      <Text mb="3">
                        Your Response: <b> {i.response}</b>
                      </Text>
                      <Text fontSize={"large"} fontWeight={"bold"}>
                        Explaination:{" "}
                        <Text
                          fontSize={"medium"}
                          fontWeight={"normal"}
                          as="span"
                        >
                          {i.explanation}
                        </Text>
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          )}
          {/* ))} */}
        </Box>
      )}
    </Flex>
  );
};

const SingleQuestion = ({
  onSubmit,
  currentQuestion,
  index,
  userResponses,
  goBack,
}) => {
  const [answered, setAnswered] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log("currentQuestion", userResponses, currentQuestion);
    setAnswered("");
    setError(false);
    const alreadyAnswered = userResponses.find(
      (i) => i.question === currentQuestion.question
    );
    console.log("alreadyAnswered", alreadyAnswered, currentQuestion);
    if (alreadyAnswered) {
      setAnswered(alreadyAnswered.response);
    }
  }, [currentQuestion, userResponses]);
  //   const [default, ]
  return (
    <Box ml="5" mt="10">
      <Text fontWeight={"bold"} fontSize={"large"}>
        Question {index + 1}: {currentQuestion?.question}
      </Text>
      <Text fontSize={"medium"} pt="3" pb="5">
        Select the correct option
      </Text>
      <RadioGroup
        onChange={(e) => {
          setAnswered(e);
        }}
        value={answered}
        // defaultValue={answered}
        name="quiz-questions"
      >
        <Flex gap="1" justify={"start"} w="60vh" flexDir={"column"}>
          {currentQuestion?.options.map((option, i) => (
            <Radio
              key={i}
              //   isChecked={answered === option}
              value={option}
            >
              {option}
            </Radio>
          ))}
        </Flex>
      </RadioGroup>
      <Flex w="100%" justify={"center"} gap="2">
        {index ? (
          <Button
            mt="5"
            colorScheme="green"
            onClick={(e) => {
              e.preventDefault();
              goBack();
            }}
          >
            Back
          </Button>
        ) : (
          <></>
        )}
        <Button
          mt="5"
          colorScheme="green"
          onClick={(e) => {
            e.preventDefault();
            if (answered) {
              console.log("answered", answered);
              onSubmit(answered, currentQuestion);
            } else {
              setError(true);
            }
          }}
        >
          Submit
        </Button>
      </Flex>
      {error && <Text>Please select an answer</Text>}
    </Box>
  );
};

export default Quiz;
