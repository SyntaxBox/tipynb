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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setCheck(!check);
      onChange && onChange(e.target.checked);
    }
  };
  return (
    <label className="flex items-center justify-center w-fit gap-2">
      <input
        type="checkbox"
        disabled={disabled}
        hidden
        checked={check}
        onChange={handleChange}
      />
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
    </label>
  );
}

export default Checkbox;
