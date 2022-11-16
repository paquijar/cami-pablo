import Image from "next/image";
import Title from "../../components/Title";
import img from "../../../public/foto-mes-3.jpg";

const Mes3 = () => {
  return (
    <>
      <Title>Mes #3</Title>
      <div className="grid lg:grid-cols-2 gap-4">
        <p className=" text-lg mb-10">
          Amor mío hoy en nuestro día especial te quise escribir este mensajito
          para recordarte y volver a expresarte lo mucho que significas para mi
          y lo importante que te has vuelto en mi vida. En “solo” 3 meses que
          llevamos de novios ya sabemos lo que queremos para toda la vida y es
          estar juntos. Fue otro mes de momentos muy especiales como por ejemplo
          poder acompañarte al FSL, compartiendo lo que te apasiona y lo que más
          te gusta, me encanta poder estar ahí para ti y apoyarte siempre en
          todo lo tuyo. También estuvimos lejitos aunque fuera solo una semana
          se me hizo eterno y me di cuenta que no quiero volver a separarme de
          ti ni un día mas en la vida, y que quiero que viajemos juntos por todo
          el mundo conociendo lugares muy bonitos a tu lado. Me siento muy feliz
          de estar contigo y de que nos hayamos elegido el uno al otro como
          compañeros de vida, te amo mucho 🥰❤️
        </p>
        <Image className="object-cover" src={img} alt="Foto 1" sizes="100vw" />
      </div>
    </>
  );
};

export default Mes3;
