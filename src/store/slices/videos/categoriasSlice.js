import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';

// Función para obtener documentos de una colección con condiciones
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

// Thunk para obtener las categorías
export const fetchCategoriasAsync = createAsyncThunk('videos/fetchCategorias', async () => {
  const categorias = await fetchCollection('categorias');
  return categorias;
});

// Estado inicial
const initialState = {
  value: [],
  programa: null,
  temporada: null,
  capitulo: null,
  status: 'idle',
  error: null
};

// Slice para manejar las categorías
export const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriasAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriasAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchCategoriasAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Exportar el reducer del slice
export default categoriasSlice.reducer;
