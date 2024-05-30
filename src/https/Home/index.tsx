import { gql } from "graphql-request";
import { graphqlClientHome } from "../index.Home";

const getJobs = async () => {
  try {
    const query = gql`
      query {
        Job {
          id
          date
          title
          company {
            id
            name
          }
        }
      }
    `;
    const response = await graphqlClientHome.request(query);
    return response;
  } catch (err) {
    return err;
  }
};

export { getJobs };
