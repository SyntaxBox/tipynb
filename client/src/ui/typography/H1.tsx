export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-center dark:text-white">
      {children}
    </h1>
  );
}

export default H1;
