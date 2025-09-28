import { tv } from "tailwind-variants";
import Image from "next/image";

const detailCard = tv({
  slots: {
    base: "flex gap-x-6",
    title: "text-5xl/6 font-bold text-black capitalize",
    subTitle: "mt-7 space-y-1 text-base/6 font-medium text-gray-500",
  },
});

const { base, title, subTitle } = detailCard();

interface Props {
  image: string;
  title: string;
  details: string[];
}

export default function DetailCard(props: Props) {
  return (
    <div className={base()}>
      <Image src={props.image} alt={props.title} width={318} height={458} />

      <div className="mt-10 space-y-2">
        <h1 className={title()}>{props.title}</h1>
        <div className={subTitle()}>
          {props.details.map((det, index) => (
            <p key={index}>{det}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
