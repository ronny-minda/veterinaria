import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Imagen from "~/components/imagen";
import { FAVORITOS, TIENDA, addProductoFavorito, addProductoTienda, formatter, objProducto } from "~/store/gloval"
// import { ALLPRODUCTOSAPI } from "~/server/api/routers/productos";
import CorazonSvg from "~/svg/corazonSvg";
import { prisma } from "~/server/db";

const Id = ({ Producto }: { Producto: objProducto }) => {
  const [favorito, setFavorito] = useState(false);

  useEffect(()=> {
    const favoritoActual = FAVORITOS.value.find((valor)=> valor.id === Producto.id)
    if(favoritoActual) {
      setFavorito(true)
    } else {
      setFavorito(false)
    }
  },[TIENDA.value.length, FAVORITOS.value.length])

  return (
    <>
      <Head>
        <title>{Producto.nombre}</title>
      </Head>

      <section className="w-screen flex justify-center mt-[40px]">
        <div
          className="scroll block h-4/5 w-4/5 flex-col md:flex md:flex-row"
          style={{borderRadius: "10px"}}
        >
          <div className="flex h-[550px] w-full  md:w-1/2">
            <div className="h-full w-24 p-2">
              <div className="mb-3 h-20 w-full cursor-pointer border border-transparent active:border-black">
                <Imagen
                  className=""
                  src={`${Producto.imagenes[0]?.src}`}
                  alt={Producto.nombre}
                  modo="cover"
                />
              </div>
              <div className="mb-3 h-20 w-full cursor-pointer border border-transparent active:border-black">
                <Imagen 
                  className=""
                  src={`${Producto.imagenes[0]?.src}`}
                  alt={Producto.nombre}
                  modo="cover"
                />
              </div>
            </div>
            <div className="flex h-full flex-1 items-center justify-center p-4">
              <div className="h-3/4 w-full">
                <Imagen 
                  className=""
                  src={`${Producto.imagenes[0]?.src}`}
                  alt={Producto.nombre}
                  modo="cover"
                />
              </div>
            </div>
          </div>

          <div className="h-[1000px] w-full p-5 md:h-full md:w-1/2">
            <div className="mb-3 text-slate-400">
              <Link href="/" >inicio</Link> / {Producto.nombre}
            </div>

            <h1 className="mb-3 text-2xl font-bold texto">
              {Producto.nombre}
            </h1>

            <div className="mb-3 text-lg textoColor1">
              {formatter.format(Producto.precio)}
            </div>
            <p className="my-8 text-lg texto">{Producto.descripcion}</p>
            <button
              className="my-2 flex w-full items-center justify-center bg-[#7f1d1d] py-2 text-white hover:bg-[#b24242]"
              style={{ transitionDuration: "0.3s" }}
              onClick={()=> {
                addProductoTienda(Producto)
              }}
            >
              Añadir al carrito
            </button>
            <button className="my-2 flex w-full items-center justify-center border-2 border-[#7f1d1d] py-2 text-[#7f1d1d] hover:border-[#b24242] hover:text-[#b24242]"
            onClick={()=> {
              addProductoFavorito(Producto)
            }}
            >
              <div className="h-full">
                <CorazonSvg
                  className="mr-2 h-8 w-8 scale-[1] fill-[#a1936500] text-[#7f1d1d] hover:fill-[#7f1d1d]"
                  style={{ transitionDuration: "0.4s", fill: favorito?"#B03E3E":"#a1936500" }}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                />
              </div>
              Añadir a la lista de deseos
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

// GENERAR PATHS DINAMICOS
export const getStaticPaths = async () => {

  const ALLPRODUCTOSAPI = await prisma.allProducto.findMany()
  
  const paths = ALLPRODUCTOSAPI.map((value)=> {
    if(value.nombre) {
      return {
        params: {
          id: value.nombre.replace(/ /g, "-")
        }
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

// TOMAR LOS DATOS PARA CADA PATHS
export const getStaticProps = async ( context: any ) => {

  const { params } = context
  
  const ALLPRODUCTOSAPI = await prisma.allProducto.findMany()

  const Producto = ALLPRODUCTOSAPI.find((value)=> value.nombre === params.id.replace(/-/g, " "))

  return {
    props: {
      Producto
    },
    // revalidate: 10 // TIEMPO DE REVALIDACION DE LA PAGINA DINAMICA CADA UNA
  }
}

export default Id