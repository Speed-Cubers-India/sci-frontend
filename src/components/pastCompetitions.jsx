/* eslint-disable react/prop-types */
import { Box, Heading } from "@chakra-ui/react";
import CardComponent from "./card";

const PastCompetitions = ({ pastCompetitons }) => {
  return (
    <Box className="space-y-5">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight border-b pb-2">
        Past Competitions
      </h4>
      <Box
        display="flex"
        gap={4}
        overflowX="auto"
        pb={2}
        css={{
            '&::-webkit-scrollbar': {
              height: '5px',
            },
            '&::-webkit-scrollbar-track': {
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#d3d3d7/30',
              borderRadius: '4px',
            }
          }}
      >
        {pastCompetitons?.map((competition) => (
          <Box
            key={competition.competitionId}
            minW={{ base: "50%", md: "33.333%" }}
            flexShrink={0}
          >
            <CardComponent
              compImg={`https://competition-posters.s3.us-west-2.amazonaws.com/PragyanCubeOpen2025.jpg`}
              name={competition.name}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PastCompetitions;
