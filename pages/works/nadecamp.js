import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>
        NadeCamp <Badge>2022-</Badge>
      </Title>
      <P>
        The purpose of this website is to help everyone interested in{' '}
        <Badge colorScheme="orange" display="initial">
          CS:GO
        </Badge>{' '}
        to get better results by improving their grenades knowledge for each map
        of the official map pool.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://nadecamp.netlify.app/">
            https://nadecamp.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Adaptation</Meta>
          <span>Desktop / Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, Bootstrap 5</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/nade1.png" alt="amembo" />
        <WorkImage src="/images/works/nade2.png" alt="amembo" />
      </SimpleGrid>
      <WorkImage src="/images/works/nade3.png" alt="amembo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
