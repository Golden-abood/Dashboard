import { Box, Button, Flex , Text , Heading, Spacer, HStack } from "@chakra-ui/react"
export default function Nav() {
  return (
    <Flex as='nav' alignItems="center" p="10px" width="100%">
        <Heading as="h1">Golden Tasks</Heading>
        <Spacer/>

        <HStack spacing="20px">
            <Box bg="gray.200" py="6px" px="10px" borderRadius={'6px'}>A</Box>
            <Text>abood@golden.za</Text>
            <Button colorScheme="purple"> Logout </Button>
        </HStack>
    </Flex>
  )
}
