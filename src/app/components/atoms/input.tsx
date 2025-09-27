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
  // handleBlur?: (e: React.FocusEvent<FieldType>) => void;
  errorMessage?: string;
  required?: boolean;
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
    errorMessageStyle:
      "text-xs font-medium text-red-300 peer-user-valid:hidden empty:hidden",
  },
});

const { base, input, labelStyle, errorMessageStyle } = inputBox();

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
  } = props;

  return (
    <div className={base()}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onValueChange}
        data-error={dataError}
        required={required}
        className={input()}
      />
      <label className={labelStyle()}>{label}</label>
      <span className={errorMessageStyle()}>{errorMessage}</span>
    </div>
  );
};
