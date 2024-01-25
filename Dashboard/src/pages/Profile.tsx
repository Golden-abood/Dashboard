import { 
  ChatIcon, 
  CheckCircleIcon, 
  EmailIcon, 
  StarIcon, 
  WarningIcon 
} from '@chakra-ui/icons'
import { 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel, 
  List, 
  ListItem, 
  ListIcon 
} from '@chakra-ui/react'

export default function Profile() {
  return (
    <Tabs mt={'40px'} p={"20px"} colorScheme='purple' variant={'enclosed'}>
      <TabList>
        <Tab _selected={{color : 'white' , bgColor: "purple.400"}}>Acoount Info</Tab>
        <Tab _selected={{color : 'white' , bgColor: "purple.400"}}>Task History</Tab>
      </TabList>
      <TabPanels py="10px">
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>

    </Tabs>
  )
}
