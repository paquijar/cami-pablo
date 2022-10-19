import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Volver from "../components/Volver";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cami y Pablo ♥️</title>
      </Head>
      <div className="p-5 py-10">
        <Volver />
        <h1 className="text-center text-3xl capitalize mb-10 font-bold">
          Nuestro segundo mes ❤️
        </h1>
        <video width="100%" height="240" controls className="pb-5">
          <source src="/movie.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-lg mb-10">
          <p className="mb-5">
            Mi cielito, otro mes que pasa a tu lado y no puedo estar más feliz.
            Vivimos momentos muy especiales como nuestro primer viaje juntos,
            toda una aventura donde tuvimos muchas experiencias extraordinarias,
            aventuras, comidas deliciosas, besos, abrazos y sobre todo mucho
            amor. Cada vez nos conocemos mejor y sigo reafirmando lo que pienso
            desde el principio, quiero compartir el resto de mi vida a tu lado y
            que seamos muy felices juntos. Feliz segundo mes de los millones que
            nos quedan. Te amo hasta el infinito y más allá 🥰🥰🥰
          </p>
        </div>
        <h2 className="text-center text-3xl capitalize font-bold">
          Eres mi vida 😍
        </h2>
      </div>
    </>
  );
};

export default Home;
