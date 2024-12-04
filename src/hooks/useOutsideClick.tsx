import { useEffect } from "react";

type UseOutsideClickProps = {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
};

export function useOutsideClick({ ref, callback }: UseOutsideClickProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
