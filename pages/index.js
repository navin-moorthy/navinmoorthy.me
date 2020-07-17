import { Center, Heading, Text, Flex } from "@chakra-ui/layout"

export default function Home() {
  return (
    <Center flexDir="column" minH="100vh">
      <Flex
        as="main"
        flexDir="column"
        maxW="48rem"
        marginX={["1rem", "3rem", "5rem"]}
      >
        <Heading as="h1" fontSize={["5xl", "6xl"]} mb={4}>
          Hello,
        </Heading>
        <Heading as="h2" fontSize={["5xl", "6xl"]} mb={4}>
          I am Navin
        </Heading>

        <Text fontSize={["2xl", "3xl"]}>
          Teaching myself UI design and development while working as UI
          Developer.
        </Text>
      </Flex>
    </Center>
  )
}
