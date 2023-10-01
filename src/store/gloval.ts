import { Signal, signal } from "@preact/signals-react";
import { type } from "os";
import { toast } from "sonner";
import { api } from "~/utils/api";


// tipos
type img = {
  id: string;
  src: string;
  productoId: string;
}

export interface objProducto {
  imagenes: img[];
  id: string;
  nombre: string;
  cantidad: number;
  categoria: string;
  descripcion: string;
  precio: number;
}

export const scrollBody = signal(false)
export const PORDUCTOS_LISTOS = signal(false)

// export const PRODUCTOAPI = signal()

export const TIENDA = signal<objProducto[]>([])

export const FAVORITOS = signal<objProducto[]>([])

export const ALLPRODUCTOSAPI = signal<objProducto[]>([])

export const filtro = signal<objProducto[]>([])

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

// USER

// export const User



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

    toast("Ya lo tienes agregado al carrito")
  }
  if(!objTienda) {
    TIENDA.value = [...TIENDA.value, value ]
    toast("Agregado al carrito")
  }
}

export const addProductoFavorito = (value:objProducto) => {
  const objTienda = TIENDA.value.find((valor)=> valor.id === value.id)
  if(objTienda) {
    toast("Ya lo tienes agregado a carrito")
    return null
  }

  const objFaborito = FAVORITOS.value.find((valor)=> valor.id === value.id)
  if(objFaborito) {
    toast("Ya lo tienes agregado al favoritos")
  }
  if(!objFaborito) {
    FAVORITOS.value = [...FAVORITOS.value, value ]
    toast("Agregado a tu favoritos")
  }
}

export const IniciarTodo = () => {
  const {data, isLoading} = api.productos.todos.useQuery()


  PORDUCTOS_LISTOS.value = !isLoading

  if(!isLoading) {
    filtro.value = ALLPRODUCTOSAPI.value
  }

  if(data) {
    ALLPRODUCTOSAPI.value = data as objProducto[] // <-- solucionar los null de typos!!
  }
}

