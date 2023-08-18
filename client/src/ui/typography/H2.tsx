export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white">
      {children}
    </h2>
  );
}

export default H2;
