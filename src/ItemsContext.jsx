import React, { useReducer, createContext, useContext, useEffect } from 'react';

// Definir el estado inicial
const initialState = [];

// Definir el reducer
const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }
};

// Crear el contexto
const ItemsContext = createContext();

// Crear el proveedor del contexto
export const ItemsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(itemsReducer, initialState);

    useEffect(() => {
        // Simular la llamada a la API
        const fetchData = async () => {
            const data = [
                {
                    id:1,
                    nombre_lista: "Programas",
                    lista:[
                        {
                            id:1,
                            nombre: "Hombre Radical",
                            portada: "https://cck.mx/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-13-at-20.03.07.jpeg",
                            temporadas: [
                                {
                                    id:1,
                                    nombre: "Temporada 1",
                                    capitulos:[

                                        {
                                            id:1,
                                            title: `Hombre Radical Intro`,
                                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore repellat deserunt tempora incidunt sapiente similique debitis sit molestiae aliquam.',
                                            image: 'https://via.placeholder.com/300',
                                            url_video: 'https://cck.mx/wp-content/uploads/2024/06/Segmento-1-parte-1-.mp4'
                                        },
                                        {
                                            id:2,
                                            title: `Hombre Radical Ep. 1`,
                                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore repellat deserunt tempora incidunt sapiente similique debitis sit molestiae aliquam.',
                                            image: 'https://via.placeholder.com/300',
                                            url_video: 'https://cck.mx/wp-content/uploads/2024/06/Segmento%201%20part%202%20.mp4'
                                        }

                                    ]
                                }
                            ]
                        }
                    ]
                }
                
            ];
            // Simular un retraso en la respuesta de la API
            setTimeout(() => {
                dispatch({ type: 'SET_ITEMS', payload: data });
            }, 1);
        };

        fetchData();
    }, []);

    return (
        <ItemsContext.Provider value={{ state }}>
            {children}
        </ItemsContext.Provider>
    );
};

// Crear un hook para usar el contexto
export const useItems = () => {
    const context = useContext(ItemsContext);
    if (!context) {
        throw new Error('useItems debe ser usado dentro de un ItemsProvider');
    }
    return context;
};
