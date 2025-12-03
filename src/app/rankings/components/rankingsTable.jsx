/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { useQuery } from '@tanstack/react-query';
import { fetchRankings } from '../../../api/fetchRankings';
import { formatAttemptResult } from '../../../lib/attempt';


const RankingsTable = ({filterParams}) => { 

  //filterParams is converted to a string to be used as a query key
  const filterString = `${filterParams.event}-${filterParams.state}-${filterParams.type}`;
   
  const {data, isFetching, isError} = useQuery({
    queryKey: ['rankings'],
    queryFn: () => fetchRankings()
  })

  if (isFetching) return <Text>Loading...</Text>;
  if (isError) return <Text>Error: {isError}</Text>;

  return (
    <Box>
      {data && data[filterString] ? <Box borderWidth="1px" borderRadius="md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='rw-[80px]'>Rank</TableHead>
              <TableHead>WCA ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="w-[100px] px-5">Result</TableHead>
              <TableHead>Competition</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data[filterString]?.map((item) => (
              <TableRow key={item.wca_id}>
                <TableCell className="font-semibold px-5">{item.rank}</TableCell>
                <TableCell className="text-nowrap">{item.wca_id}</TableCell>
                <TableCell className="text-nowrap">{item.name}</TableCell>
                <TableCell className="font-semibold px-5 text-nowrap">{formatAttemptResult(item?.result, filterParams?.event)}</TableCell>
                <TableCell className="text-nowrap">{item.competition_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box> : <Text>No data found</Text>}
    </Box>
  )
}

export default RankingsTable
