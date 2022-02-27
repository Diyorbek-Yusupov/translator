import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Typography } from "@mui/material";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import { Link } from "react-router-dom";

export default function Drawer({ isDrawerOpen, toggleDrawer }) {
   return (
      <div>
         <React.Fragment key={"left"}>
            <SwipeableDrawer
               anchor={"left"}
               open={isDrawerOpen}
               onClose={toggleDrawer}
               onOpen={toggleDrawer}
            >
               <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer}
                  onKeyDown={toggleDrawer}
               >
                  <Link to="/">
                     <Typography
                        component="div"
                        sx={{
                           fontSize: "h5.fontSize",
                           m: 1,
                           color: "#5F6368",
                           py: 1.5,
                           textAlign: "center",
                        }}
                     >
                        <TranslateRoundedIcon />
                        Tarjimon
                     </Typography>
                  </Link>
                  <Divider />
                  <List>
                     {["Inbox", "Starred", "Send email", "Drafts"].map(
                        (text, index) => (
                           <ListItem button key={text}>
                              <ListItemIcon>
                                 {index % 2 === 0 ? (
                                    <InboxIcon />
                                 ) : (
                                    <MailIcon />
                                 )}
                              </ListItemIcon>
                              <ListItemText primary={text} />
                           </ListItem>
                        )
                     )}
                  </List>
                  <Divider />
                  <Typography
                     variant="overline"
                     display="block"
                     sx={{ textAlign: "center" }}
                     gutterBottom
                  >
                     version: 1.0.0
                  </Typography>
               </Box>
            </SwipeableDrawer>
         </React.Fragment>
      </div>
   );
}
