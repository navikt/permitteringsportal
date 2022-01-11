import { rest } from 'msw';

export const handlers = [

  rest.get('/api/sjekk-innlogget', (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  })

]
