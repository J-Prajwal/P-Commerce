import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Button,
  InputGroup,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  useColorMode,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ImCart } from "react-icons/im";

const Links = ["Mens", "Womens", "Kids"];

const NavLink = ({ children }) => (
  <Text
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link to={`/${children}`}>{children}</Link>
  </Text>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading size={"md"}>P-Comm</Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <InputGroup display={{ base: "none", md: "flex" }}>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input variant={"flushed"} placeholder="Search"></Input>
            </InputGroup>
            <Button
              display={{ base: "none", md: "flex" }}
              onClick={toggleColorMode}
              colorScheme={"none"}
              color={colorMode === "light" ? "black" : "white"}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button size={"md"} colorScheme={"none"}>
              <ImCart
                size={["0rem", "0rem", "2rem"]}
                color={colorMode === "light" ? "black" : "white"}
              />
            </Button>
            <Button
              variant={"solid"}
              colorScheme={"blue"}
              size={"sm"}
              px={5}
              onClick={onOpen}
            >
              New Here?
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
            <Button
              p={"0"}
              onClick={toggleColorMode}
              colorScheme={"none"}
              color={colorMode === "light" ? "black" : "white"}
            >
              {colorMode === "light"
                ? "Switch To Dark Mode"
                : "Switch to Night Mode"}
            </Button>
            <Input
              variant={"flushed"}
              placeholder="Search"
              display={{ md: "none" }}
            ></Input>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
