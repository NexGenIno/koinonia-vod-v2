import React from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { deepOrange } from '@mui/material/colors';

export const DrawerMenu = () => {
    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <Box p={1} sx={{  display: 'flex', justifyContent: 'center' }}>
            <h1>KS Logo</h1>
        </Box>
        <Divider />
        <Box p={1} sx={{  display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6">
                Programas
            </Typography>
        </Box>
        <List>
            <ListItem disablePadding>
            <ListItemButton>
            <Box  sx={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>HR</Avatar>
                <Typography variant="body1" sx={{ ml: 2 }}>
                    Hombre Radical
                </Typography>
            </Box>
            </ListItemButton>

            </ListItem>
        </List>
      
      <Divider />
      
    </Box>
  );
  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            
          >
            <MenuIcon />
        </IconButton>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default DrawerMenu;
