import { useMemo } from "react";
import UpComingCompetitions from "./upComingCompetitions";
import PastCompetitions from "./pastCompetitions";
import { useQuery } from "@tanstack/react-query";
import { fetchCompetitions } from "../api/fetchCompetitions";

const Competitions = () => {
  
  // fetch competitions from the api
  const { data, isFetching, isError } = useQuery({
    queryKey: ["competitions"],
    queryFn: () => fetchCompetitions(),
  });

  // filter upcoming and past competitions and memoize them
  const upComingCompetitons = useMemo(
    () =>
      data?.filter(
        (competition) => new Date(competition.end_date) > new Date()
      ),
    [data]
  );
  const pastCompetitons = useMemo(
    () =>
      data?.filter(
        (competition) => new Date(competition.end_date) < new Date()
      ).reverse(),
    [data]
  );

  if (isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;

  return (
    <div className="space-y-10">
      <UpComingCompetitions upComingCompetitons={pastCompetitons} />
      <PastCompetitions pastCompetitons={pastCompetitons} />
    </div>
  );
};

export default Competitions;
