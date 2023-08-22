import Image from "next/image";

const equipo = () => {
  const stado = [
    {
      img: "/img/equipo1.jpg",
      titulo: "Dra",
      nombre: "María García",
      des: "Apasionada por curar y cuidar a nuestros compañeros peludos",
    },
    {
      img: "/img/equipo2.jpg",
      titulo: "Dra",
      nombre: "Laura Martínez",
      des: "Experta en salud animal y bienestar con amor incondicional.",
    },
    {
      img: "/img/equipo3.jpg",
      titulo: "Dra",
      nombre: "Ana Rodríguez",
      des: "Dedicada a mantener sonrisas saludables en mascotas adorables.",
    },
  ];

  return (
    <section className="mt-7">
      <h2
        className="text-center"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        NUESTRO EQUIPO
      </h2>
      <p className="text-center" style={{ color: "#545454" }}>
        Lorem ipsum dolor sit amet, sed an dicat sententiae in has.
      </p>

      <div className="my-20 flex h-auto w-screen justify-center">
        <div
          className="flex h-full w-full flex-wrap justify-center"
          style={{ maxWidth: "1300px" }}
        >
          {stado.map((value, key) => {
            return (
              <div
                key={key}
                className="m-3"
                style={{ width: "346px", height: "460px" }}
              >
                <Image
                  src={value.img}
                  alt={value.img}
                  width={1000}
                  height={1000}
                  className="h-1/2 w-full object-cover"
                />
                <div
                  className="relative flex h-1/2 w-full flex-col items-center justify-between py-10"
                  style={{ backgroundColor: "#f6f2e5" }}
                >
                  <h3
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",

                      textAlign: "center",
                    }}
                  >
                    {value.nombre}
                  </h3>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#545454",
                    }}
                  >
                    {value.des}
                  </p>
                  <div className="h-6 w-16 bg-red-900"></div>
                  <div
                    className="absolute flex h-6 w-16 items-center justify-center"
                    style={{
                      top: "-8px",
                      left: "calc(50% - 32px)",
                      backgroundColor: "#bc9331",
                      color: "#fff",
                    }}
                  >
                    {value.titulo}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <article>
          <img src="" alt="" />
        </article> */}
      </div>
    </section>
  );
};

export default equipo;
