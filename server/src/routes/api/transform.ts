import { Request, Response } from 'express';
import { transformIPYNB } from '../../services';

export default async function transform(req: Request, res: Response) {
  const { file, body } = req;
  const { pdf, py, docx } = body;

  const fileName = file.originalname;
  const fileExtension = fileName.split('.')[fileName.split('.').length - 1];

  if (fileExtension !== 'ipynb')
    res.status(400).json({ error: 'Bad Request: file is not a .ipynb file' });

  if (!pdf && !py && !docx)
    res.status(400).json({ error: 'Bad Request: No return File selected' });

  const data = transformIPYNB(file, { pdf, py, docx });
  res.json({ data });
}
