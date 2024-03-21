import {
  Container,
  Badge,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="MERN Project">
    <Container mb={10}>
      <Title>
        MERN Project <Badge>2021</Badge>
      </Title>
      <P>
        Simulates school processes within a web platform, for students,
        teachers, secretaries, and simple guests:
        <UnorderedList>
          <ListItem>Role based information (grades for students, relationships for secretaries, users for admin, etc.)</ListItem>
          <ListItem>Marking students</ListItem>
          <ListItem>Real time vizualization of grades </ListItem>
          <ListItem>
            Assigned subjects, subject assigned to teachers, relationships
            between roles.
          </ListItem>
        </UnorderedList>
      </P>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Video</Center>
      </Heading>

      <iframe
        width="100%"
        height="325"
        src="https://www.youtube.com/embed/yZEHsOoJyGg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true"
        ></iframe>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
