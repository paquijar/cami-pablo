import Image from "next/image";
import Title from "../../components/Title";
import img from "../../../public/foto-mes-7.jpg";

const Mes7 = () => {
  return (
    <>
      <Title>Mes 7</Title>
      <div className="grid lg:grid-cols-2 gap-4">
        <p className=" text-lg mb-10">
          Mi corazón, hoy en nuestro día te escribo para recordarte lo mucho que
          te amo y volver a agradecerte por cada instante a tu lado, por todos
          los momentos que hemos vivido, por siempre haberme apoyado, ayudado a
          crecer y por haberme dado tanto amor de ese corazón tan grande y
          hermoso que tienes. Cada día qué pasa me siento más enamorado de ti,
          estoy muy seguro y feliz de lo que tenemos y de lo que hemos logrado.
          También se que este es solo el comienzo y que vamos a lograr todas
          nuestras metas tanto personales como de pareja y siempre vamos a tener
          nuestro apoyo mutuo para absolutamente todo. Recuerda siempre que todo
          lo que consigamos va a ser nuestro, de los 2 y que vamos a compartir
          absolutamente todo, construir un lindo hogar y una hermosa familia con
          la ayuda de Dios. Te amo mucho mi cielito. ❤️
        </p>
        <Image className="object-cover" src={img} alt="Foto 1" sizes="100vw" />
      </div>
    </>
  );
};

export default Mes7;
