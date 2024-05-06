import { Center, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import {} from '@chakra-ui/icons'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Center
        justifyContent={"start"}
        pt="5vh"
        px="5vh"
        gap={"7"}
        bg="lightgray"
        h="100vh"
        flexDirection={"column"}
      >
        <Image mb="10" h="auto" w="20" src={"./app-logo.png"} />
        <Image
          w="7"
          cursor={"pointer"}
          h="auto"
          src={
            window.location.href.includes("dashboard")
              ? "./home-active.png"
              : "./home.png"
          }
          onClick={() => {
            navigate("/dashboard");
          }}
        ></Image>
        <Image
          w="7"
          h="auto"
          cursor={"pointer"}
          src={
            window.location.href.includes("search")
              ? "./search-active.png"
              : "./search.png"
          }
          onClick={() => {
            navigate("/search");
          }}
        ></Image>
        <Image
          w="7"
          cursor={"pointer"}
          h="auto"
          src={
            window.location.href.includes("leaderboard")
              ? "./leaderboard-search.png"
              : "./leaderboard.png"
          }
          onClick={() => {
            navigate("/leaderboard");
          }}
        ></Image>
        <Image
          w="7"
          cursor={"pointer"}
          h="auto"
          src={
            window.location.href.includes("profile")
              ? "./user-active.png"
              : "./user.png"
          }
          onClick={() => {
            navigate("/profile");
          }}
        ></Image>
        <Image
          w="7"
          h={"auto"}
          pt="52"
          cursor={"pointer"}
          onClick={() => {
            localStorage.removeItem("username");
            window.location.href = "/login";
          }}
          src="./logout-icon.png"
        />
      </Center>
    </>
  );
};

export default Navbar;
