import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string;

  const imagePath = path.join(process.cwd(), 'public', 'images', `${code}`);

  try {
    if (fs.existsSync(imagePath)) {
      res.setHeader('Content-Type', 'image/png');
      const image = fs.readFileSync(imagePath);
      res.status(200).send(image);
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
