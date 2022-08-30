import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const ShopByCategories = () => {
  const data = [
    { title: "Tops", imgUrl: "" },
    { title: "Jeans", imgUrl: "" },
    { title: "Night Suit", imgUrl: "" },
    { title: "Jumpsuit", imgUrl: "" },
    { title: "Kurti", imgUrl: "" },
    { title: "Ethnic", imgUrl: "" },
    { title: "Western", imgUrl: "" },
    { title: "Funky", imgUrl: "" },
  ];
  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems={"center"} maxW={"7xl"} m={"auto"}>
        <Heading textTransform={"capitalize"}>Shop by categories</Heading>
        <Text fontWeight={"bold"} color={"blue.400"}>
          See all categories <ArrowForwardIcon />
        </Text>
      </Flex>
      <SimpleGrid columns={4} gap={"10"} mt={10}>
        <Box borderRadius={"xl"} border={"1px solid grey"} m="auto" h={"15rem"} w={"15rem"} display={"flex"} justifyContent={"center"} alignItems="flex-end" objectFit={"fill"}>
            <Image src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"></Image>
            <Text>Something</Text>
        </Box>
        <Box borderRadius={"xl"} border={"1px solid grey"} m="auto" h={"15rem"} w={"15rem"} display={"flex"} justifyContent={"center"} alignItems="flex-end">
            <Text>Something</Text>
        </Box>
        <Box borderRadius={"xl"} border={"1px solid grey"} m="auto" h={"15rem"} w={"15rem"} display={"flex"} justifyContent={"center"} alignItems="flex-end">
            <Text>Something</Text>
        </Box>
        <Box borderRadius={"xl"} border={"1px solid grey"} m="auto" h={"15rem"} w={"15rem"} display={"flex"} justifyContent={"center"} alignItems="flex-end">
            <Text>Something</Text>
        </Box>
        <Box borderRadius={"xl"} border={"1px solid grey"} m="auto" h={"15rem"} w={"15rem"} display={"flex"} justifyContent={"center"} alignItems="flex-end">
            <Text>Something</Text>
        </Box>
        <Box borderRadius={"xl"} border={"1px solid grey"} m="auto" h={"15rem"} w={"15rem"} display={"flex"} justifyContent={"center"} alignItems="flex-end">
            <Text>Something</Text>
        </Box>
        <Box borderRadius={"xl"} border={"1px solid grey"} m="auto" h={"15rem"} w={"15rem"} display={"flex"} justifyContent={"center"} alignItems="flex-end">
            <Text>Something</Text>
        </Box>
        <Box borderRadius={"xl"} border={"1px solid grey"} m="auto" h={"15rem"} w={"15rem"} display={"flex"} justifyContent={"center"} alignItems="flex-end">
            <Text>Something</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ShopByCategories;
