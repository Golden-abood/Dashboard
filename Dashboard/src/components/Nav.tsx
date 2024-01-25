import { Avatar, Button, AvatarBadge, Flex , Text , Heading, Spacer, HStack, useToast } from "@chakra-ui/react"
export default function Nav() {
  const toast = useToast();

  const handleTast = () => {
    toast({
      title : "Logged Out",
      description : "succesfully Logged out",
      duration : 3000,
      position : "top",
      status : "success",
      isClosable : true
    })
  }
  return (
    <Flex as='nav' alignItems="center" p="10px" width="100%">
        <Heading as="h1">Golden Tasks</Heading>
        <Spacer/>

        <HStack spacing="20px">
          <Avatar name="mario" src="/img/mario.png">
            <AvatarBadge width="1.3em" bg="teal.500">
              <Text fontSize="xs" color="white">3</Text>
            </AvatarBadge>
          </Avatar>
            <Text>abood@golden.za</Text>
            <Button colorScheme="purple" onClick={()=> handleTast()}> Logout </Button>
        </HStack>
    </Flex>
  )
}
