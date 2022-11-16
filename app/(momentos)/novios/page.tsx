import Title from "../../components/Title";
import BotonNovios from "./components/BotonNovios";

const Novios = () => {
  return (
    <>
      <Title>❤️ MI HERMOSA 😍</Title>
      <div className="text-lg">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/10EX-_h4pYc"
          title="Bad Bunny (ft. Bomba Estéreo) - Ojitos Lindos (360° Visualizer) | Un Verano Sin Ti"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mb-10"
        ></iframe>
        <p className="mb-5">
          No te imaginas lo afortunado y feliz que me siento de haberte conocido
          y de que nuestros caminos se hayan cruzado. Desde que te vi por
          primera vez pude ver la gran persona que eres y a medida que te he ido
          conociendo lo sigo confirmando cada vez más, eres la mujer que quiero
          a mi lado. Porque eres atenta, dedicada, inteligente, juiciosa,
          responsable, ordenada, amable, cariñosa, trabajadora y además de todo
          esto y muchas cualidades más eres demasiado hermosa, tienes una carita
          preciosa y un cuerpazo espectacular.
        </p>
        <p className="mb-5">
          Quiero que sigamos construyendo juntos esto tan bonito que tenemos
          ahora, porque como hemos dicho, este es solo el comienzo. Todavía nos
          queda mucho por recorrer, muchos destinos del mundo por visitar a tu
          lado, muchos años por vivir juntos (mínimo unos 100), 4 hijos
          hermosos, 5 perros y 3 gatos.
        </p>
        <p className="mb-10">
          Por la conexión tan grande que tenemos, lo bien que nos
          complementamos, porque podemos contar el uno con el otro para lo que
          sea. Porque cuando veo esos ojitos brillar y esa hermosa sonrisa, se
          iluminan mis días y me siento feliz. Porque quiero que nos sigamos
          ayudando a crecer como personas en todos los aspectos. Por todo eso
          hoy te pregunto…
        </p>
      </div>
      <div className="flex justify-center content-center">
        <BotonNovios />
      </div>
    </>
  );
};

export default Novios;
