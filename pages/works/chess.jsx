import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  GridItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Chess">
    <Container>
      <Title>
        React Chess <Badge>2022</Badge>
      </Title>
      <P>
        Good old Chess game, but instead of a wooden board, I&apos;m using{' '}
        <Badge display="initial" colorScheme="blue">
          React
        </Badge>{' '}
        😉. <br />
      </P>
      It is still in progess, so don&apos;t do not be harsh with me.
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://react-chess-delta.vercel.app/">
            https://react-chess-delta.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Adaptation</Meta>
          <span>Desktop, Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, React, TypeScript</span>
        </ListItem>
      </List>
      <SimpleGrid columns={[1, 1, 2]} gap={4}>
        <GridItem grid={6}>
          <AspectRatio mb={4} ratio={4 / 3}>
            <WorkImage src="/images/works/chess.png" alt="mogo img" />
          </AspectRatio>
        </GridItem>
        <GridItem grid={6}>
          <AspectRatio mb={4} ratio={4 / 3}>
            <WorkImage src="/images/works/chess_1.png" alt="mogo img" />
          </AspectRatio>
        </GridItem>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
