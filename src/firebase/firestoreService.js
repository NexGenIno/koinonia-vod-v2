// firestoreService.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const fetchCollection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const dataList = [];
  querySnapshot.forEach((doc) => {
    dataList.push({ id: doc.id, ...doc.data() });
  });
  return dataList;
};

export const fetchAllData = async () => {
  const categorias = await fetchCollection('categorias');
  const contenidos = await fetchCollection('contenidos');
  const temporadas = await fetchCollection('temporadas');
  const capitulos = await fetchCollection('capitulos');

  // Combinar datos en la estructura requerida
  const data = categorias.map(categoria => {
    return {
      ...categoria,
      lista: contenidos.filter(contenido => contenido.categoriaId === categoria.id).map(contenido => {
        return {
          ...contenido,
          temporadas: temporadas.filter(temporada => temporada.contenidoId === contenido.id).map(temporada => {
            return {
              ...temporada,
              capitulos: capitulos.filter(capitulo => capitulo.temporadaId === temporada.id)
            };
          })
        };
      })
    };
  });

  return data;
};

