import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faUtensils } from "@fortawesome/free-solid-svg-icons/faUtensils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Title";
import { cupones } from "./cupones";

const Mes6 = () => {
  return (
    <>
      <Title>Mes 6 💓</Title>
      <div className="text-lg mb-10">
        <p className="mb-5">
          Amor de mi vida, hoy de nuevo en nuestra fecha especial te quise
          escribir unas palabritas, además porque ya son 6!!! meses juntos, todo
          un semestre en el que hemos compartido momentos muy felices. Gracias
          por todo lo que has hecho por mi en este tiempo, por cuidarme,
          protegerme, preocuparte por mi y sobre todo por darme tanto tanto
          amor. Me siento muy feliz porque hemos vivido cosas muy lindas y se
          que ambos nos sentimos muy seguros el uno del otro y sabemos que esto
          va para muy largo, nos espera toda una vida juntos. Quiero aprovechar
          la ocasión para darte este regalo, en parte copiándote tu idea jaja,
          pero con mucho amor. Puedes reclamarlos cuando quieras, uno por cada
          mes que hemos compartido.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {cupones.map((cupon) => (
            <div
              key={cupon.message}
              className="bg-pink-100 relative text-pink-600 border-pink-600 font-bold h-60 rounded-xl flex items-center justify-center text-center p-3"
            >
              <FontAwesomeIcon
                className="absolute w-10 h-10 right-3 top-3"
                icon={cupon.icon}
              />
              {cupon.message}
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-center text-3xl capitalize font-bold">
        Feliz semestre 🥰🥰
      </h2>
    </>
  );
};

export default Mes6;
