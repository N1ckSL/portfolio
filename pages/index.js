import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Tooltip,
  Center,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoSteam
} from 'react-icons/io5'
import thumbMogo from '../public/images/works/mogo.png'
import thumbChess from '../public/images/works/thumbChess.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const getMyAge = () => {
  const startDate = new Date('1999-08-12')
  const currentDate = new Date()
  const yearDiff = currentDate.getFullYear() - startDate.getFullYear()
  const monthDiff = currentDate.getMonth() - startDate.getMonth()
  const dayDiff = currentDate.getDate() - startDate.getDate()

  let years = yearDiff

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years--
  }

  return years
}

const Home = () => (
  <Layout>
    <Container maxW="container.lg">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        ✨ Welcome to my digital playground ✨
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Savilencu Nicolae
          </Heading>
          <p>
            Digital narrator ( <Badge colorScheme="red"> Student</Badge> /{' '}
            <Badge colorScheme="purple"> Developer</Badge> /{' '}
            <Badge colorScheme="cyan"> Life of a party </Badge> )
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I am <span style={{ color: 'red' }}> {getMyAge()} </span>
          /💯 years old. I was born in Republic of Moldova. In 2017 I started my
          road to getting involved in dev. My first steps were creating basic
          static web pages in notebook and then changing it&apos;s extension to{' '}
          <em style={{ color: '#81E6D9' }}> .html </em>. Although those were
          very dorky, I felt empowered by the fact that I could do something by
          myself and see the results on the screen. It was something I really
          found myself passionate about and I started getting deeper into
          investigating.
          <br />
          <br />
          Most exciting thing for me is looking back to where I was at the
          begining and comparing my achievements, successes, and failures. This
          gives me motivation to continuously evolve. Looking back to where I
          started - it&apos;s a long road, which I do not regreting taking.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection mb={4}>
          <BioYear>
            <span style={{ color: '#81E6D9' }}> 2018 - 2021 </span>
          </BioYear>
          <br />
          Bachelor&apos;s Degree at Ovidius University from Constanța, România.
        </BioSection>
        <BioSection mb={4}>
          <BioYear>
            <span style={{ color: '#81E6D9' }}> 2021 </span> to{' '}
            <span style={{ color: '#81E6D9' }}> Present </span>{' '}
          </BioYear>
          <br />
          Master&apos;s Degree at West University of Timișoara, România.
        </BioSection>
        <BioSection mb={4}>
          <BioYear>
            October <span style={{ color: '#81E6D9' }}> 2021 </span> to{' '}
            <span style={{ color: '#81E6D9' }}> June 2022 </span>{' '}
          </BioYear>
          <br />
          Working at{' '}
          <Link href="https://www.evonomix.com/" target="_blank">
            Evonomix
          </Link>
          .
        </BioSection>
        <BioSection mb={4}>
          <BioYear>
            July <span style={{ color: '#81E6D9' }}> 2022 </span> to{' '}
            <span style={{ color: '#81E6D9' }}> Present </span>{' '}
          </BioYear>
          <br />
          Working at{' '}
          <Link href="https://www.enovatika.com/" target="_blank">
            Enovatika
          </Link>
          .
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What I 💜
        </Heading>
        <Paragraph>
          Since I was a kid I got my hand in many fields: football, basketball,
          table tennis, boxing, dancing. All of these helped me gather a lot of
          general culture, and form my vision upon everything around me.
          Recently I started playing volleyball, and guitar lessons.
          <br />
          <br />A big passion of mine are computer games. Despite others
          opinions, for me - video games are a way to relax after a long day, or
          it&apos;s an alternative way to keep in touch with your friends that
          are far away.
          <br />
          <br />
          Here are some of my achievements:
          <br />
        </Paragraph>
        <List>
          <ListItem>
            <Badge colorScheme="orange" display="initial">
              CS:GO
            </Badge>{' '}
            Quarter finalist at Moldcell Cup - 2020
          </ListItem>
          <ListItem>
            <Badge colorScheme="orange" display="initial">
              CS:GO
            </Badge>
            <Link
              href="https://www.faceit.com/en/players/NiXL1337"
              target="_blank"
            >
              {' '}
              Top 300
            </Link>{' '}
            players from region <em> (Republic of Moldova)</em> - 2021
          </ListItem>
          <ListItem>
            <Badge colorScheme="orange" display="initial">
              CS:GO
            </Badge>{' '}
            IGL and captain of team{' '}
            <span style={{ color: '#D657A5' }}>&quot;CHGO&quot;</span>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>

        <List mb={3} style={{ overflowY: 'auto', padding: '10px 0' }}>
          <Center height="50px">
            <Box>
              <ListItem>
                <Link href="https://github.com/N1ckSL" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoGithub />}
                  >
                    GitHub
                  </Button>
                </Link>
              </ListItem>
            </Box>

            <Box>
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/nicolae-savilencu-7959861b6/"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoLinkedin />}
                  >
                    LinkedIn
                  </Button>
                </Link>
              </ListItem>
            </Box>

            <Box>
              <ListItem>
                <Link
                  href="https://www.instagram.com/onfire_nick/"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoInstagram />}
                  >
                    Instagram
                  </Button>
                </Link>
              </ListItem>
            </Box>

            <ListItem>
              <Link
                href="https://steamcommunity.com/id/060034706/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoSteam />}
                >
                  Steam
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Tooltip
                label="NiXL#3224"
                aria-label="A tooltip"
                variant="ghost"
                colorScheme="teal"
                closeOnClick={false}
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoDiscord />}
                >
                  Discord
                </Button>
              </Tooltip>
            </ListItem>
          </Center>
        </List>

        <SimpleGrid my={5} columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://react-chess-delta.vercel.app/"
            title="Good old Chess game, but build by me"
            thumbnail={thumbChess}
          >
            Created with <Badge colorScheme="blue"> React</Badge>
          </GridItem>

          <GridItem
            href="https://mogogo.netlify.com/"
            title="Mogo"
            thumbnail={thumbMogo}
            style={{ minHeight: '200px' }}
          >
            A modern <Badge colorScheme="orange"> landing page</Badge>
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={10}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
