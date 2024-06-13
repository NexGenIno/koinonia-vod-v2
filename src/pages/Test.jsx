import React from 'react'

import { VideoPlayer } from '../components/VideoPlayer'
import { Box, Typography, useTheme  } from '@mui/material';

export const Test = () => {

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
        
        <VideoPlayer/>
        
        <Box mt={2} p={1}>
        <Typography variant='h4'>Titulo video</Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit nostrum ratione iure vel reprehenderit quis aperiam, non distinctio unde asperiores praesentium sint commodi nobis dolorum corrupti aspernatur cum quos?</Typography>
        </Box>
        
        </Box>

    </Box>
        
    </>
    
  )
}

export default  Test;
