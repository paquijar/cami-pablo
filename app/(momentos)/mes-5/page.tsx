import Title from "../../components/Title";

const Mes5 = () => {
  return (
    <>
      <Title>Mes 5 💕</Title>
      <div className="text-lg mb-10">
        <p className="mb-5">
          Mi amore, ya son 5 meses desde que nos hicimos novios, parece
          increíble como vuela el tiempo pero como bien dicen, se siente que
          pasa más rápido cuando estás feliz y definitivamente lo he sido ha tu
          lado todos estos meses. Gracias a Dios tuvimos otro mes muy bueno
          donde tuvimos la fortuna de disfrutar ese súper paseo juntos,
          conocimos Mexico, comimos delicioso, descansamos y pasamos muy rico.
          Esa fue la muestra de lo que se viene este año, muchos momentos de
          amor, felicidad y más viajes.
        </p>
      </div>
      <video width="100%" height="300" controls className="mb-10">
        <source src="/mes-5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2 className="text-center text-3xl capitalize font-bold">
        Te amo mi corazón 😍
      </h2>
    </>
  );
};

export default Mes5;
