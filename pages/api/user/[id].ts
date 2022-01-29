// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import users from 'data/users.json'

type User = typeof users[0]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query)

  const user = (users.find(user => user.id === id) || {}) as User

  if (!user) return res.status(404).send('')

  res.status(200).json(user)
}
