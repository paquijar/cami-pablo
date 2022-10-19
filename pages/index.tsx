import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Item from "../components/Item";

const Home: NextPage = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Head>
        <title>Cami y Pablo ♥️</title>
      </Head>
      <div className="p-5 py-10">
        <h1 className="text-center text-3xl capitalize mb-10 font-bold">
          Nuestra Historia de Amor ❤️
        </h1>
        <div className="flex flex-col gap-5">
          <Item image="/novios.jpg" link="/novios" title="Novios" />
          <Item image="/mes-1.jpg" link="/mes-1" title="Mes 1" />
          <Item image="/mes-2.jpg" link="/mes-2" title="Mes 2" />
        </div>
      </div>
    </>
  );
};

export default Home;
