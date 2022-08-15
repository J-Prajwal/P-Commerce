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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ImCart } from "react-icons/im";
import { getItem, removeItem } from "../Utils/localStorage";

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
  const navigate = useNavigate();
  const user = getItem("user");
  const logoutHandler = () => {
    removeItem("user");
    navigate("/");
  };
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
              <Link to={"/"}>
                <Heading size={"md"}>P-Comm</Heading>
              </Link>
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
            <Button colorScheme={"none"} size={["lg", "2xl"]} px={5}>
              <ImCart color={colorMode === "light" ? "black" : "white"} />
            </Button>

            {user != undefined ? (
              <Menu>
                {({ isOpen }) => (
                  <div>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      variant={"solid"}
                      colorScheme={"blue"}
                      size={"sm"}
                      px={5}
                    >
                      {user.username}
                    </MenuButton>
                    <MenuList>
                      <MenuItem>User Profile</MenuItem>
                      <MenuItem onClick={() => logoutHandler()}>
                        Logout
                      </MenuItem>
                    </MenuList>
                  </div>
                )}
              </Menu>
            ) : (
              <Button
                variant={"solid"}
                colorScheme={"blue"}
                size={"sm"}
                px={5}
                onClick={onOpen}
              >
                <Link to={"/signin"}>New Here?</Link>
              </Button>
            )}
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
