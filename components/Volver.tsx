import Link from "next/link";
import React from "react";

const Volver = () => {
  return (
    <Link href="/">
      <a className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full mb-10 block w-fit">
        Volver
      </a>
    </Link>
  );
};

export default Volver;
