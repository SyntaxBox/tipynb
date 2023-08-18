type props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements["h1"];

export function H1({ children, className, ...rest }: props) {
  return (
    <h1
      className={`text-2xl md:text-4xl font-bold text-center ${className}`}
      {...rest}
    >
      {children}
    </h1>
  );
}

export default H1;
