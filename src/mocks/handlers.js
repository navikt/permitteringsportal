import { rest } from 'msw';

export const handlers = [

  rest.get('/permitteringsportal/api/sjekk-innlogget', (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),

  rest.get('/permitteringsportal/api/organisasjoner', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        [
          {
            "Name" : "ARENDAL OG BØNES REVISJON",
            "OrganizationForm" : "BEDR",
            "OrganizationNumber" : "810993502",
            "ParentOrganizationNumber" : "810993472",
            "Status" : "Active",
            "Type" : "Business"
          },
          {
            "Name" : "AVALDSNES OG TERRÅK",
            "OrganizationForm" : "KBO",
            "OrganizationNumber" : "910561820",
            "ParentOrganizationNumber" : null,
            "Status" : "Active",
            "Type" : "Enterprise"
          },
          {
            "Name" : "BILLINGSTAD OG GIVÆR REVISJON",
            "OrganizationForm" : "AS",
            "OrganizationNumber" : "910274155",
            "ParentOrganizationNumber" : null,
            "Status" : "Active",
            "Type" : "Enterprise"
          }
        ]
      )
    )
  }),

  rest.get('/permitteringsportal/api/oppgaver', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        [
          {
            "navn" : "Hans Hansen",
            "mottat" : "2022-01-01",
            "fnr" : "28115049307",
            "status" : "NY"
          },
          {
            "navn" : "Lilian Johansen",
            "mottat" : "2022-01-01",
            "fnr" : "28115049307",
            "status" : "NY"
         }
        ]
      )
    )
  })

]
