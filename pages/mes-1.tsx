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
          Primer mes juntos 😍🥰
        </h1>
        <div className="grid grid-cols-2 mb-8">
          <div className="col h-64 relative">
            <Image
              src="/foto-1.jpg"
              objectFit="cover"
              alt="Foto 1"
              layout="fill"
            />
          </div>
          <div className="col h-64 relative">
            <Image
              src="/foto-4.jpg"
              objectFit="cover"
              alt="Foto 4"
              layout="fill"
            />
          </div>
          <div className="col h-64 relative">
            <Image
              src="/foto-2.jpg"
              objectFit="cover"
              alt="Foto 2"
              layout="fill"
            />
          </div>
          <div className="col h-64 relative">
            <Image
              src="/foto-3.jpg"
              objectFit="cover"
              alt="Foto 3"
              layout="fill"
            />
          </div>
        </div>
        <div className="text-lg mb-10">
          <p className="mb-5">
            Amor mío ya es un mesesito a tu lado de infinitos que vamos a tener
            juntos y quise actualizar nuestra súper página con algunos de los
            momentos especiales que vivimos. Me siento extremadamente feliz y
            seguro a tu lado mi cielo, gracias a Dios por haberte puesto en mi
            vida, eres el complemento perfecto para mi y todo lo que siempre
            quise. Me encanta todo lo que hemos hecho y experimentado juntos en
            este tiempo y que felicidad saber que nos queda tanto por delante,
            empezando por nuestro súper viaje a Santa Marta esta semana. Te
            recuerdo que siempre siempre cuentas conmigo para absolutamente todo
            y que te amo mucho! Feliz primer mes amor de mi vida 😍
          </p>
        </div>
        <h2 className="text-center text-3xl capitalize font-bold">Te amo ♥️</h2>
      </div>
    </>
  );
};

export default Home;
