import React from "react";
import { SimpleGrid, Box, useMediaQuery } from "@chakra-ui/react";
import useFetch from "use-http";

import { PageSlideFade } from "./page-transitions";
import RepositoryCard from "./live-data-card";
import StackGrid from "react-stack-grid";
import CardSkeleton from "./card-skeleton";

const LiveData = () => {
  const { get, loading, error, data } = useFetch("https://api.github.com");
  const [repos, setRepos] = React.useState([]);
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isLargerThan982] = useMediaQuery("(min-width: 982px)");

  let columnWidth: string | number = 390;
  if (isLargerThan982) {
    columnWidth = 390;
  } else {
    if (isLargerThan720) {
      columnWidth = 300;
    } else {
      columnWidth = "100%";
    }
  }

  React.useEffect(() => {
    get("/users/m3rashid/repos").then((res) => {
      setRepos(
        res?.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8)
      );
    });
  }, []);

  return (
    <PageSlideFade>
      {loading ? (
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          <CardSkeleton />
        </SimpleGrid>
      ) : (
        <Box mt={4}>
          <StackGrid columnWidth={columnWidth}>
            {repos?.map((repo, index) => (
              <RepositoryCard
                title={repo.name}
                description={repo.description}
                language={repo.language}
                url={repo.svn_url}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
              />
            ))}
          </StackGrid>
        </Box>
      )}
    </PageSlideFade>
  );
};

export default LiveData;
