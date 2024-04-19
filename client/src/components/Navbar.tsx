import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        pt="5vh"
        px="5vh"
        gap={"7"}
        mr="5vh"
        bg="lightgray"
        h="100vh"
        flexDirection={"column"}
      >
        <Text mb="10">Logo</Text>
        <Text
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Home
        </Text>
        <Text
          onClick={() => {
            navigate("/search");
          }}
        >
          Search
        </Text>
        <Text
          onClick={() => {
            navigate("/leaderboard");
          }}
        >
          Leaderboard
        </Text>
        <Text>Profile</Text>
      </Flex>
    </>
  );
};

export default Navbar;
