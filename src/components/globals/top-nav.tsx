import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';
import { BiChevronDown } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { AiOutlineClose, AiTwotoneThunderbolt } from 'react-icons/ai';
import { HiCode } from 'react-icons/hi';

import { ColorModeSwitcher } from 'components/globals/ColorModeSwitcher';
import { ImBlog } from 'react-icons/im';

const webLinks = [{ name: 'About', path: '/about' }];

const webDropDown = [
  {
    name: 'Tech Stack',
    path: '/tech-stack',
    Icon: AiTwotoneThunderbolt,
  },
  {
    name: 'My Story',
    path: '/story-timeline',
    Icon: MdTimeline,
  },
  {
    name: 'Blogs',
    path: '/blogs',
    external: false,
    Icon: ImBlog,
  },
  {
    name: 'Technical Blogs',
    path: 'https://blogs.m3rashid.in',
    external: true,
    Icon: HiCode,
  },
];

const mobileLinks = [
  { name: 'About', path: '/about', external: false },
  { name: 'Blogs', path: '/blogs', external: false },
  { name: 'Tech Stack', path: '/tech-stack', external: false },
  { name: 'My Story', path: '/story-timeline', external: false },
  {
    name: 'Technical Blogs',
    path: 'https://blogs.m3rashid.in',
    external: true,
  },
];

interface NavLinkProps {
  index?: string;
  name: string;
  path: string;
  onClose: () => void;
}

export const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      as={RouterNavLink}
      px={2}
      py={1}
      rounded='md'
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.900'),
      }}
      _activeLink={{
        color: useColorModeValue('blue.500', 'blue.200'),
      }}
      onClick={() => props.onClose()}
      to={props.path}
    >
      {props.name}
    </Link>
  );
};

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuProps = {
    bg: useColorModeValue('gray.200', 'gray.900'),
    color: useColorModeValue('blue.500', 'blue.200'),
  };

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.700')} px={4} boxShadow='lg'>
        <Flex
          h={16}
          alignItems='center'
          justifyContent='space-between'
          w={['90%', '85%', '80%']}
          maxW={800}
          mx='auto'
        >
          <IconButton
            size='md'
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label='Open Menu'
            display={['inherit', 'inherit', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems='center'>
            <Box>
              <Avatar
                as={RouterNavLink}
                size='sm'
                to='/portfolio'
                src='/images/rashid.webp'
                backgroundColor={useColorModeValue('teal.100', 'teal.200')}
              />
            </Box>
            <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
              <Menu isLazy>
                <MenuButton
                  as={Button}
                  variant='ghost'
                  size='sm'
                  px={2}
                  py={1.5}
                  fontSize='1em'
                  rounded='md'
                  height='auto'
                  _hover={menuProps}
                  _expanded={menuProps}
                  _focus={{ boxShadow: 'outline' }}
                  rightIcon={<BiChevronDown size={18} />}
                >
                  Links
                </MenuButton>
                <MenuList zIndex={5}>
                  {webDropDown.map((link, index) => (
                    <Link
                      as={RouterNavLink}
                      to={link.path}
                      key={link.path}
                      {...{
                        target: link.external ? '_blank' : '_self',
                      }}
                    >
                      <MenuItem>
                        <HStack>
                          <Icon as={link.Icon} size={18} color='blue.200' />
                          <Text>{link.name}</Text>
                        </HStack>
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems='center'>
            <IconButton
              as={Link}
              href='https://github.com/m3rashid'
              size='md'
              target='_blank'
              icon={<FaGithub />}
              aria-label='Github account'
              bg={useColorModeValue('white', 'gray.700')}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.900'),
              }}
            />
            <ColorModeSwitcher justifySelf='flex-end' />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={['100%', '100%', '80%']}
            maxW={800}
            display={['inherit', 'inherit', 'none']}
          >
            <Stack as='nav' spacing={3}>
              {mobileLinks.map((link, index) => {
                if (link.external) {
                  return (
                    <Box
                      key={index}
                      px={2}
                      rounded='md'
                      _hover={{ textDecoration: 'none', bg: menuProps.bg }}
                      _activeLink={{ color: menuProps.color }}
                    >
                      <Link as={Link} target='_blank' href={link.path}>
                        {link.name}
                      </Link>
                    </Box>
                  );
                } else {
                  return (
                    <NavLink
                      index={index.toString()}
                      name={link.name}
                      path={link.path}
                      onClose={onClose}
                    />
                  );
                }
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
