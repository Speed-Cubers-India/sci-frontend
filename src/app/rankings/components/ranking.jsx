"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import RankingFilter from "./rankingsFilter";
import RankingsTable from "./rankingsTable";
import RankingAlert from "./rankingsAlert";

export default function RankingsPage() {
  const [filterParams, setFilterParams] = useState({
    event: "",
    state: "",
    type: "",
  });

  return (
    <Box 
      className="container about_page_div" 
      px={{ base: 4, md: 8 }} 
      py={{ base: 8, md: 14 }} 
      color="blue-gray-900" 
      minH="100vh"
    >
      <h1 className="mb-6 border-b md:text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">Rankings</h1>
      <RankingAlert/>
      <RankingFilter setFilterParams={setFilterParams} />
      <RankingsTable filterParams={filterParams} />
    </Box>
  );
}
