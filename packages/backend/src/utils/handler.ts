import { Request, RequestHandler, Response } from 'express'

export const handle = (handler: Function): RequestHandler => {
  return async function (req: Request, res: Response, ...params: any[]) {
    try {
      const response = await handler(req, res, ...params)
      // Ignore if 'res' has already ended (res.send() already called)
      if (!res.finished) {
        res.status(200).json(response)
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Internal server error.' })
    }
  }
}
