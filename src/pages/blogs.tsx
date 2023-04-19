import {
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import {
  CardTransition,
  PageSlideFade,
  StaggerChildren,
} from 'components/atoms/page-transitions';
import { Helmet } from 'react-helmet';
import React, { Fragment } from 'react';
import { ImBlog } from 'react-icons/im';
import { Link } from 'react-router-dom';
import blogCardsData from 'data/blogCards';
import Header from 'components/globals/header';
import { MotionBox } from 'components/atoms/motion';

const TURQUOISE = '#06b6d4';

interface IProps {}

const Blogs: React.FC<IProps> = () => {
  const cardBackground = useColorModeValue('white', 'gray.800');

  return (
    <Fragment>
      <Helmet>
        <title>MD Rashid Hussain - Full Stack Developer</title>
      </Helmet>

      <PageSlideFade>
        <StaggerChildren>
          <MotionBox>
            <Heading>
              <Flex alignItems='center'>
                <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                  Blogs
                </Header>
                <Stack pl={3}>
                  <Box as={ImBlog} size='25px' />
                </Stack>
              </Flex>
            </Heading>
          </MotionBox>

          <VStack
            spacing={4}
            marginBottom={6}
            align='left'
            mx={[0, 0, 6]}
            mt={12}
          >
            {blogCardsData.map((t) => {
              if (!t.published || !t.title || !t.slug) return null;
              return (
                <Link key={t.slug} to={`/blog/${t.slug}`}>
                  <MotionBox whileHover={{ y: -5 }}>
                    <CardTransition>
                      <Box
                        px={4}
                        py={5}
                        borderWidth='1px'
                        _hover={{ shadow: 'lg' }}
                        bg={cardBackground}
                        position='relative'
                        rounded='md'
                        display='flex'
                        alignItems='flex-start'
                        justifyContent='center'
                        flexDirection='column'
                      >
                        <Heading fontSize='xl'>{t.title}</Heading>
                        <Heading fontSize='sm'>{t.description}</Heading>
                      </Box>
                    </CardTransition>
                  </MotionBox>
                </Link>
              );
            })}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
    </Fragment>
  );
};

export default Blogs;
