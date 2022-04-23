import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import Projects from "./projects";
import { projectsList } from "data/projects-list";
import "style/style.css";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home = () => {
  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size={"2xl"}
            src="/images/rashid.png"
            backgroundColor={useColorModeValue("teal.100", "teal.200")}
          />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0} className="face">
            Hey!
          </Header>
          <Box as="h3" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{" "}
            <Box as="strong" fontWeight="600">
              Rashid
            </Box>{" "}
            and I&apos;m a<Box as="div" whiteSpace="nowrap"></Box>Full Stack
            Developer from India 🇮🇳
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#53c8c4" fontWeight="bold">
              Highlights
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
              <ListItem>
                <Link as={NavLink} to="/about">
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/story-timeline">
                  My Story
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/tech-stack">
                  Tech Stack
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/achievements">
                  Achievements
                </Link>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Projects projects={projectsList} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
