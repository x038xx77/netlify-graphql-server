import serverless from "serverless-http";

import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { schema } from '../../src/schema'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const yoga = createYoga({
  graphqlEndpoint: "/.netlify/functions/api",
  schema,
  context: (req) => {
    return {
      req,
      prisma,
    }
  },
})


export const handler = serverless(yoga);