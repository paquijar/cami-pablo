import Link from "next/link";

const Volver = () => {
  return (
    <Link
      className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full mb-10 block w-fit"
      href="/"
    >
      Volver
    </Link>
  );
};

export default Volver;
