import { ReactNode } from "react";

type TotalBillProps = {
  originalComponent: ReactNode;
};
const TotalBIllWrapper = ({ originalComponent }: TotalBillProps) => {
  return () => {
    originalComponent;
  };
};

export default TotalBIllWrapper;
