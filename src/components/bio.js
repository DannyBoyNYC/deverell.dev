/**
 * Bio component queries for data using Gatsby's useStaticQuery component
 * https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
// import Image from "gatsby-image";
// import { getImage, GatsbyImage } from "gatsby-plugin-image";
import bioImage from "../../content/assets/profile-pic.jpg";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      # file(relativePath: { eq: "./assets/profile-pic.jpg" }) {
      #   childImageSharp {
      #     gatsbyImageData(layout: FIXED)
      #     fixed(width: 200, height: 200) {
      #       ...GatsbyImageSharpFixed
      #     }
      #   }
      # }
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
      <Seo title="Daniel Deverell" />
      <img src={bioImage} alt="daniel deverell" />
      <h1>Hi! I'm Daniel Deverell</h1>
      <p>
        You've reached the playground of {author} who lives and works in
        Brooklyn building things out of code for fun and profit.
      </p>
      <p>
        You can follow him on{" "}
        <a href="https://github.com/DannyBoyNYC">Github</a> and{" "}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter.</a>
      </p>
    </div>
  );
};

export default Bio;
