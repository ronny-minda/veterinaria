import LayoutProtect from "~/components/layoutProtect"
import { formatter } from "~/store/gloval"
import { api } from "~/utils/api"
import { toast } from "sonner"
import Imagen from "~/components/imagen"
import { Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { z } from "zod"
import Head from "next/head"

const Productos_disponibles = () => {
  const [ img64Limpio, setImg64Limpio ] = useState<string[]>([]) //<-- imagenes base64 Limpia Comprimida
  const [ imgBru64, setImgBru64 ] = useState<string[]>([])
  const [ imgBru, setImgBru ] = useState<string[]>([])
  const [ editar, setEditar ] = useState(false)
  const [ soltar, setSoltar ] = useState(false)
  const [ forzarRender, setForzarRender ] = useState(true)

  const [ producto, setProducto ] = useState({
    id: "",
    nombre: "",
    cantidad: 0,
    categoria: "",
    descripcion: "",
    precio: 0,
    dataImg: [{
      id: "",
      src: "",
    }]
  })

  const { data: todosProductos, isLoading } = api.productos.todosProductos.useQuery()

  const borrarProducto = api.productos.borraProducto.useMutation({
    onSuccess: (data) => {
      toast(data?.msg)

      if(todosProductos?.allProduct) {
        
        const dataNueva = todosProductos?.allProduct.filter((value)=> {
          return value.id !== data?.idBorrado
        })

        todosProductos.allProduct = []

        if(dataNueva) {
          console.log("dataNueva")
          console.log(dataNueva)
          todosProductos.allProduct = dataNueva
        }
        setForzarRender(false)
        setTimeout(()=> {
          setForzarRender(true)
        }, 1)
      }

      setProducto({
        id: "",
        nombre: "",
        cantidad: 0,
        categoria: "",
        descripcion: "",
        precio: 0,
        dataImg: [{
          id: "",
          src: ""
        }]
      })
      setImgBru64([])
      setEditar(!editar)

    }
  })

  const actualizarProducto = api.productos.actualizarProducto.useMutation({
    onSuccess: (data) => {
      toast(data?.msg)

      if(todosProductos?.allProduct) {
        todosProductos.allProduct = todosProductos?.allProduct.map((value, key) => {
  
          if(producto.id === value.id) {
            
              value.id = producto.id
              value.nombre = producto.nombre
              value.cantidad = producto.cantidad
              value.categoria = producto.categoria
              value.descripcion = producto.descripcion
              value.precio = producto.precio
              value.imagenes = imgBru.map((valor, key) => {
                return {
                  id: `${value.imagenes[key]?.id}`,
                  src: valor,
                  productoId: `${value.imagenes[key]?.productoId}`
                }
              })
  
            return value
          }
  
          return value
        })
      }

      setForzarRender(false)
      setTimeout(()=> {
        setForzarRender(true)
      }, 1)

      setProducto({
        id: "",
        nombre: "",
        cantidad: 0,
        categoria: "",
        descripcion: "",
        precio: 0,
        dataImg: [{
          id: "",
          src: ""
        }]
      })
      setImgBru64([])
      setEditar(!editar)
    }
  })

  const totalDeImagenes = 2

  const select = [
    "Alimentacion y Nutricion",
    "Accesorios para Perros",
    "Accesorios para Gatos",
    "Higiene y Cuidado",
    "Salud y Bienestar",
    "Entrenamiento y Educacion",
    "Productos para Roedores y Pequeñas Mascotas",
    "Acuariofilia y Terrario",
    "Aseo y Cuidado del Hogar",
  ]

  if(isLoading) {
    return (
      <LayoutProtect titulo="Productos Disponibles">
        <p>cargando...</p>
      </LayoutProtect>
    )
  }


  // CARGAR IMAGEN FRON
  const cargarImgs = (archivos: FileList ) => {
    const archivosArray: File[] = Array.from(archivos);
                        
    const filtroImg = archivosArray.filter((valor)=> valor.type.includes("image"))

    filtroImg.map((value, key) => {
      
      const reader = new FileReader();
      reader.readAsDataURL(value);
    
      reader.onloadend = () => {
        const result = reader.result;
        if(totalDeImagenes > key ) {
          setImgBru64((valor)=> [...valor, result as string ])
          toast("Imagen cargada.")
        }
      };
      
    });

  }

  // ENVIAR LOS DATOS AL BACK
  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(imgBru.length!==0) {
      const envioTodo = {...producto, imagenes: imgBru}
      actualizarProducto.mutate(envioTodo) // <-- enviar los datos de actualizacion
      return
    }

    const resutLimpio = img64Limpio.map((value, key) => {

      const ImgLimpio = value.match(/^data:(.+);base64,(.+)$/)

      if(ImgLimpio) {
        return `${ImgLimpio[2]}`
      }
      return ""
    })

    if(imgBru64.length!==0) {
      const envioTodo = {...producto, imagenes: resutLimpio}
      actualizarProducto.mutate(envioTodo) // <-- enviar los datos de actualizacion
    }

  }

  const nuevoActualizar = () => {

  }

  if(forzarRender) {

  }
  
  if(!isLoading) {
    return (
      <>

        <Head>
          <title>Productos Disponibles</title>
        </Head>
        <LayoutProtect titulo="Productos Disponibles">

        <h3 className="texto text-left text-base font-bold">Total de productos guardados: {todosProductos?.allProduct.length}</h3>
          
          {
            forzarRender &&
            <>
              {
                todosProductos?.allProduct.length === 0 && 
                <>
                  <h3 className="texto text-center text-xl font-bold my-7">No hay ningun producto guardado.</h3>
                </>
              }
            </>
          }
          

          {
            todosProductos?.allProduct.length !== 0 && 
            <>
            
              {
                forzarRender &&
                <>
                  <ul className="h-full w-full sombra1">
                    {
                      todosProductos?.allProduct.map((value, key) => {

                        const { nombre, precio, descripcion, id, imagenes, cantidad, categoria } = value


                        if(nombre&&precio&&descripcion&&id&&imagenes&&cantidad&&categoria) {
                          return (
                            <li key={key} className="sombra1 bgFondoOpa my-7 p-3 list-none">
                              <div className="relative flex w-full">

                                <div
                                  onClick={()=> {
                                    setProducto({
                                      id,
                                      nombre,
                                      cantidad,
                                      categoria,
                                      descripcion,
                                      precio,
                                      dataImg: imagenes
                                    })
                                    setImgBru(() => {
                                      const resultImg = imagenes.map((value)=>{
                                        console.log("value.src")
                                        console.log(value.src)
                                        return value.src
                                      })
                                      return resultImg
                                    })
                                    setEditar(!editar)
                                  }}
                                  className="ml-[32px] mr-2 flex w-[115px] h-[155px] cursor-pointer group relative sombra1 border border-white"
                                >

                                  <div className="opacity-100 group-hover:opacity-0 w-full h-full duration-[0.5s] absolute top-0 left-0">
                                    <Imagen src={`${imagenes[0]?.src}`} alt={`${imagenes[0]?.id}`} modo="cover" className=""/>
                                  </div>
                                  <div className="opacity-0 group-hover:opacity-100 w-full h-full duration-[0.5s] absolute top-0 left-0">
                                    <Imagen src={`${imagenes[1]?.src}`} alt={`${imagenes[1]?.id}`} modo="cover" className=""/>
                                  </div>

                                </div>
                                <div className="flex flex-row sm:flex-col lg:flex-row">
                                  <div className="mx-2 flex flex-col">
                                    <span 
                                      onClick={()=> {
                                        setProducto({
                                          id,
                                          nombre,
                                          cantidad,
                                          categoria,
                                          descripcion,
                                          precio,
                                          dataImg: imagenes
                                        })
                                        setImgBru(() => {
                                          const resultImg = imagenes.map((value)=>{
                                            console.log("value.src")
                                            console.log(value.src)
                                            return value.src
                                          })
                                          return resultImg
                                        })
                                        setEditar(!editar)
                                      }}
                                      className="textoColor1 hover:text-[#e96767] text-lg font-bold w-[161px] cursor-pointer"
                                    >{nombre}</span>
                                    <span className="texto my-2 text-sm font-bold">{formatter.format(precio)}</span>
                                    <span className="texto my-2 text-sm font-bold">Cantidad: {cantidad}</span>
                                  </div>
                                  <div className="mx-2 flex flex-col">
                                    <button
                                      className="botonSolidColor2 rounded mx-2 flex items-center justify-center py-2 px-5 text-lg"
                                      style={{transitionDuration: "0.3s"}}
                                      onClick={()=> {
                                        setProducto({
                                          id,
                                          nombre,
                                          cantidad,
                                          categoria,
                                          descripcion,
                                          precio,
                                          dataImg: imagenes
                                        })
                                        setImgBru(() => {
                                          const resultImg = imagenes.map((value)=>{
                                            return value.src
                                          })
                                          return resultImg
                                        })
                                        setEditar(!editar)
                                      }}
                                    >Editar</button>
                                  </div>
                                </div>
                                <p className="texto flex-1 sm:block hidden truncate">{descripcion}</p>
            
                                <hr className="rayaSombra my-2 border-[#39404E]" />
                              </div>
                            </li>
                          )
                        }

                      })
                    }
                  </ul>
                </>
              }

              <AnimatePresence>
                {
                  editar && 
                  <>
                    <motion.div
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-[100] flex justify-center items-center"
                      onClick={()=> {
                        setProducto({
                          id: "",
                          nombre: "",
                          cantidad: 0,
                          categoria: "",
                          descripcion: "",
                          precio: 0,
                          dataImg: [{
                            id: "",
                            src: ""
                          }]
                        })
                        setImgBru64([])
                        setEditar(!editar)
                      }}
                    >

                      <div className="h-[80vh] w-[80vw] bgFondo rounded-[10px] overflow-y-auto p-[38px] scroll" onClick={(e)=> e.stopPropagation()}>
                        <div className="flex justify-center items-center flex-col">

                          <div className="sombraInto bg-[#f0f0f3b3] h-60 w-full mb-[68px] flex justify-center items-center rounded z-[1] relative">
                            <p className="absolute bottom-[-26px] left-0 text-blue-500">Solo subir {totalDeImagenes} imagenes.</p>
                            <p className="absolute bottom-[-55px] left-0 text-blue-500">Imagenes de 200 x 200.</p>

                            <AnimatePresence>
                              {
                                imgBru64.length !== 0 &&
                                <>
                                  <motion.div
                                    initial={{opacity: 0}} 
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    className="h-full w-full flex flex-wrap absolute top-0 left-0"
                                  >
                                    {
                                      imgBru64.map((value, key)=> {
                                        return (
                                          <div className="relative m-3 group rounded" key={key}>
                                            
                                            <div
                                              className="group-hover:opacity-100 opacity-0 absolute z-[10] top-0 right-0 h-7 w-7 bg-red-500 rounded-full cursor-pointer flex justify-center items-center text-white font-bold text-sm"
                                              style={{transitionDuration: "0.4s"}}
                                              onClick={()=> {
                                                const arrayFilterBru = imgBru64.filter((valor)=> {
                                                  return valor !== value
                                                })

                                                const arrayFilterLim = img64Limpio.filter((valor, llave)=> {
                                                  return llave !== key
                                                })

                                                setImg64Limpio(arrayFilterLim)
                                                setImgBru64(arrayFilterBru)
                                              }}
                                            >X</div>
                                            <div className="group-hover:opacity-50 opacity-0 absolute z-[9] top-0 right-0 h-full w-full bg-[#000] rounded" style={{transitionDuration: "0.4s"}}></div>
                                            {/* <img src={value} alt={`${key}`} className="h-full w-full z-[8]" /> */}
                                            
                                            <ComprimirImg base64Original={value} setImg64Limpio={setImg64Limpio} posision={key} />
                                          </div>
                                        )
                                      })
                                    }
                                  </motion.div>
                                </>
                              }
                            </AnimatePresence>

                            <AnimatePresence>
                              {
                                imgBru.length !== 0 &&
                                <>
                                  <motion.div
                                    initial={{opacity: 0}} 
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    className="h-full w-full flex flex-wrap absolute top-0 left-0"
                                  >
                                    {
                                      imgBru.map((value, key)=> {
                                        return (
                                          <div className="relative m-3 group rounded" key={key}>
                                            
                                            <div
                                              className="group-hover:opacity-100 opacity-0 absolute z-[10] top-0 right-0 h-7 w-7 bg-red-500 rounded-full cursor-pointer flex justify-center items-center text-white font-bold text-sm"
                                              style={{transitionDuration: "0.4s"}}
                                              onClick={()=> {
                                                const arrayFilterBru = imgBru.filter((valor)=> {
                                                  return valor !== value
                                                })

                                                // const arrayFilterLim = img64Limpio.filter((valor, llave)=> {
                                                //   return llave !== key
                                                // })

                                                // setImg64Limpio(arrayFilterLim)
                                                setImgBru(arrayFilterBru)
                                              }}
                                            >X</div>
                                            <div className="group-hover:opacity-50 opacity-0 absolute z-[9] top-0 right-0 h-full w-full bg-[#000] rounded" style={{transitionDuration: "0.4s"}}></div>
                                            {/* <img src={value} alt={`${key}`} className="h-full w-full z-[8]" /> */}
                                            
                                            <ComprimirImg base64Original={value} setImg64Limpio={setImg64Limpio} posision={key} />
                                          </div>
                                        )
                                      })
                                    }
                                  </motion.div>
                                </>
                              }
                            </AnimatePresence>

                            <AnimatePresence>
                              {
                                (imgBru.length === 0 && imgBru64.length === 0) &&
                                <>
                                  <motion.div
                                    initial={{opacity: 0}} 
                                    animate={{opacity: 1}} 
                                    exit={{opacity: 0}} 
                                    className="flex items-center justify-center h-full w-full group absolute top-0 left-0"
                                  >
                                    <label
                                      htmlFor="dropzone-file"
                                      className="peer/name h-full w-full z-[13] absolute top-0 left-0 cursor-pointer"
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
                                        setSoltar(false)
                                        const archivos = e.dataTransfer.files
                                        cargarImgs(archivos)
                                      }}
                                    ></label>
                                    <input
                                      id="dropzone-file"
                                      type="file"
                                      multiple
                                      accept="image/*"
                                      className="hidden"
                                      onChange={(e)=> {
                                        const archivos = e.target.files
                                        if(archivos) cargarImgs(archivos)
                                      }}
                                    />
                                    
                                    <div
                                      className="flex flex-col items-center justify-center w-[80%] h-[80%] border-2 border-[#b03e3e] peer-hover/name:border-[#F0F0F3] border-dashed rounded-lg cursor-pointer bg-[#F0F0F300] peer-hover/name:bg-[#b03e3e] text-[#b03e3e] peer-hover/name:text-[#F0F0F3]"
                                      style={{transitionDuration: "0.4s", color: !soltar?"#b03e3e":"#F0F0F3", backgroundColor: !soltar?"#F0F0F300":"#b03e3e"}}
                                    >

                                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm"><span className="font-semibold"> Haga clic para cargar</span> o arrastre y suelte</p>
                                        <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                      </div>
                                
                                    </div>

                                  </motion.div>
                                </>
                              }
                            </AnimatePresence>
                            
                          </div>

                          <form
                            className="w-[80%] space-y-4 md:space-y-6 z-[10]"
                            onSubmit={(e) => enviar(e)}
                          >

                            <div>
                              <label
                                htmlFor="Nombre"
                                className="mb-2 block text-base font-medium texto"
                              >
                                Nombre
                              </label>
                              <input
                                onChange={(e) => setProducto({...producto, nombre: e.target.value})}
                                value={`${producto.nombre}`}
                                id="Nombre"
                                type="Nombre"
                                name="nombre"
                                className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                                placeholder="Nombre"
                              />
                            </div>
                            <div className="flex">
                              <div>
                                <label
                                  htmlFor="cantidad"
                                  className="mb-2 block text-base font-medium texto"
                                >
                                  Cantidad
                                </label>
                                <input
                                  onChange={(e) => setProducto({...producto, cantidad: parseInt(e.target.value)})}
                                  value={`${producto.cantidad}`}
                                  id="cantidad"
                                  type="number"
                                  name="cantidad"
                                  className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                                  placeholder="cantidad"
                                />
                              </div>
                              <div className="relative">
                                <label
                                  htmlFor="precio"
                                  className="mb-2 block text-base font-medium texto"
                                >
                                  precio
                                </label>
                                <span className="absolute bottom-[11px] left-[7px] font-semibold">$</span>
                                <input
                                  onChange={(e) => setProducto({...producto, precio: parseInt(e.target.value)})}
                                  value={`${producto.precio}`}
                                  id="precio"
                                  type="number"
                                  name="precio"
                                  className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1] pl-[18px]"
                                  placeholder="precio"
                                />
                              </div>
                            </div>
                            <div>

                              <label 
                                htmlFor="categoria" 
                                className="block mb-2 text-base font-medium texto"
                              >Elija una categoria</label>

                              <select
                                id="categoria"
                                value={producto.categoria}
                                className="sombraSelect1 border border-[#F0F0F3] text-gray-900 text-sm rounded block w-full p-2.5 hover:border-[#fff] focus:border-[#fff] bg-[#F0F0F3]"
                                onChange={(e) => setProducto({...producto, categoria: e.target.value})}
                              >
                                <option defaultValue="true">Elija una categoria</option>
                                {
                                  select.map((value, key)=> <option key={key} value={value}>{value}</option>)
                                }
                              </select>
                            </div>
                            <div>
                              <label
                                htmlFor="descripcion"
                                className="mb-2 block text-base font-medium texto"
                              >
                                Descripcion
                              </label>

                              <textarea
                                name="descripcion"
                                id="descripcion"
                                className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
                                placeholder="Descripcion..."
                                onChange={(e) => setProducto({...producto, descripcion: e.target.value})}
                                value={`${producto.descripcion}`}
                              ></textarea>
                            </div>


                            <button
                              type="submit"
                              disabled={!(
                                z.string().min(5).safeParse(producto.nombre).success &&
                                z.number().positive().int().safeParse(producto.cantidad).success &&
                                z.string().min(5).safeParse(producto.categoria).success &&
                                z.string().min(5).safeParse(producto.descripcion).success &&
                                z.number().positive().int().safeParse(producto.precio).success &&
                                z.number().positive().int().safeParse(img64Limpio.length).success
                              )} 
                              className="no w-full bg-[#B03E3E] hover:bg-[#8e2828] px-5 py-2.5 text-center text-sm text-[#F0F0F3] border border-[#B03E3E00] hover:border-[#B03E3E] active:border-[#B03E3E] font-medium active:outline-none rounded sombra2 textoColor1"
                              style={{ transitionDuration: "0.3s", color: "#F0F0F3" }}
                            >
                              Actualizar
                            </button>

                            <button
                              type="button"
                              onClick={()=>{
                                borrarProducto.mutate({id: producto.id})
                              }}
                              className="no w-full bg-red-500 hover:bg-red-400 px-5 py-2.5 text-center text-sm text-[#F0F0F3] border border-red-500 hover:border-red-400 active:border-red-400 font-medium active:outline-none rounded sombra2 textoColor1"
                              style={{ transitionDuration: "0.3s", color: "#F0F0F3" }}
                            >
                              Borrar Producto
                            </button>

                          </form>

                        </div>
                      </div>

                    </motion.div>                          
                  </>
                }
              </AnimatePresence>
            </>
          }
          
        </LayoutProtect>
      </>
    )
  }
}

