import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../libs/mongodb';

export interface AnalyticViewReq {
  path: string;
  hostname: string;
  lastVisited: string;
}

export interface AnalyticView extends AnalyticViewReq {
  _id: string;
  views: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(404).send('');
  const { db } = await connectToDatabase();
  const data = JSON.parse(req.body) as AnalyticView;
  const analytic = await db
    .collection('analytics')
    .findOne({ path: data.path, hostname: data.hostname });

  if (!analytic) {
    const response = await db
      .collection('analytics')
      .insertOne({ ...data, views: 1 });
    return res.json(response);
  }

  const response = await db
    .collection('analytics')
    .update(
      { _id: analytic._id },
      { $set: { views: analytic.views + 1, lastVisited: data.lastVisited } }
    );
  return res.json(response);
}
