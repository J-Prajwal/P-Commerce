import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Category = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: "0",
      lg: "12",
    }}
    py={{
      base: "0",
      lg: "12",
    }}
    mt={10}
  >
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      spacing={{ base: "0", lg: "20" }}
    >
      <Box
        width={{ lg: "sm" }}
        transform={{ base: "translateY(-50%)", lg: "none" }}
        bg={{
          base: useColorModeValue("red.50", "gray.700"),
          lg: "transparent",
        }}
        mx={{ base: "6", md: "8", lg: "0" }}
        px={{ base: "6", md: "8", lg: "0" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack spacing={{ base: "8", lg: "10" }}>
          <Stack spacing={{ base: "2", lg: "4" }}>
            <Heading
              size="xl"
              color={useColorModeValue("blue.500", "blue.300")}
            >
              Misguided Collections
            </Heading>
            <Heading size="xl" fontWeight="400" color={"gray.700"} fontFamily={"times new roman"}>
              Refresh your wardrobe with this amazing collection
            </Heading>
            <Badge borderRadius={"xl"} textAlign="center" fontSize={"lg"} colorScheme="red">Also avail a discount of flat 20%</Badge>
          </Stack>
          <HStack spacing="3">
            <Link
              color={useColorModeValue("blue.500", "blue.300")}
              fontWeight="bold"
              fontSize="lg"
              textTransform={"capitalize"}
            >
              Click the link now
            </Link>
            <Icon
              color={useColorModeValue("blue.500", "blue.300")}
              as={FaArrowRight}
            />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
        <Image
          display={{
            base: "none",
            sm: "initial",
          }}
          src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  </Box>
);