const ComprimirImg = ({base64Original, setImg64Limpio, posision}: {base64Original: string, setImg64Limpio: Dispatch<SetStateAction<string[]>>, posision: number}) => {
  const [ img64, setImg64 ] = useState("")

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const resulucionPorDefecto = 200

  useEffect(()=> {

    const canvas = canvasRef.current as HTMLCanvasElement ;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const img = document.getElementById(`scream${posision}`) as HTMLImageElement;

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if(img.width>img.height) {
      
      const newHeight = resulucionPorDefecto;

      const aspectRatio = img.width / img.height;
      const newWidth = newHeight * aspectRatio;

      ctx.drawImage(img,
      (-newWidth/2)+(resulucionPorDefecto/2),
      0,
      newWidth,
      newHeight)
      
    }
    
    if(img.width<img.height) {
      
      const newWidth = resulucionPorDefecto;

      const aspectRatio = img.height / img.width;
      const newHeight = newWidth * aspectRatio;

      ctx.drawImage(img,
      0,
      (-newHeight/2)+(resulucionPorDefecto/2),
      newWidth,
      newHeight)
      
    }
    
    if(img.width==img.height) {

      ctx.drawImage(img,
      0,
      0,
      resulucionPorDefecto,
      resulucionPorDefecto)
      
    }
    
    const base64Image = canvas.toDataURL('image/png');
    setImg64(base64Image)

  }, [base64Original])

  return (
    <>
      <div className="relative opacity-100" style={{width: `${resulucionPorDefecto}px`, height: `${resulucionPorDefecto}px`, opacity: "100"}}>

        <img src={base64Original} alt="" id={`scream${posision}`} className="opacity-0 absolute top-0 left-0 z-[5]"/>

        <canvas className="opacity-0 absolute top-0 left-0 z-[6]" ref={canvasRef} width={resulucionPorDefecto} height={resulucionPorDefecto} style={{border: "1px solid grey"}}></canvas>

        <img id={`listo${posision}`} className="absolute top-0 left-0 z-[7] rounded" src={img64} alt="imagen64" onLoad={(e)=> {
          const imagenElement = e.target as HTMLImageElement;
          const src = imagenElement.src;
          setImg64Limpio((valor)=> {
            const nuevoArray = [...valor]
            nuevoArray[posision] = `${src}`
            return nuevoArray
          })
        }} />
      </div>
    </>
  )
}


export default Productos_disponibles
