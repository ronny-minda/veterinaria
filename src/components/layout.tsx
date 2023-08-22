import { useRouter } from "next/router";
import ConteWha from "./conteWha";
import Header from "./header";
import Loader from "./loader";

const Layout = ({ children }: { children: any }) => {
  const router = useRouter();
  console.log("router");
  console.log(router);
  return (
    <>
      {router.pathname !== "aut-google" ? <Header /> : null}
      {children}
      {router.pathname !== "aut-google" ? <ConteWha /> : null}
      {router.pathname !== "aut-google" ? <Loader /> : null}
    </>
  );
};

export default Layout;
