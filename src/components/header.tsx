import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { TIENDA, scrollBody } from "~/store/gloval";
import { useTransition, animated } from "@react-spring/web";

const FondoOpaco = signal(false);
const estadoMobile = signal(false);
const estadoTienda = signal(false);

const cambioTienda = () => {
  estadoTienda.value = !estadoTienda.value;
  scrollBody.value = !scrollBody.value;
};
const cambioMovile = () => {
  estadoMobile.value = !estadoMobile.value;
  scrollBody.value = !scrollBody.value;
};

const Header = () => {
  const { data: session, status } = useSession();

  // const botonHamburger = (e: any) => {
  //   estadoMobile.value = !estadoMobile.value;
  //   // document.body.style.overflowY = "auto";
  // };

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

  const TiendaArray = useTransition(TIENDA.value, {
    from: { opacity: 0, config: { duration: 500 } },
    enter: { opacity: 1, config: { duration: 500 } },
    leave: { opacity: 0, config: { duration: 500 } },
  });

  return (
    <>
      <header className="relative flex h-28 w-screen items-center justify-between p-5 shadow-md lg:justify-center">
        <div className="w-auto lg:flex lg:w-3/4 lg:items-center lg:justify-center">
          <li className="group mr-2 hidden h-auto w-auto list-none lg:block ">
            <Link
              className="letas text-[#7f1d1d]"
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
              style={{ height: "3px", transitionDuration: "0.3s" }}
            ></div>
          </li>
          <li className="group mr-2 hidden h-auto w-auto list-none lg:block">
            <Link
              className="letas text-[#7f1d1d]"
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
              style={{ height: "3px", transitionDuration: "0.3s" }}
            ></div>
          </li>
          <Link href="/">
            <Logo />
          </Link>
          <li className="group ml-2 hidden h-auto w-auto list-none lg:block">
            <Link
              className="letas text-[#7f1d1d]"
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
              style={{ height: "3px", transitionDuration: "0.3s" }}
            ></div>
          </li>
          <li className="group ml-2 hidden h-auto w-auto list-none lg:block">
            <Link
              className="letas text-[#7f1d1d]"
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
              style={{ height: "3px", transitionDuration: "0.3s" }}
            ></div>
          </li>

          <li className="group absolute right-28 top-10 h-auto w-auto cursor-pointer list-none lg:right-5">
            <button
              className="letas h-8 w-8"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
              onClick={() => {
                cambioTienda();
              }}
            >
              <Tienda
                className="h-full w-full fill-[#39404E] hover:fill-[#B03E3E]"
                style={{ transitionDuration: "0.4s" }}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {TIENDA.value.length > 0 && (
                <>
                  <div
                    className="botonSolidColor1 absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full"
                    style={{ fontSize: "13px" }}
                  >
                    {TIENDA.value.length}
                  </div>
                </>
              )}
            </button>
          </li>

          <li className="group absolute right-[160px] top-10 h-auto w-auto cursor-pointer list-none lg:right-[70px]">
            <button
              className="letas"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
              onClick={() => {
                FondoOpaco.value = !FondoOpaco.value;
                // document.body.style.overflowY = "hidden";
              }}
            >
              <CorazonSvg
                className="h-8 w-8 scale-[1] fill-[#a1936500] text-[#7f1d1d] group-hover:fill-[#7f1d1d]"
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
                1{/* {favoritos.length} */}
              </div>
            </button>
          </li>

          <li className="group absolute right-[205px] top-10 h-auto w-auto cursor-pointer list-none lg:right-[118px]">
            <button
              className="letas"
              style={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
              onClick={() => {
                FondoOpaco.value = !FondoOpaco.value;
                // document.body.style.overflowY = "hidden";
              }}
            >
              <Lupa
                className="h-8 w-8 scale-[1] fill-[#7f1d1d] text-[#7f1d1d]"
                style={{ transitionDuration: "0.4s" }}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
              />
            </button>
          </li>

          <li className="group absolute right-[250px] top-10 h-auto w-auto cursor-pointer list-none lg:right-[160px]">
            {status === "authenticated" ? (
              <div className="group cursor-pointer">
                <img
                  className="relative h-10 w-10 rounded-full"
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
            ) : (
              <button
                className="letas"
                style={{
                  fontSize: "22px",
                }}
                onClick={() => {
                  FondoOpaco.value = !FondoOpaco.value;
                  // // document.body.style.overflowY = "hidden";
                }}
              >
                Acceder
                <div
                  className="w-0 bg-[#7f1d1d] group-hover:w-full"
                  style={{ height: "3px", transitionDuration: "0.3s" }}
                ></div>
              </button>
            )}
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
              style={{ overflowY: "auto", height: "calc(100% - 103.993px)" }}
            >
              <ul className="flex w-3/4 flex-col">
                {TIENDA.value.length !== 0 && (
                  <>
                    {TiendaArray((style, item) => {
                      return (
                        <animated.li
                          style={{ ...style }}
                          className="sombra1 bgFondoOpa mb-6 mt-3 p-3"
                        >
                          <div className="group relative flex w-full">
                            <figure className="relative ml-[32px] mr-2 flex w-20 cursor-pointer flex-col items-center">
                              <Image
                                height={1000}
                                width={1000}
                                src={item.img}
                                alt={item.img}
                                className="h-full w-full object-contain"
                              />
                            </figure>
                            <div className="mx-2 flex flex-col">
                              <span className="textoColor1 text-base font-bold">
                                {item.nombre}
                              </span>
                              <span className="texto my-2 text-base font-bold">
                                ${Math.round(item.percio * 0.01 * 100) / 100}
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
                                $
                                {Math.round(
                                  item.percio * item.cantidad * 0.01 * 100
                                ) / 100}
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
                          <hr className="rayaSombra my-2 border-[#cbc1a0]" />
                        </animated.li>
                      );
                    })}
                  </>
                )}
                {TIENDA.value.length === 0 && (
                  <>
                    <div className="flex flex-col items-center justify-center">
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
                      $
                      {Math.round(
                        TIENDA.value.reduce((acumulador, valorActual) => {
                          return (
                            acumulador +
                            valorActual.percio * valorActual.cantidad * 0.01
                          );
                        }, 0) * 100
                      ) / 100}
                    </div>

                    {/* {Math.round(
                              item.percio * item.cantidad * 0.01 * 100
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

      {/* MENU */}
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
                  console.log("formularioooo");
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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

      {/* FAVORITO */}
      {/* <AnimatePresence>
        {estadoFavorito && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2 }}
            className="scroll fixed right-0 top-0 z-50 h-full w-[100%] bg-white  sm:w-[500px]"
            style={{ overflowY: "auto" }}
          >
            <div
              onClick={(e) => {
                setEstadoFavorito(!estadoFavorito);
                // document.body.style.overflowY = "auto";
              }}
              className="absolute right-5 top-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#fcedbc] shadow-lg shadow-[#fff0] hover:bg-[#fce2bc] hover:shadow-slate-200"
              style={{
                transitionDuration: "0.4s",
              }}
            >
              <Equiz
                className=""
                style={{
                  height: "20px",
                  with: "20px",
                }}
              />
            </div>

            <h3 className="mb-6 mt-12 text-center text-3xl">Lista de deseos</h3>
            <hr className="border-[#cbc1a0]" />
            <h4 className="my-6 ml-2 text-xl">Mi lista de deseos</h4>

            <div className="flex w-full justify-center">
              <ul className="mb-10 flex w-3/4 flex-col">
                {favoritos.map((value, key) => {
                  return (
                    <div key={key}>
                      <hr className="my-3 border-[#cbc1a0]" />
                      <li key={key} className="group flex">
                        <div className="mr-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-[#fcedbc] shadow-lg shadow-[#fff0] hover:bg-[#fce2bc] hover:shadow-slate-200">
                          <Equis />
                        </div>
                        <figure className="relative mx-2 flex w-20 cursor-pointer flex-col items-center">
                          <Image
                            height={1000}
                            width={1000}
                            src={value.img}
                            alt={value.img}
                            className="h-full w-full object-contain"
                          />
                        </figure>
                        <div className="mx-2 flex flex-col">
                          <span className="text-sm font-bold text-[#ba9d72]">
                            {value.nombre}
                          </span>
                          <span className="my-2 text-sm text-[#ba9d72]">
                            {value.percio}
                          </span>
                        </div>
                        <div className="mx-2 flex h-[100px] flex-1 flex-col items-center justify-center">
                          <button
                            className="h-1/2 w-[150px] bg-[#b94a4a] text-white hover:bg-[#e35c5c]"
                            style={{ transitionDuration: "0.3s" }}
                          >
                            Anadir al carrito
                          </button>
                          <button
                            className="h-1/2 w-[150px] text-slate-950 transition-colors hover:text-slate-500"
                            style={{ transitionDuration: "0.3s" }}
                          >
                            Quitar
                          </button>
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* LUPA */}
      {/* <AnimatePresence>
        {estadoLupa && (
          <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.2 }}
            className="scroll fixed right-0 top-0 z-50 h-auto w-screen bg-white"
            style={{ overflowY: "auto" }}
          >
            <div
              onClick={(e) => {
                setEstadoLupa(!estadoLupa);
                // document.body.style.overflowY = "auto";
              }}
              className="absolute right-5 top-5 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#fcedbc] shadow-lg shadow-[#fff0] hover:bg-[#fce2bc] hover:shadow-slate-200"
              style={{
                transitionDuration: "0.4s",
              }}
            >
              <Equiz
                className=""
                style={{
                  height: "20px",
                  with: "20px",
                }}
              />
            </div>

            <h3 className="mb-6 mt-12 text-center text-3xl">Buscar</h3>
            <hr className="border-[#cbc1a0]" />

            <div className="flex w-full justify-center">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("formularioooo");
                }}
                className="my-4 w-4/5 sm:w-2/4"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    className="fucus:border-blue-500 fucus:ring-blue-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 hover:ring-1 hover:ring-[#8b3737] focus:ring-1 focus:ring-[#8b3737]"
                    placeholder="Buscar"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute bottom-2.5 right-2.5 rounded-lg bg-[#8b3737] px-4 py-2 text-sm font-medium text-white hover:bg-[#be4e4e] active:outline-none active:ring-2 active:ring-[#521212]"
                  >
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* ACCEDER */}
      {/* <AnimatePresence>
        {status === "unauthenticated" ? (
          <>
            {estadoAcceder && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-slate-600"
                style={{ backgroundColor: "#54545454" }}
                onClick={(e) => {
                  setEstadoAcceder(!estadoAcceder);
                  // document.body.style.overflowY = "auto";
                }}
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="relative h-[480px] w-[480px] bg-white p-2"
                >
                  <AnimatePresence>
                    {estadoAccederCambio && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-0 top-0 h-full w-full"
                      >
                        <h2 className="mb-2 mt-4 text-center text-3xl font-bold text-[#521212]">
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
                                className="mb-2 block text-sm font-medium text-[#521212]"
                              >
                                Usuario
                              </label>
                              <input
                                // onChange={(e) => sesion(e)}
                                // value={enviar.usuario}
                                type="usuario"
                                name="usuario"
                                className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 hover:ring-1 hover:ring-[#8b3737] focus:ring-1 focus:ring-[#8b3737] sm:text-sm"
                                placeholder="usuario"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="Contraseña"
                                className="mb-2 block text-sm font-medium text-[#521212]"
                              >
                                Contraseña
                              </label>
                              <input
                                // onChange={(e) => sesion(e)}
                                // value={enviar.Contraseña}
                                type="Contraseña"
                                name="Contraseña"
                                placeholder="••••••••"
                                className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 hover:ring-1 hover:ring-[#8b3737] focus:ring-1 focus:ring-[#8b3737] sm:text-sm"
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-[#8b3737] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#ab4545] active:outline-none active:ring-2"
                              style={{ transitionDuration: "0.3s" }}
                            >
                              Iniciar sesión
                            </button>

                            <div
                              className="flex cursor-pointer items-center justify-center px-5 py-2 text-center text-xs first-letter:w-full hover:bg-slate-100 active:outline-none active:ring-2 active:ring-blue-300"
                              style={{
                                border: "1px solid #d2d2d2",
                                transitionDuration: "0.3s",
                              }}
                              onClick={() => newWindow()}
                            >
                              <div className="mr-1 h-5 w-5">
                                <Image
                                  src="/svg/google.svg"
                                  height={1000}
                                  width={1000}
                                  alt="horno1"
                                  className="h-full w-full object-contain"
                                />
                              </div>
                              <span>Inicia sesión con Google</span>
                            </div>

                            <div className="flex w-full justify-center">
                              <div className="text-slate-600">¿Sin cuenta?</div>
                              <div
                                onClick={() =>
                                  setEstadoAccederCambio(!estadoAccederCambio)
                                }
                                className="group ml-2 cursor-pointer font-bold text-[#8b3737]"
                              >
                                <div>Registrarse</div>
                                <div
                                  className="w-0 bg-[#8b3737] group-hover:w-full"
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
                        <h2 className="mb-2 mt-4 text-center text-3xl font-bold text-[#521212]">
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
                                className="mb-2 block text-sm font-medium text-[#521212]"
                              >
                                Usuario
                              </label>
                              <input
                                // onChange={(e) => sesion(e)}
                                // value={enviar.usuario}
                                type="usuario"
                                name="usuario"
                                className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 hover:ring-1 hover:ring-[#8b3737] focus:ring-1 focus:ring-[#8b3737] sm:text-sm"
                                placeholder="usuario"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="Email"
                                className="mb-2 block text-sm font-medium text-[#521212]"
                              >
                                Correo
                              </label>
                              <input
                                // onChange={(e) => sesion(e)}
                                // value={enviar.Email}
                                type="Email"
                                name="Email"
                                className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 hover:ring-1 hover:ring-[#8b3737] focus:ring-1 focus:ring-[#8b3737] sm:text-sm"
                                placeholder="Email"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="Contraseña"
                                className="mb-2 block text-sm font-medium text-[#521212]"
                              >
                                Contraseña
                              </label>
                              <input
                                // onChange={(e) => sesion(e)}
                                // value={enviar.Contraseña}
                                type="Contraseña"
                                name="Contraseña"
                                placeholder="••••••••"
                                className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 hover:ring-1 hover:ring-[#8b3737] focus:ring-1 focus:ring-[#8b3737] sm:text-sm"
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-[#8b3737] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#ab4545] active:outline-none active:ring-2"
                              style={{ transitionDuration: "0.3s" }}
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
                                className="group ml-2 cursor-pointer font-bold text-[#8b3737]"
                              >
                                <div>Acceder</div>
                                <div
                                  className="w-0 bg-[#8b3737] group-hover:w-full"
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
          </>
        ) : null}
      </AnimatePresence> */}
    </>
  );
};

const Compo = () => {
  return <></>;
};

export default Header;
