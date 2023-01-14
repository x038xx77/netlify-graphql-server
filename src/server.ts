//@ts-ignore
import { serve } from 'https://deno.land/std@0.157.0/http/server.ts';
import { createYoga, createSchema } from 'https://esm.sh/graphql-yoga@3.1.1?deps=graphql@16.6.0';
import SchemaBuilder from 'https://esm.sh/@pothos/deno/packages/core/mod.ts';
import RelayPlugin from 'https://esm.sh/@pothos/deno/packages/plugin-relay/mod.ts';

const builder = new SchemaBuilder({});

builder.queryType({
  fields: (t:any) => ({
    hello: t.string({
      args: {
        name: t.arg.string({}),
      },
      resolve: (_, { name }:any) => `hello, ${name || 'World'}`,
    }),
  }),
});

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world'
    }
  }
})


const yoga = createYoga({
  schema: schema,
});

serve(yoga, {
  onListen({ hostname, port }:any) {
    console.log(`Listening on http://${hostname}:${port}/graphql`);
  },
});