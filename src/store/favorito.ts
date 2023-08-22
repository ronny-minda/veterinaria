import { create } from "zustand";

interface Favorito {
    id: string
    img: string
    nombre: string
    des: string
    percio: string
  
}

interface Store {
  favorito: Favorito[]
  cambio: (valor: []) => void
}



const initialState : Favorito[] = [
  {
    id: "1",
    img: "/img/nuProducto.jpg",
    nombre: "Prducto1",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    percio: "$0.85"
  },
]


export const useFavorito = create<Store>((set, get) => ({
  favorito: initialState,
  cambio: (valor: []): void => { 
    
  }
}));