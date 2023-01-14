import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { schema } from '../../src/schema'

const yoga = createYoga({
  graphqlEndpoint: '/.netlify/functions/api',
  schema,
  context: (req) => {
    return {
      req,
    }
  },
})

export const handler = createServer(yoga)


