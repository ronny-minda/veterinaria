import Estrella from "~/svg/estrella";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Comentarios = ({ img, color }: { img: string; color: string }) => {
  const [estado, setEstado] = useState(0);

  const conte = [
    {
      nombre: "Randy Woods",
      comentario:
        "Everyone has a favourite cake, pastry, pudding or pie from when they were kids.",
    },
    {
      nombre: "Tom Tally",
      comentario:
        "As chefs, especially pastry chefs, your creativity plays such big part of daily work.",
    },
    {
      nombre: "Ina Dorsey",
      comentario:
        "Quality breads and pastries made to order. Beautiful Cakes for Beautiful Occasions.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("setInterval");

      setEstado((estado) => {
        let result;
        if (estado == conte.length - 1) {
          // console.log("reinicia");
          return (result = 0);
        }
        result = estado + 1;
        return result;
      });
    }, 12000);
    return () => {
      clearInterval(interval);
    };
  }, [conte.length]);

  return (
    <section
      className="relative flex w-screen items-center justify-center bg-cover bg-no-repeat"
      style={{ height: "500px", backgroundImage: `url('${img}')` }}
    >
      <div className="relative h-40 w-3/4 overflow-hidden">
        <AnimatePresence>
          {conte.map((value, key) => {
            if (estado == key) {
              return (
                <motion.div
                  initial={{ x: 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -1000, opacity: 0 }}
                  transition={{ type: "tween", duration: 2 }}
                  key={key}
                  className="absolute left-0 top-0 flex h-full w-full flex-col justify-between"
                >
                  <div className="flex h-6 w-full items-center justify-center">
                    <Estrella
                      style={{
                        width: "20px",
                        height: "20px",
                        fill: "#bb9230",
                        stroke: "#bb9230",
                      }}
                    />
                    <Estrella
                      style={{
                        width: "20px",
                        height: "20px",
                        fill: "#bb9230",
                        stroke: "#bb9230",
                      }}
                    />
                    <Estrella
                      style={{
                        width: "20px",
                        height: "20px",
                        fill: "#bb9230",
                        stroke: "#bb9230",
                      }}
                    />
                    <Estrella
                      style={{
                        width: "20px",
                        height: "20px",
                        fill: "#bb9230",
                        stroke: "#bb9230",
                      }}
                    />
                    <Estrella
                      style={{
                        width: "20px",
                        height: "20px",
                        fill: "#bb9230",
                        stroke: "#bb9230",
                      }}
                    />
                  </div>
                  <p
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: color,
                    }}
                  >
                    {value.comentario}
                  </p>
                  <h4 style={{ color: color }} className="text-center">
                    {value.nombre}
                  </h4>
                </motion.div>
              );
            }
          })}
        </AnimatePresence>
      </div>
      <div
        className="absolute flex items-center justify-between"
        style={{
          height: "30px",
          width: "100px",
          bottom: "80px",
          left: "calc(50% - 50px)",
        }}
      >
        {conte.map((value, key) => {
          return (
            <div
              key={key}
              className={`h-4 w-4 cursor-pointer hover:bg-white ${
                estado == key ? "bg-white" : "first-letter:"
              } rounded-full border border-white transition-colors`}
              onClick={(e) => {
                e.stopPropagation();
                setEstado(key);
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Comentarios;
