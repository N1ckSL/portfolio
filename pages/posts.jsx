import * as React from 'react'
import {
  Badge,
  Box,
  Center,
  Container,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import PostCard from '../components/post-card'

function Posts() {
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
      <div id="cards" className="flex flex-col items-center gap-4">
        <PostCard
          title="Light dispersion"
          firstImage="/images/posts/website_disolve_after.png"
          secondImage="/images/posts/website_disolve_before.png"
        >
          In my latest, I delved into the mesmerizing world of light dispersion.
          Using Blender's versatile tools, I crafted a visually captivating
          scene that showcases the intricate beauty of light as it bends and
          scatters through various mediums.
        </PostCard>

        <PostCard
          direction="reverse"
          imageSliderValue={58}
          title="Isometric 3D room"
          firstImage="/images/posts/website_isometric_room_after.png"
          secondImage="/images/posts/website_isometric_room_before.png"
        >
          I tried my hand at creating an isometric 3D room. It was a fun
          adventure! I built a funky room filled with neat stuff. From funky
          furniture to walls, I crafted every detail with care. The isometric
          view adds a cool vibe, making everything pop.
        </PostCard>
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
