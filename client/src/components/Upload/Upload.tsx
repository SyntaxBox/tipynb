import { IconCloudUpload } from "@tabler/icons-react";
import { iconStroke, iconsSize } from "../../shared";

function Upload() {
  return (
    <form className="w-full">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:hover:bg-bray-800 dark:bg-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:bg-slate-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <IconCloudUpload
              className="text-slate-500 dark:text-slate-400"
              size={iconsSize + 30}
              stroke={iconStroke - 0.6}
            />
            <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              .ipynb files only
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            accept=".ipynb"
            className="hidden"
          />
        </label>
      </div>
    </form>
  );
}

export default Upload;
