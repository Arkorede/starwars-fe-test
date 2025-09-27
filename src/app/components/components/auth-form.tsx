import { tv } from "tailwind-variants";
import { Input } from "../atoms/input";
import Link from "next/link";
import { Button } from "../atoms/button";

type Props = {
  title: string;
  subTitle: string;
  emailInputProps: React.ComponentProps<typeof Input>;
  passwordInputProps: React.ComponentProps<typeof Input>;
  buttonProps: React.ComponentProps<typeof Button>;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  formRef?: React.RefObject<HTMLFormElement | null>;
};

const authForm = tv({
  slots: {
    base: "relative flex min-h-141 w-full max-w-[46%] flex-col justify-between rounded-lg border border-[#A4A7B74D] bg-white px-12 py-8",
    header: "flex flex-col gap-y-2",
    title: "text-2xl/8 font-semibold text-gray-400",
    subtitle: "text-base/6 font-normal text-gray-300",
    form: "flex w-full flex-col gap-y-8",
    forgotPassword:
      "text-primary flex items-center justify-center text-sm/4 font-normal",
    privacyTerms: "text-center text-xs/5 font-normal",
  },
});

const { base, header, title, subtitle, form, forgotPassword, privacyTerms } =
  authForm();

export const AuthForm = (props: Props) => {
  return (
    <div className={base()}>
      <div className={header()}>
        <h2 className={title()}>{props.title}</h2>
        <p className={subtitle()}>{props.subTitle}</p>
      </div>

      <div className="space-y-8">
        <form
          className={form()}
          onSubmit={props.onSubmit}
          noValidate
          ref={props.formRef}
        >
          <Input {...props.emailInputProps} />
          <Input {...props.passwordInputProps} />
          <Button {...props.buttonProps} />
        </form>

        <Link href="" className={forgotPassword()}>
          <span className="">Forgot your Password?</span>
        </Link>
      </div>

      <div className={privacyTerms()}>
        <Link href="" className="underline">
          Privacy Policy
        </Link>
        <span className="text-gray-100"> and </span>
        <Link href="" className="underline">
          Terms of services
        </Link>
      </div>
    </div>
  );
};
