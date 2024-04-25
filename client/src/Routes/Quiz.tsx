import { Box, Button, Flex, Radio, RadioGroup, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Quiz = () => {
  console.log(window.location.search);
  return (
    <Flex>
      <Navbar />
      <Box w="full">
        <Flex
          alignItems={"center"}
          py="3"
          px="3"
          shadow={"md"}
          justify={"space-between"}
        >
          <Text fontWeight={"bold"} fontSize={"large"}>
            Science Quiz
          </Text>
          <Flex alignItems={"center"} gap="2">
            <Text opacity={0.7}>Question 1/10</Text>
            <Button colorScheme="green">Exit Quiz</Button>
          </Flex>
        </Flex>
        <Box p="5">
          <Text fontWeight={"bold"} fontSize={"large"}>
            Question 1: What is Air Composed of?
          </Text>
          <Text fontSize={"medium"} pt="3" pb="5">
            Select the correct option
          </Text>
          <RadioGroup>
            <Flex gap="1" flexDir={"column"}>
              <Radio value="oxygen">Oxygen</Radio>
              <Radio value="ox">Ox</Radio>
              <Radio value="hen">Hen</Radio>
              <Radio value="poo">Poop</Radio>
            </Flex>
          </RadioGroup>
          <Button mt="5" colorScheme="green">
            Submit
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Quiz;
