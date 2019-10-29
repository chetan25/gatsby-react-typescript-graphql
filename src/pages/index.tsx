import React from "react";
import { graphql } from "gatsby";

interface IProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

export default ({ data }: IProps) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>We're a very cool website you should return to often.</p>
  </div>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
