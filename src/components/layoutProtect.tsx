import { motion, AnimatePresence } from "framer-motion"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode, useEffect, useState } from "react"
import ProductosDisponiblesIco from "~/svg/ProductosDisponiblesIco"
import Box from "~/svg/box"
import CorazonSvg from "~/svg/corazonSvg"
import Direccion from "~/svg/direccion"
import Lupa from "~/svg/lupa"
import Salir from "~/svg/salir"
import SubirProductosIco from "~/svg/subirProductosIco"
import User2 from "~/svg/user2"
import { api } from "~/utils/api"


const LayoutProtect = ({children, titulo}: { children: ReactNode, titulo: string }) => {

  const { pathname, push, route } = useRouter()
  const arrayPath = pathname.split("/")
  const { status, data: sesion } = useSession()
  const { data: userApi, isLoading, error } = api.user.pedirUno.useQuery()

  

  if(status === "unauthenticated") {
    push("/")
  }

  if(status === "loading") {
    return (
      <>
        <div className="animate-pulse">
          
          <h1 className="my-6 text-center texto flex justify-center">
            <div className="h-3 bg-red-200 rounded-full w-20 mb-4"></div>
          </h1>
  
          <div className="flex w-full relative">
            <div className="hidden pl-4 lg:block lg:w-72 border rounded shadow">
              <div className="sticky top-[130px]">
                <div
                  className="absolute top-full w-full h-full left-[50%] translate-x-[-50%] bgFondo cursor-default mt-3"
                >
                  <div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-fdivl w-full"></div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-full w-[75%]"></div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-full w-full"></div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-full w-[75%]"></div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-full w-[75%]"></div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-full w-full"></div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-full w-full"></div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-full w-[75%]"></div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-full w-[75%]"></div>
                    <div className="my-2 h-2.5 bg-red-200 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col px-4 border rounded shadow h-screen">
              <div className="flex w-full justify-between h-2.5 rounded-full"></div>
              <div className="">

                <div className="flex items-center justify-center w-full h-48 bg-red-300 rounded sm:w-96">
                    <svg className="w-10 h-10 text-red-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div className="w-full">
                    <div className="h-2.5 bg-red-200 rounded-full w-48 mb-4"></div>
                    <div className="h-2 bg-red-200 rounded-full max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-red-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-red-200 rounded-full max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-red-200 rounded-full max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-red-200 rounded-full max-w-[360px]"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if(status === "authenticated") {
    return(
      <>
        <section>
          <AnimatePresence>
            <motion.h1
              key={route}
              initial={{ opacity: 0, position: "absolute" }}
              animate={{ opacity: 1, position: "relative" }}
              exit={{ opacity: 0, position: "absolute" }}
              transition={{ duration: 1, delay: 0 }}
              className="my-6 text-center texto z-[2]"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {titulo}
            </motion.h1>
          </AnimatePresence>
  
          <div className="flex w-full relative">
            <div className="hidden pl-4 lg:block lg:w-72 ">
              <div className="sticky top-[130px] sombra1 bg-[#f0f0f396]">
                <nav
                  className="absolute top-full w-full h-full left-[50%] translate-x-[-50%] bgFondo cursor-default"
                >
                  <p className="text-2xl texto mb-7 font-medium">Hola {userApi?.name?.split(" ")[0]}</p>
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
              </div>
            </div>
  
            <div className="flex flex-1 flex-col px-4">
              <div className="flex h-10 w-full justify-between">
                <div className="text-gray-400"><Link href="/">Inicio</Link> / Cuenta / {titulo}</div>
                <div className="">{""}</div>
              </div>
              <div className="">
                <AnimatePresence>
                  <motion.div
                    key={route}
                    initial={{ opacity: 0, position: "absolute" }}
                    animate={{ opacity: 1, position: "relative" }}
                    exit={{ opacity: 0, position: "absolute" }}
                    transition={{ duration: 1, delay: 0 }}
                    className="py-[40px] px-[10px]"
                  >
                    {children}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

}

export default LayoutProtect