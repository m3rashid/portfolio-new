import React, { Fragment } from 'react';
import {
  Text,
  VStack,
  Heading,
  Box,
  Image,
  HStack,
  Divider,
  IconButton,
  useMediaQuery,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { FaGraduationCap, FaAward, FaMedal } from 'react-icons/fa';
import { BsFillBriefcaseFill, BsChatDotsFill } from 'react-icons/bs';

import Header from 'components/globals/header';
import Section from 'components/atoms/section';
import { StoryTimeline } from 'components/story-timeline';
import { companies, institutes } from 'data/data';
import { Helmet } from 'react-helmet';

const TURQUOISE = '#06b6d4';

const MyStory = () => {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

  return (
    <Fragment>
      <Helmet>
        <title>My Story | MD Rashid Hussain - Full Stack Developer</title>
      </Helmet>

      <VStack
        style={{ alignItems: isSmallerThan800 ? 'flex-start' : 'center' }}
      >
        <Section mb={14}>
          <VStack>
            <Heading>
              <Flex alignItems='center'>
                <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                  My Story
                </Header>
                <Stack pl={3}>
                  <Box as={BsChatDotsFill} size='25px' />
                </Stack>
              </Flex>
            </Heading>
          </VStack>
        </Section>

        <VStack textAlign='start' align='flex-start' mb={0}>
          <StoryTimeline year='2021' index={0} />
          {companies.map((company, index) => (
            <StoryTimeline icon={BsFillBriefcaseFill} index={index}>
              <HStack>
                <Image
                  rounded='full'
                  w={[6, 8]}
                  h={[6, 8]}
                  objectFit='cover'
                  fallbackSrc='/images/placeholder.webp'
                  src={company.logo}
                  alt={company.alt}
                />
                <VStack align='start'>
                  <Heading
                    fontSize={[12, 13, 15]}
                    lineHeight='shorter'
                    fontWeight='bold'
                  >
                    <Box>{company.title}</Box>
                    <Box mt={1}>{company.period}</Box>
                  </Heading>
                </VStack>
              </HStack>
              <Divider my={2} />
              <Text fontSize={[12, 13, 15]}>{company.role}</Text>
            </StoryTimeline>
          ))}
          <StoryTimeline year='2017' index={0} />
          {institutes.map((institute, index) => (
            <>
              <StoryTimeline
                icon={FaGraduationCap}
                index={index > 0 ? index + 1 : index}
              >
                <HStack>
                  <Image
                    rounded='full'
                    w={[6, 8]}
                    h={[6, 8]}
                    objectFit='cover'
                    fallbackSrc='/images/placeholder.webp'
                    src={institute.logo}
                    alt={institute.alt}
                  />
                  <VStack align='start'>
                    <Heading
                      fontSize={[12, 13, 15]}
                      lineHeight='shorter'
                      fontWeight='bold'
                    >
                      <Box>{institute.short_title}</Box>
                      <Box mt={1}>{institute.period}</Box>
                    </Heading>
                  </VStack>
                </HStack>
                <Divider my={2} />
                <Text fontSize={[12, 13, 15]}>{institute.role}</Text>
              </StoryTimeline>

              {institute.awards &&
                institute.awards.map((award, index1) => (
                  <StoryTimeline icon={FaAward} index={index1 + index + 1}>
                    <HStack>
                      <IconButton
                        colorScheme='blue'
                        rounded='full'
                        size='sm'
                        aria-label='medal'
                        icon={<FaMedal />}
                      />

                      <VStack align='start'>
                        <Heading
                          fontSize={[12, 13, 15]}
                          lineHeight='shorter'
                          fontWeight='bold'
                        >
                          <Box>{award.title}</Box>
                          <Box mt={1}>{award.date}</Box>
                        </Heading>
                      </VStack>
                    </HStack>
                    <Divider my={2} />
                    <Text fontSize={[12, 13, 15]}>{award.description}</Text>
                  </StoryTimeline>
                ))}

              <StoryTimeline
                year={institute.startingYear}
                index={0}
                skipTrail={index === institutes.length - 1 ? true : false}
              />
            </>
          ))}
        </VStack>
      </VStack>
    </Fragment>
  );
};

export default MyStory;
