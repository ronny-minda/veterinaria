import axios from "axios";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contacto = () => {
  const [aviso, setAviso] = useState(false);
  const [envio, setEnvio] = useState({
    nombre: "",
    email: "",
    msg: "",
  });

  const inputActivo = (e: any) => {
    setEnvio({ ...envio, [e.target.name]: e.target.value });
  };

  const envioSubmit = async (e: any) => {
    e.preventDefault();
    const URL = "http://localhost:3000/api/email";
    const result = await axios.post(URL, envio);
    // console.log("result");
    if (result.statusText == "OK") {
      setAviso(true);
      setTimeout(() => {
        setAviso(false);
      }, 3000);
    }
    setEnvio({
      nombre: "",
      email: "",
      msg: "",
    });
  };

  return (
    <section>
      <h2
        className="text-center"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        CONTACTANOS
      </h2>
      <p className="text-center" style={{ color: "#545454" }}>
        Conéctate con nosotros para cuidar a tus mascotas queridas.
      </p>

      <div className="mt-10 flex h-auto w-screen justify-center first-line:mt-10 ">
        <div
          className="flex h-full w-full flex-wrap justify-center"
          style={{ maxWidth: "800px" }}
        >
          <form onSubmit={(e) => envioSubmit(e)}>
            <div>
              <label>
                <input
                  className="inputt my-2 h-16 w-full rounded p-2 outline-none ring-2 ring-orange-300 transition-colors focus:ring-orange-400 lg:m-2 lg:w-80"
                  placeholder="Nombre"
                  name="nombre"
                  value={envio.nombre}
                  type="text"
                  onChange={(e) => inputActivo(e)}
                />
              </label>
              <label className="h-auto w-auto">
                <input
                  className="inputt h-16 w-full rounded p-2 outline-none ring-2 ring-orange-300 transition-colors focus:ring-orange-400 lg:m-2 lg:w-80"
                  placeholder="Email"
                  name="email"
                  value={envio.email}
                  type="text"
                  onChange={(e) => inputActivo(e)}
                />
              </label>
            </div>

            <div className="flex flex-col items-center">
              <textarea
                className="inputt m-2 h-60 w-full rounded p-2 outline-none ring-2 ring-orange-300 transition-colors focus:ring-orange-400"
                placeholder="Tu mensaje"
                name="msg"
                value={envio.msg}
                onChange={(e) => inputActivo(e)}
              ></textarea>

              <AnimatePresence>
                {aviso && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ color: "#37ad5b", fontWeight: "bold" }}
                  >
                    Mensaje enviado a tu correo
                  </motion.p>
                )}
              </AnimatePresence>

              <input
                className="submit mt-5 h-12 w-36 cursor-pointer"
                style={{ color: "#fff" }}
                type="submit"
                value="Enviar"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
