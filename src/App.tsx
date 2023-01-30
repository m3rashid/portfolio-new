import React from 'react';
import { ChakraProvider, Center, Spinner, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { theme } from 'style/theme';
import TopNav from 'components/globals/top-nav';
import Footer from 'components/globals/footer';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: React.lazy(() => import('pages/home')),
  },
  {
    path: '/about',
    name: 'About',
    component: React.lazy(() => import('pages/about')),
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: React.lazy(() => import('pages/achievements')),
  },
  {
    path: '/tech-stack',
    name: 'Tools',
    component: React.lazy(() => import('pages/tech-stack')),
  },
  {
    path: '/story-timeline',
    name: 'My Story',
    component: React.lazy(() => import('pages/my-story')),
  },
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
