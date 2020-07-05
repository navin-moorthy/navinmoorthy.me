import Head from "next/head";
import { Center, Heading, Text, Code, Link } from "@chakra-ui/core";

export default function Home() {
  return (
    <Center flexDir='column' minH='100vh' py={8}>
      <Head>
        <title>Next JS & Chakra UI Starter Template</title>
        <meta name='title' content='Next JS & Chakra UI Starter Template' />
        <meta name='description' content='Get started with Next JS & Chakra UI using this starter template' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://navinmoorthy.me/' />
        <meta property='og:title' content='Next JS & Chakra UI Starter Template' />
        <meta property='og:description' content='Get started with Next JS & Chakra UI using this starter template' />
        <meta
          property='og:image'
          content='https://og-image.now.sh/Starter%20Template.jpeg?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fgist.githubusercontent.com%2Fnavin-moorthy%2Fd4c5fe7f384a106ba8171eee77b45623%2Fraw%2F3e4d37340270a38367bfe94dd2f7daea2a0537a2%2Fchakra-ui-logo.svg&heights=200&heights=150'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://navinmoorthy.me/' />
        <meta property='twitter:title' content='Next JS & Chakra UI Starter Template' />
        <meta
          property='twitter:description'
          content='Get started with Next JS & Chakra UI using this starter template'
        />
        <meta
          property='twitter:image'
          content='https://og-image.now.sh/Starter%20Template.jpeg?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fgist.githubusercontent.com%2Fnavin-moorthy%2Fd4c5fe7f384a106ba8171eee77b45623%2Fraw%2F3e4d37340270a38367bfe94dd2f7daea2a0537a2%2Fchakra-ui-logo.svg&heights=200&heights=150'
        />
      </Head>

      <Center as='main' flexDir='column' flex='1' paddingX={["1rem", "3rem", "5rem"]}>
        <Heading as='h1' size='2xl' mb={4} textAlign='center'>
          Next.js with Chakra UI
        </Heading>
        <Heading as='h2' size='lg' mb={4} textAlign='center'>
          Starter Template
        </Heading>

        <Text fontSize='2xl' textAlign='center'>
          Get started by editing{" "}
          <Code fontSize='xl' fontWeight='semibold' colorScheme='orange'>
            pages/index.js
          </Code>
        </Text>

        <Center flexDirection={["column", null, "row"]} flexWrap='wrap' maxW='800px' mt={12}>
          <Card title='Documentation &rarr;' link='https://nextjs.org/docs'>
            Find in-depth information about Next.js features and API.
          </Card>
          <Card title='Learn &rarr;' link='https://nextjs.org/learn'>
            Learn about Next.js in an interactive course with quizzes!
          </Card>
          <Card title='Examples &rarr;' link='https://github.com/vercel/next.js/tree/master/examples'>
            Discover and deploy boilerplate example Next.js projects.
          </Card>
          <Card
            title='Deploy &rarr;'
            link='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          >
            Instantly deploy your Next.js site to a public URL with Vercel.
          </Card>
        </Center>
      </Center>
    </Center>
  );
}

function Card(props) {
  const { title, link, children, ...rest } = props;

  return (
    <Link
      href={link}
      flex='1 1 45%'
      m={4}
      p={6}
      textDecoration='none'
      borderWidth='1px'
      borderRadius='10px'
      transition='color 0.15s ease, border-color 0.15s ease'
      _hover={{
        textDecor: "none",
        color: "teal.500",
        borderColor: "teal.500",
      }}
      {...rest}
    >
      <Heading as='h3' size='lg' fontWeight='normal' mb={4}>
        {`${title}`}
      </Heading>
      <Text fontSize='xl'>{children}</Text>
    </Link>
  );
}
