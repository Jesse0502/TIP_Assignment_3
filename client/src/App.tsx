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
import axios from "axios";
import { server_endpoint } from "./helpers/constants";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const fullname = e.target[0].value;
    const username = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    console.log(fullname, username, password, confirmPassword);
    setIsLoading(true);
    const res = await axios.post(server_endpoint + "/register", {
      fullname,
      username,
      password,
      confirmPassword,
    });

    setIsLoading(false);
    console.log(res.data);
  };

  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;
    setIsLoading(true);
    const res = await axios.post(
      server_endpoint + "/login",
      {
        username,
        password,
      },
      { withCredentials: false }
    );

    dispatch(login({ ...res.data.userInfo }));
    navigate("/dashboard");
    setIsLoading(false);
    console.log(res.data);
    console.log(username, password);
  };

  return (
    <>
      <Text textAlign={"right"} px="40px" py="4vh">
        Ready to quiz? Sign up now!
      </Text>
      <Flex px="40px" gap="40px" alignItems={"center"}>
        <Center
          bg="lightgray"
          flex="3"
          py="10"
          flexDirection={"column"}
          rounded="20px"
        >
          <Text fontWeight={"bold"} fontSize={"x-large"}>
            Excited to start quizzing?
          </Text>
          <Text pt="1" pb="3">
            Discover quizzes on any topic and have fun learning!
          </Text>
          <Image src="./login-hero.png" height="50vh" />
          <Text fontSize={"small"} opacity={0.7}>
            Explore a world of quizzes at your fingertips!
          </Text>
        </Center>
        <Center
          pr="20"
          gap={2}
          flexDirection={"column"}
          textAlign={"left"}
          flex="2"
        >
          <Text fontWeight={"bold"} fontSize={"larger"}>
            Join Quiz for free
          </Text>
          <Text>Enjoy unlimited quiz creation and participation!</Text>
          {isLogin ? (
            <>
              <form onSubmit={handleLoginSubmit}>
                <Input
                  name="username"
                  my="3"
                  placeholder="Enter your unique username"
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                />
                <Button
                  isLoading={isLoading}
                  mt="3"
                  colorScheme="green"
                  w="full"
                  type="submit"
                >
                  Login
                </Button>
              </form>
              <Text textAlign={"right"} opacity={0.7} w="full">
                Not a User?{" "}
                <Text
                  onClick={() => setIsLogin(false)}
                  as="span"
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                  color={"blue"}
                >
                  {" "}
                  Register{" "}
                </Text>
              </Text>
            </>
          ) : (
            <>
              <form onSubmit={handleRegisterSubmit}>
                <Input name="fullname" placeholder="Enter your full name" />
                <Input
                  name="username"
                  my="3"
                  placeholder="Choose a unique username"
                />
                <Input name="password" placeholder="Create a password" />
                <Input
                  name="passwordConfirm"
                  my="3"
                  placeholder="Confirm your password"
                />
                <Button
                  isLoading={isLoading}
                  colorScheme="green"
                  w="full"
                  type="submit"
                >
                  Sign up
                </Button>
              </form>
              <Text textAlign={"right"} opacity={0.7} w="full">
                Already a User?{" "}
                <Text
                  as="span"
                  onClick={() => setIsLogin(true)}
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                  color={"blue"}
                >
                  {" "}
                  Login{" "}
                </Text>
              </Text>
            </>
          )}
        </Center>
      </Flex>
    </>
  );
}

export default App;
