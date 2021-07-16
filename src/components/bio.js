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
          fixed(width: 250, height: 250) {
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
    <div className="bio">
      <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <h1>Hi! I'm Daniel Deverell</h1>
      <p>
        You've reached the playground of {author} who lives and works in
        Brooklyn building things out of code for fun and profit.
      </p>
      <p>
        You can follow him on{" "}
        <a href="https://github.com/DannyBoyNYC">Github</a> and{" "}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter.</a> or
      </p>
    </div>
  );
};

export default Bio;
