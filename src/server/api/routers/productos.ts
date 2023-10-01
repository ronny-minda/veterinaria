import { z, union } from "zod";
import fs from "fs"
import path from "path"
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { objProducto } from "~/store/gloval";
import { prisma } from "~/server/db";
import { v4 as uuid } from "uuid"

const typoProducto = z.object(
  {
    nombre: z.string(),
    cantidad: z.number(), 
    categoria: z.string(),
    descripcion: z.string(),
    precio: z.number(), 
    imagenes: z.array(z.string()),
  }
)

const typoProductoActualizar = z.object(
  {
    id: z.string(),
    nombre: z.string(),
    cantidad: z.number(), 
    categoria: z.string(),
    descripcion: z.string(),
    precio: z.number(), 
    imagenes: z.array(z.string()),
    dataImg: z.array(
      z.object({
        id: z.string(),
        src: z.string()
      })
    )
  }
)


// export const ALLPRODUCTOSAPI: objProducto[] = [
//   {
//     id: 1,
//     nombre: "Articulo Fantastico",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Alimentacion y Nutricion",
//     des: "Este es un producto realmente increible para mantener una nutricion optima de tu mascota.",
//     precio: 76,
//   },
//   {
//     id: 2,
//     nombre: "Articulo Fantastico de Accesorios para Perros",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Accesorios para Perros",
//     des: "Este es un producto realmente increible que hara feliz a tu perro.",
//     precio: 46,
//   },
//   {
//     id: 3,
//     nombre: "Articulo Fantastico de Accesorios para Gatos",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Accesorios para Gatos",
//     des: "Este es un producto realmente increible para mimar a tu gato.",
//     precio: 36,
//   },
//   {
//     id: 4,
//     nombre: "Articulo Fantastico de Higiene y Cuidado",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Higiene y Cuidado",
//     des: "Este es un producto realmente increible para mantener a tu mascota limpia y saludable.",
//     precio: 56,
//   },
//   {
//     id: 5,
//     nombre: "Articulo Fantastico de Salud y Bienestar",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Salud y Bienestar",
//     des: "Este es un producto realmente increible para mejorar la salud y el bienestar de tu mascota.",
//     precio: 66,
//   },
//   {
//     id: 6,
//     nombre: "Articulo Fantastico de Entrenamiento y Educacion",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Entrenamiento y Educacion",
//     des: "Este es un producto realmente increible para entrenar y educar a tu mascota de manera efectiva.",
//     precio: 46,
//   },
//   {
//     id: 7,
//     nombre: "Articulo Fantastico de Productos para Roedores y Pequeñas Mascotas",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Productos para Roedores y Pequeñas Mascotas",
//     des: "Este es un producto realmente increible para consentir a tus roedores y pequeñas mascotas.",
//     precio: 36,
//   },
//   {
//     id: 8,
//     nombre: "Articulo Fantastico de Acuariofilia y Terrario",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Acuariofilia y Terrario",
//     des: "Este es un producto realmente increible para crear un ambiente ideal en tu acuario o terrario.",
//     precio: 86,
//   },
//   {
//     id: 9,
//     nombre: "Articulo Fantastico de Aseo y Cuidado del Hogar",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Aseo y Cuidado del Hogar",
//     des: "Este es un producto realmente increible para mantener tu hogar limpio y acogedor.",
//     precio: 76,
//   },
//   {
//     id: 10,
//     nombre: "Articulo Fantastico de Alimentacion y Nutricion",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Alimentacion y Nutricion",
//     des: "Este es un producto realmente increible para mantener una nutricion optima de tu mascota.",
//     precio: 56,
//   },
//   {
//     id: 11,
//     nombre: "Articulo Fantastico de Accesorios para Perros",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Accesorios para Perros",
//     des: "Este es un producto realmente increible que hara feliz a tu perro.",
//     precio: 66,
//   },
//   {
//     id: 12,
//     nombre: "Articulo Fantastico de Accesorios para Gatos",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Accesorios para Gatos",
//     des: "Este es un producto realmente increible para mimar a tu gato.",
//     precio: 76,
//   },
//   {
//     id: 13,
//     nombre: "Articulo Fantastico de Higiene y Cuidado",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Higiene y Cuidado",
//     des: "Este es un producto realmente increible para mantener a tu mascota limpia y saludable.",
//     precio: 46,
//   },
//   {
//     id: 14,
//     nombre: "Articulo Fantastico de Salud y Bienestar",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Salud y Bienestar",
//     des: "Este es un producto realmente increible para mejorar la salud y el bienestar de tu mascota.",
//     precio: 66,
//   },
//   {
//     id: 15,
//     nombre: "Articulo Fantastico de Entrenamiento y Educacion",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Entrenamiento y Educacion",
//     des: "Este es un producto realmente increible para entrenar y educar a tu mascota de manera efectiva.",
//     precio: 56,
//   },
//   {
//     id: 16,
//     nombre: "Articulo Fantastico de Productos para Roedores y Pequeñas Mascotas",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Productos para Roedores y Pequeñas Mascotas",
//     des: "Este es un producto realmente increible para consentir a tus roedores y pequeñas mascotas.",
//     precio: 36,
//   },
//   {
//     id: 17,
//     nombre: "Articulo Fantastico de Acuariofilia y Terrario",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Acuariofilia y Terrario",
//     des: "Este es un producto realmente increible para crear un ambiente ideal en tu acuario o terrario.",
//     precio: 76,
//   },
//   {
//     id: 18,
//     nombre: "Articulo Fantastico de Aseo y Cuidado del Hogar",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Aseo y Cuidado del Hogar",
//     des: "Este es un producto realmente increible para mantener tu hogar limpio y acogedor.",
//     precio: 56,
//   },
//   {
//     id: 19,
//     nombre: "Articulo Fantastico de Alimentacion y Nutricion",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Alimentacion y Nutricion",
//     des: "Este es un producto realmente increible para mantener una nutricion optima de tu mascota.",
//     precio: 86,
//   },
//   {
//     id: 20,
//     nombre: "Articulo Fantastico de Accesorios para Perros",
//     img: "/img/nuProducto.jpg",
//     cantidad: 1,
//     categoria: "Accesorios para Perros",
//     des: "Este es un producto realmente increible que hara feliz a tu perro.",
//     precio: 56,
//   },
// ]

