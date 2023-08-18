import { ReactNode } from "react";

type props = {
  children: ReactNode;
} & JSX.IntrinsicElements["button"];

export function A({ children, ...rest }: props) {
  return (
    <button
      className="inline-flex justify-center items-center gap-2 rounded-md font-semibold text-pink-500"
      {...rest}
    >
      {children}
    </button>
  );
}

export default A;
