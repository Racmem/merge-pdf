import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import mergePDFs from './src/pdf-merger.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/merge', async (req, res, next) => {
  const mergedFilePaths = [];
  const fileExtension = 'pdf';
  const fileFolder = 'upload';
  const fileOutPutName = '';
  const fileStarts = 0;
  const fileEnds = 0;

  const folder = path.join(__dirname, fileFolder);

  console.log(folder);
  for (let i = fileStarts; i <= fileEnds; i++) {
    mergedFilePaths.push(path.join(folder, `${i}.${fileExtension}`))
  }

  let mergedFileName = await mergePDFs(mergedFilePaths, fileOutPutName);
  res.status(200).send({ message: folder, filePaths: mergedFilePaths });
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
})