export const productos = createTRPCRouter({

  todos: publicProcedure.query( async ({ctx})=> {

    const allUser = await prisma.allProducto.findMany({
      include: {
        imagenes: true
      }
    })

    return allUser
  }),

  todosProductos: protectedProcedure
  .query( async ()=> {

    const allProduct = await prisma.allProducto.findMany({
      include: {
        imagenes: true,
      }
    })

    return { allProduct }

  }),

  guardarProducto: protectedProcedure
  .input(typoProducto)
  .mutation( async ({input, ctx})=> {

    const verProducto = await prisma.allProducto.findFirst({
      where: {
        nombre: input.nombre
      }
    })

    if(verProducto) {
      return {msg : "El producto ya ha sido creado."}
    }


    const images = input.imagenes.map((value)=> {
      const tipoImagen = `${uuid()}.png`
      const imagenBinaria = Buffer.from(value, 'base64');
      const rutaAbsoluta = path.join(__dirname, `../../../../../public/imgServer/producto/${tipoImagen}`);
      const rutaCarpeta = path.join(__dirname, "../../../../../public/imgServer/producto/");
      const oldImagePath = ""

      guardarImg(rutaAbsoluta, imagenBinaria, rutaCarpeta, oldImagePath)

      return { src: `/imgServer/producto/${tipoImagen}` }
    })

    const producto = await prisma.allProducto.create({
      data: {
        nombre: input.nombre,
        cantidad: input.cantidad,
        categoria: input.categoria,
        descripcion: input.descripcion,
        precio: input.precio,
        imagenes: {
          create: images
        }
      },
      include: {
        imagenes: true
      }
    })

    if(producto) {
      return {msg : "Producto creado.", productoNuevo: producto}
    }


  }),

  borraProducto: protectedProcedure
  .input(z.object({id: z.string()}))
  .mutation( async ({input, ctx})=> {

    const { id } = input

    const productoOld = await prisma.allProducto.findUnique({
      where: {
        id: id
      }
    })

    if(!productoOld) {
      return {msg: "No existe ese producto."}
    }

    const productoDelete = await prisma.allProducto.delete({
      where: {
        id: id
      },
      include: {
        imagenes: true
      }
    })

    const { imagenes } = productoDelete

    imagenes.map((value, key) => {

      try {
        const rutaAbsoluta = path.join(__dirname, `../../../../../public${value.src}`);
        fs.unlinkSync(rutaAbsoluta)
        console.log('Imagen borrada.')
      } catch(err) {
        console.error('Error al borra la imagen.', err)
      }

    })


    if(productoDelete) {
      return {
        msg: "El producto ya se a borrado.",
        idBorrado: id
      }
    }

  }),

  actualizarProducto: protectedProcedure
  .input(typoProductoActualizar)
  .mutation( async ({input, ctx})=> {
    console.log("input")
    console.log(input)

    const { id, nombre, cantidad, categoria, descripcion, precio, imagenes, dataImg } = input 

    // const comporbar = "/imgServer/producto"
    // dataImg.includes("/imgServer/producto")

    const imgResult = imagenes.map((value, key) => {
      return value.includes("/imgServer/producto")
    })

    if(imgResult[0]) {
      const actualizado = await prisma.allProducto.update({
        where: {
          id
        },
        data: {
          nombre,
          cantidad,
          categoria,
          descripcion,
          precio,
          imagenes: {
            update: dataImg.map((value, key) => {
              const { src, id } = value
              return {
                where: {
                  id 
                },
                data: {
                  id,
                  src
                },
              }
            })
          }
        },
        include: {
          imagenes: true
        }
      })
  
      if(actualizado) {
        return {msg: "Datos del producto actualizado"}
      }
    }

    if(!imgResult[0]) {

      const images = imagenes.map((value, key)=> {
        const tipoImagen = `${uuid()}.png`
        const imagenBinaria = Buffer.from(value, 'base64');
        const rutaAbsoluta = path.join(__dirname, `../../../../../public/imgServer/producto/${tipoImagen}`);
        const rutaCarpeta = path.join(__dirname, "../../../../../public/imgServer/producto/");
        const oldImagePath = dataImg[key]?.src
  
        if(oldImagePath) {
          guardarImg(rutaAbsoluta, imagenBinaria, rutaCarpeta, oldImagePath)
        }
  
        return {id: dataImg[key]?.id, src: `/imgServer/producto/${tipoImagen}` }
      })

      const actualizado = await prisma.allProducto.update({
        where: {
          id
        },
        data: {
          nombre,
          cantidad,
          categoria,
          descripcion,
          precio,
          imagenes: {
            update: images.map((value, key) => {
              const { src, id } = value
              return {
                where: {
                  id
                },
                data: {
                  id,
                  src
                },
              }
            })
          }
        },
        include: {
          imagenes: true
        }
      })
  
      if(actualizado) {
        return {msg: "Datos del producto actualizado"}
      }
    }
    

  })


});

const guardarImg = (rutaAbsoluta: string, imagenBinaria: Buffer, rutaCarpeta: string, oldImagePath: string) => {

  try {
    const AllImg = fs.readdirSync(rutaCarpeta) // <-- VER TODAS LAS IMAGENES DE LA CARPETA
    const imgIgual = AllImg.filter((valor)=> valor===oldImagePath) // <-- VER SI EXISTE LA IMAGEN ANTIGUA CON LA NUEVA
    fs.unlinkSync(`${rutaCarpeta}${imgIgual}`) // <-- AQUI SE BORRA LA IMAGEN VIEJA
  } catch (error) {
    
  }

  try {
    fs.writeFileSync(rutaAbsoluta, imagenBinaria) // <-- GUARADAR LA IMAGEN NUEVA
    console.log('Imagen guardada exitosamente en:', rutaAbsoluta);
    return true
  } catch (error) {
    console.error('Error al guardar la imagen');
    return false
  }

}