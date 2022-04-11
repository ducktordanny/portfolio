import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') res.redirect(process.env.SUPER_SECRET_LINK || '/no-gift');
  else res.redirect('/no-gift');
}
