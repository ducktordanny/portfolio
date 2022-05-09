import type { NextApiRequest, NextApiResponse } from 'next';
import * as bcrypt from 'bcrypt';
import { connectToDatabase } from '../../libs/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    if (!req.body.username || !req.body.password)
      return res.status(400).json({ error: 'Missing username or password!' });
    const { db } = await connectToDatabase();
    const { username, password } = req.body;
    const user = await db.collection('users').findOne({username});
    if (!user) res.status(401).json({error: 'User not found'});
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(401).json({ error: 'Invalid password!' });
    const analytics = await db.collection('analytics').find().toArray();
    res.json(analytics);
  } else res.status(404).send('');
}
