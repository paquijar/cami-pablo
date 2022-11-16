import Item from "./components/Item";
import Title from "./components/Title";
import { menuItems } from "./data/menu";

const Inicio = () => {
  return (
    <>
      <Title>Nuestra Historia de Amor ❤️</Title>
      <div className="flex flex-col gap-5">
        {menuItems.map((item) => (
          <Item
            key={item.link}
            image={item.image}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default Inicio;
