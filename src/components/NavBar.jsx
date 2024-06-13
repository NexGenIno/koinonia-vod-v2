import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from './DrawerMenu';

export const NavBar = () => {
  return (
    <>
    <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <DrawerMenu />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            -KS- Koninonia Streaming
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;
