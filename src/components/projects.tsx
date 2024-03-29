import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { VStack, SimpleGrid } from '@chakra-ui/react';

import { projectsList } from 'data/projects-list';
import { MotionBox } from 'components/atoms/motion';
import Header from 'components/globals/header';
import ProjectCard from 'components/project-card';

interface ProjectsProps {}

const ORANGE = '#ff9400';

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <VStack align='start' spacing={8}>
      <Header underlineColor={ORANGE} mt={0} mb={0}>
        Projects
      </Header>
      {/* @ts-ignore */}
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w='100%'>
          {projectsList.map((project, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.desc}
                logo={project.logo}
                link={project.link || ''}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
};

export default Projects;
