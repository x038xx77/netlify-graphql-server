import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { schema } from '../../src/schema'
import { Handler } from '@netlify/functions'

//@ts-ignore
const handler: Handler = async (_event, _context) => {

const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  context: (req) => {
    return {
      req,
    }
  },
})
const server = createServer(yoga)
return {
 server:server
};
}
export  { handler } 


