import React, { useState, useEffect } from 'react';
import { VideoPlayer } from '../components/VideoPlayer';
import { Box, Typography, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useItems } from '../ItemsContext';
import VideoPlayer2 from '../components/VideoPlayer2';

export const Test = () => {
    const { state: initialItems } = useItems(); // Obtenemos los datos iniciales del contexto
    const { id } = useParams();
    const [video, setVideo] = useState(null); // Estado local para el video

    useEffect(() => {
        // Buscamos el video correspondiente al ID
        const foundVideo = initialItems.find(item => item.id == id);
        setVideo(foundVideo); // Actualizamos el estado local con el video encontrado
    }, [initialItems, id]); // Dependencias: initialItems (datos iniciales) y id (ID de la URL)

    const theme = useTheme();
    
    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box sx={{
                    width: '100%',
                    [theme.breakpoints.up('md')]: {
                        width: '750px',
                    },
                }}>
                    <VideoPlayer2 url={video ? video.url_video : ''} titulo={video ? video.title : ''} /> {/* Verificamos si hay un video antes de renderizar el reproductor */}
                    <Box mt={2} p={1}>
                        <Typography variant='h4'>{video ? video.title : ''}</Typography> {/* Verificamos si hay un video antes de renderizar el título */}
                        <Typography variant='body1'>{video ? video.description : ''}</Typography> {/* Verificamos si hay un video antes de renderizar la descripción */}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Test;
