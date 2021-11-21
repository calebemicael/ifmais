import jwt  from 'jsonwebtoken'
import { promisify } from 'util'

export default async (req: any, res: any, next: any) => {
  const authHeader = req.headers.token

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not found' })
  }

  try {
    const decoded = await promisify(jwt.verify)(authHeader, process.env.APP_SECRET)
    req.userId = decoded.id
    req.isAdmin = decoded.isAdmin

    return next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token' })
  }
}