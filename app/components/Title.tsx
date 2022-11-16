import React, { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-center text-3xl capitalize mb-10 font-bold">
      {children}
    </h1>
  );
};

export default Title;
