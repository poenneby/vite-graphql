import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import fs from "fs";
import resolvers from "./resolvers";

// Construct a schema, using GraphQL schema language
const schema = fs.readFileSync("./src/schema.graphql", "utf8");
const builtSchema = buildSchema(schema);

// The root provides a resolver function for each API endpoint


const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: builtSchema,
    rootValue: resolvers,
    graphiql: true,
  })
);
// @ts-ignore
if (import.meta.env.PROD) app.listen(4000);

export const viteNodeApp = app;
