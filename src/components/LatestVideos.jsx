import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

export const LatestVideos = () => {
  return (
    <>
        <Box>
            <Typography variant='h4'>Ultimos Agregados</Typography>
            <Box sx={{ display: 'flex', overflowX: 'auto', mt:2, pb: 2}}>
                {[...Array(10)].map((_, index) => (
                    <Card key={index} sx={{ minWidth: 250, maxWidth: 250, mr: 2 }}>
                        <CardActionArea>
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
                        <CardActionArea>
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
