// ProgramaComponent.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { fetchProgramaAsync } from '../store/slices/videos/videosSlice';

export const Programas = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const programa = useSelector((state) => state.videos.programa);
  const status = useSelector((state) => state.videos.status);
  const error = useSelector((state) => state.videos.error);

  useEffect(() => {
    dispatch(fetchProgramaAsync(parseInt(id)));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  function capitalizeWords(string) {
    return string.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  }

  return (
    <Box>
        
      {programa && <Typography variant="h4">{capitalizeWords(programa.nombre)}</Typography>}
      {programa?.temporadas.map((temporada) => (
        <Card key={temporada.id}>
          <CardActionArea component={Link} to={`/temporada/${temporada.id}`}>
            <CardContent>
              <Typography variant="h5">{capitalizeWords( temporada.nombre )}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Programas;
