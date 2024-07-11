import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from './DrawerMenu';
import { Link } from 'react-router-dom';
import logoks from '../assets/stkoino.png';

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
          {/* <DrawerMenu /> */}
          <Typography  variant="h6" component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box
            pt={1}
              component="img"
              sx={{
                height: 55,
                width: 150,
                
              }}
              alt="The house from the offer."
              src={logoks}
            />
            </Link>
          </Typography>
          <DrawerMenu />
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;
