import * as React from 'react'
import {
  Badge,
  Box,
  Center,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { ImgComparisonSlider } from '@img-comparison-slider/react'

function Posts() {
  const { colorMode } = useColorMode()

  return (
    <Layout title="Posts">
      <Center mt={20}>
        <Box>
          <Text fontSize="xl">
            I recently found a new hobby -{' '}
            <Badge fontSize="xl">
              <Link href="https://www.blender.org/" isExternal color="orange">
                Blender
              </Link>
            </Badge>
            .
          </Text>
          The first time I oppened the app I understood that flying a plane
          might be easier than learning the basics of Blender. However, as I
          dove into learning it, I found myself on a rewarding journey of growth
          and creativity. Each step forward brought a sense of accomplishment,
          and now, tackling more complex projects feels like a thrilling
          adventure.
        </Box>
      </Center>
      <div
        className={`relative overflow-hidden p-6 rounded-lg mt-10 md:flex gap-6 before:hover:opacity-100 before:transition-all before:duration-300 before:opacity-0 before:absolute before:pointer-events-none before:-z-10 before:right-0 before:bottom-0 before:w-1/2 before:h-full before:bg-gradient-to-tl before:from-[#fbd38d2c] before:to-transparent before:via-transparent before:from-[1%] before:to-[80%] ${
          colorMode === 'dark'
            ? 'bg-[#ffffff05] before:from-orange'
            : 'bg-[#00000010] before:from-purple'
        }`}
      >
        <Center w="100%">
          <ImgComparisonSlider
            value={69}
            style={{
              outline: 'none',
              transition: 'box-shadow 0.3s ease',
              borderRadius: '6px',
              backgroundColor: 'black'
            }}
          >
            <Image slot="first" src="/images/posts/website_disolve_after.png" />
            <Image
              slot="second"
              src="/images/posts/website_disolve_before.png"
            />
          </ImgComparisonSlider>
        </Center>
        <Box w={{ base: '100%', md: '45%' }}>
          <Text
            mb={2}
            mt={{ base: 4, md: '0' }}
            fontSize="lg"
            color={colorMode === 'dark' ? '#FBD38D' : '#8059D5'}
          >
            Light dispersion
          </Text>
          <Text fontSize="sm">
            In my latest, I delved into the mesmerizing world of light
            dispersion. Using Blender's versatile tools, I crafted a visually
            captivating scene that showcases the intricate beauty of light as it
            bends and scatters through various mediums.
          </Text>
        </Box>
      </div>

      <div
        className={`relative overflow-hidden p-6 rounded-lg mt-10 md:flex gap-6 flex-row-reverse before:hover:opacity-100 before:transition-all before:duration-300 before:opacity-0 before:absolute before:pointer-events-none before:-z-10 before:left-0 before:bottom-0 before:w-1/2 before:h-full before:bg-gradient-to-tr before:from-[#fbd38d2c] before:to-transparent before:via-transparent before:from-[1%] before:to-[80%] ${
          colorMode === 'dark'
            ? 'bg-[#ffffff05] before:from-orange'
            : 'bg-[#00000010] before:from-purple'
        }`}
      >
        <Center w="100%">
          <ImgComparisonSlider
            value={57}
            style={{
              outline: 'none',
              transition: 'box-shadow 0.3s ease',
              borderRadius: '6px',
              backgroundColor: 'black'
            }}
          >
            <Image
              slot="first"
              src="/images/posts/website_isometric_room_after.png"
            />
            <Image
              slot="second"
              src="/images/posts/website_isometric_room_before.png"
            />
          </ImgComparisonSlider>
        </Center>
        <Box w={{ base: '100%', md: '45%' }}>
          <Text
            mb={2}
            mt={{ base: 4, md: '0' }}
            fontSize="lg"
            color={colorMode === 'dark' ? '#FBD38D' : '#8059D5'}
            zIndex={10}
          >
            Isometric 3D room
          </Text>
          <Text fontSize="sm" zIndex={10}>
            I tried my hand at creating an isometric 3D room. It was a fun
            adventure! I built a funky room filled with neat stuff. From funky
            furniture to walls, I crafted every detail with care. The isometric
            view adds a cool vibe, making everything pop.
          </Text>
        </Box>
      </div>

      <Container align="center" mt={10}>
        <Stack
          direction="row"
          mb={200}
          mt={10}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Text fontSize="xl"> More will be comming </Text>
          <Badge colorScheme="cyan" fontSize="xl">
            very
          </Badge>
          <Badge colorScheme="purple" fontSize="xl">
            very
          </Badge>
          <Text fontSize="xl"> soon. </Text>
        </Stack>
      </Container>
    </Layout>
  )
}

export default Posts
export { getServerSideProps } from '../components/chakra'
