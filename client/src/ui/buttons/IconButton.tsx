type props = {
  children: React.ReactNode;
  title: string;
} & JSX.IntrinsicElements["button"];

export function IconButton({ children, title, ...rest }: props) {
  return (
    <button
      title={title}
      className="w-12 h-12 inline-flex justify-center items-center gap-2 rounded-md bg-teal-100 dark:hover:bg-teal-900 dark:bg-teal-900 border border-transparent font-semibold text-teal-500 dark:text-teal-400  hover:bg-teal-200  focus:outline-none focus:ring-2 ring-offset-white focus:ring-teal-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-slate-900 aspect-square"
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;
