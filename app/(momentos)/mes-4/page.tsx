import Image from "next/image";
import Title from "../../components/Title";
import img from "../../../public/navidad-1.jpg";
import img2 from "../../../public/navidad-2.jpg";
import img3 from "../../../public/navidad-3.jpg";
import img4 from "../../../public/navidad-4.jpg";

const Mes4 = () => {
  return (
    <>
      <Title>Cuarto mes, Navidad y fin del 2022</Title>
      <div className="grid lg:grid-cols-2 gap-4">
        <p className=" text-lg mb-10">
          Vida mía, quiero aprovechar esta ocasión para agradecer por el cierre
          de este año tan maravilloso en el que fui la persona más feliz del
          mundo porque llegaste a iluminar mis días con esa hermosa sonrisa. El
          mes de diciembre fue sencillamente espectacular a tu lado, y es que
          vivimos demasiados momentos muy especiales y significativos juntos,
          como por ejemplo tu cumpleaños, el mío, el súper concierto de Morat y
          Juanes, nuestro 4 mes de novios, la navidad y ahora también el fin de
          año, además de muchísimas comidas ricas, postres, momentos juntos,
          tiempo con nuestras familias y mil cosas más. Quiero también
          agradecerle a Dios de nuevo por habernos juntado y permitirnos vivir
          todo esto tan bonito que hemos construido. También pedirle que nos
          mantenga fuertes y unidos, porque estoy seguro de que este es solo el
          comienzo y se vienen muchísimos años más llenos de momentos así. Por
          un 2023 de mucha felicidad a tu lado mi cielo hermosa, y sobre todo de
          mucho amor. Eres el amor de mi vida.
        </p>
        <div className="grid grid-cols-2">
          <Image src={img} alt="Foto 1" />
          <Image src={img2} alt="Foto 2" />
          <Image src={img3} alt="Foto 3" />
          <Image src={img4} alt="Foto 4" />
        </div>
      </div>
    </>
  );
};

export default Mes4;
