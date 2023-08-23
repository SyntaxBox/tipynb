import * as nbformat from '@jupyterlab/nbformat';

export function transformIPYNB(
  buffer: Express.Multer.File,
  options: {
    pdf?: boolean;
    py?: boolean;
    docx?: boolean;
  },
) {
  const file = buffer.buffer.toString();
  const notebook = JSON.parse(file);
  let pythonCode = '';
  let markdownContent = '';

  // Extract Python code and Markdown cells
  notebook.cells.forEach((cell) => {
    if (cell.cell_type === 'code') {
      pythonCode += cell.source + '\n\n';
    } else if (cell.cell_type === 'markdown') {
      markdownContent += cell.source + '\n\n';
    }
  });
  console.log({ pythonCode });
  console.log({ markdownContent });
  return buffer;
}
