import { useSession } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import { DragEvent, FormEvent, useEffect, useState } from "react"
import LayoutProtect from "~/components/layoutProtect"
import { scrollBody } from "~/store/gloval"
import { toast } from "sonner"
import { api } from "~/utils/api"
import ComprimirImg from "~/components/comprimirImg"

const Detalles_de_la_cuenta = () => {
  const { data: sesion } = useSession()
  const [ visible, setVisible ] = useState(false)
  const [ img64, setImg64 ] = useState("") //<-- imagen base64
  const [ img64Limpio, setImg64Limpio ] = useState("")
  const [ contraseñaRepetir, setContraseñaRepetir ] = useState("")
  const [ ojo, setOjo ] = useState(false)
  const [ soltar, setSoltar ] = useState(false)
  const [ user, setUser ] = useState({
    nombre: "",
    email: "",
    contraseña: "",
    imagen: ""
  })

  // QUERY CARGA DE LOS TADOS DEL USER
  const { isLoading, data: userData } = api.user.pedirUno.useQuery(undefined, {
    onSuccess: (data) => {

      if(data) {
        setUser({
          ...user,
          nombre: `${data.name}`,
          email: `${data.email}`,
          imagen: `${data.image}`,
        })
      }
      
    }
  })

  // MUTACION ACTUALIZACION DEL USER
  const userApiActualizar = api.user.actualizar.useMutation({
    onSuccess: (data)=> {
      toast(data.msg)
      setUser({...user, contraseña: ""})
      if(userData) {
        userData.name = user.nombre
        userData.email = user.email
        userData.image = img64===""?userData?.image:img64
      }
      if(sesion) {
        sesion.user.image = img64===""?userData?.image:img64
      }
    }
  })

  // ENVIAR LOS DATOS AL BACK
  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("enviar")

    userApiActualizar.mutate({
      nombre: `${user.nombre}`,
      email: `${user.email}`,
      contraseña: user.contraseña,
      imagen: img64Limpio === ""?`${user.imagen}`:`${img64Limpio}`,
    })
  }

  // CARGAR IMAGEN FRON
  const cargarImg = (archivo: File | undefined ) => {

    setSoltar(false)

    if(archivo?.type.includes("image")) {
      toast("Imagen cargada.")
      
      
      if (archivo) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const img64 = `${reader.result}`
          setImg64(img64)

          // const ImgLimpio = img64.match(/^data:(.+);base64,(.+)$/)
          
          // if(ImgLimpio) {
          //   setImg64Limpio(`${ImgLimpio[2]}`)
          // }

          cambioVisible()
        }
        reader.readAsDataURL(archivo);
      }

    }
    if(!archivo?.type.includes("image")) {
      toast("el archivo no es una imagen")
    }
  }

  // CAMBIO DE LA VISIBILIDAD DE LA CONTRASEÑA FORMULARIO
  const cambioVisible = () => {
    scrollBody.value = !scrollBody.value
    setVisible(!visible)
  }

  return(
    <>
      <Head>
        <title>Detalles de la cuenta</title>
      </Head>
      <LayoutProtect titulo="Detalles de la cuenta">
        <div className="h-full w-full flex justify-center relative">

          {/* <div className="h-full w-[320px] absolute right-0 top-0 z-[5] fondoPerro5"></div> */}
          <div className="w-[320px] h-screen fixed right-0 bottom-0 z-[1] fondoPerro5" style={{height: "calc(100vh - 133px)"}}></div>
          <ComprimirImg base64Original={img64} setImg64Limpio={setImg64Limpio} />
            
          <AnimatePresence>
            {
              !isLoading &&
              <motion.form
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 1}}
                className="w-[80%] space-y-4 md:space-y-6 z-[10]"
                onSubmit={(e) => enviar(e)}
              >
                <div className="w-full flex justify-center">
                  <div className="w-[100px] h-[100px] relative cursor-pointer group" style={{clipPath: "circle(50% at 50% 50%)"}} onClick={()=> cambioVisible()}>
                    {
                      img64!==""?<img src={`${img64}`} alt={`${sesion?.user.email}`} className="w-full h-full object-cover" />:null
                    }
                    {
                      img64===""?<img src={`${sesion?.user.image}`} alt={`${sesion?.user.email}`} className="w-full h-full object-cover" />:null
                    }
                    
                    <div className="w-full h-1/2 absolute bottom-0 left-0 bg-[#00000091] opacity-0 group-hover:opacity-100 flex justify-center items-center text-white" style={{transitionDuration: "0.4s"}}>
                      <span>Cambiar</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="Nombre"
                    className="mb-2 block text-base font-medium texto"
                  >
                    Nombre
                  </label>
                  <input
                    onChange={(e) => setUser({...user, nombre: e.target.value})}
                    value={`${user.nombre}`}
                    id="Nombre"
                    type="Nombre"
                    name="nombre"
                    className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                    placeholder="Nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-base font-medium texto"
                  >
                    Correo
                  </label>
                  <input
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    value={`${user.email}`}
                    id="email"
                    type="email"
                    name="email"
                    className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                    placeholder="email"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="Contraseña"
                    className="mb-2 block text-base font-medium texto"
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => setUser({...user, contraseña: e.target.value})}
                      value={`${user.contraseña}`}
                      id="Contraseña"
                      type={ojo?"text":"password"}
                      name="Contraseña"
                      placeholder="Nueva Contraseña"
                      className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                    />
                    <div onClick={()=> setOjo(!ojo)} className="w-6 h-6 absolute right-2 top-[50%] -translate-y-1/2 cursor-pointer group">
                      {
                        ojo
                        ?
                        <OjoAbierto className="w-6 h-6 stroke-[#39404E] group-hover:stroke-[#39404ec5] absolute top-0 left-0" />
                        :
                        <OjoCerrado className="w-6 h-6 stroke-[#39404E] group-hover:stroke-[#39404ec5] absolute top-0 left-0" />
                      }
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    onChange={(e) => setContraseñaRepetir(e.target.value)}
                    value={contraseñaRepetir}
                    id="ContraseñaRepetir"
                    type={ojo?"text":"password"}
                    name="Contraseña"
                    placeholder="Repita la Contraseña"
                    className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                  />
                  <div 
                    onClick={()=> setOjo(!ojo)} 
                    className="w-6 h-6 absolute right-2 top-[50%] -translate-y-1/2 cursor-pointer group"
                  >
                    {
                      ojo
                      ?
                      <OjoAbierto className="w-6 h-6 stroke-[#39404E] group-hover:stroke-[#39404ec5] absolute top-0 left-0" />
                      :
                      <OjoCerrado className="w-6 h-6 stroke-[#39404E] group-hover:stroke-[#39404ec5] absolute top-0 left-0" />
                    }
                  </div>
                </div>
                {
                  user.contraseña !== ""
                  ?
                  <>
                    {
                      user.contraseña===contraseñaRepetir
                      ?
                      <>
                        <p className="text-green-500 font-bold">Las dos contraseñas son correctas</p>
                      </>
                      :
                      <>
                        <p className="text-red-500 font-bold">Las dos contraseñas no coinciden</p>
                      </>
                    }
                  </>
                  :
                  <>
                    <p className="text-blue-500 font-bold">No escriba nada en las contraseñas para no cambiar su contraseña</p>
                  </>
                }
                <button
                  type="submit"
                  disabled={user.contraseña===contraseñaRepetir||user.contraseña===""&&contraseñaRepetir===""?false:true} // <-Opctimizar condicionales para el disabled
                  className="no w-full bg-[#B03E3E] hover:bg-[#8e2828] px-5 py-2.5 text-center text-sm text-[#F0F0F3] border border-[#B03E3E00] hover:border-[#B03E3E] active:border-[#B03E3E] font-medium active:outline-none rounded sombra2 textoColor1"
                  style={{ transitionDuration: "0.3s", color: "#F0F0F3" }}
                >
                  Actualizar
                </button>

              </motion.form>
            }
          </AnimatePresence>

        </div>

        <AnimatePresence>
          {
            visible && 
            
            <motion.div 
              initial={{opacity: 0}} 
              animate={{opacity: 1}} 
              exit={{opacity: 0}} 
              className="h-screen w-screen flex justify-center items-center fixed top-0 left-0 bg-[#00000059] z-[15]"
              onClick={()=> cambioVisible()}
            >

              <div className="flex items-center justify-center w-[75%] h-64 group relative"
                onClick={(e)=> e.stopPropagation()}
              >
            
                <label
                  htmlFor="dropzone-file"
                  className="peer/name h-full w-full z-[13] absolute top-0 left-0 cursor-pointer"
                  onClick={(e)=> {
                    e.stopPropagation()
                  }}
                  onDragOver={(e)=> {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onDragEnter={(e)=> {
                    e.preventDefault()
                    e.stopPropagation()
                    setSoltar(true)
                  }}
                  onDragLeave={(e)=> {
                    e.preventDefault()
                    e.stopPropagation()
                    setSoltar(false)
                  }}
                  onDrop={(e)=> {
                    e.preventDefault()
                    e.stopPropagation()
                    const archivo = e.dataTransfer.files[0]
                    cargarImg(archivo)
                  }}
                ></label>
                
                <div
                  className="flex flex-col items-center justify-center w-full h-full border-2 border-[#b03e3e] peer-hover/name:border-[#F0F0F3] border-dashed rounded-lg cursor-pointer bg-[#F0F0F3] peer-hover/name:bg-[#b03e3e] text-[#b03e3e] peer-hover/name:text-[#F0F0F3]"
                  style={{transitionDuration: "0.4s", color: !soltar?"#b03e3e":"#F0F0F3", backgroundColor: !soltar?"#F0F0F3":"#b03e3e"}}
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm"><span className="font-semibold"> Haga clic para cargar</span> o arrastre y suelte</p>
                      <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file" 
                    className="hidden"
                    onChange={(e)=> {
                      if(e.target.files) {
                        const archivo = e.target.files[0]
                        cargarImg(archivo)
                      }
                    }}
                  />
                </div>

              </div>

            </motion.div>
          }
        </AnimatePresence>
      </LayoutProtect>
    </>
  )
}

const OjoAbierto = (props: any) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </>
  )
}

const OjoCerrado = (props: any) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    </>
  )
}

export default Detalles_de_la_cuenta