import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Category } from "../Components/Category";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Hero />

      {/* Sections Start */}
      <SimpleGrid
        columns={[1, 1, 3]}
        spacing={["60px", "60px", "10px"]}
        mb={20}
      >
        <Box borderRadius={"2xl"}>
          <Flex direction={"column"} alignItems="center">
            <Image
              zIndex={-1}
              w={["70%", "90%"]}
              borderRadius={"2xl"}
              src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Men-01Apr2022.jpg"
            ></Image>
            <Box
              mt={"-20"}
              zIndex={999}
              bgColor={"white"}
              w={["60%", "80%", "80%"]}
              py={"2"}
              borderRadius={"lg"}
            >
              <Link to={"/Mens"}>
                <Heading size={"md"} textAlign={"center"} color="black">
                  Shop Men
                </Heading>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box borderRadius={"2xl"}>
          <Flex direction={"column"} alignItems="center">
            <Image
              zIndex={-1}
              w={["70%", "90%"]}
              borderRadius={"2xl"}
              src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Women-01Apr2022.jpg"
            ></Image>
            <Box
              mt={"-20"}
              zIndex={999}
              bgColor={"white"}
              w={["60%", "80%", "80%"]}
              py={"2"}
              borderRadius={"lg"}
            >
              <Link to={"/Women"}>
                <Heading size={"md"} textAlign={"center"} color="black">
                  Shop Women
                </Heading>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box borderRadius={"2xl"}>
          <Flex direction={"column"} alignItems="center">
            <Image
              zIndex={-1}
              w={["70%", "90%"]}
              borderRadius={"2xl"}
              src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Boys-01Apr2022.jpg"
            ></Image>
            <Box
              mt={"-20"}
              zIndex={999}
              bgColor={"white"}
              w={["60%", "80%", "80%"]}
              py={"2"}
              borderRadius={"lg"}
            >
              <Link to={"/Kids"}>
                <Heading size={"md"} textAlign={"center"} color="black">
                  Shop Kids
                </Heading>
              </Link>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
      {/* Sections Ends */}

      <Footer />
    </div>
  );
};

export default Home;
