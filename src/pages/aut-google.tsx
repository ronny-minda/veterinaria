import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const AutGoogle = () => {

  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session) {
      signIn("google")
    }

    if (session) {
      window.close()
    };
  }, [session, status]);

  return (
    <div
      className="h-screen w-screen bgFondo fixed top-0 left-0 z-[999]"
    ></div>
  );
}

export default AutGoogle