import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { BiDesktop } from "react-icons/bi";
import { GiDatabase } from "react-icons/gi";
import { AiTwotoneThunderbolt, AiFillTool } from "react-icons/ai";

import { skills } from "data/data";
import Header from "components/globals/header";
import Section from "components/section";
import SkillCard from "components/skill-card";
import { MotionBox } from "components/motion";
import { container } from "components/page-transitions";
import { PageSlideFade } from "components/page-transitions";

const filterCriteria = [
  { value: "language", label: "Language", iconAs: AiTwotoneThunderbolt },
  { value: "webDev", label: "Web Development", iconAs: BiDesktop },
  { value: "database", label: "Database", iconAs: GiDatabase },
  { value: "tools", label: "Tools", iconAs: AiFillTool },
];

const TechStack = () => {
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
    filterSkills("language");
  }, []);

  const filterSkills = (tab: string) => {
    setSkillsList(skills.filter((skill) => skill.type === tab));
  };

  const filterBg = useColorModeValue("gray.100", "gray.800");
  const filterColor = useColorModeValue("gray.600", "gray.500");

  return (
    <PageSlideFade>
      <VStack spacing={8}>
        <Section>
          <VStack>
            {/* @ts-ignore */}
            <Header mt={0} mb={1}>
              Tech Stack
            </Header>
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.500", "gray.200")}
              maxW="lg"
              textAlign="center"
            >
              A list of my favorite tools and technologies that I use on a
              regular basis.
            </Text>
          </VStack>
        </Section>
        <Section>
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            align="center"
            w="100%"
          >
            <TabList display="flex" flexWrap="wrap">
              {filterCriteria.map((criteria) => (
                <Tab
                  key={criteria.value}
                  bg={filterBg}
                  color={filterColor}
                  _selected={{
                    color: "green.800",
                    bg: "green.100",
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills(criteria.value)}
                >
                  <HStack spacing={1}>
                    {/* @ts-ignore */}
                    <Icon as={criteria.iconAs} weight="fill" />
                    <Text>{criteria.label}</Text>
                  </HStack>
                </Tab>
              ))}
            </TabList>
            <TabPanels minHeight="45vh">
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        // @ts-ignore
                        platform="web"
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        // @ts-ignore
                        platform="web"
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        // @ts-ignore
                        platform="web"
                        link={tool.link}
                      />
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </TabPanel>
              <TabPanel px={0}>
                <MotionBox
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                    {skillsList.map((tool, index) => (
                      <SkillCard
                        key={index}
                        name={tool.name}
                        description={tool.description}
                        image={tool.image}
                        // @ts-ignore
                        platform="web"
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
  );
};

export default TechStack;
