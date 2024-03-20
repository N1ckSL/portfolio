import * as React from 'react'
import {
  Badge,
  Box,
  Center,
  Container,
  Flex,
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
          The first time i oppened the app i understood that flying a plane
          might be easier than learning the basics of Blender. However, as I
          dove into learning it, I found myself on a rewarding journey of growth
          and creativity. Each step forward brought a sense of accomplishment,
          and now, tackling more complex projects feels like a thrilling
          adventure.
        </Box>
      </Center>

      <Box
        p={4}
        bgColor={colorMode === 'dark' ? '#ffffff05' : '#00000010'}
        rounded={6}
        mt={4}
      >
        <Flex gap={6}>
          <Center w="100%">
            <ImgComparisonSlider
              style={{
                outline: 'none',
                transition: 'box-shadow 0.3s ease',
                borderRadius: '6px',
                backgroundColor: 'black'
              }}
              onFocus={event => {
                event.target.style.boxShadow =
                  colorMode === 'dark'
                    ? '0px 0px 15px -3px #FBD38D'
                    : '0px 0px 15px -3px #8059D5'
              }}
              onBlur={event => {
                event.target.style.boxShadow = 'none'
              }}
            >
              <img
                slot="first"
                src="https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                slot="second"
                src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </ImgComparisonSlider>
          </Center>
          <Box w="45%">
            <Text
              mb={2}
              fontSize="lg"
              color={colorMode === 'dark' ? '#FBD38D' : '#8059D5'}
            >
              Light dispersion
            </Text>
            <Text fontSize="sm">
              In my latest, I delved into the mesmerizing world of light
              dispersion. Using Blender's versatile tools, I crafted a visually
              captivating scene that showcases the intricate beauty of light as
              it bends and scatters through various mediums.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box
        p={4}
        bgColor={colorMode === 'dark' ? '#ffffff05' : '#00000010'}
        rounded={6}
        mt={8}
      >
        <Flex gap={6} flexDir="row-reverse">
          <Center w="100%">
            <ImgComparisonSlider
              style={{
                outline: 'none',
                transition: 'box-shadow 0.3s ease',
                borderRadius: '6px',
                backgroundColor: 'black'
              }}
              onFocus={event => {
                event.target.style.boxShadow =
                  colorMode === 'dark'
                    ? '0px 0px 15px -3px #FBD38D'
                    : '0px 0px 15px -3px #8059D5'
              }}
              onBlur={event => {
                event.target.style.boxShadow = 'none'
              }}
            >
              <img
                slot="first"
                src="https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                slot="second"
                src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </ImgComparisonSlider>
          </Center>
          <Box w="45%">
            <Text
              mb={2}
              fontSize="lg"
              color={colorMode === 'dark' ? '#FBD38D' : '#8059D5'}
            >
              Isometric 3D room
            </Text>
            <Text fontSize="sm">
              I tried my hand at creating an isometric 3D room. It was a fun
              adventure! I built a funky room filled with neat stuff. From funky
              furniture to walls, I crafted every detail with care. The
              isometric view adds a cool vibe, making everything pop.
            </Text>
          </Box>
        </Flex>
      </Box>

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
