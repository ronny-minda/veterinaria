import Cell from "~/svg/cell";
// import Corazon from "~/svg/corazon";
// import Facebook from "~/svg/facebook";
// import Mundo from "~/svg/mundo";
// import Papel from "~/svg/papel";
import Image from "next/image";
import Link from "next/link";
import Logo from "~/svg/logo";

const Footer = () => {
  return (
    <footer
      className="flex h-auto w-screen flex-col items-center justify-center"
      style={{ backgroundColor: "#1d1c1c" }}
    >
      <div className="flex h-full w-5/6 flex-wrap justify-center">
        <div
          className="m-2 flex h-80 flex-col items-center justify-center p-2"
          style={{ maxWidth: "250px", width: "250px" }}
        >
          <Link href="/">
            {/* <Image
              width={1000}
              height={1000}
              src="/img/logo.png"
              alt="logo"
              style={{ width: "200px", height: "44px", objectFit: "contain" }}
            /> */}
            <Logo className="fill-white hover:fill-[#7f1d1d] h-[60px] w-[60px]" style={{transitionDuration: "0.4s"}} />
          </Link>

          <p className="mt-10" style={{ color: "#fff" }}>
            Promovemos la salud y felicidad animal a través de cuidados expertos
            y amor incondicional en nuestra práctica veterinaria comprometida.
          </p>
        </div>
        <div
          className="m-2 flex h-80 flex-col items-center justify-center"
          style={{ maxWidth: "200px", width: "200px"}}
        >
          <h4
            className=""
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#ffff",
            }}
          >
            ENLACES ÚTILES
          </h4>
          <div className="flex h-3/4 w-full flex-col justify-center">
            <Link href="/" className="my-3 flex w-full">
              {/* <Corazon style={{ stroke: "#fff", fill: "#fff" }} /> */}
              <span className="ml-1" style={{ color: "#fff", stroke: "#fff" }}>
                SOBRE NOSOTROS
              </span>
            </Link>
            <Link href="/" className="my-3 flex w-full">
              {/* <Mundo style={{ stroke: "#fff", fill: "#fff" }} /> */}
              <span className="ml-1" style={{ color: "#fff", stroke: "#fff" }}>
                LOCATIONS
              </span>
            </Link>
            <Link href="/" className="my-3 flex w-full">
              {/* <Papel style={{ stroke: "#fff", fill: "#fff" }} /> */}
              <span className="ml-1" style={{ color: "#fff", stroke: "#fff" }}>
                CARRERAS
              </span>
            </Link>
            <Link href="/" className="my-3 flex w-full">
              <Cell style={{ stroke: "#fff", fill: "#fff" }} />
              <span className="ml-1" style={{ color: "#fff", stroke: "#fff" }}>
                {" "}
                TELEFONO 5555-00-444
              </span>
            </Link>
          </div>
        </div>
        <div
          className="m-2 flex h-80 flex-col items-center justify-center"
          style={{ maxWidth: "200px", width: "200px" }}
        >
          <h4
            className=""
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",

              color: "#ffff",
            }}
          >
            NOTICIAS
          </h4>
          <div className="h-3/4 w-full">
            <div className="my-2 flex h-20 w-full">
              <div style={{ width: "35%" }}>
                {/* <Image
                  width={1000}
                  height={1000}
                  src="/img/footer1.jpg"
                  alt="footer1"
                  className="h-full w-full object-cover"
                /> */}
              </div>
              <div style={{ width: "65%" }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffff",
                  }}
                >
                  MACOTAS FELICES.
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    textAlign: "center",
                  }}
                >
                  MARCH 18, 2019
                </p>
              </div>
            </div>
            <div className="my-2 flex h-20 w-full">
              <div style={{ width: "35%" }}>
                {/* <Image
                  width={1000}
                  height={1000}
                  src="/img/footer2.jpg"
                  alt="footer1"
                  className="h-full w-full object-cover"
                /> */}
              </div>
              <div style={{ width: "65%" }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    textAlign: "center",

                    color: "#ffff",
                  }}
                >
                  MACOTAS FELICES.
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    textAlign: "center",
                  }}
                >
                  MARCH 18, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="h-80 bg-slate-400 m-2 flex flex-col items-center justify-center"
          style={{ maxWidth: "200px", width: "200px" }}
        >
          <h4
            className=""
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              
              color: "#ffff",
            }}
          >
            INSTAGRAM
          </h4>
          <div className="w-full h-3/4 bg-lime-500"></div>
        </div> */}
      </div>
      <p
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          textAlign: "center",

          color: "#ffff",
        }}
      >
        © 2023 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
