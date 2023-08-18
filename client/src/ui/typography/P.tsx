type props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements["h1"];

export function P({ children, className, ...rest }: props) {
  return (
    <p className={`text-xl dark:text-white ${className}`} {...rest}>
      {children}
    </p>
  );
}

export default P;
