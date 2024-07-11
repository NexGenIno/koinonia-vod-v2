import React, { useState, useEffect } from 'react';
import { VideoPlayer } from '../components/VideoPlayer';
import { Box, Typography, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useItems } from '../ItemsContext';
import VideoPlayer2 from '../components/VideoPlayer2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCapituloAsync } from '../store/slices/videos/videosSlice';

export const Test = () => {
    
    const { id } = useParams();

    const theme = useTheme();
    const dispatch = useDispatch();
    const capitulo = useSelector((state) => state.videos.capitulo);
    const status = useSelector((state) => state.videos.status);
    const error = useSelector((state) => state.videos.error);

    useEffect(() => {
        dispatch(fetchCapituloAsync(parseInt(id)));
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    
    
    
    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center">

            {capitulo && (
                <Box sx={{
                    width: '100%',
                    [theme.breakpoints.up('md')]: {
                        width: '70%',
                    },
                }}>
                    <VideoPlayer2 url={capitulo.url_video} titulo={capitulo.title} /> 
                    <Box mt={2} p={1}>
                        <Typography variant='h4'>{capitulo.title}</Typography> 
                        <Typography variant='body1'>{capitulo.description}</Typography> 
                    </Box>
                </Box>
            )}
                
            </Box>
        </>
    );
};

export default Test;



