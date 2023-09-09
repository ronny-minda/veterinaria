import { useEffect, useState } from "react";
import { motion, AnimatePresence, useDeprecatedAnimatedState } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";

import MenuMobile from "~/svg/menuMobile";
import Link from "next/link";
import Equiz from "~/svg/equiz";
import Image from "next/image";
import Logo from "~/svg/logo";
import Tienda from "~/svg/tienda";
import CorazonSvg from "~/svg/corazonSvg";
import Equis from "~/svg/equis";
import { useFavorito } from "~/store/favorito";
import { useTienda } from "~/store/tienda";
import Lupa from "~/svg/lupa";
import User from "~/svg/user";
import Face from "~/svg/face";
import Insta from "~/svg/insta";
import Wha from "~/svg/wha";
import { signal } from "@preact/signals-react";
import { ALLPRODUCTOSAPI, FAVORITOS, TIENDA, addProductoTienda, formatter, objProducto, scrollBody } from "~/store/gloval";
import { useTransition, animated } from "@react-spring/web";
import Imagen from "./imagen";

const FondoOpaco = signal(false);
const estadoMobile = signal(false);
const estadoTienda = signal(false);
const estadoFavorito = signal(false);
const estadoLupa = signal(false);
const estadoAcceder = signal(false);


const cambioTienda = () => {
  estadoTienda.value = !estadoTienda.value
  scrollBody.value = !scrollBody.value
}
const cambioMovile = () => {
  estadoMobile.value = !estadoMobile.value
  scrollBody.value = !scrollBody.value
}
const cambioFavorito = () => {
  estadoFavorito.value = !estadoFavorito.value
  scrollBody.value = !scrollBody.value
}
const cambioLupa = () => {
  estadoLupa.value = !estadoLupa.value
  scrollBody.value = !scrollBody.value
}
const cambioAcceder = () => estadoAcceder.value = !estadoAcceder.value

