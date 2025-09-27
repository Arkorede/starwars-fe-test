import { tv } from "tailwind-variants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type Props = {
  name: string;
  profileUrl?: string;
};

const profile = tv({
  slots: {
    base: "flex items-center justify-center gap-x-3",
    image: "h-10 w-10 rounded-full",
    name: "text-[0.9375rem] font-normal text-nowrap text-gray-500",
  },
});

const { base, image, name } = profile();

export const Profile = (props: Props) => {
  return (
    <div className={base()}>
      <Avatar>
        {props.profileUrl && (
          <AvatarImage
            src={props.profileUrl}
            alt={props.name}
            className={image()}
          />
        )}
        <AvatarFallback>
          <Image
            src="/assets/icons/profile_image.svg"
            width={30}
            height={30}
            alt="profile image fallback"
          />
        </AvatarFallback>
      </Avatar>
      <p className={name()}>{props.name}</p>
    </div>
  );
};
