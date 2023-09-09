import Head from "next/head";
import { ALLPRODUCTOSAPI } from "~/store/gloval"

interface objProducto {
  id: number;
  nombre: string;
  img: string;
  cantidad: number;
  categoria: string;
  des: string;
  precio: number;
}

const Id = ({ Producto }: { Producto: objProducto }) => { 

  console.log("Producto")
  console.log(Producto.nombre)
  console.log(Producto.nombre.replace(/ /g, "-"))

  return (
    <>
      <Head>
        <title>{Producto.nombre}</title>
      </Head>
      
      <h1>{Producto.nombre}</h1>
    </>
  )
}

export const getStaticPaths = async () => {
  
  const paths = ALLPRODUCTOSAPI.value.map((value)=> {
    return {
      params: {
        id: value.nombre.replace(/ /g, "-")
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ( context: any ) => {

  const { params } = context

  const Producto = ALLPRODUCTOSAPI.value.find((value)=> value.nombre === params.id.replace(/-/g, " "))

  return {
    props: {
      Producto
    },
    revalidate: 10 // TIEMPO DE REVALIDACION DE LA PAGINA DINAMICA CADA UNA
  }
}

export default Id