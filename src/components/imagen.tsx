import { useEffect, useState } from "react"
import { motion } from "framer-motion"


const Imagen = ({src, alt, modo, className}: {src: string, alt: string, modo: "fill" | "contain" | "cover" | "none" | "scale-down", className: string}) => {
  const [ img, setImg ] = useState(false)
  const [stado, setStado] = useState(false);

  useEffect(()=> {
    const time = setTimeout(() => {
      setStado(!stado)
    }, 1);
    return ()=> clearTimeout(time)
  },[])

  return (
    <>
    {
      stado && 
      <div className="relative h-full w-full">
          <motion.figure
            initial={{opacity: 0}}
            animate={{opacity: img?1:0}} 
            transition={{delay: 0, duration: 1}}
            className="absolute top-0 left-0 w-full h-full"
          >
            <img className={`w-full h-full rounded ${className}`} src={src}
              alt={alt} onLoad={()=> {
                setImg(!img)
              }} 
              style={{
                objectFit: modo,
                transitionDuration: "0.3s"
              }}
              />
          </motion.figure>

          {
            !img &&
            <motion.div
              initial={{opacity: 1}}
              animate={{opacity: [0.2,1,0.2]}}
              exit={{opacity: 0}}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-300 rounded"
            >
              <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </motion.div>
          } 
      </div>
    }
    </>
  )
}

export default Imagen