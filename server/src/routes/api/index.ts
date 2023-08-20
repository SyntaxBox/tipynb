import * as express from 'express';
import * as multer from 'multer';
import transform from './transform';

// Set up in-memory storage for uploaded files
const memoryStorage = multer.memoryStorage();
export const upload = multer({ storage: memoryStorage });

const router = express.Router();

router.post('/transform', upload.single('file'), transform);

export default router;
