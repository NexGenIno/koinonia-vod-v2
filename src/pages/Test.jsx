import React from 'react'

import { VideoPlayer } from '../components/VideoPlayer'
import { Box, Typography, useTheme  } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Test = () => {
  const location = useLocation();
  const { videoData } = location.state || { videoData: {} };

    const { id } = useParams();
    const theme = useTheme();
    
  return (
    <>
    <Box display="flex"
      flexDirection="column"
      alignItems="center">
        <Box       
        sx={{
            width: '100%',
            [theme.breakpoints.up('md')]: {
            width: '750px',
            },
        }}>
        
        <VideoPlayer url={videoData.url_video}/>
        
        <Box mt={2} p={1}>
        <Typography variant='h4'>{videoData.title}</Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit nostrum ratione iure vel reprehenderit quis aperiam, non distinctio unde asperiores praesentium sint commodi nobis dolorum corrupti aspernatur cum quos?</Typography>
        </Box>
        
        </Box>

    </Box>
        
    </>
    
  )
}

export default  Test;
