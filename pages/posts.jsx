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
          title="American style building"
          imageSliderValue={42.5}
          firstImage="/images/posts/website_building_after.png"
          secondImage="/images/posts/website_building_before.png"
        >
          This is my most complex project so far. I recreated a building from
          the 90s. It has a lot of small details which took way longer that I
          expected. I'm happy with the result, but I know it can be improved, so
          perhaps in the future I'll come back to it and make it even better.
        </PostCard>

        <PostCard
          direction="reverse"
          title="Light dispersion"
          firstImage="/images/posts/website_disolve_after.png"
          secondImage="/images/posts/website_disolve_before.png"
        >
          I delved into the mesmerizing world of light dispersion. Using
          Blender's versatile tools, I crafted a visually captivating scene that
          showcases the intricate beauty of light as it bends and scatters
          through various mediums.
        </PostCard>

        <PostCard
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
          <div className="flex md:flex-row flex-col items-center gap-2">
            <Text fontSize="xl" flexWrap>
              {' '}
              More will be comming{' '}
            </Text>
            <div className="flex items-center gap-2">
              <Badge colorScheme="cyan" fontSize="xl">
                very
              </Badge>
              <Badge colorScheme="purple" fontSize="xl">
                very
              </Badge>
            </div>
            <Text fontSize="xl"> soon. </Text>
          </div>
        </Stack>
      </Container>
    </Layout>
  )
}

export default Posts
export { getServerSideProps } from '../components/chakra'