const Header = () => {
  const [ scrolly, setScrolly ] = useState(0)
  const { data: session, status } = useSession();

  useEffect(()=> {
    const handleScroll = () => {
      // console.log(window.scrollY)
      setScrolly(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <header className="sticky top-0 left-0 z-40 flex h-28 w-screen items-center justify-between p-5 shadow-md lg:justify-center"
        style={{
          backgroundColor: scrolly>70?"#F0F0F3":"#F0F0F300",
          boxShadow: scrolly>70?"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)":"0 4px 6px -1px rgb(0 0 0 / 0), 0 2px 4px -2px rgb(0 0 0 / 0)",
          transitionDuration: "0.1s"
        }}
      >
        <div className="w-auto lg:flex lg:w-3/4 lg:items-center lg:justify-center">
          <li className="group mr-2 hidden h-auto w-auto list-none lg:block ">
            <Link
              className="letas texto1"
              href="/galeria"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              GALERIA
            </Link>
            <div
              className="w-0 bg-[#7f1d1d] group-hover:w-full"
              style={{ height: "1px", transitionDuration: "0.3s" }}
            ></div>
          </li>
          <li className="group mr-2 hidden h-auto w-auto list-none lg:block">
            <Link
              className="letas texto1"
              href="/nosotros"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              NOSOTROS
            </Link>
            <div
              className="w-0 bg-[#7f1d1d] group-hover:w-full"
              style={{ height: "1px", transitionDuration: "0.3s" }}
            ></div>
          </li>
          <Link href="/">
            <Logo />
          </Link>
          <li className="group ml-2 hidden h-auto w-auto list-none lg:block">
            <Link
              className="letas texto1"
              href="/tienda"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              TIENDA
            </Link>
            <div
              className="w-0 bg-[#7f1d1d] group-hover:w-full"
              style={{ height: "1px", transitionDuration: "0.3s" }}
            ></div>
          </li>
          <li className="group ml-2 hidden h-auto w-auto list-none lg:block">
            <Link
              className="letas texto1"
              href="/productos"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              PRODUCTOS
            </Link>
            <div
              className="w-0 bg-[#7f1d1d] group-hover:w-full"
              style={{ height: "1px", transitionDuration: "0.3s" }}
            ></div>
          </li>

          <li className="group absolute right-28 top-10 h-8 w-8 cursor-pointer list-none lg:right-5">
            <button
              className="letas h-full w-full"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
              onClick={() => {
                cambioTienda();
              }}
            >
              <Tienda
                className="h-full w-full scale-[1] stroke-[#39404E] group-hover:stroke-[#B03E3E] drop-shadow-[15px_15px_16px_#F000] group-hover:drop-shadow-[15px_15px_17px_#F00]"
                style={{ transitionDuration: "0.4s" }}
              />
              {TIENDA.value.length > 0 && (
                <>
                  <div
                    className="fondo1 group-hover:bg-[#B03E3E] absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full"
                    style={{ fontSize: "13px" }}
                  >
                    {TIENDA.value.length}
                  </div>
                </>
              )}
            </button>
          </li>

          <li className="group absolute right-[160px] top-10 h-8 w-8 cursor-pointer list-none lg:right-[70px]">
            <button
              className="letas h-full w-full"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
              onClick={() => {
                cambioFavorito()
              }}
            >
              <CorazonSvg
                className="h-full w-full scale-[1] stroke-[#39404E] group-hover:stroke-[#B03E3E] drop-shadow-[15px_15px_16px_#F000] group-hover:drop-shadow-[15px_15px_17px_#F00]"
                style={{ transitionDuration: "0.4s" }}
              />
              {FAVORITOS.value.length > 0 &&
                <div
                  className="fondo1 group-hover:bg-[#B03E3E] absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f6f3e4]"
                  style={{ fontSize: "13px" }}
                >
                  {FAVORITOS.value.length}
                </div>
              }
            </button>
          </li>

          <li className="group absolute right-[205px] top-10 h-8 w-8 cursor-pointer list-none lg:right-[118px]">
            <button
              className="letas"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
              onClick={() => {
                cambioLupa()
              }}
            >
              <Lupa
                className="h-full w-full scale-[1] fill-[#39404E] group-hover:fill-[#B03E3E] drop-shadow-[15px_15px_16px_#F000] group-hover:drop-shadow-[15px_15px_17px_#F00]"
                style={{ transitionDuration: "0.4s" }}
              />
            </button>
          </li>

          <li className="group absolute right-[250px] top-10 h-8 w-8 cursor-pointer list-none lg:right-[165px]">
            {
              status === "authenticated" && 
              <div className="group cursor-pointer h-full w-full">
                <img
                  className="relative h-full w-full rounded-full"
                  src={session.user.image?.toString()}
                  alt={session.user.name?.toString()}
                />
                <div
                  onClick={() => signOut()}
                  className="absolute top-full hidden bg-red-600 px-3 py-2 text-white group-hover:block"
                >
                  cerrar sesion
                </div>
              </div>
            }

            {
              status === "unauthenticated" && (
                <button
                  onClick={() => {
                    cambioAcceder()
                  }}
                >
                  <User
                    className="h-full w-full scale-[1] stroke-[#39404E] group-hover:stroke-[#B03E3E] drop-shadow-[15px_15px_16px_#F000] group-hover:drop-shadow-[15px_15px_17px_#F00]"
                    style={{ transitionDuration: "0.4s" }}
                  />
                </button>
              )
            }

            {
              status === "loading" &&
              <div className="h-full w-full flex justify-center items-center">
                <svg aria-hidden="true" className="w-6 h-6 mr-2 text-gray-200 animate-spin fill-[#39404E]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            }
          </li>
        </div>

        <div
          className="sombra group absolute right-5 top-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full hover:shadow-slate-200 lg:hidden"
          style={{
            transitionDuration: "0.4s",
          }}
          onClick={(e) => {
            cambioMovile();
          }}
        >
          <MenuMobile
            className="h-[25px] w-[25px] fill-[#B03E3E] drop-shadow-[15px_15px_16px_#F000] group-hover:drop-shadow-[15px_15px_17px_#F00]"
            style={{
              transitionDuration: "0.2s",
            }}
          />
        </div>
      </header>

      {/* TIENDA */}
      <CompoTienda />

      {/* MENU */}
      <CompoMenu />

      {/* FAVORITO */}
      <CompoFavorito />

      {/* LUPA */}
      <CompoLupa />
      

      {/* ACCEDER */}
      <CompoAcceder />

      
    </>
  );
};

const CompoTienda = () => {
  const TiendaArray = useTransition(TIENDA.value, {
    from: { opacity: 0, config: { duration: 500 } },
    enter: { opacity: 1, config: { duration: 500 } },
    leave: { opacity: 0, config: { duration: 500 } },
  });
  
  return (
    <>
      <AnimatePresence>
        {estadoTienda.value && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-40 h-screen w-screen bg-slate-600"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
            onClick={() => {
              cambioTienda();
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {estadoTienda.value && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2 }}
            className="bgFondo fondoPerro1 fixed right-0 top-0 z-50 h-full w-[100%] sm:w-[500px]"
          >
            <div
              onClick={(e) => {
                cambioTienda();
              }}
              className="sombra group absolute right-5 top-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full hover:shadow-slate-200"
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

            <div className="flex h-16 w-full items-center">
              <h3 className="texto ml-7 text-2xl font-bold">Carrito</h3>
            </div>

            <div
              className="scroll mt-10 flex w-full justify-center"
              style={{ overflowY: "auto", height: "calc(100% - 103.993px)", boxShadow: "inset 0 25px 50px -12px rgb(0 0 0 / 0.25)"}}
            >
              <ul className="flex w-[90%] flex-col">
                {TIENDA.value.length !== 0 && (
                  <>
                    {TiendaArray((style, item) => {
                      return (
                        <animated.li
                          style={{ ...style }}
                          className="sombra1 bgFondoOpa mb-3 mt-3 p-3"
                        >
                          <div className="group relative flex w-full">
                            {/* <figure className="relative ml-[32px] mr-2 flex w-20 cursor-pointer flex-col items-center">
                              <Image
                                height={1000}
                                width={1000}
                                src={item.img}
                                alt={item.img}
                                className="h-full w-full object-contain"
                              />
                            </figure> */}
                            <div className="ml-[32px] mr-2 flex w-20 h-24 cursor-pointer">
                              <Imagen className="" src={item.img} alt={item.img} modo={"contain"} />
                            </div>
                            <div className="mx-2 flex flex-col w-[150px]">
                              <span className="textoColor1 text-base font-bold">
                                {item.nombre}
                              </span>
                              <span className="texto my-2 text-base font-bold">
                                {/* ${Math.round(item.precio * 0.01 * 100) / 100} */}
                                {formatter.format(item.precio)}
                              </span>
                            </div>

                            <div className="mx-2 flex items-start">
                              <button
                                className="mx-2"
                                onClick={() => {
                                  TIENDA.value = TIENDA.value.map((valor) => {
                                    if (valor.cantidad > 0) {
                                      if (valor.id === item.id) {
                                        valor.cantidad--;
                                      }
                                    }
                                    return valor;
                                  });

                                  TIENDA.value = TIENDA.value.filter(
                                    (iten) => iten.cantidad !== 0
                                  );
                                }}
                              >
                                -
                              </button>
                              <span>{item.cantidad}</span>
                              <button
                                className="mx-2"
                                onClick={() => {
                                  TIENDA.value = TIENDA.value.map((valor) => {
                                    if (valor.id === item.id) {
                                      valor.cantidad++;
                                    }
                                    return valor;
                                  });
                                }}
                              >
                                +
                              </button>
                            </div>

                            <div className="absolute right-0 top-0 mx-2 flex items-start">
                              <span className="font-bold">
                                {formatter.format(item.precio*item.cantidad)}
                              </span>
                            </div>

                            <div
                              onClick={() => {
                                TIENDA.value = TIENDA.value.filter(
                                  (iten) => iten.id !== item.id
                                );
                              }}
                              className="bgPrimerFondo absolute left-0 top-0 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full shadow-lg shadow-[#fff0] hover:shadow-slate-200"
                            >
                              <Equis />
                            </div>
                          </div>
                          <hr className="rayaSombra my-2 border-[#39404E]" />
                        </animated.li>
                      );
                    })}
                  </>
                )}
                {TIENDA.value.length === 0 && (
                  <>
                    <div className="flex flex-col items-center justify-center mt-[125px]">
                      <h3 className="texto text-center text-xl font-bold">
                        No hay nada en Carrito
                      </h3>
                      <Link
                        onClick={() => {
                          cambioTienda();
                        }}
                        href="/tienda"
                        className="botonSolidColor1 my-2 mt-5 flex w-4/5 items-center justify-center py-3 text-lg"
                        style={{ transitionDuration: "0.3s" }}
                      >
                        Siga Comprando
                      </Link>
                    </div>
                  </>
                )}
                <li className="">
                  <hr className="mb-[165px] border-[#cbc1a0] opacity-0" />
                </li>
              </ul>
            </div>

            {TIENDA.value.length !== 0 && (
              <>
                <div
                  className="absolute bottom-0 left-0 flex h-auto w-full flex-col items-center justify-center bg-white"
                  style={{
                    boxShadow: "0px -10px 20px 0px #00000038",
                  }}
                >
                  <div className="my-2 flex w-4/5 items-center justify-around py-2 text-[#7f1d1d]">
                    <div>Subtotal:</div>
                    <div>
                      {
                        formatter.format(TIENDA.value.reduce((acumulador, valorActual) => {
                          return acumulador + (valorActual.precio * valorActual.cantidad)
                        }, 0))
                      }

                    </div>

                    {/* {Math.round(
                              item.precio * item.cantidad * 0.01 * 100
                            ) / 100} */}
                  </div>
                  <button className="botonBorderColor1 my-2 flex w-4/5 items-center justify-center py-2">
                    Ver carrito
                  </button>
                  <button
                    className="botonSolidColor1 my-2 flex w-4/5 items-center justify-center py-2"
                    style={{ transitionDuration: "0.3s" }}
                  >
                    Finalizar compra
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const CompoMenu = () => {
  return (
    <>
      <AnimatePresence>
        {estadoMobile.value && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-40 flex h-screen w-screen bg-slate-600 lg:hidden"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
            onClick={() => {
              cambioMovile();
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {estadoMobile.value && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2 }}
            className="bgFondo fixed right-0 top-0 z-50 flex h-full w-2/5 flex-col items-center justify-start lg:hidden"
          >
            <div
              onClick={(e) => {
                cambioMovile();
              }}
              className="sombra group absolute right-5 top-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full hover:shadow-slate-200"
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

            <div className="mt-20 flex w-full justify-center">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // console.log("formularioooo");
                }}
                className="my-4 w-11/12"
              >
                <label className="sr-only mb-2 text-sm font-medium text-gray-900">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-4 w-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    className="block h-2 w-full border-b border-l-0 border-r-0 border-t-0 border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 hover:border-[#8b3737] focus:border-[#8b3737]"
                    placeholder="Buscar"
                    required
                  />
                </div>
              </form>
            </div>

            <motion.section
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "tween", delay: 0.1 }}
              className="w-3/4"
            >
              <li className="group my-5 w-full list-none">
                <Link
                  onClick={() => {
                    cambioMovile();
                    // document.body.style.overflowY = "auto";
                  }}
                  className="letas block w-full p-1 text-2xl text-[#7f1d1d]"
                  href="/"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  HOME
                </Link>
                <div
                  className="h-[3px] w-0 bg-[#7f1d1d] group-hover:w-full"
                  style={{ transitionDuration: "0.3s" }}
                ></div>
              </li>
              <li className="group my-5 w-full list-none">
                <Link
                  onClick={() => {
                    cambioMovile();
                    // document.body.style.overflowY = "auto";
                  }}
                  className="letas block w-full p-1 text-2xl text-[#7f1d1d]"
                  href="/galeria"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  GALERIA
                </Link>
                <div
                  className="h-[3px] w-0 bg-[#7f1d1d] group-hover:w-full"
                  style={{ transitionDuration: "0.3s" }}
                ></div>
              </li>
              <li className="group my-5 w-full list-none">
                <Link
                  onClick={() => {
                    cambioMovile();
                    // document.body.style.overflowY = "auto";
                  }}
                  className="letas block w-full p-1 text-2xl text-[#7f1d1d]"
                  href="/nosotros"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  NOSOTROS
                </Link>
                <div
                  className="h-[3px] w-0 bg-[#7f1d1d] group-hover:w-full"
                  style={{ transitionDuration: "0.3s" }}
                ></div>
              </li>
              <li className="group my-5 w-full list-none">
                <Link
                  onClick={() => {
                    cambioMovile();
                    // document.body.style.overflowY = "auto";
                  }}
                  className="letas block w-full p-1 text-2xl text-[#7f1d1d]"
                  href="/tienda"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  TIENDA
                </Link>
                <div
                  className="h-[3px] w-0 bg-[#7f1d1d] group-hover:w-full"
                  style={{ transitionDuration: "0.3s" }}
                ></div>
              </li>
              <li className="group my-5 w-full list-none">
                <Link
                  onClick={() => {
                    cambioMovile();
                    // document.body.style.overflowY = "auto";
                  }}
                  className="letas block w-full p-1 text-2xl text-[#7f1d1d]"
                  href="/productos"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  PRODUCTOS
                </Link>
                <div
                  className="h-[3px] w-0 bg-[#7f1d1d] group-hover:w-full"
                  style={{ transitionDuration: "0.3s" }}
                ></div>
              </li>
            </motion.section>
            <div className="absolute bottom-8 left-0 w-full">
              <hr className="border-[#cbc1a0]" />
              <div
                className="flex cursor-pointer justify-between px-10 py-2"
                onClick={() => {
                  cambioMovile();
                  // setEstadoFavorito(!estadoFavorito);
                }}
              >
                <div>Lista de deseos</div>
                <div className="">
                  <button
                    className="letas relative"
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    <CorazonSvg
                      className="h-8 w-8 scale-[1] fill-[#a1936500] text-[#7f1d1d]"
                      style={{ transitionDuration: "0.4s" }}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                    />
                    <div
                      className="absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f6f3e4]"
                      style={{ fontSize: "15px" }}
                    >
                      0{/* {"favoritos.length"} */}
                    </div>
                  </button>
                </div>
              </div>
              <hr className="border-[#cbc1a0]" />
              <div
                className="flex cursor-pointer justify-between px-10 py-2"
                onClick={() => {
                  cambioMovile();
                  // setEstadoAcceder(!estadoAcceder);
                }}
              >
                <div>Acceder</div>
                <div className="">
                  <button
                    className="letas relative"
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    <User
                      className="h-8 w-8 scale-[1] fill-[#7f1d1d] text-[#7f1d1d]"
                      style={{ transitionDuration: "0.4s" }}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                    />
                  </button>
                </div>
              </div>
              <hr className="border-[#cbc1a0]" />
              <div className="flex justify-start px-10 py-2">
                <a href="#" className="mr-4">
                  <Face
                    className="h-7 w-7 scale-[1] fill-[#7f1d1d] text-[#7f1d1d]"
                    style={{ transitionDuration: "0.4s" }}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                  />
                </a>
                <a href="#" className="mr-4">
                  <Insta
                    className="h-7 w-7 scale-[1] fill-[#7f1d1d] text-[#7f1d1d]"
                    style={{ transitionDuration: "0.4s" }}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                  />
                </a>
                <a href="#" className="mr-4">
                  <Wha
                    className="h-7 w-7 scale-[1] fill-[#7f1d1d] text-[#7f1d1d]"
                    style={{ transitionDuration: "0.4s" }}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const CompoFavorito = () => {
  const FavoritoArray = useTransition(FAVORITOS.value, {
    from: { opacity: 0, config: { duration: 500 } },
    enter: { opacity: 1, config: { duration: 500 } },
    leave: { opacity: 0, config: { duration: 500 } },
  });
  return (
    <>
      <AnimatePresence>
        {estadoFavorito.value && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-40 h-screen w-screen bg-slate-600"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
            onClick={() => {
              cambioFavorito();
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {estadoFavorito.value && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2 }}
            className="bgFondo fondoPerro2 fixed right-0 top-0 z-50 h-full w-[100%] sm:w-[500px]"
          >
            <div
              onClick={(e) => {
                cambioFavorito();
              }}
              className="sombra group absolute right-5 top-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full hover:shadow-slate-200"
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

            <div className="flex h-16 w-full items-center">
              <h3 className="texto ml-7 text-2xl font-bold">Lista de deseos</h3>
            </div>

            <div
              className="scroll mt-10 flex w-full justify-center"
              style={{ overflowY: "auto", height: "calc(100% - 103.993px)", boxShadow: "inset 0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
            >
              <ul className="flex w-3/4 flex-col">
                {FAVORITOS.value.length !== 0 && (
                  <>
                    {FavoritoArray((style, item) => {
                      return (
                        <animated.li
                          style={{ ...style }}
                          className="sombra1 bgFondoOpa mb-3 mt-3 p-3"
                        >
                          <div className="group relative flex w-full">
                            <div className="ml-[32px] mr-2 flex w-20 h-24 cursor-pointer">
                              <Imagen className="" src={item.img} alt={item.img} modo={"contain"} />
                            </div>
                            <div className="mx-2 flex flex-col">
                              <span className="textoColor1 text-base font-bold">
                                {item.nombre}
                              </span>
                              <span className="font-bold">
                                ${Math.round(item.precio * 0.01 * 100) / 100}
                              </span>
                            </div>

                            <div className="absolute right-0 bottom-0 mx-2 flex items-start">
                              <button
                              onClick={()=> {
                                addProductoTienda(item)
                              }}
                                className="botonSolidColor1 rounded flex items-center justify-center text-[14px] py-[1px] px-[15px] text-lg"
                                style={{ transitionDuration: "0.3s" }}
                              >
                                Añadir
                              </button>
                            </div>

                            <div
                              onClick={() => {
                                FAVORITOS.value = FAVORITOS.value.filter(
                                  (iten) => iten.id !== item.id
                                );
                              }}
                              className="bgPrimerFondo absolute left-0 top-0 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full shadow-lg shadow-[#fff0] hover:shadow-slate-200"
                            >
                              <Equis />
                            </div>
                          </div>
                          <hr className="rayaSombra my-2 border-[#39404E]" />
                        </animated.li>
                      );
                    })}
                  </>
                )}
                {FAVORITOS.value.length === 0 && (
                  <>
                    <div className="flex flex-col items-center justify-center mt-[125px]">
                      <h3 className="texto text-center text-xl font-bold">
                        No hay nada en su lista de deseos
                      </h3>
                      <Link
                        onClick={() => {
                          cambioFavorito();
                        }}
                        href="/tienda"
                        className="botonSolidColor1 my-2 mt-5 flex w-4/5 items-center justify-center py-3 text-lg"
                        style={{ transitionDuration: "0.3s" }}
                      >
                        Siga Comprando
                      </Link>
                    </div>
                  </>
                )}
                <li className="">
                  <hr className="mb-[40px] border-[#cbc1a0] opacity-0" />
                </li>
              </ul>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const CompoLupa = () => {
  const [ buscar, setBuscar ] = useState("")
  const [ filtro, setFiltro ] = useState<objProducto[]>([])

  return (
    <>
      <AnimatePresence>
        {estadoLupa.value && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-40 h-screen w-screen bg-slate-600"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
            onClick={() => {
              cambioLupa();
              setBuscar("")
              setFiltro([])
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {estadoLupa.value && (
          <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2 }}
            className="bgFondo scroll fixed right-0 top-0 z-50 h-auto w-screen flex flex-col fondoPerro3"
            style={{ overflowY: "auto", height: buscar===""?"auto":"100vh" }}
          >
            <div className="shadow-xl">
              <div
                onClick={(e) => {
                  cambioLupa();
                  setBuscar("")
                  setFiltro([])
                }}
                className="sombra group absolute right-5 top-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full hover:shadow-slate-200"
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

              <h3 className="mb-6 mt-12 text-center texto text-3xl font-bold">Buscar</h3>
              <hr className="rayaSombra my-2 border-[#39404E]" />

              <div className="flex w-full justify-center">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // // console.log("formularioooo");
                  }}
                  className="my-4 w-4/5 sm:w-2/4"
                >
                  <label className="sr-only mb-2 text-sm font-medium text-[#39404E]">
                    Buscar
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-4 w-4 text-[#39404E]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-4 pl-10 text-xl text-gray-900 hover:border-[#fff] focus:border-[#fff]"
                      placeholder="Buscar"
                      required
                      onChange={(e)=> {
                        setBuscar(e.target.value)
                        const valorInput = e.target.value.toUpperCase()
                        const filtrado = ALLPRODUCTOSAPI.value.filter((valor)=> valor.nombre.toUpperCase().includes(valorInput))
                        setFiltro(filtrado)
                      }}
                    />
                    <button
                      type="submit"
                      className="absolute bottom-2.5 right-2.5 rounded bg-[#8b3737] px-6 py-2 text-base font-medium text-[#F0F0F3] hover:bg-[#B03E3E]"
                      style={{transitionDuration: "0.2s"}}
                    >
                      Buscar
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {
              buscar!=="" && 
              <div className="flex-1 w-screen scroll overflow-y-auto" style={{boxShadow: "inset 0 25px 50px -12px rgb(0 0 0 / 0.25)"}}>
                <div className="flex justify-center mt-6">
                  <div className="sm:w-4/5 w-full">
                    {
                      filtro.map((value, key)=> {
                        return(
                            <li
                            key={key}
                              className="sombra1 bgFondoOpa my-7 p-3 list-none"
                            >
                              <div className="group relative flex w-full">
                                <div className="ml-[32px] mr-2 flex w-[115px] h-[155px] cursor-pointer">
                                  <Imagen className="" modo="cover" src={value.img}
                                    alt={value.img} />
                                </div>

                                <div className="flex flex-row sm:flex-col lg:flex-row">
                                  <div className="mx-2 flex flex-col">
                                    <span className="textoColor1 text-base font-bold w-[161px]">
                                      {value.nombre}
                                    </span>
                                    <span className="texto my-2 text-base font-bold">
                                      ${Math.round(value.precio * 0.01 * 100) / 100}
                                    </span>
                                  </div>

                                  <div className="mx-2 flex flex-col">
                                    <button
                                      className="botonSolidColor1 rounded mx-2 flex items-center justify-center py-2 px-5 text-lg"
                                      style={{ transitionDuration: "0.3s" }}
                                    >
                                      Añadir
                                    </button>
                                  </div>
                                </div>

                                <p className="texto flex-1 sm:block hidden">
                                  {value.des}
                                </p>
                                

                                
                              </div>
                              <hr className="rayaSombra my-2 border-[#39404E]" />
                            </li>
                        )
                      })
                    }
                    {
                      filtro.length===0 && 
                      <div className="h-44 flex justify-center items-center">
                        <h3 className="texto text-center text-xl font-bold">No coincide "{buscar}" con los productos que buscas</h3>
                      </div>
                    }
                  </div>
                </div>

                        

              </div>
            }
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const CompoAcceder = () => {

  const [ estadoAccederCambio, setEstadoAccederCambio ] = useState(true)

  const { data: session, status } = useSession();

  const newWindow = async () => {
    const url = "/aut-google";
    const ventanaAncho = 602;
    const ventanaAlto = 620;
    const opciones = `width=${ventanaAncho} ,height=${ventanaAlto} ,left=${
      screen.width / 4
    } ,top=${screen.height / 4}`;

    const titulo = "Sign In";

    window.open(url, titulo, opciones);
  };


  return (
    <>

        {status === "unauthenticated" ? (
          <>
            <AnimatePresence>
              {estadoAcceder.value && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-slate-600"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
                  onClick={() => {
                    cambioAcceder()
                    setEstadoAccederCambio(true)
                  }}
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="relative h-[480px] w-[480px] bgFondo bgFondo p-2 rounded uellas1"
                  >
                    <AnimatePresence>
                      {estadoAccederCambio && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute left-0 top-0 h-full w-full"
                        >
                          <h2 className="mb-2 mt-4 text-center text-3xl font-bold texto">
                            Acceder
                          </h2>
                          <div className="mt-4 flex justify-center">
                            <form
                              className="w-[80%] space-y-4 md:space-y-6"
                              onSubmit={(e) => {
                                e.preventDefault();
                              }}
                            >
                              <div>
                                <label
                                  htmlFor="usuario"
                                  className="mb-2 block text-sm font-medium texto"
                                >
                                  Usuario
                                </label>
                                <input
                                  // onChange={(e) => sesion(e)}
                                  // value={enviar.usuario}
                                  type="usuario"
                                  name="usuario"
                                  className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                                  placeholder="usuario"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="Contraseña"
                                  className="mb-2 block text-sm font-medium texto"
                                >
                                  Contraseña
                                </label>
                                <input
                                  // onChange={(e) => sesion(e)}
                                  // value={enviar.Contraseña}
                                  type="Contraseña"
                                  name="Contraseña"
                                  placeholder="••••••••"
                                  className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                                />
                              </div>
                              <button
                                type="submit"
                                className="w-full bg-[#B03E3E] hover:bg-[#8e2828] px-5 py-2.5 text-center text-sm text-[#F0F0F3] border border-[#B03E3E00] hover:border-[#B03E3E] active:border-[#B03E3E] font-medium active:outline-none rounded sombra2 textoColor1"
                                style={{ transitionDuration: "0.3s", color: "#F0F0F3" }}
                              >
                                Iniciar sesión
                              </button>

                              <button
                                className="bgFondo flex justify-center w-full px-5 py-2.5 text-center text-sm font-medium texto hover:bg-[#f0f0f3] active:outline-none rounded sombra"
                                style={{
                                  border: "1px solid #d2d2d2",
                                  transitionDuration: "0.3s",
                                }}
                                onClick={() => newWindow()}
                              >
                                <img src="/svg/google.svg" alt="google" className="object-contain mr-1 h-5 w-5"/>
                                <span>Inicia sesión con Google</span>
                              </button>

                              <div className="flex w-full justify-center">
                                <div className="text-slate-600">¿Sin cuenta?</div>
                                <div
                                  onClick={() =>
                                    setEstadoAccederCambio(!estadoAccederCambio)
                                  }
                                  className="group ml-2 cursor-pointer font-bold text-[#B03E3E]"
                                >
                                  <div>Registrarse</div>
                                  <div
                                    className="w-0 bg-[#B03E3E] group-hover:w-full"
                                    style={{
                                      height: "2px",
                                      transitionDuration: "0.3s",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {!estadoAccederCambio && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute left-0 top-0 h-full w-full"
                        >
                          <h2 className="mb-2 mt-4 text-center text-3xl font-bold texto">
                            Registrarse
                          </h2>
                          <div className="mt-4 flex justify-center">
                            <form
                              className="w-[80%] space-y-4 md:space-y-6"
                              onSubmit={(e) => {
                                e.preventDefault();
                              }}
                            >
                              <div>
                                <label
                                  htmlFor="usuario"
                                  className="mb-2 block text-sm font-medium texto"
                                >
                                  Usuario
                                </label>
                                <input
                                  // onChange={(e) => sesion(e)}
                                  // value={enviar.usuario}
                                  type="usuario"
                                  name="usuario"
                                  className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                                  placeholder="usuario"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="Email"
                                  className="mb-2 block text-sm font-medium texto"
                                >
                                  Correo
                                </label>
                                <input
                                  // onChange={(e) => sesion(e)}
                                  // value={enviar.Email}
                                  type="Email"
                                  name="Email"
                                  className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                                  placeholder="Email"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="Contraseña"
                                  className="mb-2 block text-sm font-medium texto"
                                >
                                  Contraseña
                                </label>
                                <input
                                  // onChange={(e) => sesion(e)}
                                  // value={enviar.Contraseña}
                                  type="Contraseña"
                                  name="Contraseña"
                                  placeholder="••••••••"
                                  className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[##f0f0f3b3]"
                                />
                              </div>
                              <button
                                type="submit"
                                className="w-full bg-[#B03E3E] hover:bg-[#8e2828] px-5 py-2.5 text-center text-sm text-[#F0F0F3] border border-[#B03E3E00] hover:border-[#B03E3E] active:border-[#B03E3E] font-medium active:outline-none rounded sombra2 textoColor1"
                                style={{ transitionDuration: "0.3s", color: "#F0F0F3" }}
                              >
                                Registrarse
                              </button>

                              <div className="flex w-full justify-center">
                                <div className="text-slate-600">
                                  ¿Tienes una cuenta?
                                </div>
                                <div
                                  onClick={() =>
                                    setEstadoAccederCambio(!estadoAccederCambio)
                                  }
                                  className="group ml-2 cursor-pointer font-bold text-[#B03E3E]"
                                >
                                  <div>Acceder</div>
                                  <div
                                    className="w-0 bg-[#B03E3E] group-hover:w-full"
                                    style={{
                                      height: "2px",
                                      transitionDuration: "0.3s",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : null}

    </>
  )
}



export default Header;
