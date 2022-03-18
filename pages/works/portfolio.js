import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Portfolio website">
    <Container>
      <Title>
        Portfolio website <Badge>2021</Badge>
      </Title>
      <P>
        My own CV, in form of a web page. It&apos;s  a little bit outdated, but it has some cool effects like Parallax and other animations.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://savilencu-old.netlify.app/">
            https://savilencu-old.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Adaptation</Meta>
          <span>Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, JavaScript( TweenMax, SCrollMagic) </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage src="/images/works/portfolio.png" alt="image portfolio" />
      <WorkImage src="/images/works/portfolio1.png" alt="image portfolio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
