import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Category } from "../Components/Category";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Hero />

      {/* mens section starts here */}
      <Box w={"90%"} m={"auto"}>
        <Heading size={"2xl"} textAlign={"center"}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "blue.200",
              zIndex: -1,
            }}
          >
            Shop For Mens{" "}
          </Text>
        </Heading>
        <Flex mt={10}>
          <Box w={["100%"]} h={[, "sm"]}>
            <Image
              w={"100%"}
              h={"100%"}
              borderRadius={["10px 0px 0px 10px", "20px 0px 0px 20px"]}
              src="https://i.postimg.cc/0QGHssyQ/Light-Blue-and-Ivory-Soft-Gradient-UI-Reminder-Search-Personal-Instagram-Post-2.jpg"
            />
          </Box>
          <Box w={["100%"]} h={[, "sm"]}>
            <Image
              w={"100%"}
              h={"100%"}
              borderRadius={["0px 10px 10px 0px", "0px 20px 20px 0px"]}
              src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </Box>
        </Flex>
        <SimpleGrid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} mt={10} gap={10}>
          <Box m={"auto"} w={["xs", "xl"]} h={[, "sm"]}>
            <Image
              w={"100%"}
              h={"100%"}
              borderRadius={"xl"}
              src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80"
            />
          </Box>
          <Box m={"auto"} w={["xs", "xl"]} h={[, "sm"]}>
            <Image
              w={"100%"}
              h={"100%"}
              borderRadius={"xl"}
              src="https://images.unsplash.com/photo-1549660299-31c4ea5f34c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            />
          </Box>
        </SimpleGrid>
      </Box>
      {/* mens section ends here */}

      <Footer />
    </div>
  );
};

export default Home;
