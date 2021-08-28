import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.redirect(process.env.SUPER_SECRET_LINK || '/');
}
