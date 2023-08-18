type props = {
  children: React.ReactNode;
  title: string;
} & JSX.IntrinsicElements["button"];

export function IconButton({ children, title, ...rest }: props) {
  return (
    <button
      title={title}
      className="w-12 h-12 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 dark:hover:bg-[#ec489a68] dark:bg-[#ec489a3c] border border-transparent font-semibold text-pink-500 dark:text-pink-400  hover:bg-pink-200  focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-slate-900 aspect-square"
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;
