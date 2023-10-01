import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTienda } from "~/store/tienda";
import Anpliar from "~/svg/anpliar";
import CorazonSvg from "~/svg/corazonSvg";
import Tienda from "~/svg/tienda";
import { AnimatePresence, motion } from "framer-motion";
import Equiz from "~/svg/equiz";
import Footer from "~/components/footer";
import FlechaUp from "~/svg/flechaUp";
import Head from "next/head";
import { ALLPRODUCTOSAPI, CATEGORIAS, FAVORITOS, TIENDA, addProductoFavorito, addProductoTienda, formatter, objProducto, filtro } from "~/store/gloval";
import { signal } from "@preact/signals-react";
import Imagen from "~/components/imagen";

const valorRango = signal(300)

const filtroCategoria = (value: string) => filtro.value = ALLPRODUCTOSAPI.value.filter((valor)=> valor.categoria === value)
const filtroRango = (value: number) => filtro.value = ALLPRODUCTOSAPI.value.filter((valor)=> valor.precio <= value)


const Productos = () => {

  // useEffect(()=> {
  //   filtro.value = ALLPRODUCTOSAPI.value
  // },[])

  return (
    <>
      <Head>
        <title>Productos</title>
      </Head>
      <section>

        <h1
          className="my-6 text-center texto"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Productos
        </h1>

        <h2
          className="my-6 text-center texto"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <Link href="/tienda">Ver todas las caregorias</Link>
        </h2>

        <div className="flex w-full relative">
          <div className="hidden pl-4 lg:block lg:w-72 ">
            <div className="sticky top-[130px] sombra1 bg-[#f0f0f396]">
              <Acordeon1 />
              <div className="w-full flex flex-col">
                <p>max: {formatter.format(valorRango.value)}</p>
                <div className="relative w-full h-[16px]">
                  <input className="absolute top-0 left-0 cursor-col-resize w-full inputRange z-[2]" type="range" value={valorRango.value} min="0" max="400" onChange={(e)=> {
                    const value = parseInt(e.target.value)
                    valorRango.value = value
                    filtroRango(value)
                  }}></input>
                  <div 
                    className="absolute top-0 left-0 h-[16px] rounded-full bg-red-400 z-[1]"
                    style={{width: `${(valorRango.value/400)*100}%`, boxShadow: "rgb(247, 155, 155) 7px 7px 7px 0px inset, rgb(176, 62, 62) -7px -7px 7px 0px inset"}}
                    ></div>
                </div>
              </div>
              <Acordeon2 />
              {/* <Acordeon3 /> */}
            </div>
          </div>

          <div className="flex flex-1 flex-col px-4">
            <div className="flex h-10 w-full justify-between">
              <div className="text-gray-400">inicio / Productos</div>
              <div className="">{""}</div>
            </div>
            <div className="">
              <ProductosAll />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const ProductosAll = () => {
  const [datalles, setDatalles] = useState(false);
  // const tienda = useTienda((state) => state.tienda);

  return (
    <>
      <section className="my-10 flex flex-col justify-center">
        <div className="flex w-full justify-center">
          <ul
            className="flex h-auto flex-wrap justify-center"
            style={{ maxWidth: "1300px" }}
          >
            {filtro.value.map((value, key) => {
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

const Acordeon1 = () => {
  const [aco, setAco] = useState(true);

  return (
    <>
      <div className="">
        <div
          className="flex h-14 w-full cursor-pointer items-center justify-between p-2"
          style={{ borderColor: "#6767674d" }}
          onClick={() => setAco(!aco)}
        >
          <span className="text-xl font-bold text-[#7f1d1d]">Categorias</span>
          <FlechaUp
            className={`h-6 w-6 ${
              !aco ? "rotate-0" : "rotate-180"
            } transition-all`}
          />
        </div>

        <motion.div
          animate={{
            height: aco ? "auto" : "0px",
          }}
          style={{ borderColor: "#6767674d", boxShadow: aco?"inset 0px 7px 7px 0px rgba(174, 174, 192, 0.25)":"inset 0px 7px 7px 0px rgba(174, 174, 192, 0)" }}
          className="flex h-auto w-full cursor-pointer flex-col items-start justify-start overflow-hidden p-2"
        >
          {CATEGORIAS.value.map((value, key) => {
            return (
              <button
                onClick={()=> {
                  filtroCategoria(value)
                }}
                className="my-1 w-full cursor-pointer text-[#39404E] hover:text-[#F0F0F3] bg-[#B03E3E00] hover:bg-[#B03E3E]" key={key}
                style={{transitionDuration: "0.2s"}}
              >
                {value}
              </button>
            );
          })}
        </motion.div>
      </div>
      <hr className="my-3 border-gray-400" />
    </>
  );
};

const Acordeon2 = () => {
  const [aco, setAco] = useState(false);

  return (
    <>
      <div className="">
        <div
          className="flex h-14 w-full cursor-pointer items-center justify-between"
          style={{ borderColor: "#6767674d" }}
          onClick={() => setAco(!aco)}
        >
          <span className="text-xl font-bold text-[#7f1d1d]">Destacados</span>
          <FlechaUp
            className={`h-7 w-7 ${
              !aco ? "rotate-0" : "rotate-180"
            } transition-all`}
          />
        </div>

        <motion.div
          animate={{
            height: aco ? "auto" : "0px",
          }}
          style={{ borderColor: "#6767674d" }}
          className="flex h-auto w-full cursor-pointer flex-col items-start justify-start overflow-hidden"
        >
          {/* <span style={{ width: "90%", height: "80%" }}>
            Nuestra filosofía se centra en brindar atención integral, promover
            el bienestar animal y fortalecer el vínculo humano-animal. Expertos
            comprometidos contigo y tus mascotas.
          </span> */}

          {/* {imgTienda.map((value, key) => {
            return (
              <div className="my-1 cursor-pointer" key={key}>
                {value.nombre}
              </div>
            );
          })} */}
        </motion.div>
      </div>
      <hr className="my-3 border-gray-400" />
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
        <div onClick={()=> setDatalles(!datalles)} className="h-full w-full relative">
          <div className="absolute top-0 left-0 h-full w-full scale-[1.03] object-contain group-hover:scale-110 opacity-100 group-hover:opacity-0" style={{transitionDuration: "0.3s"}}>
            <Imagen className={""} src={`${value.imagenes[0]?.src}`} alt={`${value.imagenes[0]?.src}`} modo={"contain"}/>
          </div>
          <div className="absolute top-0 left-0 h-full w-full scale-[1.03] object-contain group-hover:scale-110 opacity-0 group-hover:opacity-100" style={{transitionDuration: "0.3s"}}>
            <Imagen className={""} src={`${value.imagenes[1]?.src}`} alt={`${value.imagenes[1]?.src}`} modo={"contain"}/>
          </div>
          <div className="h-1/2 w-full absolute bottom-0 left-0 opacity-0 group-hover:opacity-100" style={{transitionDuration: "0.3s", background: "linear-gradient(0deg, rgba(0,0,0,0.5998774509803921) 0%, rgba(255,255,255,0) 100%)"}}></div>
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
                      src={`${value.imagenes[0]}`}
                      alt={value.nombre}
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
                      src={`${value.imagenes[0]}`}
                      alt={value.nombre}
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
                      src={`${value.imagenes[0]}`}
                      alt={value.nombre}
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

export default Productos;
