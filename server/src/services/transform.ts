import { Transform } from '../utils';

export function transformIPYNB(
  fileName: string,
  buffer: Express.Multer.File,
  options: {
    pdf?: boolean;
    py?: boolean;
    docx?: boolean;
  },
) {
  const { pdf, py, docx } = options;
  if (!pdf && !py && !docx) throw new Error('no file type selected');

  const file = buffer.buffer.toString();
  const notebook = JSON.parse(file);
  let pythonCode = '';
  let markdown = '';

  // Extract Python code and Markdown cells
  notebook.cells.forEach((cell) => {
    if (cell.cell_type === 'code') {
      pythonCode += cell.source + '\n\n';
    } else if (cell.cell_type === 'markdown') {
      markdown += cell.source + '\n\n';
    }
  });
  console.log({ pythonCode });
  console.log({ markdown });
  const zipFile = Transform.generateZipped(
    fileName,
    { pythonCode, markdown },
    { pdf: true, py, docx },
  );
  return zipFile;
}
