import Head from "next/head"
import { motion } from "framer-motion"
import LayoutProtect from "~/components/layoutProtect"
import Equiz from "~/svg/equiz"
import { useTransition, animated } from "@react-spring/web"
import { FAVORITOS, addProductoTienda } from "~/store/gloval"
import Imagen from "~/components/imagen"
import Link from "next/link"
import Equis from "~/svg/equis"

const Lista_de_deseos = () => {

  const FavoritoArray = useTransition(FAVORITOS.value, {
    from: { opacity: 0, config: { duration: 500 } },
    enter: { opacity: 1, config: { duration: 500 } },
    leave: { opacity: 0, config: { duration: 500 } },
  });

  return(
    <>
      <Head>
        <title>Lista de deseos</title>
      </Head>
      <LayoutProtect titulo="Lista de deseos">
        <div className="h-full w-full flex justify-center relative" >

          <div className="w-[320px] h-screen fixed right-0 bottom-0 z-[1] fondoPerro6" style={{height: "calc(100vh - 133px)"}}></div>

          <div
            className="z-[10] h-full w-full"
          >
            <div
              className="flex w-full justify-center"
            >
              <ul className="flex w-3/4 flex-col">
                {FAVORITOS.value.length !== 0 && (
                  <>
                    {FavoritoArray((style, item) => {
                      return (
                        <animated.li
                          style={{ ...style }}
                          className="sombra1 bgFondoOpa mb-3 mt-3 p-3"
                        >
                          <div className="group relative flex w-full">
                            <div className="ml-[32px] mr-2 flex w-20 h-24 cursor-pointer">
                              <Imagen className="" src={`${item.imagenes[0]?.src}`} alt={`${item.imagenes[0]?.src}`} modo={"contain"} />
                            </div>
                            <div className="mx-2 flex flex-col">
                              <span className="textoColor1 text-base font-bold">
                                {item.nombre}
                              </span>
                              <span className="font-bold">
                                ${Math.round(item.precio * 0.01 * 100) / 100}
                              </span>
                            </div>

                            <div className="absolute right-0 bottom-0 mx-2 flex items-start">
                              <button
                              onClick={()=> {
                                addProductoTienda(item)
                              }}
                                className="botonSolidColor1 rounded flex items-center justify-center text-[14px] py-[1px] px-[15px] text-lg"
                                style={{ transitionDuration: "0.3s" }}
                              >
                                Añadir
                              </button>
                            </div>

                            <div
                              onClick={() => {
                                FAVORITOS.value = FAVORITOS.value.filter(
                                  (iten) => iten.id !== item.id
                                );
                              }}
                              className="bgPrimerFondo absolute left-0 top-0 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full shadow-lg shadow-[#fff0] hover:shadow-slate-200"
                            >
                              <Equis />
                            </div>
                          </div>
                          <hr className="rayaSombra my-2 border-[#39404E]" />
                        </animated.li>
                      );
                    })}
                  </>
                )}
                {FAVORITOS.value.length === 0 && (
                  <>
                    <div className="flex flex-col items-center justify-center mt-[125px]">
                      <h3 className="texto text-center text-xl font-bold">
                        No hay nada en su lista de deseos
                      </h3>
                      <Link
                        href="/tienda"
                        className="botonSolidColor1 my-2 mt-5 flex w-4/5 items-center justify-center py-3 text-lg"
                        style={{ transitionDuration: "0.3s" }}
                      >
                        Siga Comprando
                      </Link>
                    </div>
                  </>
                )}
                <li className="">
                  <hr className="mb-[40px] border-[#cbc1a0] opacity-0" />
                </li>
              </ul>
            </div>

          </div>

        </div>


      </LayoutProtect>
    </>
  )
}

export default Lista_de_deseos