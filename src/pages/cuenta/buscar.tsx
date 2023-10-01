import Head from "next/head"
import { useState } from "react"
import Imagen from "~/components/imagen"
import LayoutProtect from "~/components/layoutProtect"
import { ALLPRODUCTOSAPI, objProducto } from "~/store/gloval"

const Buscar = () => {
  const [ buscar, setBuscar ] = useState("")
  const [ filtro, setFiltro ] = useState<objProducto[]>([])

  return(
    <>
      <Head>
        <title>Buscar</title>
      </Head>
      <LayoutProtect titulo="Buscar">
        
        <div className="h-full w-full flex justify-center relative" >

          <div className="w-[320px] h-screen fixed right-0 bottom-0 z-[1] fondoPerro7" style={{height: "calc(100vh - 133px)"}}></div>

          <div
            className="z-[10] h-full w-full"
          >
            <div
              className="flex w-full justify-center"
            >
              
              <div
                className="scroll h-auto w-full flex flex-col"
                style={{ overflowY: "auto", height: "auto" }}
              >
                <div className="shadow-xl">

                  <div className="flex w-full justify-center">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        // // console.log("formularioooo");
                      }}
                      className="my-4 w-4/5 sm:w-2/4"
                    >
                      <label className="sr-only mb-2 text-sm font-medium text-[#39404E]">
                        Buscar
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            className="h-4 w-4 text-[#39404E]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-4 pl-10 text-xl text-gray-900 hover:border-[#fff] focus:border-[#fff]"
                          placeholder="Buscar"
                          required
                          onChange={(e)=> {
                            setBuscar(e.target.value)
                            const valorInput = e.target.value.toUpperCase()
                            const filtrado = ALLPRODUCTOSAPI.value.filter((valor)=> valor.nombre.toUpperCase().includes(valorInput))
                            setFiltro(filtrado)
                          }}
                        />
                        <button
                          type="submit"
                          className="absolute bottom-2.5 right-2.5 rounded bg-[#8b3737] px-6 py-2 text-base font-medium text-[#F0F0F3] hover:bg-[#B03E3E]"
                          style={{transitionDuration: "0.2s"}}
                        >
                          Buscar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {
                  buscar!=="" && 
                  <div className="flex-1 w-full" style={{boxShadow: "inset 0 25px 50px -12px rgb(0 0 0 / 0.25)"}}>
                    <div className="flex justify-center mt-6">
                      <div className="sm:w-4/5 w-full">
                        {
                          filtro.map((value, key)=> {
                            return(
                                <li
                                key={key}
                                  className="sombra1 bgFondoOpa my-7 p-3 list-none"
                                >
                                  <div className="group relative flex w-full">
                                    <div className="ml-[32px] mr-2 flex w-[115px] h-[155px] cursor-pointer">
                                      <Imagen className="" modo="cover" src={`${value.imagenes[0]?.src}`}
                                        alt={`${value.imagenes[0]?.src}`} />
                                    </div>

                                    <div className="flex flex-row sm:flex-col lg:flex-row">
                                      <div className="mx-2 flex flex-col">
                                        <span className="textoColor1 text-base font-bold w-[161px]">
                                          {value.nombre}
                                        </span>
                                        <span className="texto my-2 text-base font-bold">
                                          ${Math.round(value.precio * 0.01 * 100) / 100}
                                        </span>
                                      </div>

                                      <div className="mx-2 flex flex-col">
                                        <button
                                          className="botonSolidColor1 rounded mx-2 flex items-center justify-center py-2 px-5 text-lg"
                                          style={{ transitionDuration: "0.3s" }}
                                        >
                                          Añadir
                                        </button>
                                      </div>
                                    </div>

                                    <p className="texto flex-1 sm:block hidden">
                                      {value.descripcion}
                                    </p>
                                    

                                    
                                  </div>
                                  <hr className="rayaSombra my-2 border-[#39404E]" />
                                </li>
                            )
                          })
                        }
                        {
                          filtro.length===0 && 
                          <div className="h-44 flex justify-center items-center">
                            <h3 className="texto text-center text-xl font-bold">No coincide "{buscar}" con los productos que buscas</h3>
                          </div>
                        }
                      </div>
                    </div>

                            

                  </div>
                }
              </div>

            </div>

          </div>

        </div>

      </LayoutProtect>
    </>
  )
}

export default Buscar