import type {NextApiRequest, NextApiResponse} from 'next';
import {connectToDatabase} from "../../libs/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    if (!req.body.pass) return res.status(400).json({error: 'Missing password!'})
    const {pass} = req.body;
    if (pass !== process.env.PW)
      return res.status(401).json({error: 'Invalid password!'});
    const {db} = await connectToDatabase();
    const analytics = await db.collection('analytics').find().toArray();
    console.log(analytics);
    res.json(analytics);
  } else res.status(404).send('');
}
