import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { tv } from "tailwind-variants";

type Props = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  inputClass?: string;
  onValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataError?: string;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
  isError?: boolean;
};

const inputBox = tv({
  slots: {
    base: "relative w-full",
    input: [
      "peer relative z-10 h-12 w-full rounded-sm border-2 border-gray-200 bg-transparent pl-3.5 text-sm leading-6 font-normal text-blue-200",
      "transition-all duration-200 outline-none",
      "focus:border-primary focus:bg-white",
    ],
    labelStyle: [
      "pointer-events-none absolute top-3.25 left-3.5 text-sm/6 font-medium text-gray-100",
      "z-10 origin-left bg-white px-1 transition-all duration-200",

      "peer-focus:-top-2 peer-focus:left-2 peer-focus:z-10 peer-focus:scale-90 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs",

      "peer-valid:-top-2 peer-valid:z-10 peer-valid:scale-90 peer-valid:bg-white peer-valid:px-1 peer-valid:text-xs",
      ,
    ],
    errorMessageStyle: "text-xs font-medium text-red-300 empty:hidden",
    toggleButton: [
      "absolute top-1/2 right-3 z-20 -translate-y-1/2",
      "flex h-5 w-5 items-center justify-center",
      "text-gray-400 transition-colors hover:text-gray-600",
      "cursor-pointer select-none",
    ],
  },
  variants: {
    isError: {
      true: {
        input: "border-red-500 focus:border-red-500",
        toggleButton: "top-6",
      },
      false: {
        input: "focus:border-primary border-gray-200",
      },
    },
  },
});

export const Input = (props: Props) => {
  const {
    name,
    label,
    type = "text",
    value,
    onValueChange,
    dataError,
    errorMessage,
    required = true,
    isError,
    handleBlur,
  } = props;

  const { base, input, labelStyle, errorMessageStyle, toggleButton } = inputBox(
    { isError },
  );

  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  const inputType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={base()}>
      <input
        type={inputType}
        id={name}
        name={name}
        value={value}
        onChange={onValueChange}
        data-error={dataError}
        required={required}
        className={input()}
        onBlur={handleBlur}
      />
      <label className={labelStyle()}>{label}</label>

      {isPasswordField && (
        <button
          type="button"
          className={toggleButton()}
          onClick={togglePasswordVisibility}
          tabIndex={-1}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      )}

      <span className={errorMessageStyle()}>{errorMessage}</span>
    </div>
  );
};
