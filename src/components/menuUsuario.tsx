import { signOut } from "next-auth/react"
import Box from "~/svg/box"
import CorazonSvg from "~/svg/corazonSvg"
import Direccion from "~/svg/direccion"
import Lupa from "~/svg/lupa"
import User2 from "~/svg/user2"
import Salir from "~/svg/salir"
import Link from "next/link"
import { useRouter } from "next/router"
import ProductosDisponiblesIco from "~/svg/ProductosDisponiblesIco"
import SubirProductosIco from "~/svg/subirProductosIco"

const MenuUsuario = () => {

  const { pathname } = useRouter()

  const arrayPath = pathname.split("/")

  return (
    <>
      <nav
        className="absolute top-full hidden group-hover:block w-[230px] left-[50%] translate-x-[-50%] bgFondo cursor-default"
      >
        <ul>
          
          <li className="my-2">
            <Link href="/cuenta/pedidos" className="cursor-pointer group/name text-[#39404E] py-1 px-2 hover:text-[#F0F0F3] hover:bg-[#db7a7a] flex justify-start items-center" style={{transitionDuration: "0.4s", backgroundColor: arrayPath[2]==="pedidos"?"#db7a7a":"", color: arrayPath[2]==="pedidos"?"#F0F0F3":""}} >
              <Box className="h-[25px] w-[25px] fill-[#39404E] group-hover/name:fill-[#F0F0F3] mr-1" style={{transitionDuration: "0.4s", fill: arrayPath[2]==="pedidos"?"#F0F0F3":""}} />
              <span className="bgred">Pedidos</span>
            </Link>
          </li>

          <li className="my-2">
            <Link href="/cuenta/productos_disponibles" className="cursor-pointer group/name text-[#39404E] py-1 px-2 hover:text-[#F0F0F3] hover:bg-[#db7a7a] flex justify-start items-center" style={{transitionDuration: "0.4s", backgroundColor: arrayPath[2]==="productos_disponibles"?"#db7a7a":"", color: arrayPath[2]==="productos_disponibles"?"#F0F0F3":""}} >
              <ProductosDisponiblesIco className="h-[25px] w-[25px] stroke-[#39404E] group-hover/name:stroke-[#F0F0F3] mr-1" style={{transitionDuration: "0.4s", stroke: arrayPath[2]==="productos_disponibles"?"#F0F0F3":""}} />
              <span className="bgred">Productos Disponibles</span>
            </Link>
          </li>

          <li className="my-2">
            <Link href="/cuenta/subir_productos" className="cursor-pointer group/name text-[#39404E] py-1 px-2 hover:text-[#F0F0F3] hover:bg-[#db7a7a] flex justify-start items-center" style={{transitionDuration: "0.4s", backgroundColor: arrayPath[2]==="subir_productos"?"#db7a7a":"", color: arrayPath[2]==="subir_productos"?"#F0F0F3":""}} >
              <SubirProductosIco className="h-[25px] w-[25px] stroke-[#39404E] group-hover/name:stroke-[#F0F0F3] mr-1" style={{transitionDuration: "0.4s", stroke: arrayPath[2]==="subir_productos"?"#F0F0F3":""}} />
              <span className="bgred">Subir Productos</span>
            </Link>
          </li>
        
          <li className="my-2">
            <Link href="/cuenta/buscar" className="cursor-pointer group/name text-[#39404E] py-1 px-2 hover:text-[#F0F0F3] hover:bg-[#db7a7a] flex justify-start items-center" style={{transitionDuration: "0.4s", backgroundColor: arrayPath[2]==="buscar"?"#db7a7a":"", color: arrayPath[2]==="buscar"?"#F0F0F3":""}}>
              <Lupa className="h-[25px] w-[25px] fill-[#39404E] group-hover/name:fill-[#F0F0F3] mr-1" style={{transitionDuration: "0.4s", fill: arrayPath[2]==="buscar"?"#F0F0F3":""}} />
              <span>Buscar</span>
            </Link>
          </li>
          
          <li className="my-2">
            <Link href="/cuenta/direccion" className="cursor-pointer group/name text-[#39404E] py-1 px-2 hover:text-[#F0F0F3] hover:bg-[#db7a7a] flex justify-start items-center" style={{transitionDuration: "0.4s", backgroundColor: arrayPath[2]==="direccion"?"#db7a7a":"", color: arrayPath[2]==="direccion"?"#F0F0F3":""}}>
              <Direccion className="h-[25px] w-[25px] fill-[#39404E] stroke-[#39404E] group-hover/name:fill-[#F0F0F3] group-hover/name:stroke-[#F0F0F3] mr-1" style={{transitionDuration: "0.4s", fill: arrayPath[2]==="direccion"?"#F0F0F3":"", stroke: arrayPath[2]==="direccion"?"#F0F0F3":""}} />
              <span>Direccion</span>
            </Link>
          </li>
          
          <li className="my-2">
            <Link href="/cuenta/detalles_de_la_cuenta" className="cursor-pointer group/name text-[#39404E] py-1 px-2 hover:text-[#F0F0F3] hover:bg-[#db7a7a] flex justify-start items-center" style={{transitionDuration: "0.4s", backgroundColor: arrayPath[2]==="detalles_de_la_cuenta"?"#db7a7a":"", color: arrayPath[2]==="detalles_de_la_cuenta"?"#F0F0F3":""}}>
              <User2 className="h-[25px] w-[25px] fill-[#39404E] group-hover/name:fill-[#F0F0F3] mr-1" style={{transitionDuration: "0.4s", fill: arrayPath[2]==="detalles_de_la_cuenta"?"#F0F0F3":""}} />
              <span>Detalles de la cuenta</span>
            </Link>
          </li>
          
          <li className="my-2">
            <Link href="/cuenta/lista_de_deseos" className="cursor-pointer group/name text-[#39404E] py-1 px-2 hover:text-[#F0F0F3] hover:bg-[#db7a7a] flex justify-start items-center" style={{transitionDuration: "0.4s", backgroundColor: arrayPath[2]==="lista_de_deseos"?"#db7a7a":"", color: arrayPath[2]==="lista_de_deseos"?"#F0F0F3":""}}>
              <CorazonSvg className="h-[25px] w-[25px] stroke-[#39404E] group-hover/name:stroke-[#F0F0F3] mr-1" style={{transitionDuration: "0.4s", stroke: arrayPath[2]==="lista_de_deseos"?"#F0F0F3":""}} />
              <span>Lista de deseos</span>
            </Link>
          </li>

      
          <li onClick={() => signOut()} className="my-2">
            <button className="cursor-pointer group/name text-[#ff0000] py-1 px-2 hover:text-[#F0F0F3] hover:bg-[#ff0000] flex justify-start items-center w-full" style={{transitionDuration: "0.4s"}}>
              <Salir className="h-[25px] w-[25px] fill-[#ff0000] group-hover/name:fill-[#F0F0F3] mr-1" style={{transitionDuration: "0.4s"}} />
              <span>Salir</span>
            </button>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default MenuUsuario