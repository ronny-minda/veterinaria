import { motion } from "framer-motion";

const Linea = () => {
  const conten = [
    {
      img: "img/veterinaria1.jpg",
      titulo: "Local 1",
      año: "2000",
      des: "Alto nivel de atención y amor a tus queridas mascotas. Somos más que una simple clínica veterinaria; somos un hogar de cuidado compasivo donde cada animal es tratado como un miembro de la familia. Con años de experiencia y un equipo de profesionales veterinarios apasionados.",
    },
    {
      img: "img/veterinaria2.jpg",
      titulo: "Local 2",
      año: "2000",
      des: "Alto nivel de atención y amor a tus queridas mascotas. Somos más que una simple clínica veterinaria; somos un hogar de cuidado compasivo donde cada animal es tratado como un miembro de la familia. Con años de experiencia y un equipo de profesionales veterinarios apasionados.",
    },
    {
      img: "img/veterinaria3.jpg",
      titulo: "Local 3",
      año: "2000",
      des: "Alto nivel de atención y amor a tus queridas mascotas. Somos más que una simple clínica veterinaria; somos un hogar de cuidado compasivo donde cada animal es tratado como un miembro de la familia. Con años de experiencia y un equipo de profesionales veterinarios apasionados.",
    },
    {
      img: "img/veterinaria4.jpg",
      titulo: "Local 4",
      año: "2000",
      des: "Alto nivel de atención y amor a tus queridas mascotas. Somos más que una simple clínica veterinaria; somos un hogar de cuidado compasivo donde cada animal es tratado como un miembro de la familia. Con años de experiencia y un equipo de profesionales veterinarios apasionados.",
    },
  ];

  return (
    <section
      className="overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <h2 className="my-10 text-center text-3xl font-bold" style={{}}>
        NUESTAR HISTORIA
      </h2>
      {conten.map((value, key) => {
        return (
          <article
            key={key}
            className={`mb-10 flex h-auto w-screen flex-col lg:mb-0 lg:h-80 ${
              key % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div
              className="flex h-full w-screen items-center justify-center lg:w-2/5"
              // style={{
              //   width: "40%",
              // }}
            >
              <motion.img
                viewport={{ once: true }}
                initial={{
                  x: 100,
                  opacity: 0,
                  clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                transition={{ duration: 1 }}
                src={value.img}
                alt={value.img}
                className="w-11/12 lg:w-96"
                style={{
                  height: "251px",
                  // width: "427px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="relative hidden h-full justify-center lg:block lg:flex"
              style={{
                width: "20%",
              }}
            >
              <div
                className="flex items-center"
                style={{
                  width: "1px",
                  height: "100%",
                  backgroundColor: "#bc9331",
                }}
              ></div>
              <div
                className="absolute rounded-full"
                style={{
                  width: "12px",
                  height: "12px",
                  top: "calc(50% - 6px)",
                  left: "calc(50% - 6px)",
                  backgroundColor: "#bc9331",
                }}
              ></div>
              <div
                className="absolute"
                style={{
                  width: "30px",
                  height: "1px",
                  top: "calc(50% - 1px)",
                  left: key % 2 !== 0 ? "calc(35% - 15px)" : "calc(65% - 15px)",
                  backgroundColor: "#bc9331",
                }}
              ></div>
              <div
                className="absolute font-bold"
                style={{
                  width: "50px",
                  height: "30px",
                  top: "calc(47% - 15px)",
                  left: key % 2 !== 0 ? "calc(10% - 25px)" : "calc(90% - 25px)",

                  fontSize: "30px",
                  color: "#bc9331",
                }}
              >
                {value.año}
              </div>
            </div>
            <div
              className="flex h-full w-full items-center justify-center lg:w-2/5"
              // style={{
              //   width: "40%",
              // }}
            >
              <motion.div
                viewport={{ once: true }}
                initial={{
                  y: 100,
                  opacity: 0,
                  clipPath: "polygon(100% 100%, 0 100%, 0 100%, 100% 100%)",
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)",
                }}
                transition={{ duration: 1 }}
                className="flex w-4/5 flex-col justify-center lg:w-96 lg:flex-none"
                style={{ height: "auto" }}
              >
                <h3
                  className="text-center font-bold lg:text-left"
                  style={{ fontSize: "30px" }}
                >
                  {value.titulo}
                </h3>
                <p
                  className="text-center lg:text-left"
                  style={{ color: "#545454" }}
                >
                  {value.des}
                </p>
              </motion.div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Linea;
