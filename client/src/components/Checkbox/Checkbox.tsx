import React, { useState } from "react";
import { IconCheck } from "@tabler/icons-react";

function Checkbox({
  disabled,
  checked,
  onChange,
  text,
}: {
  disabled?: boolean;
  checked?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
}) {
  const [check, setCheck] = useState(checked || false);
  const handleClick = () => {
    if (!disabled) {
      setCheck(!check);
      onChange && onChange(check);
    }
  };
  return (
    <div className="flex items-center justify-center w-fit gap-2">
      <span
        className={`flex items-center justify-center w-6 h-6 rounded-md border-2 duration-0 ${
          disabled
            ? "bg-slate-200 border-slate-200 dark:bg-slate-700 dark:text-slate-700"
            : "cursor-pointer"
        } ${
          check && !disabled
            ? "border-pink-500 bg-pink-500"
            : "border-slate-200 dark:border-slate-700"
        }`}
        onClick={handleClick}
      >
        {!disabled && check && <IconCheck size={24} className="text-white" />}
      </span>
      {text && (
        <p
          className={`
          ${disabled && "text-slate-400 dark:text-slate-500"}
          ${
            check && !disabled
              ? "dark:text-teal-500 text-teal-500"
              : "text-slate-500 dark:text-slate-400 "
          } text-md`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default Checkbox;
