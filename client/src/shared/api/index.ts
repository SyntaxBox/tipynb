import { API_URL } from "..";

export async function getTransformedFile(
  file: File,
  options: {
    pdf?: boolean;
    py?: boolean;
    docx?: boolean;
  }
) {
  const { pdf, py, docx } = options;
  if (!pdf && !py && !docx)
    throw new Error("Please provide at least one file type");

  const formData = new FormData();

  formData.append("file", file);
  pdf && formData.append("pdf", "include");
  py && formData.append("py", "include");
  docx && formData.append("docx", "include");

  const res = await fetch(`${API_URL}/transform`, {
    method: "POST",
    body: formData,
  });
  return await res.json();
}
