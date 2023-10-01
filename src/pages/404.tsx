import Head from "next/head"
import Link from "next/link"


const Custom404 = () => {

  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className="w-[320px] h-screen fixed right-0 bottom-0 z-[1] fondoPerro6" style={{height: "calc(100vh - 133px)"}}></div>
      {/* fondoPerro4 no usado aqui */}
      <section className="w-screen flex justify-center items-center" style={{height: "calc(100vh - 112px)",backgroundPosition: "926px 220px", backgroundSize: "456px"}}>
        <div className="sombra1 h-auto w-auto flex justify-center items-center flex-col bg-[#f0f0f3c2] uellas1 p-[50px]" style={{backgroundPosition: "926px 220px", backgroundSize: "156px"}}>
          <h1 className="texto text-center sm:text-[50px] text-[30px] font-bold mb-[72px]">¡Ups! Página no encontrada.</h1>
          <p className="my-2 texto sm:text-[30px] text-[20px] font-semibold mb-[72px] text-center">Lo sentimos, pero no se puede encontrar la página que estás buscando.</p>
          <Link
            className="botonSolidColor1  mt-5 flex w-[265px] items-center justify-center py-3 text-lg"
            href="/tienda"
            style={{transitionDuration: "0.3s"}}>
              Siga Comprando
          </Link>
        </div>
      </section>
    </>
  )
}

export default Custom404