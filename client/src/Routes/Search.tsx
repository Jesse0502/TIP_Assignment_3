import { Box, Button, Divider, Flex, Input, Tag, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import QuizTab from "../components/QuizTab";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import quizLoader from "../helpers/quizLoader";

const Search = () => {
  const loc = new URLSearchParams(useLocation().search);
  const [searchResult, setSearchResult] = useState([]);
  const [searchMsg, setSearchMsg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const query = loc.get("q")?.toLocaleLowerCase();
    if (query !== undefined) {
      setSearchQuery(query);
      const quizExist = quizLoader(query);
      if (quizExist) {
        setSearchMsg("Results");
        setSearchResult([
          {
            name: quizExist.name,
            duration: quizExist.duration,
            rating: quizExist.rating,
            image: quizExist.image,
          },
        ]);
      } else {
        setSearchResult([]);
        setSearchMsg("nothing found");
      }
      console.log(query);
    }
  }, [loc.get("q")]);
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
          <Input
            rounded="lg"
            defaultValue={searchQuery}
            type="text"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search Topics"
          />
          <Button
            onClick={() => {
              navigate("/search?q=" + searchQuery);
            }}
            rounded="lg"
            colorScheme="green"
          >
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

        {searchResult.length === 0 && searchMsg === "nothing found" && (
          <Text
            mt="40"
            opacity={0.7}
            w="full"
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={"xx-large"}
          >
            No Results Found For "{loc.get("q")}"
          </Text>
        )}
        {searchResult.length && searchMsg !== "nothing found" ? (
          <>
            <Text fontWeight={"bold"} my="5" fontSize={"x-large"}>
              Showing results for "{loc.get("q")}"
            </Text>
            {searchResult.map((i: any) => (
              <QuizTab
                name={i.name}
                duration={i.duration}
                rating={i.rating}
                image={i.image}
              />
            ))}
          </>
        ) : (
          ""
        )}
      </Box>
    </Flex>
  );
};

export default Search;
