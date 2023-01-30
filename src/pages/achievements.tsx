import React, { Fragment } from 'react';
import { in2020, in2021, in2022, in2023 } from '../data/achievements';
import { VStack, Heading, Box } from '@chakra-ui/react';

import { PageSlideFade } from 'components/atoms/page-transitions';
import Header from 'components/globals/header';
import { TimelineItem } from 'components/Timeline';
import { Helmet } from 'react-helmet';

const Achievements = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Achievements | MD Rashid Hussain - Full Stack Developer</title>
      </Helmet>

      <PageSlideFade>
        {/* @ts-ignore */}
        <Box align='start' mb={6}>
          <Header mt={0} mb={0}>
            Achievements
          </Header>
        </Box>
        <VStack textAlign='start' align='start' mb={5}>
          <Box>
            <Heading fontSize='2xl' fontWeight='600' my={5}>
              2023
            </Heading>
            {in2023.map((item, index) => {
              return (
                <Box key={'2022' + index}>
                  <TimelineItem icon={item.icon || undefined}>
                    {item.text}
                  </TimelineItem>
                </Box>
              );
            })}
          </Box>
          <Box>
            <Heading fontSize='2xl' fontWeight='600' my={5}>
              2022
            </Heading>
            {in2022.map((item, index) => {
              return (
                <Box key={'2022' + index}>
                  <TimelineItem icon={item.icon || undefined}>
                    {item.text}
                  </TimelineItem>
                </Box>
              );
            })}
          </Box>
          <Box>
            <Heading fontSize='2xl' fontWeight='600' my={5}>
              2021
            </Heading>
            <Box>
              {in2021.map((item, index) => {
                return (
                  <Box key={'2021' + index}>
                    <TimelineItem icon={item.icon || undefined}>
                      {item.text}
                    </TimelineItem>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box>
            <Heading fontSize='2xl' fontWeight='600' my={5}>
              2020
            </Heading>
            <Box>
              {in2020.map((item, index) => {
                return (
                  <Box key={'2021' + index}>
                    <TimelineItem icon={item.icon || undefined}>
                      {item.text}
                    </TimelineItem>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </VStack>
      </PageSlideFade>
    </Fragment>
  );
};

export default Achievements;
