import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  HStack,
  Select,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { SearchIcon } from '@chakra-ui/icons';
import { ImCart } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  mensData,
  sortByPrice,
  sortByRating,
} from '../Redux/Mens/mens.actions';

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Mens', icon: FiTrendingUp },
  { name: 'Womens', icon: FiCompass },
  { name: 'Kids', icon: FiStar },
  { name: 'Cart', icon: ImCart },
];
export default function ProductSidebar({ children, setCategory }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH='100vh'>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav
        setCategory={setCategory}
        display={{ base: 'flex', md: 'none' }}
        onOpen={onOpen}
      />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box w={{ base: 'full', md: 60 }} pos='fixed' h='full' {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='4xl' fontFamily='monospace' fontWeight='bold'>
          P-Comm
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      to={'/' + children}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ setCategory, onOpen, ...rest }) => {
  const dispatch = useDispatch();
  const handlePriceChange = (order) => {
    if (order.length > 0) {
      dispatch(sortByPrice(order));
    } else {
      dispatch(mensData());
    }
  };
  const handleRatingChange = (order) => {
    if (order.length > 0) {
      console.log(order);
      dispatch(sortByRating(order));
    } else {
      dispatch(mensData());
    }
  };
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 1, md: 12 }}
      height={['7rem', '20']}
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      justifyContent={['flex-start', 'space-between']}
      flexWrap={'wrap'}
      gap={[2, 10]}
    >
      <IconButton
        variant='outline'
        onClick={onOpen}
        icon={<FiMenu />}
        display={{ base: 'flex', md: 'none' }}
      />
      <HStack>
        <Text fontSize={['lg', '2xl']}>Rating</Text>
        <Select
          size={['xs', 'lg']}
          onChange={(e) => handleRatingChange(e.target.value)}
        >
          <option value='highest'>Highest</option>
          <option value='lowest'>Lowest</option>
        </Select>
      </HStack>
      <HStack>
        <Text fontSize={['lg', '2xl']}>Price</Text>
        <Select
          size={['xs', 'lg']}
          onChange={(e) => handlePriceChange(e.target.value)}
        >
          <option value=''>Choose</option>
          <option value='high'>Costliest</option>
          <option value='low'>Cheapest</option>
        </Select>
      </HStack>
      <HStack w={['100%', '50%']}>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input
            variant={'flushed'}
            borderColor={'gray.500'}
            placeholder='Have a specific brand / item in mind? Search it!'
            onChange={(e) => setCategory(e.target.value)}
          ></Input>
        </InputGroup>
        <Button colorScheme='red' px={[7, 10]}>
          Reset
        </Button>
      </HStack>
    </Flex>
  );
};
