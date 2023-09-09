import Flecha from "~/svg/flecha";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carrusel = () => {
  const [actual, setActual] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const imgCarrucel = [
    "img/gatoVeterinaria.jpeg",
    "img/juguetesVeterinaria.jpg",
    "img/perroVeterinaria.jpg",
  ];
  const msgCarrucel = [
    "Gato Veterinaria",
    "Juguetes Veterinaria",
    "Perro Veterinaria",
  ];

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // // console.log("setInterval");

      setActual((actual) => {
        let result;
        if (actual == imgCarrucel.length - 1) {
          // // console.log("reinicia");
          return (result = 0);
        }
        result = actual + 1;
        return result;
      });
    }, 12000);
    return () => {
      clearInterval(interval);
    };
  }, [imgCarrucel.length]);

  const controlCarrusel = (e: any) => {
    e.stopPropagation();
    // console.log("cambio");
  };

  return (
    <section>
      <div className="relative w-full" style={{ height: "600px" }}>
        <div
          className="absolute left-2 top-2/4 z-30 flex h-5 w-20 cursor-pointer items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            // console.log(imgCarrucel.length);
            if (actual == imgCarrucel.length - 1) {
              // console.log("reinicia");
              setActual(0);
              return;
            }
            setActual(actual + 1);
          }}
        >
          <Flecha
            style={{ stroke: "#fff", fill: "#fff" }}
            className="hidden rotate-180 lg:block"
          />
        </div>
        <div
          className="absolute right-2 top-2/4 z-30 flex h-5 w-20 cursor-pointer items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            // console.log(imgCarrucel.length);
            if (actual == 0) {
              // console.log("reinicia");
              setActual(imgCarrucel.length - 1);
              return;
            }
            setActual(actual - 1);
          }}
        >
          <Flecha
            style={{ stroke: "#fff", fill: "#fff" }}
            className="hidden rotate-0 lg:block"
          />
        </div>

        <div className=" relative h-full w-full">
          <AnimatePresence>
            {imgCarrucel.map((value, key) => {
              if (actual == key) {
                return (
                  <motion.div
                    initial={{ x: screenWidth, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -screenWidth, opacity: 0 }}
                    transition={{ type: "tween", duration: 2 }}
                    key={key}
                    style={{
                      backgroundImage: `url('${value}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "brightness(70%)",
                    }}
                    className="absolute left-0 top-0 z-20 h-full w-full"
                  ></motion.div>
                );
              }
            })}
          </AnimatePresence>

          <div
            className=" absolute bottom-0 z-30 flex h-10 w-32 items-center justify-between lg:hidden"
            style={{ left: "calc(50% - 64px)" }}
          >
            {imgCarrucel.map((value, key) => {
              return (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActual(key);
                    // // console.log(key);
                  }}
                  key={key}
                  className={`h-5 w-5 hover:bg-white ${
                    actual == key ? "bg-white" : ""
                  } cursor-pointer rounded-full border-2 border-white transition-colors`}
                ></div>
              );
            })}
          </div>

          <div
            className="absolute left-1/2 z-30 flex scale-50 flex-col items-center justify-between md:scale-75 lg:scale-100"
            style={{
              width: "700px",
              height: "250px",
              top: "calc(50% - 150px)",
              left: "calc(50% - 350px)",
            }}
          >
            <div className="relative h-14 w-36">
              <AnimatePresence>
                {msgCarrucel.map((value, key) => {
                  if (actual == key) {
                    return (
                      <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ type: "tween", duration: 2, delay: 0.1 }}
                        key={key}
                        className="absolute left-0 top-0 h-full w-full"
                        style={{
                          backgroundImage: `url('img/pluma.png')`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></motion.div>
                    );
                  }
                })}
              </AnimatePresence>
            </div>

            <div
              className="relative flex h-24 items-center justify-center"
              style={{
                fontSize: "65px",
                fontWeight: "bold",
                width: "600px",
                color: "#ffff",
              }}
            >
              <AnimatePresence>
                {msgCarrucel.map((value, key) => {
                  if (actual == key) {
                    return (
                      <motion.span
                        className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ type: "tween", duration: 2, delay: 0.5 }}
                        key={key}
                      >
                        {value}
                      </motion.span>
                    );
                  }
                })}
              </AnimatePresence>
            </div>

            <div className="relative h-14 w-72">
              <AnimatePresence>
                {msgCarrucel.map((value, key) => {
                  if (actual == key) {
                    return (
                      <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ type: "tween", duration: 2, delay: 1 }}
                        key={key}
                        className="absolute left-0 top-0 h-full w-full"
                        style={{
                          backgroundImage: `url('img/firma1.png')`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></motion.div>
                    );
                  }
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrusel;
