import { InputAtom } from "./components/atoms/InputAtom";

export default function Home() {
  return (
    <div className="font-inter my-20 flex items-center justify-center">
      <InputAtom name="email" />
    </div>
  );
}
