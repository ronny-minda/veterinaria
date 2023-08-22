import Footer from "~/components/footer";
import Head from "next/head";
import Image from "next/image";

const Detalles = () => {
  return (
    <>
      <Head>
        <title>Detalles</title>
      </Head>
      <h1
        className="my-7 text-center"
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Detalles
      </h1>
      <section className="mb-10 flex h-auto w-full justify-center">
        <div
          className="flex h-auto w-full flex-col justify-center p-4 lg:flex-row lg:p-0"
          style={{ maxWidth: "1100px" }}
        >
          <div className="h-full w-full p-2 lg:w-3/12">
            <div className="sticky top-10">
              <h3
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                ENDLESS VARIATIONS
              </h3>
              <p>
                Sed in munere sensibus, vel cu equidem aliquando. Assum fierent
                ne cum. Sit quod insolens maiestatis at.
              </p>
              <h4>
                <b>Ingredients:</b>
              </h4>
              <ul>
                <li>1 tablespoon plus</li>
                <li>1 teaspoon active dry yeast.</li>
                <li>1 cup whole milk, heated to 110°F.</li>
                <li>2 to 2 1/2 cups (320 to 400 grams) bread flour.</li>
                <li>1 teaspoon pure vanilla extract.</li>
                <li>3 large egg yolks.</li>
                <li>2 tablespoons (30 grams) superfine sugar.</li>
                <li>1/2 teaspoon table salt.</li>
                <li>
                  <b>Calories:</b> 579cal
                </li>
                <li>
                  <b>Preparation:</b> 2hours
                </li>
              </ul>
            </div>
          </div>
          <div className="h-auto w-full p-2 lg:w-3/4">
            <Image
              width={1000}
              height={1000}
              className="my-5"
              src="img/detalles/detalle2.jpg"
              alt="detalle2"
            />
            <Image
              width={1000}
              height={1000}
              className="my-5"
              src="img/detalles/detalle3.jpg"
              alt="detalle3"
            />
            <Image
              width={1000}
              height={1000}
              className="my-5"
              src="img/detalles/detalle1.jpg"
              alt="detalle1"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Detalles;
