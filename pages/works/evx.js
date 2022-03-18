import {
  Box,
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
  <Layout title="Travel project">
    <Container>
      <Title>
        Treavel agency website <Badge>2021</Badge>
      </Title>
      <P>
        Landing page for a travel agency, with creative design and multiple
        unusual elements and implementation, balancing between discreet and
        colorsplash design.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://evonomix.netlify.app/">
            https://evonomix.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Adaptation</Meta>
          <span>Desktop / Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, Bootstrap 4, JavaScript, JQuery</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage src="/images/works/evx1.png" alt="image travel" />
      <WorkImage src="/images/works/evx2.png" alt="image travel" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
