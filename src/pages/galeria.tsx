import Footer from "~/components/footer";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Galeria = () => {
  const imgGalery = [
    "/img/equipo2.jpg",
    "/img/preventivo.jpg",
    "/img/ado.jpg",
    "/img/gatoVeterinaria.jpeg",
    "/img/veterinaria1.jpg",
    "/img/salud.jpg",
    "/img/ado.jpg",
    "/img/equipo1.jpg",
    "/img/vacunas.webp",
  ];

  return (
    <>
      <Head>
        <title>Galeria</title>
      </Head>
      <h1
        className="mt-3 text-center"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        GALERIA
      </h1>
      <p className="mb-10 text-center" style={{ color: "#545454" }}>
        Explora momentos tiernos y aventuras inolvidables de nuestras adorables
        mascotas y clientes felices en nuestra galería.
      </p>

      <section className="mb-10 flex h-auto w-full justify-center">
        <div
          className="flex h-auto w-full flex-wrap justify-center "
          style={{ maxWidth: "1100px" }}
        >
          {imgGalery.map((value, key) => {
            return (
              <div key={key}>
                <Imagenes value={value} />
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

const Imagenes = ({ value }: { value: string }) => {
  const [detalles, serDetalles] = useState(false);
  const [ver, setVer] = useState(false);

  return (
    <>
      <div
        // href="/detalles"
        className="group relative m-4 flex cursor-pointer items-center justify-center"
        style={{ height: "350px", width: "300px" }}
        onClick={() => {
          setVer(!ver);
          // document.body.style.overflowY = "hidden";
        }}
        onMouseEnter={() => serDetalles(true)}
        onMouseLeave={() => serDetalles(false)}
      >
        <AnimatePresence>
          {detalles && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="z-10"
              style={{
                color: "#fff",
                fontSize: "25px",
                fontWeight: "bold",

                textAlign: "center",
              }}
            >
              Ver Detalles
            </motion.div>
          )}
        </AnimatePresence>

        <Image
          src={value}
          alt={value}
          width={1000}
          height={1000}
          className="absolute left-0 top-0 z-0 h-full w-full object-cover transition-all group-hover:blur-sm"
          style={{
            transition: "0.5s",
          }}
        />
      </div>
      <AnimatePresence>
        {ver && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              setVer(!ver);
              // document.body.style.overflowY = "auto";
            }}
            className="fixed left-0 top-0 z-50 mb-10 flex h-screen w-screen items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden="true"
              className="absolute right-3 top-3 h-10 w-10 cursor-pointer text-black hover:text-gray-500"
              style={{ transition: "0.5s" }}
              viewBox="0 0 19 19"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
              />
            </svg>
            <Image
              src={value}
              alt={value}
              width={1000}
              height={1000}
              className="h-4/5 w-4/5 cursor-pointer object-cover transition-all"
              style={{
                transition: "0.5s",
              }}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Galeria;
