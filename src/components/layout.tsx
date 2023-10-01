import ConteWha from "./conteWha";
import Header from "./header";
import Loader from "./loader";
import { IniciarTodo, scrollBody } from "~/store/gloval";
import { useEffect } from "react";

const Layout = ({ children }: { children: any }) => {

  useEffect(() => {
    document.body.style.overflowY = scrollBody.value ? "hidden" : "auto";
  }, [scrollBody.value]);

  IniciarTodo() // inicia y acutualiza el estado inicia de la APP

  return (
    <>
      <Header />
      {children}
      <ConteWha />
      {/* <Loader /> */}
    </>
  );
};

export default Layout;
