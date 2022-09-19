import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ItemProps {
  title: string;
  image: string;
  link: string;
}

const Item = ({ title, image, link }: ItemProps) => {
  return (
    <Link href={link}>
      <a>
        <div className="bg-red-400 h-48 rounded-lg flex justify-between items-center pl-4">
          <h1 className="text-center text-3xl capitalize font-bold">{title}</h1>
          <div className="w-1/4 h-full relative rounded-r-lg">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-r-xl"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Item;
