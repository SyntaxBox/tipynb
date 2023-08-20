export function transformIPYNB(
  buffer: Express.Multer.File,
  options: {
    pdf?: boolean;
    py?: boolean;
    docx?: boolean;
  },
) {
  const file = buffer.buffer.toJSON();
  console.log(file);
  return buffer;
}
