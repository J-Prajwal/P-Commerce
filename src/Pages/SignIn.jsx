import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../Components/Logo";
import { OAuthButtonGroup } from "../Components/OAuthButtonGroup";
import { PasswordField } from "../Components/PasswordField";
import { loginUser } from "../Redux/AuthReducer/auth.actions";

export const Signin = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [creds, setCreds] = React.useState({ email: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreds((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(creds);
    dispatch(loginUser(creds)).then((res) => {
      if (res) {
        toast({
          title: "Login Successful!",
          status: "success",
          duration: 3000,
          variant: "top-accent",
          isClosable: true,
          position: "top-left",
        });
        navigate("/Mens");
      } else {
        toast({
          title: "Please try again",
          status: "error",
          duration: 3000,
          variant: "top-accent",
          isClosable: true,
          position: "top-left",
        });
      }
    });
    setCreds({ email: "", password: "" });
  };
  return (
    <Container
      maxW="lg"
      py={{
        base: "12",
        md: "24",
      }}
      px={{
        base: "0",
        sm: "8",
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: "sm",
              })}
            >
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                <Link to={"/signup"}>Sign up</Link>
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={useBreakpointValue({
            base: "transparent",
            sm: "bg-surface",
          })}
          boxShadow={{
            base: "none",
            sm: useColorModeValue("md", "md-dark"),
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <form method="post" onSubmit={handleSubmit}>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    value={creds.email}
                    name="email"
                  />
                  <FormLabel htmlFor="password">Passowrd</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={creds.password}
                    name="password"
                  />
                </FormControl>
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button variant="solid" mt={5} type="submit">
                  Sign in
                </Button>
                <HStack>
                  <Divider />
                  <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                    or continue with
                  </Text>
                  <Divider />
                </HStack>
                <OAuthButtonGroup />
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
