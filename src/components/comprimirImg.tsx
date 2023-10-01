import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { api } from "~/utils/api"
import {v4 as uuidv4} from 'uuid';


const ComprimirImg = ({base64Original, setImg64Limpio}: {base64Original: string, setImg64Limpio: Dispatch<SetStateAction<string>>}) => {
  const [ img64, setImg64 ] = useState("")

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const resulucionPorDefecto = 200

  useEffect(()=> {

    const canvas = canvasRef.current as HTMLCanvasElement ;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const img = document.getElementById("scream") as HTMLImageElement;

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

    const ImgLimpio = base64Image.match(/^data:(.+);base64,(.+)$/)
          
    if(ImgLimpio) {
      setImg64Limpio(`${ImgLimpio[2]}`)
    }


  }, [base64Original])

  return (
    <>
      <div className="fixed bottom-[100%] left-[100%] opacity-0" style={{backgroundColor: "#ffc5c5", width: `${resulucionPorDefecto}px`, opacity: "0"}}>

        <h4 className="opacity-0">Imagen original:</h4>
        <img src={base64Original} alt="aaee" id="scream" className="w-full opacity-0"/>

        <h4 className="opacity-0">Render:</h4>
        <canvas className="opacity-0" ref={canvasRef} width={resulucionPorDefecto} height={resulucionPorDefecto} style={{border: "1px solid grey"}}></canvas>

        <h4 className="opacity-0">Resuktado img64:</h4>
        <img className="opacity-0" src={img64} alt="imagen64" />
      </div>
    </>
  )
}

export default ComprimirImg

