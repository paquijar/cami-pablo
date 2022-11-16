import Title from "../../components/Title";

const Mes2 = () => {
  return (
    <>
      <Title>Nuestro segundo mes ❤️</Title>
      <video width="100%" height="300" controls className="pb-5">
        <source src="/movie.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-lg mb-10">
        <p className="mb-5">
          Mi cielito, otro mes que pasa a tu lado y no puedo estar más feliz.
          Vivimos momentos muy especiales como nuestro primer viaje juntos, toda
          una aventura donde tuvimos muchas experiencias extraordinarias,
          aventuras, comidas deliciosas, besos, abrazos y sobre todo mucho amor.
          Cada vez nos conocemos mejor y sigo reafirmando lo que pienso desde el
          principio, quiero compartir el resto de mi vida a tu lado y que seamos
          muy felices juntos. Feliz segundo mes de los millones que nos quedan.
          Te amo hasta el infinito y más allá 🥰🥰🥰
        </p>
      </div>
      <h2 className="text-center text-3xl capitalize font-bold">
        Eres mi vida 😍
      </h2>
    </>
  );
};

export default Mes2;
