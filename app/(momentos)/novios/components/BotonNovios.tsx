"use client";
import { useState } from "react";

const BotonNovios = () => {
  const [clicked, setClicked] = useState(false);
  if (!clicked) {
    return (
      <button
        className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setClicked(true)}
      >
        Ver pregunta
      </button>
    );
  }

  return (
    <h2 className="text-center text-pink-900 text-2xl font-bold">
      ♥️ ¿Quieres ser mi novia? ♥️
    </h2>
  );
};
export default BotonNovios;
