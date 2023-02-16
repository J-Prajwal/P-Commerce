import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useDispatch } from 'react-redux';
import { registerUser } from '../Redux/AuthReducer/auth.actions';
import { useToast } from '@chakra-ui/react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData)).then((res) => {
      if (res) {
        toast({
          title: 'Signup Successful!',
          status: 'success',
          duration: 3000,
          variant: 'top-accent',
          isClosable: true,
          position: 'top-left',
        });
        navigate('/signin');
      } else {
        toast({
          title: 'Please try again',
          status: 'error',
          duration: 3000,
          variant: 'top-accent',
          isClosable: true,
          position: 'top-left',
        });
      }
    });
    setUserData({ name: '', username: '', email: '', password: '' });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form method='post' onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id='name' isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type='text'
                      placeholder='Enter your name'
                      name='name'
                      value={userData.name}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id='username' isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type='text'
                      placeholder='Enter your username'
                      name='username'
                      value={userData.username}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id='email' isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  value={userData.email}
                  onChange={handleOnChange}
                />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password'
                    name='password'
                    value={userData.password}
                    onChange={handleOnChange}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting'
                  size='lg'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type='submit'
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Link to={'/signin'}>
                    {' '}
                    <span style={{ color: '#4299e1' }}>Login</span>{' '}
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
