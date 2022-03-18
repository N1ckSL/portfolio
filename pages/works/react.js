import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Social Network">
    <Container mb={10}>
      <Title>
        Social Network <Badge>2021</Badge>
      </Title>
      <P>
        SPA Social Network React project, using{' '}
        <Link href="https://social-network.samuraijs.com/docs" target="_blank">
          SamuraiJS API
        </Link>
        .{' '}
      </P>
      Implementations:
      <UnorderedList>
        <ListItem>Login page (auth/me), captcha;</ListItem>
        <ListItem>
          Users page ( with real users, using API), Follow, Unfollow functions;
        </ListItem>
        <ListItem>
          Profile page ( pages with personal information : name, photo, posts,
          general information);
        </ListItem>
        <ListItem>Design with Ant Design components.</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Git repo</Meta>
          <Link href="https://github.com/N1ckSL/Network">
            https://github.com/N1ckSL/Network <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Adaptation</Meta>
          <span>Desktop / Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux, axios, flux </span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Video</Center>
      </Heading>
      <iframe
        width="100%"
        height="325"
        src="https://www.youtube.com/embed/7OJucTAKXCE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      ></iframe>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
