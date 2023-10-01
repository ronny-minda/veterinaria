import { QueryClient, useQueryClient } from "@tanstack/react-query"
import Head from "next/head"
import { useState } from "react"
import LayoutProtect from "~/components/layoutProtect"
import { api } from "~/utils/api"

const Direccion = () => {
  
  // const uso = useQueryClient()
  // const [ inaa, setInaa ] = useState("")

  // const prueba = api.user.pedirUno.useQuery(undefined ,{
  //   onSuccess: async (data) => {
  //     console.log("onSuccess")
  //     // console.log("data")
  //     // console.log(data)

  //     // await uso.setQueryData(["user.pedirUno"], (olData)=> {
  //     //   console.log("olData")
  //     //   console.log(olData)
  //     // })
  //   },
  // })


    // prueba.data?.name = `${inaa}`
  // if (prueba.data) {
  //   prueba.data.name = `${inaa}`;
  // }


  // console.log("prueba")
  // console.log(prueba)

  // const uso = api.useContext()

  // const oldData = uso.user.pedirUno.getData()
  // console.log("uso.user")
  // console.log(oldData)

  // uso.user.pedirUno.cancel

  // if(oldData?.emailVerified) {

  //   uso.user.pedirUno.setData(undefined, {
  //     ...oldData,
  //     name: inaa
  //   })

  // }


  return(
    <>
      <Head>
        <title>Direccion</title>
      </Head>
      <LayoutProtect titulo="Direccion">
        {/* <h1>oldData: {oldData?.name}</h1> */}
      {/* <input
        onChange={ (e) => setInaa(e.target.value)}
        // value={`${user.nombre}`}
        id="Nombre"
        type="Nombre"
        name="nombre"
        className="sombraInto block w-full rounded bg-[#F0F0F3] border border-[#F0F0F3] p-2.5 text-gray-900 hover:border-[#fff] focus:border-[#fff] bg-[#f0f0f3d1]"
        placeholder="Nombre"
      />
        <h1>Direccion</h1> */}
      </LayoutProtect>
    </>
  )
}

export default Direccion