import Image from "next/image";
import { useEffect, useState } from "react";
import { useTienda } from "~/store/tienda";
import Anpliar from "~/svg/anpliar";
import CorazonSvg from "~/svg/corazonSvg";
import Tienda from "~/svg/tienda";
import { AnimatePresence, motion } from "framer-motion";
import Equiz from "~/svg/equiz";
import Link from "next/link";
import { FAVORITOS, TIENDA, ALLPRODUCTOSAPI, addProductoFavorito, addProductoTienda, formatter, objProducto } from "~/store/gloval";
import Imagen from "./imagen";

const NuevosProductos = () => {
  const [datalles, setDatalles] = useState(false);
  const tienda = useTienda((state) => state.tienda);

  
  return (
    <>
      <section className="my-16 flex flex-col justify-center">
        <h2 className="my-10 flex flex-wrap justify-center text-center text-3xl font-bold texto">
          NUEVOS PRODUCTOS
        </h2>

        <div className="flex w-full justify-center">
          <ul
            className="flex h-auto flex-wrap justify-center"
            style={{ maxWidth: "1300px" }}
          >
            {ALLPRODUCTOSAPI.value.slice(0, 4).map((value, key) => {
              return (
                <li key={key} className="m-3 bgFondo w-[230px] h-[430px] p-2 shadow-md rounded sombra1 group">
                  <Producto value={value} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

const Producto = ({value}: {value: objProducto}) => {
  const [datalles, setDatalles] = useState(false);
  const [favorito, setFavorito] = useState(false);
  const [tienda, setTienda] = useState(false);

  useEffect(()=> {
    const tiendaActual = TIENDA.value.find((valor)=> valor.id === value.id)
    if(tiendaActual) {
      setTienda(true)
    } else {
      setTienda(false)
    }

    const favoritoActual = FAVORITOS.value.find((valor)=> valor.id === value.id)
    if(favoritoActual) {
      setFavorito(true)
    } else {
      setFavorito(false)
    }
  },[TIENDA.value.length, FAVORITOS.value.length])

  return (
    <>
      <figure
        className="relative flex h-[267px] w-full cursor-pointer flex-col items-center overflow-hidden rounded"
      >
        <div onClick={()=> setDatalles(!datalles)} className="h-full w-full">
          <Imagen className={"h-full w-full scale-[1.03] object-contain group-hover:scale-110"} src={`${value.imagenes[0]?.src}`} alt={`${value.imagenes[0]?.src}`} modo={"contain"}/>
        </div>
        <div
          className="absolute bottom-6 z-10 flex h-[50px] w-[180px] scale-95 rounded bgFondo opacity-0 group-hover:bottom-8 group-hover:scale-100 group-hover:opacity-100"
          style={{ transitionDuration: "0.4s" }}
        >
          <button className="group-[1] flex h-full w-1/3 items-center justify-center" onClick={()=> {
            addProductoFavorito(value)
          }}>
            <CorazonSvg
              className=" h-3/4 w-3/4 scale-[0.8] fill-[#a1936500] text-[#B03E3E] hover:scale-100 hover:fill-[#B03E3E]"
              style={{ transitionDuration: "0.1s", fill: favorito?"#B03E3E":"#a1936500" }}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
            />
          </button>
          <div className="border-l border-[#B03E3E]"></div>
          <button className="flex h-full w-1/3 items-center justify-center" onClick={()=> {
            addProductoTienda(value)
          }}>
            <Tienda
              className=" h-3/4 w-3/4 scale-[0.8] fill-[#a1936500] text-[#B03E3E] hover:scale-100 hover:fill-[#B03E3E]"
              style={{ transitionDuration: "0.1s", fill: tienda?"#B03E3E":"#a1936500" }}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
            />
          </button>
          <div className="border-l border-[#B03E3E]"></div>
          <button onClick={()=> setDatalles(!datalles)} className="flex h-full w-1/3 items-center justify-center">
            <Anpliar
              className=" h-3/4 w-3/4 scale-[0.8] fill-none text-[#B03E3E] hover:scale-100"
              style={{ transitionDuration: "0.2s" }}
            />
          </button>
        </div>
      </figure>
      <Link className="h-full w-full" href={`/producto/${value.nombre.replace(/ /g, "-")}`}>
        <h4 className="my-1 text-lg font-bold text-[#39404E] group-hover:text-[#B03E3E]" style={{transitionDuration: "0.2"}}>
          {value.nombre}
        </h4>
      </Link>
      <p className="mb-2 text-[#39404E] group-hover:text-[#B03E3E]" style={{transitionDuration: "0.2"}}>{formatter.format(value.precio)}</p>
      {/* <span
        className="cursor-pointer border bg-white p-1 text-slate-600 hover:bg-slate-100"
        style={{ transitionDuration: "0.2s" }}
      >
        Añadir al carrito
      </span> */}

      <AnimatePresence>
        {datalles && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-500 bg-opacity-40"
            onClick={() => {
              setDatalles(!datalles);
              // document.body.style.overflowY = "auto";
            }}
          >

            <div className="shadow-xl">
              <div
                onClick={(e) => {
                  setDatalles(!datalles);
                }}
                className="sombra group absolute right-5 top-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full hover:shadow-slate-200 bgFondo"
                style={{
                  transitionDuration: "0.4s",
                }}
              >
                <Equiz
                  className="h-[25px] w-[25px] fill-[#B03E3E] drop-shadow-[15px_15px_16px_#F000] group-hover:drop-shadow-[15px_15px_17px_#F00]"
                  style={{
                    transitionDuration: "0.2s",
                  }}
                />
              </div>
            </div>

            {/* <p className="bg-red-400"></p> */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="scroll block h-4/5 w-4/5 flex-col overflow-y-auto md:flex md:flex-row bgFondo"
              style={{borderRadius: "10px"}}
            >
              <div className="flex h-[400px] w-full md:h-full md:w-1/2">
                <div className="h-full w-24 p-2">
                  {/* <img
                    className="mb-3 h-20 w-full cursor-pointer border border-transparent object-cover active:border-black"
                    src={value.img}
                    alt={value.nombre}
                  /> */}
                  <div className="mb-3 h-20 w-full cursor-pointer border border-transparent active:border-black">
                    <Imagen 
                      className=""
                      src={`${value.imagenes[0]?.src}`}
                      alt={`${value.imagenes[0]?.src}`}
                      modo="cover"
                    />
                  </div>
                  {/* <img
                    className="mb-3 h-20 w-full cursor-pointer border border-transparent object-cover active:border-black"
                    src={value.img}
                    alt={value.nombre}
                  /> */}
                  <div className="mb-3 h-20 w-full cursor-pointer border border-transparent active:border-black">
                    <Imagen 
                      className=""
                      src={`${value.imagenes[0]?.src}`}
                      alt={`${value.imagenes[0]?.src}`}
                      modo="cover"
                    />
                  </div>
                </div>
                <div className="flex h-full flex-1 items-center justify-center p-4">
                  {/* <img
                    className="h-3/4 w-full object-cover"
                    src={value.img}
                    alt={value.nombre}
                  /> */}
                  <div className="h-3/4 w-full">
                    <Imagen 
                      className=""
                      src={`${value.imagenes[0]?.src}`}
                      alt={`${value.imagenes[0]?.src}`}
                      modo="cover"
                    />
                  </div>
                </div>
              </div>

              <div className="h-[1000px] w-full p-5 md:h-full md:w-1/2">
                <div className="mb-3 text-slate-400">
                  <Link href="/" >inicio</Link> / {value.nombre}
                </div>
                <Link className="texto1" href={`/producto/${value.nombre.replace(/ /g, "-")}`}>
                  <h3 className="mb-3 text-2xl font-bold">
                    {value.nombre}
                  </h3>
                </Link>
                <div className="mb-3 text-lg textoColor1">
                  {formatter.format(value.precio)}
                </div>
                <p className="my-8 text-lg texto">{value.descripcion}</p>
                <button
                  className="my-2 flex w-full items-center justify-center bg-[#7f1d1d] py-2 text-white hover:bg-[#b24242]"
                  style={{ transitionDuration: "0.3s" }}
                  onClick={()=> {
                    addProductoTienda(value)
                  }}
                >
                  Añadir al carrito
                </button>
                <button className="my-2 flex w-full items-center justify-center border-2 border-[#7f1d1d] py-2 text-[#7f1d1d] hover:border-[#b24242] hover:text-[#b24242]"
                onClick={()=> {
                  addProductoFavorito(value)
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


export default NuevosProductos;
