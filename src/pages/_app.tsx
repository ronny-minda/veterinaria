import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import Layout from "~/components/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Toaster } from 'sonner'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [ stadoRuta, setStadoRuta ] = useState(true)
  const { route, pathname } = useRouter();

  const arrayPaht = pathname.split("/")

  useEffect(()=> {
    switch (arrayPaht[2]) {
      case "pedidos":
        setStadoRuta(false)
        break;
      case "buscar":
        setStadoRuta(false)
        break;
      case "direccion":
        setStadoRuta(false)
        break;
      case "detalles_de_la_cuenta":
        setStadoRuta(false)
      break;
      case "lista_de_deseos":
        setStadoRuta(false)
      break;
      default:
        setStadoRuta(true)
        break;
    }
  },[pathname])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0"
        />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>

      <SessionProvider session={session}>
        <div className="svgTectura" style={{minHeight: "100vh"}}>
          <Layout>
            <main className="relative w-screen">

              <AnimatePresence>
                <motion.div
                  // key={stadoRuta?route:null}
                  key={route}
                  initial={{ opacity: 0, position: "absolute" }}
                  animate={{ opacity: 1, position: "relative" }}
                  exit={{ opacity: 0, position: "absolute" }}
                  transition={{ duration: stadoRuta?1:0, delay: 0 }}
                  className="left-0 top-0 w-screen"
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>

            </main>
          </Layout>
        </div>
      </SessionProvider>

      <Fondo />
      <Toaster />
    </>
  );
};

const Fondo = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleResize = (e: MouseEvent) => {
      if (window.top) {
        const y = e.pageY - window.top.scrollY;
        const x = e.pageX;
        setPosition({
          x,
          y,
        });
      };
      }

    window.addEventListener("mousemove", handleResize);

    // Limpieza del efecto
    return () => {
      window.removeEventListener("mousemove", handleResize);
    };
  }, []);

  const mause = useSpring({
    to: { x: position.x, y: position.y },
  });
   
  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 -z-10">
        <animated.div
          className="h-0 w-0 absolute top-0 left-0 z-10 bg-red-200 rounded-full"
          style={{
            ...mause,
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 100px 80px",
          }}
        ></animated.div>
      </div>
    </>
  )
}

export default api.withTRPC(MyApp);
