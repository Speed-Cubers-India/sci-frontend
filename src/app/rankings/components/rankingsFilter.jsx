"use client";

/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Text, Button, Select, Portal } from "@chakra-ui/react";
import { events } from "../../../lib/events";
import "@cubing/icons";
import { useQuery } from "@tanstack/react-query";
import { fetchStates } from "../../../api/fetchStates";

const RankingFilter = ({ setFilterParams }) => {

  const [filter, setFilter] = useState({"event": "", "state": "", "type": ""});  

  //fetch states from the api
  const { data: states, isFetching, isError } = useQuery({
    queryKey: ["states"],
    queryFn: () => fetchStates(),
  });


  if (isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError}</p>;

  return (
    <Box>
      {/* Ranking Filters */}
      <Box 
        display="grid" 
        gap={{ base: 3, md: 6 }} 
        gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        mb={8}
      >
        <Box gridColumn={{ base: "span 1", md: "span 1" }} display="flex" flexDirection="column" gap={2}>
          <Text as="label" fontSize="sm" fontWeight="medium">
            Event
          </Text>
          <Select.Root
            value={[filter.event]}
            onValueChange={(e) => setFilter({ ...filter, event: e.value[0] })}
            positioning={{ sameWidth: true }}
          >
            <Select.Trigger className="border border-gray-300 rounded-md px-3 py-2 bg-white">
              <span>{events?.find(event => event.eventId === filter.event)?.eventName || "Select event"}</span>
            </Select.Trigger>
            <Portal>
              <Select.Positioner>
                <Select.Content className="bg-white border border-gray-300 rounded-md shadow-lg max-h-72 overflow-auto z-50">
                  {events?.map((event, index) => (
                    <Select.Item 
                      item={event.eventId} 
                      key={index}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {event.eventName}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>

        <Box gridColumn={{ base: "span 1", md: "span 1" }} display="flex" flexDirection="column" gap={2}>
          <Text as="label" fontSize="sm" fontWeight="medium">
            State
          </Text>
          <Select.Root
            value={[filter.state]}
            onValueChange={(e) => setFilter({ ...filter, state: e.value[0] })}
            positioning={{ sameWidth: true }}
          >
            <Select.Trigger className="border border-gray-300 rounded-md px-3 py-2 bg-white">
              <span>{states?.find(state => state.id === filter.state)?.name || "Select state"}</span>
            </Select.Trigger>
            <Portal>
              <Select.Positioner>
                <Select.Content className="bg-white border border-gray-300 rounded-md shadow-lg max-h-72 overflow-auto z-50">
                  {states?.map((state, index) => (
                    <Select.Item 
                      item={state.id} 
                      key={index}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {state.name}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>

        <Box gridColumn={{ base: "span 1", md: "span 1" }} display="flex" flexDirection="column" gap={2}>
          <Text as="label" fontSize="sm" fontWeight="medium">
            Type
          </Text>
          <Select.Root
            value={[filter.type]}
            onValueChange={(e) => setFilter({ ...filter, type: e.value[0] })}
            positioning={{ sameWidth: true }}
          >
            <Select.Trigger className="border border-gray-300 rounded-md px-3 py-2 bg-white">
              <span>{filter.type || "Select type"}</span>
            </Select.Trigger>
            <Portal>
              <Select.Positioner>
                <Select.Content className="bg-white border border-gray-300 rounded-md shadow-lg max-h-fit overflow-auto z-50">
                  <Select.Item item="single" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    Single
                  </Select.Item>
                  <Select.Item item="average" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    Average
                  </Select.Item>
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>

        <Box 
          gridColumn={{ base: "span 1", md: "span 1" }} 
          display="flex" 
          alignItems="flex-end" 
          py={{ base: 2, md: 0 }}
        >
          <Button
            onClick={() => {
              setFilterParams(filter);
            }}
            width="full"
            className="border rounded-md bg-gray-900 text-gray-50"
          >
            Show Results
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RankingFilter;
