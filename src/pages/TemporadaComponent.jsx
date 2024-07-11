// TemporadaComponent.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { fetchTemporadaAsync } from '../store/slices/videos/videosSlice';

const TemporadaComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const temporada = useSelector((state) => state.videos.temporada);
  const status = useSelector((state) => state.videos.status);
  const error = useSelector((state) => state.videos.error);

  useEffect(() => {
    dispatch(fetchTemporadaAsync(parseInt(id)));
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
    <>
    <Box>
      {temporada && <Typography variant="h4">{capitalizeWords( temporada.nombre )}</Typography>}
      {temporada?.capitulos.map((capitulo, index) => (
        <Card key={capitulo.id}>
          <CardActionArea component={Link} to={`/capitulo/${capitulo.id}`}>
            <CardContent>
              <Typography variant="h5">Capitulo - { index + 1 }</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </>
  );
};

export default TemporadaComponent;
