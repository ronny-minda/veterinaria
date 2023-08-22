import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlechaArriba from "~/svg/flechaArriba";
import Wha from "~/svg/wha";

const ConteWha = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 500) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    // Agregar el event listener cuando el componente se monta
    window.addEventListener("scroll", handleScroll);

    // Remover el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="wha fixed bottom-5 left-5 z-40 h-[70px] w-[70px] cursor-pointer rounded-2xl p-3"
        style={{
          background:
            "linear-gradient(0deg, rgba(34,178,61,1) 0%, rgba(88,255,111,1) 100%)",
        }}
      >
        <Wha
          className="h-full w-full scale-[1] fill-[#fff] text-[#fff]"
          style={{ transitionDuration: "0.4s" }}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
        />
      </div>

      <AnimatePresence>
        {scrollTop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-5 right-5 z-40 h-[60px] w-[60px] cursor-pointer rounded-full bg-slate-800 bg-opacity-50 p-3 hover:bg-opacity-75"
            style={{ transitionDuration: "0.2s" }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <FlechaArriba
              className="h-full w-full scale-[1] fill-[#fff] text-[#fff]"
              style={{ transitionDuration: "0.4s" }}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConteWha;
