import React from 'react';
import { ChakraProvider, Center, Spinner, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { theme } from 'style/theme';
import TopNav from 'components/globals/top-nav';
import Footer from 'components/globals/footer';

const Home = React.lazy(() => import('pages/home'));
const About = React.lazy(() => import('pages/about'));
const TechStack = React.lazy(() => import('pages/tech-stack'));
const Achievements = React.lazy(() => import('pages/achievements'));
const MyStory = React.lazy(() => import('pages/my-story'));

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/achievements', name: 'Achievements', component: Achievements },
  { path: '/tech-stack', name: 'Tools', component: TechStack },
  { path: '/story-timeline', name: 'My Story', component: MyStory },
];

export const App = () => (
  <ChakraProvider theme={theme} resetCSS={true}>
    <BrowserRouter>
      <TopNav />
      <Box
        textAlign='center'
        fontSize='xl'
        w={['90%', '85%', '80%']}
        maxW={800}
        mx='auto'
        style={{ overflowX: 'hidden', overflowY: 'hidden' }}
      >
        <Box
          pt={10}
          pb={10}
          style={{ overflowX: 'hidden', overflowY: 'hidden' }}
        >
          <React.Suspense
            fallback={
              <Center>
                <Spinner />
              </Center>
            }
          >
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </React.Suspense>
        </Box>
      </Box>
      <Footer />
    </BrowserRouter>
  </ChakraProvider>
);
