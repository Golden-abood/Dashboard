import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <List color={'white'} spacing={'20px'} fontSize={'1.2em'}>
        <ListItem>
            <NavLink to='/' className='flex items-center'>
                <ListIcon as={CalendarIcon} />
                    <span>Dashboard</span>
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to='/create' className='flex items-center'>
                <ListIcon as={EditIcon} />
                <span>New Task</span>
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to='/profile'className='flex items-center'>
                <ListIcon as={AtSignIcon} />
                <span>Profile</span>
            </NavLink>
        </ListItem>
    </List>
  )
}
