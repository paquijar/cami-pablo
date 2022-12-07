import Title from "../../components/Title";
import { listaCosas } from "./lista-cosas";

const Cumple = () => {
  return (
    <>
      <Title>¡Feliz cumpleaños mi vida!</Title>
      <p className=" text-lg mb-10">
        Amor de mi vida, hoy en este dia tan especial quiero primero que nada
        dar gracias a Dios por un año más de vida tuyo y por permitirme
        compartirlo por primera vez a tu lado. Quiero y espero que sea un día
        maravilloso y que lo disfrutes mucho al lado de todos los que te amamos,
        que comas bastante morcilla, buñuelos y natilla. Me siento muy feliz de
        haberme cruzado en tu camino, haber conocido a una persona tan increíble
        y tener la fortuna de que seas mi novia, nunca cambies esa manera de ser
        tan especial. Te deseo mi amor que Diosito te siga llenando de
        bendiciones, mucha salud y cosas buenas para tu vida, estoy seguro que
        esta será la primera de muchísimas celebraciones juntos. Feliz
        cumpleaños, te amo con todo mi corazón!! (Pd: voy a disfrutar estos 8
        días en los que tengo 2 años menos que tú jeje)
      </p>
      <h2 className="text-2xl font-semibold text-center mb-5">
        26 cosas que me encantan de ti
      </h2>
      <div className="grid gap-3 lg:grid-cols-4">
        {listaCosas.map((cosa) => (
          <div
            key={cosa.id}
            className=" group bg-transparent h-56 rounded-lg perspective-10"
          >
            <div className="relative h-full w-full rounded-lg text-center duration-700 transition-transform transform-style-3d group-hover:rotate-y-180">
              <div className="flex items-center justify-center text-3xl text-bold bg-purple-200 rounded-lg absolute w-full h-full backface-hidden">
                {cosa.id}
              </div>
              <div className="flex items-center justify-center text-3xl text-bold bg-pink-200 rounded-lg absolute w-full h-full backface-hidden rotate-y-180">
                {cosa.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cumple;
