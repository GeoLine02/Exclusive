import { ReactNode } from "react";

type TimerWrapperProps = {
  originalComponent: ReactNode;
};
const TimerWrapper = ({ originalComponent }: TimerWrapperProps) => {
  return () => {
    originalComponent;
  };
};

export default TimerWrapper;
