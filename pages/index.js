import { Center, Heading, Text, Code, Link } from "@chakra-ui/layout"
import { Logo } from "../components/logo"

export default function Home() {
  return (
    <Center flexDir="column" minH="100vh" py={8}>
      <Center
        as="main"
        flexDir="column"
        flex="1"
        paddingX={["1rem", "3rem", "5rem"]}
      >
        <Logo boxSize={24} />
        <Heading as="h1" size="2xl" mb={4} textAlign="center">
          Next.js with Chakra UI
        </Heading>
        <Heading as="h2" size="lg" mb={4} textAlign="center">
          Starter Template
        </Heading>

        <Text fontSize="2xl" textAlign="center">
          Get started by editing{" "}
          <Code fontSize="xl" fontWeight="semibold" colorScheme="orange">
            pages/index.js
          </Code>
        </Text>

        <Center
          flexDirection={["column", null, "row"]}
          flexWrap="wrap"
          maxW="800px"
          mt={12}
        >
          <Card title="Documentation &rarr;" link="https://nextjs.org/docs">
            Find in-depth information about Next.js features and API.
          </Card>
          <Card title="Learn &rarr;" link="https://nextjs.org/learn">
            Learn about Next.js in an interactive course with quizzes!
          </Card>
          <Card
            title="Examples &rarr;"
            link="https://github.com/vercel/next.js/tree/master/examples"
          >
            Discover and deploy boilerplate example Next.js projects.
          </Card>
          <Card
            title="Deploy &rarr;"
            link="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            Instantly deploy your Next.js site to a public URL with Vercel.
          </Card>
        </Center>
      </Center>
    </Center>
  )
}

function Card(props) {
  const { title, link, children, ...rest } = props

  return (
    <Link
      href={link}
      flex="1 1 45%"
      m={4}
      p={6}
      textDecoration="none"
      borderWidth="1px"
      borderRadius="10px"
      transition="color 0.15s ease, border-color 0.15s ease"
      _hover={{
        textDecor: "none",
        color: "teal.500",
        borderColor: "teal.500",
      }}
      {...rest}
    >
      <Heading as="h3" size="lg" fontWeight="normal" mb={4}>
        {`${title}`}
      </Heading>
      <Text fontSize="xl">{children}</Text>
    </Link>
  )
}
