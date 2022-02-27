import React, { useState } from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Outlet } from "react-router-dom";

export default function App() {
    const [drawer, setDrawer] = useState(false);
    const toggleDrawer = () => {
        setDrawer((isDrawer) => !isDrawer)
    }
    return (
        <>
            <Header toggleDrawer = {toggleDrawer}/>
            <Drawer isDrawerOpen={drawer} toggleDrawer = {toggleDrawer}/>
            <Outlet/>
        </>
    );
}
