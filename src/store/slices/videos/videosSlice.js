// videosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';

const fetchCollection = async (collectionName, conditions = []) => {
  let q = collection(db, collectionName);
  if (conditions.length > 0) {
    conditions.forEach(cond => {
      q = query(q, where(cond.field, cond.op, cond.value));
    });
  }
  const querySnapshot = await getDocs(q);
  const dataList = [];
  querySnapshot.forEach((doc) => {
    dataList.push({ id: doc.id, ...doc.data() });
  });
  return dataList;
};

export const fetchVideosAsync = createAsyncThunk('videos/fetchVideos', async () => {
  const categorias = await fetchCollection('categorias');
  const contenidos = await fetchCollection('contenidos');
  const temporadas = await fetchCollection('temporadas');
  const capitulos = await fetchCollection('capitulos');

  const data = categorias.map(categoria => ({
    ...categoria,
    lista: contenidos.filter(contenido => contenido.categoriaId === categoria.id).map(contenido => ({
      ...contenido,
      temporadas: temporadas.filter(temporada => temporada.contenidoId === contenido.id).map(temporada => ({
        ...temporada,
        capitulos: capitulos.filter(capitulo => capitulo.temporadaId === temporada.id)
      }))
    }))
  }));

  return data;
});

export const fetchProgramaAsync = createAsyncThunk('videos/fetchPrograma', async (programaId) => {
  const contenidos = await fetchCollection('contenidos', [{ field: 'id', op: '==', value: programaId }]);
  const temporadas = await fetchCollection('temporadas', [{ field: 'contenidoId', op: '==', value: programaId }]);
  const capitulos = await fetchCollection('capitulos');

  const programa = contenidos[0];
  programa.temporadas = temporadas.map(temporada => ({
    ...temporada,
    capitulos: capitulos.filter(capitulo => capitulo.temporadaId === temporada.id)
  }));

  return programa;
});

export const fetchTemporadaAsync = createAsyncThunk('videos/fetchTemporada', async (temporadaId) => {
  const temporadas = await fetchCollection('temporadas', [{ field: 'id', op: '==', value: temporadaId }]);
  const capitulos = await fetchCollection('capitulos', [{ field: 'temporadaId', op: '==', value: temporadaId }]);
  
  const temporada = temporadas[0];
  temporada.capitulos = capitulos;

  return temporada;
});

export const fetchCapituloAsync = createAsyncThunk('videos/fetchCapitulo', async (capituloId) => {
  const capitulos = await fetchCollection('capitulos', [{ field: 'id', op: '==', value: capituloId }]);
  return capitulos[0];
});

const initialState = {
  value: [],
  programa: null,
  temporada: null,
  capitulo: null,
  status: 'idle',
  error: null
};

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVideosAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchVideosAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProgramaAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProgramaAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.programa = action.payload;
      })
      .addCase(fetchProgramaAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTemporadaAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemporadaAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.temporada = action.payload;
      })
      .addCase(fetchTemporadaAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCapituloAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCapituloAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.capitulo = action.payload;
      })
      .addCase(fetchCapituloAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// export const { extraReducers } = videosSlice.actions

export default videosSlice.reducer;
