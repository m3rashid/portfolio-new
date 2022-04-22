import * as React from "react";
// import { Link as NavLink } from "react-router-dom";
import {
  VStack,
  Heading,
  Box,
  // Link, LinkProps
} from "@chakra-ui/react";

// import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "./page-transitions";
import Header from "./header";

// interface ExternalLinkProps extends LinkProps {
//   url: string;
//   linkProps?: LinkProps;
//   text: string;
// }

// const ExternalLink: React.FC<ExternalLinkProps> = ({
//   url,
//   linkProps,
//   text,
// }) => {
//   return (
//     <Link href={url} {...linkProps} {...props}>
//       {text}
//     </Link>
//   );
// };

// const InternalLink: React.FC<ExternalLinkProps> = ({
//   url,
//   linkProps,
//   text,
// }) => {
//   return (
//     <Link as={NavLink} to={url} {...linkProps} {...props}>
//       {text}
//     </Link>
//   );
// };

const Achievements = () => {
  return (
    <PageSlideFade>
      {/* @ts-ignore */}
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            {/* <TimelineItem icon={FiPackage}>
              Published my first post on this website{" "}
              <InternalLink color={"blue.200"} url="/blog" text={"Blog"} />
            </TimelineItem> */}
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            {/* <TimelineItem icon={FiEdit2}>Wrote 5 blog posts</TimelineItem> */}
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;
