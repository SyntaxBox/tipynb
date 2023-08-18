type props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements["h2"];

export function H2({ children, className, ...rest }: props) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold text-center dark:text-white ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
}

export default H2;
