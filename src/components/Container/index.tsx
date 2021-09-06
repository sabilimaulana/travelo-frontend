import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};

export default Container;
