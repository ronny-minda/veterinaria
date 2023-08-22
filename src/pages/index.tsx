import { motion } from "framer-motion";

import Carrusel from "~/components/carrusel";
import Comentarios from "~/components/comentarios";
import Footer from "~/components/footer";
import Linea from "~/components/linea";
import Equipo from "~/components/equipo";
import Mapa from "~/components/mapa";
import Flecha from "~/svg/flecha";
import Contacto from "~/components/contacto";
import Head from "next/head";
import Image from "next/image";
import NuevosProductos from "~/components/nuevosProductos";

export default function Home() {
  const producto = [
    {
      img: "/img/vacunas.webp",
      titulo: "Consultas Veterinarias Personalizadas",
      des: "Nuestros expertos veterinarios están listos para atender las necesidades de salud de tu mascota. Ofrecemos consultas personalizadas para diagnosticar y tratar cualquier problema médico, desde enfermedades comunes hasta afecciones crónicas.",
    },
    {
      img: "/img/preventivo.jpg",
      titulo: "Cuidado Preventivo y Vacunas",
      des: "Mantén a tu amigo peludo sano y protegido. Ofrecemos programas de vacunación completos y consejos sobre cuidado preventivo para asegurarnos de que tu mascota esté protegida contra enfermedades y parásitos.",
    },
    {
      img: "/img/cirugia.jpg",
      titulo: "Cirugías Veterinarias de Calidad",
      des: "Nuestro equipo de cirujanos veterinarios altamente capacitados realiza una variedad de procedimientos quirúrgicos, desde cirugías de tejidos blandos hasta cirugías ortopédicas. Tu mascota estará en buenas manos durante todo el proceso.",
    },
    {
      img: "/img/salud.jpg",
      titulo: "Salud Dental para Mascotas",
      des: "La salud dental es esencial para el bienestar de tu mascota. Ofrecemos servicios dentales especializados, incluida limpieza dental, extracciones y atención a problemas de encías. Ayudamos a mantener las sonrisas saludables y felices.",
    },
  ];
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Carrusel />
      <section className="my-16 flex justify-center">
        <div
          className="flex flex-wrap justify-center"
          style={{ maxWidth: "1300px" }}
        >
          {producto.map((value, key) => {
            return (
              <article className="flex" key={key}>
                <div className="flex h-auto w-80 flex-col items-center">
                  <Image
                    height={1000}
                    width={1000}
                    src={value.img}
                    alt={value.img}
                    className="h-56 w-80 object-contain"
                  />
                  <h3
                    className="my-4"
                    style={{
                      fontSize: "26px",
                      fontWeight: "bold",

                      textAlign: "center",
                    }}
                  >
                    {value.titulo}
                  </h3>
                  <p style={{ color: "#545454", textAlign: "center" }}>
                    {value.des}
                  </p>
                </div>
                <div
                  className="h-full"
                  style={{ width: "1px", backgroundColor: "#eae6e3" }}
                ></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mb-20 w-screen lg:flex ">
        <div className="lg:mr-2 lg:w-1/2">
          <Image
            height={1000}
            width={1000}
            src="/img/diversion.jpg"
            alt="horno1"
            className="h-96 w-full object-cover"
          />
        </div>
        <div
          className="flex h-96 w-full items-center justify-center lg:w-1/2"
          style={{ backgroundColor: "#f6f3e4" }}
        >
          <div className="max-w-md">
            <h2 className="text-3xl font-bold" style={{}}>
              Juguetes y Diversión
            </h2>
            <p className="mt-3 text-base" style={{ color: "#545454" }}>
              ¿Quieres ver a tu mascota emocionada y feliz? Nuestra tienda de
              juguetes ofrece una amplia variedad de opciones para mantener a tu
              compañero peludo entretenido. Desde pelotas y juguetes
              interactivos hasta masticables y rompecabezas, tenemos todo lo que
              necesitas para mantener a tu mascota activa y comprometida. ¡La
              diversión nunca termina en nuestra tienda de juguetes para
              mascotas!
            </p>
            <div className="mt-3 h-6 w-20 cursor-pointer overflow-hidden">
              <motion.div
                style={{ x: -100 }}
                whileHover={{
                  x: 0,
                  transition: { duration: 0.5 },
                }}
                className="flex h-6 w-40 items-center justify-between"
              >
                <span>Leer mas</span>
                <Flecha style={{ stroke: "#000" }} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <NuevosProductos />
      <Linea />
      <Comentarios img={"img/establecimiento.jpg"} color={"#fff"} />
      <Equipo />
      <Contacto />
      <Mapa />
      <Footer />
    </>
  );
}
