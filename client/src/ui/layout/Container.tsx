type props = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements["div"];

export function Container({ children, className, ...rest }: props) {
  return (
    <div className="px-4 sm:px-4 py-2.5 rounded z-1 h-full w-full">
      <div
        {...rest}
        className={`h-full w-full container mx-auto max-w-6xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
