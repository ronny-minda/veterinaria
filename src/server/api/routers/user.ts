
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


export const user = createTRPCRouter({

  pedirUno: protectedProcedure
  .query( async ({input, ctx}) => {
    const id = ctx.session.user.id

    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return user
  }),

  actualizar: protectedProcedure
  .input(z.object({nombre: z.string(), email: z.string(), contraseña: z.string(), imagen: z.string()}))
  .mutation( async ({input, ctx})=> {
    const { nombre, email, contraseña, imagen } = input
    const { id, image } = ctx.session.user
    
    console.log("imagen")
    console.log(imagen)

    const usuarioOld = await prisma.user.findUnique({
      where: {
        id: id
      }
    })
    
    const tipoImagen = `${uuid()}.png`

    const rutaAbsoluta = path.join(__dirname, `../../../../../public/imgServer/user/${tipoImagen}`);

    const rutaCarpeta = path.join(__dirname, "../../../../../public/imgServer/user/");

    const imagenBinaria = Buffer.from(imagen, 'base64');

    let oldImagePath: string = ""

    if(usuarioOld) oldImagePath = `${`${usuarioOld.image}`.split("/imgServer/user/")[1]}`

    let booleanoImagen = false

    if(imagen!==image) {
      booleanoImagen = guardarImg(rutaAbsoluta, imagenBinaria, rutaCarpeta, oldImagePath)
    }
    if(imagen===image) {
      booleanoImagen = false
    }

    let userActualizado

    userActualizado = await prisma.user.update({
      where: {
        id
      },
      data: {
        name: nombre,
        email: email,
        password: contraseña===""?usuarioOld?.password:contraseña,
        image: booleanoImagen?`/imgServer/user/${tipoImagen}`:usuarioOld?.image
      }
    })

    if(userActualizado) {
      return {msg: "Datos actualizados."}
    } else {
      return {msg: "Error al Actualizar."}
    }

  }),

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