import { useRouter } from "next/router";
import ConteWha from "./conteWha";
import Header from "./header";
import Loader from "./loader";
import { scrollBody } from "~/store/gloval";
import { useEffect } from "react";

const Layout = ({ children }: { children: any }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflowY = scrollBody.value ? "hidden" : "auto";
  }, [scrollBody.value]);

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
