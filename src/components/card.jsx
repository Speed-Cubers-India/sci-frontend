/* eslint-disable react/prop-types */
import { Box, Image, Text } from "@chakra-ui/react";

export default function CardComponent({ compImg, name }) {
    return (
        <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            bg="gray.50" 
            overflow="hidden"
        >
            <Box>
                <Image
                    alt="Card background"
                    src={compImg}
                    objectFit="cover"
                    height={{ base: "200px", sm: "250px", md: "300px" }}
                    width={"100%"}
                />
            </Box>
            <Box py={2} px={{ base: 2, sm: 3, md: 4 }}>
                <Text fontSize="xs" fontWeight="bold" noOfLines={1}>
                    {name}
                </Text>
            </Box>
        </Box>
    );
}
