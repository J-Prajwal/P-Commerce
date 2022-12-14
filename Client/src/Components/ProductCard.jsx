import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../Redux/CartReducer/cart.actions";

function Rating({ rating, numReviews }) {
  return (
    <Flex
      d="flex"
      alignItems="center"
      justifyContent={"space-between"}
      mt={3}
      mb={3}
    >
      <Box display={"flex"} gap={"2px"}>
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={"orange"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
      </Box>
      <Box as="span" ml="2" color="yellow.600" fontSize="sm">
        {numReviews} In stock
      </Box>
    </Flex>
  );
}

function ProductCard({ data }) {
  const dispatch = useDispatch();

  const handleAddToCart = (cartItem) => {
    dispatch(addCartItems(cartItem));
  };
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        w={"100%"}
        h={"100%"}
      >
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />

        <Image
          src={data.imgUrl}
          alt={`Picture of ${data.title}`}
          roundedTop="lg"
          h={"18rem"}
          w="100%"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.new ? (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            ) : (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="blue">
                Old
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight">
              {data.title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a cursor={"pointer"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} onClick={() => handleAddToCart(data)} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex
            justifyContent="space-between"
            alignContent="center"
            flexDir={"column"}
          >
            <Rating rating={data.rating} numReviews={data.qty} />
            <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                ₹{" "}
              </Box>
              {data.cost.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
