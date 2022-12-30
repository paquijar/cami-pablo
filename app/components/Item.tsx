import Image from "next/image";
import Link from "next/link";

interface ItemProps {
  title: string;
  image: string;
  link: string;
}

const Item = ({ title, image, link }: ItemProps) => {
  return (
    <Link href={link}>
      <div className="bg-red-400 h-48 rounded-lg flex justify-between items-center pl-4">
        <h2 className="w-2/3 text-center text-3xl font-bold">{title}</h2>
        <div className="w-1/3 h-full relative rounded-r-lg">
          <Image
            src={image}
            alt={title}
            className="rounded-r-lg object-cover"
            fill
            sizes="100vw"
          />
        </div>
      </div>
    </Link>
  );
};

export default Item;
