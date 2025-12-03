import { Box, Image } from "@chakra-ui/react"

const images = [
  {
    id: "1",
    path: "about-photo-1",
  },
  {
    id: "2",
    path: "about-photo-2",
  },
  {
    id: "3",
    path: "about-photo-3",
  },
  {
    id: "4",
    path: "about-photo-4",
  },
  {
    id: "5",
    path: "about-photo-5",
  }
]

export function ImagesComponent() {
  return (
    <Box 
      maxW="screen-lg" 
      mx="auto" 
      overflowX="auto" 
      borderRadius="md" 
      mb={5}
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
      <Box display="flex" gap={4} pt={10} w="max-content">
        {images.map((image) => (
          <Box key={image.id} flexShrink={0} className="mb-2">
            <Box overflow="hidden" borderRadius="md">
              <Image
                src={`https://sci-about-photos.s3.eu-north-1.amazonaws.com/${image.path}.jpg`}
                alt="sci-image"
                h={{ base: "200px", md: "250px" }}
                w={{ base: "250px", md: "350px" }}
                objectFit="cover"
                aspectRatio={3/4}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
