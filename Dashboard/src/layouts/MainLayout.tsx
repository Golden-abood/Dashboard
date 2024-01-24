import { Outlet } from "react-router-dom"
import Nav from "../components/Nav";
import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../components/SideBar";

export default function MainLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" className="bg-white h-screen">
        <GridItem as="aside" p={'40px'} colSpan={{base : 6, lg : 2 , xl:1 }} bg={"purple.400"} >
            <SideBar />
        </GridItem>
        <GridItem as={'main'} p={"40px"} colSpan={{base : 6, lg : 4 , xl:5 }}  >
            <Nav />
            <Outlet />
        </GridItem>
    </Grid>
  )
}
