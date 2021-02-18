/**
 * Bio component queries for data using Gatsby's useStaticQuery component
 * https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: "2rem",
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: "0.5rem",
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ margin: 0 }}>
        The playground of {author} who lives and works in Brooklyn building
        things out of code for fun and profit. You can follow him on
        <a href={`https://twitter.com/${social.twitter}`}>Twitter.</a>
      </p>
    </div>
  );
};

export default Bio;
