import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";

const About = React.lazy(() => import("./about"));
const Home = React.lazy(() => import("./home"));
const TechStack = React.lazy(() => import("./tech-stack"));
const Achievements = React.lazy(() => import("./achievements"));
const MyStory = React.lazy(() => import("./my-story"));

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: Achievements,
  },
  {
    path: "/tech-stack",
    name: "Tools",
    component: TechStack,
  },
  {
    path: "/story-timeline",
    name: "My Story",
    component: MyStory,
  },
];

const Navigation = () => {
  return (
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Suspense>
  );
};

export default Navigation;
