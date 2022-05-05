import {
  Container,
  Heading,
  SimpleGrid,
  Badge,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMogo from '../public/images/works/mogo.png'
import thumbNade from '../public/images/works/nade.png'
// import thumbEvx from '../public/images/works/evx.png'
import thumbReact from '../public/images/works/react.png'
import thumbMern from '../public/images/works/mock.png'
import thumbPortfolio from '../public/images/works/portfolio.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <AspectRatio ratio={4 / 3}>
            <WorkGridItem id="mogo" title="Mogo" thumbnail={thumbMogo}>
              <Badge colorScheme="green">Completed</Badge>
            </WorkGridItem>
          </AspectRatio>
        </Section>
        <Section>
          <WorkGridItem id="nadecamp" title="NadeCamp" thumbnail={thumbNade}>
            <Badge colorScheme="yellow">In progess</Badge>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="react"
            title="Social network"
            thumbnail={thumbReact}
          >
            <Badge colorScheme="green">Completed</Badge>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="mern"
            title="eSchool"
            thumbnail={thumbMern}
          >
            <Badge colorScheme="green">Completed</Badge>
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Old Works
        </Heading>

        {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="evx" title="Travel agency" thumbnail={thumbEvx}>
              <Badge colorScheme="green">Completed</Badge>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="portfolio" title="Portfolio page" thumbnail={thumbPortfolio}>
              <Badge colorScheme="red">postponed</Badge>
            </WorkGridItem>
          </Section>
        </SimpleGrid> */}

      </Container>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
