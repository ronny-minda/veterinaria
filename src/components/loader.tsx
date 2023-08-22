import { signal } from "@preact/signals-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "~/svg/logo";

const valor = signal(true);

const Loader = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    let time: any;
    setTimeout(() => {
      time = valor.value = false;
      document.body.style.overflowY = "auto";
    }, 2000);
    return () => clearTimeout(time);
  }, []);

  return (
    <>
      <AnimatePresence>
        {valor.value && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={76}
              height={75}
              // fill="none"
              // className="hover:fill-[#7f1d1d]"
              style={{ transitionDuration: "0.5s" }}
            >
              <path d="M57.39 49.5c4.446 2.648 6.931 7.056 7.618 8.93 1.149 7.143-3.018 10.22-5.245 10.864-10.552 2.685-19.044-3.06-20.605-4.495-1.25-1.15-6.182 1.769-8.492 3.371-12.389 4.546-17.692-.645-18.795-3.808-2.897-7.993 3.746-13.28 7.43-14.924 2.698-1.099 4.288-4.412 4.746-5.932 2.897-8.991 7.368-12.488 9.241-13.112 10.84-3.846 17.171 7.139 18.982 13.112 1.349 4.096 3.975 5.703 5.12 5.995Z" />
              <ellipse
                cx={48.88}
                cy={19.974}
                rx={8.731}
                ry={10.714}
                transform="rotate(12.11 48.88 19.974)"
                // className="uso"
              />
              <ellipse
                cx={13.789}
                cy={35.209}
                rx={8.731}
                ry={10.714}
                transform="rotate(-28.538 13.789 35.21)"
              />
              <ellipse
                cx={26.777}
                cy={18.849}
                rx={8.731}
                ry={10.714}
                transform="rotate(-17.563 26.777 18.849)"
              />
              <ellipse
                cx={63.165}
                cy={36.526}
                rx={8.243}
                ry={9.909}
                transform="rotate(37.12 63.165 36.526)"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;
