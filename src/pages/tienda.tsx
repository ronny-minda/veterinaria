import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/footer";

const Tienda = () => {
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
    <Head>
        <title>Detalles</title>
      </Head>
      <h1
        className="my-6 text-center"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Tienda
      </h1>

      <section className="mb-10 flex h-auto w-full justify-center">
        <div
          className="flex h-auto w-full flex-wrap justify-center "
          style={{ maxWidth: "1500px" }}
        >
          {imgTienda.map((value, key) => {
            return (
              <div
                key={key}
                className="relative m-4 overflow-hidden rounded-md"
              >
                <Link href="/productos">
                  <div className="group h-[250px] w-[250px] cursor-pointer bg-red-400">
                    <figure>
                      <img
                        className="absolute left-0 top-0 z-20 h-full w-full object-cover group-hover:scale-110"
                        style={{ transitionDuration: "0.3s" }}
                        src={value.img}
                        alt={value.nombre}
                      />
                    </figure>
                    <div
                      className="absolute bottom-0 left-0 z-30 h-1/2 w-full scale-100 pl-5 pt-10 font-bold text-white"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(88,255,111,0) 100%)",
                      }}
                    >
                      {value.nombre}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Tienda;
