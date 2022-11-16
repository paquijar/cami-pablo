import { ReactNode } from "react";
import Volver from "./components/Volver";

const MomentosLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Volver />
      {children}
    </>
  );
};

export default MomentosLayout;
