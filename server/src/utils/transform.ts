import * as markdownPDF from 'markdown-pdf';
import * as archiver from 'archiver';

export class Transform {
  public static generateZipped(
    filename: string,
    file: {
      pythonCode?: string;
      markdown?: string;
    },
    options: {
      pdf?: boolean;
      py?: boolean;
      docx?: boolean;
    },
  ) {
    const { pdf, docx, py } = options;
    const { pythonCode, markdown } = file;

    if (!pdf && !py && !docx) throw new Error('no file type selected');
    if (!markdown && !pythonCode) throw new Error('no file given');
    if (py && !pythonCode)
      throw new Error('required python file but no python string given');

    if ((pdf || docx) && !markdown)
      throw new Error('required pdf or docx file but no markdown string given');

    const files = [
      py && {
        filename: `${filename}.py`,
        content: this.toPythonFile(pythonCode),
      },
      pdf && {
        filename: `${filename}.pdf`,
        content: this.mdToPdfFile(markdown),
      },
    ];
    console.log(files);

    const archive = archiver('zip');
    files.forEach((file) => {
      archive.append(file.content, { name: file.filename });
    });

    archive.finalize();
    return archive;
  }

  private static toPythonFile(pythonCode: string) {
    console.log(pythonCode);
    return JSON.stringify(pythonCode);
  }

  private static mdToPdfFile(markdown: string) {
    return markdownPDF()
      .from.string(markdown)
      .to.buffer((err, pdfBuffer) => {
        if (err) throw new Error(`md to pdf Error: ${err}`);
        return pdfBuffer;
      });
  }
}
