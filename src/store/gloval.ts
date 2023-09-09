import { signal } from "@preact/signals-react";


// tipos
export interface objProducto {
  id: number;
  nombre: string;
  img: string;
  cantidad: number;
  categoria: string;
  des: string;
  precio: number;
}

export const scrollBody = signal(false)

// export const PRODUCTOAPI = signal()

export const TIENDA = signal<objProducto[]>([])

export const FAVORITOS = signal<objProducto[]>([])

export const ALLPRODUCTOSAPI = signal<objProducto[]>([
  {
    id: 1,
    nombre: "Articulo Fantastico",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Alimentacion y Nutricion",
    des: "Este es un producto realmente increible para mantener una nutricion optima de tu mascota.",
    precio: 76,
  },
  {
    id: 2,
    nombre: "Articulo Fantastico de Accesorios para Perros",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Accesorios para Perros",
    des: "Este es un producto realmente increible que hara feliz a tu perro.",
    precio: 46,
  },
  {
    id: 3,
    nombre: "Articulo Fantastico de Accesorios para Gatos",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Accesorios para Gatos",
    des: "Este es un producto realmente increible para mimar a tu gato.",
    precio: 36,
  },
  {
    id: 4,
    nombre: "Articulo Fantastico de Higiene y Cuidado",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Higiene y Cuidado",
    des: "Este es un producto realmente increible para mantener a tu mascota limpia y saludable.",
    precio: 56,
  },
  {
    id: 5,
    nombre: "Articulo Fantastico de Salud y Bienestar",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Salud y Bienestar",
    des: "Este es un producto realmente increible para mejorar la salud y el bienestar de tu mascota.",
    precio: 66,
  },
  {
    id: 6,
    nombre: "Articulo Fantastico de Entrenamiento y Educacion",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Entrenamiento y Educacion",
    des: "Este es un producto realmente increible para entrenar y educar a tu mascota de manera efectiva.",
    precio: 46,
  },
  {
    id: 7,
    nombre: "Articulo Fantastico de Productos para Roedores y Pequeñas Mascotas",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Productos para Roedores y Pequeñas Mascotas",
    des: "Este es un producto realmente increible para consentir a tus roedores y pequeñas mascotas.",
    precio: 36,
  },
  {
    id: 8,
    nombre: "Articulo Fantastico de Acuariofilia y Terrario",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Acuariofilia y Terrario",
    des: "Este es un producto realmente increible para crear un ambiente ideal en tu acuario o terrario.",
    precio: 86,
  },
  {
    id: 9,
    nombre: "Articulo Fantastico de Aseo y Cuidado del Hogar",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Aseo y Cuidado del Hogar",
    des: "Este es un producto realmente increible para mantener tu hogar limpio y acogedor.",
    precio: 76,
  },
  {
    id: 10,
    nombre: "Articulo Fantastico de Alimentacion y Nutricion",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Alimentacion y Nutricion",
    des: "Este es un producto realmente increible para mantener una nutricion optima de tu mascota.",
    precio: 56,
  },
  {
    id: 11,
    nombre: "Articulo Fantastico de Accesorios para Perros",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Accesorios para Perros",
    des: "Este es un producto realmente increible que hara feliz a tu perro.",
    precio: 66,
  },
  {
    id: 12,
    nombre: "Articulo Fantastico de Accesorios para Gatos",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Accesorios para Gatos",
    des: "Este es un producto realmente increible para mimar a tu gato.",
    precio: 76,
  },
  {
    id: 13,
    nombre: "Articulo Fantastico de Higiene y Cuidado",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Higiene y Cuidado",
    des: "Este es un producto realmente increible para mantener a tu mascota limpia y saludable.",
    precio: 46,
  },
  {
    id: 14,
    nombre: "Articulo Fantastico de Salud y Bienestar",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Salud y Bienestar",
    des: "Este es un producto realmente increible para mejorar la salud y el bienestar de tu mascota.",
    precio: 66,
  },
  {
    id: 15,
    nombre: "Articulo Fantastico de Entrenamiento y Educacion",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Entrenamiento y Educacion",
    des: "Este es un producto realmente increible para entrenar y educar a tu mascota de manera efectiva.",
    precio: 56,
  },
  {
    id: 16,
    nombre: "Articulo Fantastico de Productos para Roedores y Pequeñas Mascotas",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Productos para Roedores y Pequeñas Mascotas",
    des: "Este es un producto realmente increible para consentir a tus roedores y pequeñas mascotas.",
    precio: 36,
  },
  {
    id: 17,
    nombre: "Articulo Fantastico de Acuariofilia y Terrario",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Acuariofilia y Terrario",
    des: "Este es un producto realmente increible para crear un ambiente ideal en tu acuario o terrario.",
    precio: 76,
  },
  {
    id: 18,
    nombre: "Articulo Fantastico de Aseo y Cuidado del Hogar",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Aseo y Cuidado del Hogar",
    des: "Este es un producto realmente increible para mantener tu hogar limpio y acogedor.",
    precio: 56,
  },
  {
    id: 19,
    nombre: "Articulo Fantastico de Alimentacion y Nutricion",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Alimentacion y Nutricion",
    des: "Este es un producto realmente increible para mantener una nutricion optima de tu mascota.",
    precio: 86,
  },
  {
    id: 20,
    nombre: "Articulo Fantastico de Accesorios para Perros",
    img: "/img/nuProducto.jpg",
    cantidad: 1,
    categoria: "Accesorios para Perros",
    des: "Este es un producto realmente increible que hara feliz a tu perro.",
    precio: 56,
  },
])

export const CATEGORIAS = signal([
  "Alimentacion y Nutricion",
  "Accesorios para Perros",
  "Accesorios para Gatos",
  "Higiene y Cuidado",
  "Salud y Bienestar",
  "Entrenamiento y Educacion",
  "Productos para Roedores y Pequeñas Mascotas",
  "Acuariofilia y Terrario",
  "Aseo y Cuidado del Hogar",
])

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});




// FUNSIONES
export const addProductoTienda = (value:objProducto) => {
  const objFaborito = FAVORITOS.value.find((valor)=> valor.id === value.id)
  if(objFaborito) {
    FAVORITOS.value = FAVORITOS.value.filter((valor)=> value.id !== valor.id)
  }

  const objTienda = TIENDA.value.find((valor)=> valor.id === value.id)
  if(objTienda) {
    TIENDA.value = TIENDA.value.map((valor)=> {
      if(valor.id === value.id) {
        return { ...value, cantidad: valor.cantidad + 1 }
      }
      return valor
    })
  }
  if(!objTienda) {
    TIENDA.value = [...TIENDA.value, value ]
  }
}

export const addProductoFavorito = (value:objProducto) => {
  const objTienda = TIENDA.value.find((valor)=> valor.id === value.id)
  if(objTienda) {
    return null
  }

  const objFaborito = FAVORITOS.value.find((valor)=> valor.id === value.id)
  if(objFaborito) {
    
  }
  if(!objFaborito) {
    FAVORITOS.value = [...FAVORITOS.value, value ]
  }
}