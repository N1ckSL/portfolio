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
  <Layout title="Mogo">
    <Container>
      <Title>
        Mogo <Badge>2021</Badge>
      </Title>
      <P>
      it&apos;s a one page website template, converted from <Badge display="initial" colorScheme="blue">PSD</Badge> to <Badge display="initial" colorScheme="red">HTML </Badge>. <br />
      </P>
      Its best suitable for agencies and featured by clean and modern design. It includes many useful components like milestones, accordions, portfolio thumbnails, testimonial carousels and other widgets.
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mogogo.netlify.com/">
            https://mogogo.netlify.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Adaptation</Meta>
          <span>Desktop / Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, JavaScript, JQuery</span>
        </ListItem>
      </List>

      <SimpleGrid columns={[1, 1, 2]} gap={4}>
        <GridItem grid={6}>
          <AspectRatio mb={4} ratio={4 / 3}>
            <WorkImage src="/images/works/mogo1.png" alt="mogo img" />
          </AspectRatio>
          <AspectRatio mb={4} ratio={4 / 3}>
            <WorkImage src="/images/works/mogo2.png" alt="mogo img" />
          </AspectRatio>
        </GridItem>

        <GridItem>
          <AspectRatio mb={4} ratio={4 / 3}>
            <WorkImage src="/images/works/mogo3.png" alt="mogo img" />
          </AspectRatio>
          <AspectRatio mb={4} ratio={4 / 3}>
            <WorkImage src="/images/works/mogo4.png" alt="mogo img" />
          </AspectRatio>
        </GridItem>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
