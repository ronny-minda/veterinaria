import { useEffect, useRef, useState } from "react"
import { api } from "~/utils/api"
import {v4 as uuidv4} from 'uuid';


const Img = () => {

  // const [ i64, setI64 ] = useState<string>("")
  // const [ nombre, setNombre ] = useState<string>("")
  // const imgMutation = api.productos.img.useMutation()
  const [ img64, setImg64 ] = useState("")

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const resulucionPorDefecto = 200

  useEffect(()=> {

    const canvas = canvasRef.current as HTMLCanvasElement ;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const img = document.getElementById("scream") as HTMLImageElement;


    if(img.width>img.height) {
      
      const newHeight = resulucionPorDefecto;

      const aspectRatio = img.width / img.height;
      const newWidth = newHeight * aspectRatio;
      
      console.log("newWidth, newHeight")
      console.log(newWidth, newHeight)

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
      
      console.log("newWidth, newHeight")
      console.log(newWidth, newHeight)


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
    
    const base64Image = canvas.toDataURL('image/jpeg');
    console.log("base64Image")
    console.log(base64Image)
    setImg64(base64Image)

  }, [])

  return (
    <>
      <h1>Imgaaaaaaa</h1>

      <canvas ref={canvasRef} width={resulucionPorDefecto} height={resulucionPorDefecto} style={{border: "1px solid grey"}}></canvas>

      <img src="/img/diversion.jpg" alt="aaee" id="scream" className="h-1"/>
      <h2>img64:</h2>
      <img src={img64} alt="imagen64" />

    </>
  )
}

export default Img

