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
  Icon,
  chakra,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ImCart } from 'react-icons/im';
import { getItem, removeItem } from '../Utils/localStorage';
import { useSelector } from 'react-redux';

const Links = ['Mens', 'Womens', 'Kids'];

const NavLink = ({ children }) => (
  <Text
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.200', 'blue.700'),
    }}
  >
    <Link to={`/${children}`}>{children}</Link>
  </Text>
);

export default function Navbar() {
  const { isAuth } = useSelector((state) => state.authReducer);
  const username = getItem('username');
  console.log(username);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const logoutHandler = () => {
    removeItem('username');
    removeItem('token');
    navigate('/');
  };
  return (
    <>
      <Box
        bg={useColorModeValue('blue.100', 'blue.900')}
        px={4}
        top={0}
        position={'fixed'}
        w={'100%'}
        zIndex={'999'}
        m={'auto'}
        mb={10}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            backgroundColor={'transparent'}
            icon={
              isOpen ? (
                <CloseIcon backgroundColor={'transparent'} />
              ) : (
                <HamburgerIcon />
              )
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link to={'/'}>
                <Heading size={'lg'}>P-Comm</Heading>
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <InputGroup display={{ base: 'none', md: 'flex' }}>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                variant={'flushed'}
                borderColor={'gray.500'}
                placeholder='Search'
              ></Input>
            </InputGroup>
            <Button
              display={{ base: 'none', md: 'flex' }}
              onClick={toggleColorMode}
              colorScheme={'none'}
              color={colorMode === 'light' ? 'black' : 'white'}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button colorScheme={'none'} size={['lg', '2xl']} px={5}>
              <chakra.span pos='relative' display='inline-block'>
                <Icon
                  color={colorMode == 'light' ? 'black' : 'white'}
                  boxSize={6}
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'></path>
                </Icon>
                <chakra.span
                  pos='absolute'
                  top='-1px'
                  right='-1px'
                  px={2}
                  py={1}
                  fontSize='xs'
                  fontWeight='bold'
                  lineHeight='none'
                  color='red.100'
                  transform='translate(50%,-50%)'
                  bg='red.600'
                  rounded='full'
                >
                  99
                </chakra.span>
              </chakra.span>
            </Button>

            {isAuth ? (
              <Menu>
                {({ isOpen }) => (
                  <div>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      variant={'solid'}
                      colorScheme={'none'}
                      color={colorMode == 'dark' ? 'white' : 'black'}
                      size={'sm'}
                      px={5}
                    >
                      {username} <ChevronDownIcon />
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
                variant={'outline'}
                colorScheme={'blue'}
                size={'sm'}
                px={5}
                onClick={onOpen}
              >
                <Link to={'/signup'}>Signup</Link>
              </Button>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
            <Button
              p={'0'}
              onClick={toggleColorMode}
              colorScheme={'none'}
              color={colorMode === 'light' ? 'black' : 'white'}
            >
              {colorMode === 'light'
                ? 'Switch To Dark Mode'
                : 'Switch to Night Mode'}
            </Button>
            <Input
              variant={'flushed'}
              placeholder='Search'
              display={{ md: 'none' }}
            ></Input>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
