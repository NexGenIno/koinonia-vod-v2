import { Box, Card, CardActionArea, CardContent, CardMedia, Typography,  useTheme} from '@mui/material';
import React from 'react'
import { Link, useNavigate  } from 'react-router-dom';

export const LatestVideos = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    // const url_video = 'https://cck.mx/wp-content/uploads/2024/05/WhatsApp-Video-2024-05-14-at-14.00.55.mp4'

    const handleCardClick = (index) => {
        const videoData = {
          id: index + 1,
          title: `Hombre Radical Ep. ${index + 1}`,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore repellat deserunt tempora incidunt sapiente similique debitis sit molestiae aliquam.',
          image: 'https://via.placeholder.com/300',
          url_video: 'https://cck.mx/wp-content/uploads/2024/05/WhatsApp-Video-2024-05-14-at-14.00.55.mp4'
        };
    
        navigate('/video', { state: { videoData } });
      };

  return (
    <>
        <Box>
            <Typography variant='h4'>Más Recientes</Typography>
            <Box sx={{ display: 'flex', overflowX: 'auto', mt:2, pb: 2,  '&::-webkit-scrollbar': {
                        height: 6, // Cambiar el tamaño de la barra de desplazamiento
                        backgroundColor: 'transparent', // Hacer el fondo transparente
                    },
                    '&:hover::-webkit-scrollbar': {
                        height: 12, // Hacer la barra más prominente al pasar el mouse
                        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Cambiar el color de fondo
                    }, }}>
                {[...Array(10)].map((_, index) => (
                    <Card key={index} sx={{ minWidth: 250, maxWidth: 250, mr: 2 }}>
                        <CardActionArea onClick={() => handleCardClick(index)}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300"
                                alt={`Imagen ${index + 1}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Hombre Radical Ep. {index + 1}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore repellat deserunt tempora incidunt sapiente similique debitis sit molestiae aliquam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>

        <Box sx={{ mt:2 }}>
            <Typography variant='h4'>Hombre Radical</Typography>
            <Box sx={{ display: 'flex', overflowX: 'auto', mt:2, pb: 2 }}>
                {[...Array(10)].map((_, index) => (
                    <Card key={index} sx={{ minWidth: 250, maxWidth: 250, mr: 2 }}>
                        <CardActionArea onClick={() => handleCardClick(index)}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300"
                                alt={`Imagen ${index + 1}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Hombre Radical Ep. {index + 1}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore repellat deserunt tempora incidunt sapiente similique debitis sit molestiae aliquam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>
    </>
  )
}

export default LatestVideos;
