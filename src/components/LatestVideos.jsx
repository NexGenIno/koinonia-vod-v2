import { Box, Card, CardActionArea, CardContent, CardMedia, Typography,  useTheme} from '@mui/material';
import React, { useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { useItems, ItemsProvider } from '../ItemsContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideosAsync } from '../store/slices/videos/videosSlice';


export const LatestVideos = () => {
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
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
        {videos.map((item, index) => (
        <Box key={index}>
            <Typography variant='h4'>{item.nombre.charAt(0).toUpperCase() + item.nombre.slice(1).toLowerCase()}</Typography>
            <Box sx={{ display: 'flex', overflowX: 'auto', mt:2, pb: 2,  '&::-webkit-scrollbar': {
                        height: 6, // Cambiar el tamaño de la barra de desplazamiento
                        backgroundColor: 'transparent', // Hacer el fondo transparente
                    },
                    '&:hover::-webkit-scrollbar': {
                        height: 12, // Hacer la barra más prominente al pasar el mouse
                        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Cambiar el color de fondo
                    }, }}>
                    {item.lista.map((item2, index2) => (
                    <Card key={index2} sx={{ minWidth: 250, maxWidth: 250, mr: 2 }}>
                        <CardActionArea component={Link} to={`/programa/${item2.id}`}>
                            <CardMedia
                                component="img"
                                height="340"
                                image={item2.portada}
                                alt={`Imagen ${index2 + 1}`}
                            />
                            {/* <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore repellat deserunt tempora incidunt sapiente similique debitis sit molestiae aliquam.
                                </Typography>
                            </CardContent> */}
                        </CardActionArea>
                    </Card>

                    ))}
                
            </Box>
        </Box>
        ))}

        {/* <Box>
            <Typography variant='h4'>Hombre Radical</Typography>
            <Box sx={{ display: 'flex', overflowX: 'auto', mt:2, pb: 2,  '&::-webkit-scrollbar': {
                        height: 6, // Cambiar el tamaño de la barra de desplazamiento
                        backgroundColor: 'transparent', // Hacer el fondo transparente
                    },
                    '&:hover::-webkit-scrollbar': {
                        height: 12, // Hacer la barra más prominente al pasar el mouse
                        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Cambiar el color de fondo
                    }, }}>
                {state.map((item, index) => (
                    <Card key={index} sx={{ minWidth: 250, maxWidth: 250, mr: 2 }}>
                        <CardActionArea component={Link} to={`/video/${item.id}`}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300"
                                alt={`Imagen ${index + 1}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore repellat deserunt tempora incidunt sapiente similique debitis sit molestiae aliquam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box> 
        </Box>*/}

        {/* <Box sx={{ mt:2 }}>
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
        </Box> */}
    </>
  )
}

export default LatestVideos;
