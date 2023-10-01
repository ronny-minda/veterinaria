import Head from "next/head"
import LayoutProtect from "~/components/layoutProtect"

const Pedidos = () => {

  return(
    <>
      <Head>
        <title>Pedidos</title>
      </Head>
      <LayoutProtect titulo="Pedidos">
        <h1>Pedidos</h1>
      </LayoutProtect>
    </>
  )
}

export default Pedidos