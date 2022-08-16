import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {Menu} from "@mui/icons-material";

export default function LeftSideDrawer(
  {drawerOpen, toggleLeftSideDrawer, setShowImages, setShowInfoModal}:
    {drawerOpen: any, toggleLeftSideDrawer: any, setShowImages: any, setShowInfoModal: any}) {

  return (
    <Drawer
      open={drawerOpen}
      onClose={(event:any) => {toggleLeftSideDrawer(event)}}
    >
      <Box
        component="div"
        sx={{ width: 250 }}
        role="presentation"
        onClick={(event: any) => {toggleLeftSideDrawer(event)}}
        onKeyDown={(event: any) => {toggleLeftSideDrawer(event)}}
      >

        <List>
          {/*{['Photos', 'Info', 'VR', 'CLOSE BUTTON', 'BOOK THIS ROOM'].map((text, index) => (*/}

          <Link to="/" className="drawer-link">
            <ListItem key={'nav'} disablePadding>
              <Typography className={`main-title main-title-navbar`} variant="h6" component="div" sx={{ flexGrow: 1 }}
                          onClick={(event:any) => {toggleLeftSideDrawer(event)}}>
                {process.env.REACT_APP_NAV_TITLE}
              </Typography>
            </ListItem>
          </Link>
        </List>

        <Divider/>

        <List>
          {/*{['Photos', 'Info', 'VR', 'CLOSE BUTTON', 'BOOK THIS ROOM'].map((text, index) => (*/}

          <Link to="/" className="drawer-link">
            <ListItem key={'home'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/auditorium" className="drawer-link">
            <ListItem key={'auditorium'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'The Auditorium'} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/meeting-room" className="drawer-link">
            <ListItem key={'meeting-room'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'The Meeting Room'} />
              </ListItemButton>
            </ListItem>
          </Link>

        </List>

        <Divider />

        <List>
          <ListItem key={'spaceone'} disablePadding onClick={() => setShowInfoModal(true)}>
            <ListItemButton>
              <ListItemText primary={'Info'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'home'} disablePadding onClick={() => setShowImages(true)}>
            <ListItemButton>
              <ListItemText primary={'Photos'} />
            </ListItemButton>
          </ListItem>
        </List>

        <div className={`buttons-container buttons-container--left`}>
          <Menu className="pointer" style={{ color: "black", margin: "0 4px" }} onClick={(event) => {toggleLeftSideDrawer(event)}}/>
        </div>

      </Box>
    </Drawer>
  )
}
