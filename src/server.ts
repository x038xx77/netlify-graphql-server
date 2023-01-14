import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { schema } from './schema'

const yoga = createYoga({
  graphqlEndpoint: '/',
  schema,
  context: (req) => {
    return {
      req,
    }
  },
})

const server = createServer(yoga)

const port = 4000
const HOST_APP = "127.0.0.1"
server.listen({
    port: port as number,
    host: HOST_APP || "localhost"
  },
  () => {
      console.log(`\
    🚀 Server ready at: http://127.0.0.1:4000
    ⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
      `)
    }) 


// server.listen(4000, () => {
//   console.log(`\
// 🚀 Server ready at: http://127.0.0.1:4000
// ⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
//   `)
// })
