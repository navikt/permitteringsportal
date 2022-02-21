import { rest } from 'msw';

export const handlers = [

  rest.get('/permitteringsportal/api/sjekk-innlogget', (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),

  rest.get('/permitteringsportal/api/organisasjoner', (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  })

]
