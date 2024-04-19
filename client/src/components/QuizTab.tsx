import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const QuizTab = () => {
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
        <Image
          h="120px"
          rounded="10px"
          w={"full"}
          objectFit={"cover"}
          src="https://dummyimage.com/600x400/000/fff&text=quiz"
        />
        <Flex
          rounded={"40px"}
          pos="absolute"
          bottom="-6"
          p="1"
          alignItems={"center"}
          bg="white"
          gap="5px"
          left={"2"}
          px="10px"
        >
          <Image
            border={"1px solid black"}
            h="35px"
            rounded={"full"}
            src="https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
          />
          <Text>Quiz Creator</Text>
        </Flex>
      </Box>
      <Text pl="2" py="2" fontWeight={"bold"} fontSize={"larger"} pt="10">
        Science Quiz
      </Text>
      <Flex px="2" pb="2" alignItems="center" justify={"space-between"}>
        <Text>Duration</Text>
        <Text>Rating</Text>
        <Button colorScheme="green" rounded="20px" px="25px">
          Start
        </Button>
      </Flex>
    </Box>
  );
};

export default QuizTab;
