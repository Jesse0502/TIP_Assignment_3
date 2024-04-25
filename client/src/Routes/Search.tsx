import { Box, Button, Divider, Flex, Input, Tag, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import QuizTab from "../components/QuizTab";

const Search = () => {
  return (
    <Flex w="full">
      <Navbar />
      <Box
        ml="5"
        pr="4"
        pt="30px"
        w="full"
        maxHeight={"100vh"}
        overflowY={"scroll"}
      >
        <Text fontWeight={"bold"} fontSize={"xx-large"}>
          Search New Quizzes
        </Text>
        <Flex my="4" w="98%" gap="2">
          <Input rounded="lg" type="text" placeholder="Search Topics" />
          <Button rounded="lg" colorScheme="green">
            Explore
          </Button>
        </Flex>
        <Flex gap="2" mb="4">
          {["Science Quiz", "Math Quiz", "Art Quiz", "Music Quiz"].map(
            (text) => (
              <Tag
                p="2"
                _hover={{ bg: "#38a169", color: "white" }}
                cursor={"pointer"}
              >
                {text}
              </Tag>
            )
          )}
        </Flex>
        <Divider />
        <Text my="4" fontWeight={"bold"} fontSize={"x-large"}>
          Popular Quizzes
        </Text>
        <Flex
          gap="2"
          scrollBehavior={"smooth"}
          pb="4"
          w="full"
          overflow={"auto"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <QuizTab />
          <QuizTab />
          <QuizTab />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Search;
