import Comentarios from "~/components/comentarios";
import Footer from "~/components/footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlechaUp from "~/svg/flechaUp";
import Head from "next/head";
import Image from "next/image";
import { string } from "zod";

const Nosotros = () => {
  return (
    <>
      <Head>
        <title>Nosotros</title>
      </Head>
      <h1
        className="my-7 text-center"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Nosotros
      </h1>
      <section className="mb-10 flex h-auto w-screen justify-center">
        <div
          className="flex h-auto w-full flex-wrap justify-center"
          style={{ maxWidth: "1100px" }}
        >
          <Image
            width={1000}
            height={1000}
            src="/img/equipos.jpeg"
            alt="nosotros1"
          />

          <Comentarios img={""} color={"#000"} />
          <div
            className="mb-6 w-full"
            style={{ height: "1px", backgroundColor: "#6767674d" }}
          ></div>

          <div className="flex w-full flex-col justify-center lg:flex-row">
            <div className="flex h-auto w-full flex-col items-center p-2 lg:w-2/5">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Expertos en salud y
              </h3>
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                felicidad de mascotas adorables.
              </h4>
              <Image
                height={1000}
                width={1000}
                src="/img/ado.jpg"
                alt="nosotros2"
                className="mt-3 h-96 w-72 object-cover"
              />
            </div>
            <div className="h-auto w-full p-5 lg:w-3/5 lg:p-2">
              <p className="estiloCapital mb-5">
                En nuestra clínica, somos un grupo apasionado de profesionales
                veterinarios comprometidos con la salud y bienestar de tus
                mascotas. Con años de experiencia y amor por los animales,
                proporcionamos atención médica excepcional, servicios
                especializados y un enfoque compasivo para garantizar que tus
                amigos peludos reciban el cuidado que merecen. Estamos aquí para
                ser tus socios en cada etapa de la vida de tus mascotas,
                brindando soluciones médicas avanzadas y una atención
                personalizada que fortalece el vínculo entre tú y tus compañeros
                peludos.
              </p>
              <Acordeon />
              <Acordeon />
              <Acordeon />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const Acordeon = () => {
  const [aco, setAco] = useState(false);

  return (
    <>
      <div className="my-5">
        <div
          className="flex h-14 w-full cursor-pointer items-center justify-around border-l border-r border-t"
          style={{ borderColor: "#6767674d" }}
          onClick={() => setAco(!aco)}
        >
          <span>Nuestro Compromiso con la Salud y Felicidad Animal</span>
          <FlechaUp
            className={`h-7 w-7 ${
              !aco ? "rotate-0" : "rotate-180"
            } transition-all`}
          />
        </div>

        <motion.div
          animate={{
            height: aco ? "135px" : "0px",
          }}
          style={{ borderColor: "#6767674d" }}
          className="flex h-auto w-full cursor-pointer items-center justify-center overflow-hidden border-b border-l border-r"
        >
          <span style={{ width: "90%", height: "80%" }}>
            Nuestra filosofía se centra en brindar atención integral, promover
            el bienestar animal y fortalecer el vínculo humano-animal. Expertos
            comprometidos contigo y tus mascotas.
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Nosotros;
