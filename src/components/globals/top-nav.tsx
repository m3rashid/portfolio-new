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
import { BsCheckCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { AiOutlineClose, AiTwotoneThunderbolt } from 'react-icons/ai';

import { ColorModeSwitcher } from 'components/globals/ColorModeSwitcher';

const webLinks = [
  { name: 'About', path: '/about', external: false },
  { name: 'Blogs', path: 'https://blogs.m3rashid.in', external: true },
];

const mobileLinks = [
  { name: 'About', path: '/about', external: false },
  { name: 'Tech Stack', path: '/tech-stack', external: false },
  { name: 'Achievement', path: '/achievements', external: false },
  { name: 'Developer Story', path: '/story-timeline', external: false },
  { name: 'Blogs', path: 'https://blogs.m3rashid.in', external: true },
];

interface NavLinkProps {
  index?: string;
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
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
                src='/images/rashid.jpg'
                backgroundColor={useColorModeValue('teal.100', 'teal.200')}
              />
            </Box>
            <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
              {webLinks.map((link, index) => {
                if (link.external) {
                  return (
                    <Box
                      key={index}
                      px={2}
                      py={1}
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
                      key={index}
                      name={link.name}
                      path={link.path}
                      onClose={onClose}
                    />
                  );
                }
              })}
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
                  <Link as={RouterNavLink} to='/tech-stack'>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={AiTwotoneThunderbolt}
                          size={18}
                          color={useColorModeValue('blue.500', 'blue.200')}
                        />
                        <Text>Tech Stack</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to='/achievements'>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={BsCheckCircle}
                          size={18}
                          color={useColorModeValue('blue.500', 'blue.200')}
                        />
                        <Text>Achievements</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link as={RouterNavLink} to='/story-timeline'>
                    <MenuItem>
                      <HStack>
                        <Icon
                          as={MdTimeline}
                          size={18}
                          color={useColorModeValue('blue.500', 'blue.200')}
                        />
                        <Text>My Story</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems='center'>
            <IconButton
              as={Link}
              href='https://github.com/m3rashid'
              size='md'
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
            <Stack as='nav' spacing={4}>
              {mobileLinks.map((link, index) => {
                if (link.external) {
                  return (
                    <Box
                      key={index}
                      px={2}
                      py={1}
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
