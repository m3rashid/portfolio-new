import React, { Fragment, useState } from 'react';
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Flex,
  Stack,
  Box,
} from '@chakra-ui/react';
import { BiDesktop } from 'react-icons/bi';
import { GiDatabase } from 'react-icons/gi';
import {
  AiTwotoneThunderbolt,
  AiFillTool,
  AiTwotoneTool,
} from 'react-icons/ai';

import { skills } from 'data/data';
import Header from 'components/globals/header';
import Section from 'components/atoms/section';
import SkillCard from 'components/skill-card';
import { MotionBox } from 'components/atoms/motion';
import { container } from 'components/atoms/page-transitions';
import { PageSlideFade } from 'components/atoms/page-transitions';
import { Helmet } from 'react-helmet';

const filterCriteria = [
  { value: 'language', label: 'Language', iconAs: AiTwotoneThunderbolt },
  { value: 'frontend', label: 'Frontend', iconAs: BiDesktop },
  { value: 'backend', label: 'Backend', iconAs: BiDesktop },
  { value: 'database', label: 'Database', iconAs: GiDatabase },
  { value: 'tools', label: 'Tools', iconAs: AiFillTool },
];

const TURQUOISE = '#06b6d4';

const TechStack = () => {
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
    filterSkills('language');
  }, []);

  const filterSkills = (tab: string) => {
    setSkillsList(skills.filter((skill) => skill.type === tab));
  };

  const filterBg = useColorModeValue('gray.100', 'gray.800');
  const filterColor = useColorModeValue('gray.600', 'gray.500');

  return (
    <Fragment>
      <Helmet>
        <title>Tech Stack | MD Rashid Hussain - Full Stack Developer</title>
      </Helmet>

      <PageSlideFade>
        <VStack spacing={8}>
          <Section>
            <VStack>
              <Heading>
                <Flex alignItems='center'>
                  <Header underlineColor={TURQUOISE} mt={0} mb={2}>
                    Tech Stack
                  </Header>
                  <Stack pl={3}>
                    <Box as={AiTwotoneTool} size='25px' />
                  </Stack>
                </Flex>
              </Heading>
              <Text
                fontSize='xl'
                color={useColorModeValue('gray.500', 'gray.200')}
                maxW='lg'
                textAlign='center'
              >
                A list of my favorite tools and technologies that I use on a
                regular basis.
              </Text>
            </VStack>
          </Section>
          <Section>
            <Tabs
              variant='soft-rounded'
              colorScheme='blue'
              align='center'
              w='100%'
            >
              <TabList display='flex' flexWrap='wrap'>
                {filterCriteria.map((criteria) => (
                  <Tab
                    key={criteria.value}
                    bg={filterBg}
                    color={filterColor}
                    _selected={{
                      color: 'green.800',
                      bg: 'green.100',
                    }}
                    mr={2}
                    mt={2}
                    onClick={() => filterSkills(criteria.value)}
                  >
                    <HStack spacing={1}>
                      {/* @ts-ignore */}
                      <Icon as={criteria.iconAs} weight='fill' />
                      <Text>{criteria.label}</Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>
              <TabPanels minHeight='45vh'>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial='hidden'
                    animate='visible'
                  >
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // @ts-ignore
                          platform='web'
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial='hidden'
                    animate='visible'
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // @ts-ignore
                          platform='web'
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial='hidden'
                    animate='visible'
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // @ts-ignore
                          platform='web'
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial='hidden'
                    animate='visible'
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // @ts-ignore
                          platform='web'
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox
                    variants={container}
                    initial='hidden'
                    animate='visible'
                  >
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          // @ts-ignore
                          platform='web'
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </VStack>
      </PageSlideFade>
    </Fragment>
  );
};

export default TechStack;
