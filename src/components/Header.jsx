import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";

import Switcher from "./Switcher";
import { Link } from "react-router-dom";

export default function Header({ toggleDrawer }) {
   return (
      <Box sx={{ flexGrow: 1  }}>
         <AppBar position="static" sx={{ p: 1.5, height:"10vh", minHeight: "72px"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
               <Toolbar variant="dense">
                  <IconButton
                     onClick={toggleDrawer}
                     edge="start"
                     color="inherit"
                     aria-label="menu"
                     sx={{ mr: 2 }}
                  >
                     <MenuIcon />
                  </IconButton>
                  <TranslateRoundedIcon />
                     <Typography
                        variant="h5"
                        sx={{ mb: 0 }}
                        gutterBottom
                        component="div"
                     >
                  <Link to="/">
                        Tarjimon
                  </Link>
                     </Typography>
               </Toolbar>
               <Switcher />
            </Box>
         </AppBar>
      </Box>
   );
}
