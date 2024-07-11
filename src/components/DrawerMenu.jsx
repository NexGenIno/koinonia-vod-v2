import React, { useEffect } from 'react'

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
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideosAsync } from '../store/slices/videos/videosSlice';
import { Link } from 'react-router-dom';
import logo2ks from '../assets/ksicon.png';

export const DrawerMenu = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const dispatch = useDispatch();
    const videos = useSelector((state) => state.videos.value);
    const status = useSelector((state) => state.videos.status);
    const error = useSelector((state) => state.videos.error);

    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchVideosAsync());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return '';
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    function capitalizeWords(string) {
        return string.split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
      }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <Box p={1} sx={{  display: 'flex', justifyContent: 'center' }}>
        <Box
            pt={1}
              component="img"
              sx={{
                height: 60,
                width: 60,
                
              }}
              alt="ks icon"
              src={logo2ks}
            />
        </Box>
        <Divider />
        {videos.map( (item, index) => ( 
        <Box key={index} variant='div'>
        <Box p={1} sx={{  display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6">
                { capitalizeWords(item.nombre)}
            </Typography>
        </Box>
            {item.lista.map( (item2, index2) => ( 
            <List>
                <ListItem disablePadding key={index2}>
                <ListItemButton component={Link} to={`/programa/${item2.id}`}>
                <Box  sx={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Avatar src={item2.portada} />
                    <Typography variant="body1" sx={{ ml: 2 }}>
                        {capitalizeWords(item2.nombre)}
                    </Typography>
                </Box>
                </ListItemButton>

                </ListItem>
            </List>
            ))}

        </Box>
        
        ) )}
        
      
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
