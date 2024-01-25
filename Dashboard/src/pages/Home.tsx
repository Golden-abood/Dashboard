import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Heading, SimpleGrid , Text ,Divider, Avatar } from "@chakra-ui/react";
// import { useLoaderData } from "react-router-dom";
import {useState , useEffect} from "react"
 
export default function Home() {
  // const tasks = useLoaderData();
  const [tasks , setTasks] = useState(null);

  useEffect(()=> {
    fetch("http://localhost:3000/tasks")
      .then(res => {
        return res.json();
      }).then(data => {
        setTasks(data);        
      })
  }, [])

  return (
    <SimpleGrid mt={'40px'} p="20px" spacing={10} minChildWidth="250px">
         {tasks && tasks.map((task) => 
          <Card key={task.id} bg={"white"} borderTop={"8px"} borderColor={"purple.400"}>
            <CardHeader>
              <Flex gap={5}>
                <Box w={'50px'} h={'50px'}>
                  <Avatar src={task.img} />
                </Box>
                <Box>
                  <Heading as={"h3"} size={"sm"}>{task.title}</Heading>
                  <Text> {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color={"gray.500"}>
              <Text> {task.description}</Text>
            </CardBody>
  
            <Divider borderColor={"gray.200"}></Divider>
            <CardFooter>
              <HStack>
                <Button variant={'ghost'} leftIcon={<ViewIcon />}>Watch</Button>
                <Button variant={'ghost'} leftIcon={<EditIcon />}>Commnet</Button>
              </HStack>
            </CardFooter>
          </Card>
         )}

    </SimpleGrid>
 
 )
}

/*
export const tasksLoader = async()=> {
  const res = await fetch(""); 
  return res.json();
}
*/