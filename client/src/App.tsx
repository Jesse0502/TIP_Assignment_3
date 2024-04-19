import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Text textAlign={"right"} px="40px" py="4vh">
        Ready to quiz? Sign up now!
      </Text>
      <Flex px="40px" gap="40px" alignItems={"center"}>
        <Center bg="lightgray" flex="1" flexDirection={"column"} rounded="20px">
          <Text>Excited to start quizzing?</Text>
          <Text>Discover quizzes on any topic and have fun learning!</Text>
          <Image src="./login-hero.png" />
          <Text>Explore a world of quizzes at your fingertips!</Text>
        </Center>
        <Flex flexDirection={"column"} textAlign={"left"} flex="1">
          <Text fontWeight={"bold"} fontSize={"larger"}>
            Join Quiz for free
          </Text>
          <Text>Enjoy unlimited quiz creation and participation!</Text>
          <form>
            <Input placeholder="Enter your full name" />
            <Input placeholder="Choose a unique username" />
            <Input placeholder="Create a password" />
            <Input placeholder="Confirm your password" />
            <Button>Sign up</Button>
          </form>
          <Text>Forgot Password?</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
