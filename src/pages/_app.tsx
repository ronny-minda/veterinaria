import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import Layout from "~/components/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0"
        />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>

      <SessionProvider session={session}>
        <Layout>
          <main className="relative w-screen">
            <AnimatePresence>
              <motion.div
                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0 }}
                className="absolute left-0 top-0 w-screen"
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </main>
        </Layout>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
