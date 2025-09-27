import { tv } from "tailwind-variants";
import LoginModule from "./components/modules/login-module";
import Image from "next/image";

const loginPage = tv({
  slots: {
    base: "flex font-sans",
    left: "flex min-h-screen w-[32%] items-center justify-center bg-blue-300 px-8",
  },
});

const { base, left } = loginPage();

export default async function Login() {
  return (
    <div className={base()}>
      <div className={left()}>
        <Image
          src="/assets/images/starwars.png"
          alt="starwars"
          width={385}
          height={167}
        />
      </div>
      <LoginModule />
    </div>
  );
}
