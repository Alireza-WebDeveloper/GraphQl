import { GraphQLClient } from "graphql-request";

const graphqlClientHome = new GraphQLClient("http://localhost:8000/graphql");

export { graphqlClientHome };
