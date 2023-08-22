import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTienda } from "~/store/tienda";
import Anpliar from "~/svg/anpliar";
import CorazonSvg from "~/svg/corazonSvg";
import Tienda from "~/svg/tienda";
import { AnimatePresence, motion } from "framer-motion";
import Equiz from "~/svg/equiz";
import Footer from "~/components/footer";
import FlechaUp from "~/svg/flechaUp";
import Head from "next/head";

const Productos = () => {
  return (
    <>
    <Head>
        <title>Productos</title>
      </Head>
      <section>
        <h1
          className="my-6 text-center"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Productos
        </h1>

        <h2
          className="my-6 text-center"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <Link href="tienda mb-3">Ver todas las caregorias</Link>
        </h2>

        <div className="flex w-full">
          <div className="hidden pl-4 lg:block lg:w-72">
            <Acordeon1 />
            <Acordeon2 />
            {/* <Acordeon3 /> */}
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
  const tienda = useTienda((state) => state.tienda);

  return (
    <>
      <section className="my-10 flex flex-col justify-center">
        <div className="flex w-full justify-center">
          <ul
            className="flex h-auto flex-wrap justify-center"
            style={{ maxWidth: "1300px" }}
          >
            {tienda.map((value, key) => {
              console.log("value, key");
              console.log(value, key);

              return (
                <li key={key} className="m-3 bg-[#f6f2e5] p-2 shadow-md">
                  <figure
                    className="group relative flex h-64 w-52 cursor-pointer flex-col items-center overflow-hidden"
                    onClick={() => {
                      setDatalles(!datalles);
                      document.body.style.overflowY = "hidden";
                    }}
                  >
                    <Image
                      height={1000}
                      width={1000}
                      src={value.img}
                      alt={value.img}
                      className="h-full w-full scale-100 object-contain group-hover:scale-110"
                      style={{ transitionDuration: "0.3s" }}
                    />
                    <div
                      className="absolute bottom-6 z-10 flex h-10 w-28 scale-95 rounded bg-[#f6f2e5] opacity-0 group-hover:bottom-8 group-hover:scale-100 group-hover:opacity-100"
                      style={{ transitionDuration: "0.4s" }}
                    >
                      <div className="group-[1] flex h-full w-1/3 items-center justify-center">
                        <CorazonSvg
                          className=" h-3/4 w-3/4 scale-[0.8] fill-[#a1936500] text-[#7f1d1d] hover:scale-100 hover:fill-[#7f1d1d]"
                          style={{ transitionDuration: "0.1s" }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                        />
                      </div>
                      <div className="border-l border-[#7f1d1d]"></div>
                      <div className="flex h-full w-1/3 items-center justify-center">
                        <Tienda
                          className=" h-3/4 w-3/4 scale-[0.8] fill-[#a1936500] text-[#7f1d1d] hover:scale-100 hover:fill-[#7f1d1d]"
                          style={{ transitionDuration: "0.1s" }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                        />
                      </div>
                      <div className="border-l border-[#7f1d1d]"></div>
                      <div className="flex h-full w-1/3 items-center justify-center">
                        <Anpliar
                          className=" h-3/4 w-3/4 scale-[0.8] fill-none text-[#7f1d1d] hover:scale-100"
                          style={{ transitionDuration: "0.1s" }}
                        />
                      </div>
                    </div>
                  </figure>
                  <div className="my-1 text-lg font-bold text-[#8b3737]">
                    {value.nombre}
                  </div>
                  <div className="mb-2 text-[#521212]">{value.percio}</div>
                  <span
                    className="cursor-pointer border bg-white p-1 text-slate-600 hover:bg-slate-100"
                    style={{ transitionDuration: "0.2s" }}
                  >
                    Añadir al carrito
                  </span>

                  <AnimatePresence>
                    {datalles && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-500 bg-opacity-40"
                        onClick={() => {
                          setDatalles(!datalles);
                          document.body.style.overflowY = "auto";
                        }}
                      >
                        <div
                          onClick={(e) => {
                            setDatalles(!datalles);
                            document.body.style.overflowY = "auto";
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
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="scroll block h-4/5 w-4/5 flex-col overflow-y-auto bg-white md:flex md:flex-row"
                          // style={{ overflowY: "scroll" }}
                        >
                          <div className="flex h-[400px] w-full md:h-full md:w-1/2">
                            <div className="h-full w-24 p-2">
                              <img
                                className="mb-3 h-20 w-full cursor-pointer border border-transparent object-cover active:border-black"
                                src={value.img}
                                alt={value.nombre}
                              />
                              <img
                                className="mb-3 h-20 w-full cursor-pointer border border-transparent object-cover active:border-black"
                                src={value.img}
                                alt={value.nombre}
                              />
                            </div>
                            <div className="flex h-full flex-1 items-center justify-center p-4">
                              <img
                                className="h-3/4 w-full object-cover"
                                src={value.img}
                                alt={value.nombre}
                              />
                            </div>
                          </div>

                          <div className="h-[1000px] w-full p-5 md:h-full md:w-1/2">
                            <div className="mb-3 text-slate-400">
                              inicio / {value.nombre}
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-[#7f1d1d]">
                              {value.nombre}
                            </h3>
                            <div className="mb-3 text-[#c5b892]">
                              {value.percio}
                            </div>
                            <p className="mb-3 text-slate-700">{value.des}</p>
                            <button
                              className="my-2 flex w-full items-center justify-center bg-[#7f1d1d] py-2 text-white hover:bg-[#b24242]"
                              style={{ transitionDuration: "0.3s" }}
                            >
                              Añadir al carrito
                            </button>
                            <button className="group my-2 flex w-full items-center justify-center border-2 border-[#7f1d1d] py-2 text-[#7f1d1d] hover:border-[#b24242] hover:text-[#b24242]">
                              <div className="h-full">
                                <CorazonSvg
                                  className="mr-2 h-8 w-8 scale-[1] fill-[#a1936500] text-[#7f1d1d] group-hover:fill-[#7f1d1d]"
                                  style={{ transitionDuration: "0.4s" }}
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

  const imgTienda = [
    {
      nombre: "Alimentación y Nutrición",
      img: "/img/equipo2.jpg",
    },
    {
      nombre: "Accesorios para Perros",
      img: "/img/preventivo.jpg",
    },
    {
      nombre: "Accesorios para Gatos",
      img: "/img/ado.jpg",
    },
    {
      nombre: "Higiene y Cuidado",
      img: "/img/gatoVeterinaria.jpeg",
    },
    {
      nombre: "Salud y Bienestar",
      img: "/img/veterinaria1.jpg",
    },
    {
      nombre: "Entrenamiento y Educación",
      img: "/img/salud.jpg",
    },
    {
      nombre: "Productos para Roedores y Pequeñas Mascotas",
      img: "/img/ado.jpg",
    },
    {
      nombre: "Acuariofilia y Terrario",
      img: "/img/equipo1.jpg",
    },
    {
      nombre: "Aseo y Cuidado del Hogar",
      img: "/img/vacunas.webp",
    },
  ];

  return (
    <>
      <div className="">
        <div
          className="flex h-14 w-full cursor-pointer items-center justify-between"
          style={{ borderColor: "#6767674d" }}
          onClick={() => setAco(!aco)}
        >
          <span className="text-xl font-bold text-[#7f1d1d]">Categorias</span>
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

          {imgTienda.map((value, key) => {
            return (
              <div className="my-1 cursor-pointer" key={key}>
                {value.nombre}
              </div>
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

export default Productos;
