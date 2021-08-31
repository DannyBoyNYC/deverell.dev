import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import bioImage from "../../content/assets/profile-pic.jpg";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
    <Layout>
      <div className="bio">
        <Seo title="Daniel Deverell" />
        <div className="image-container">
          <img src={bioImage} alt="daniel deverell" />
          <div class="gradient blurry"></div>
        </div>
        <h1>Hi! I'm Daniel Deverell</h1>
        <p>
          You've reached the playground of {author} who lives and works in
          Brooklyn building things out of code for fun and profit.
        </p>
        <p>
          By night I teach classes in the full stack web development{" "}
          <a href="https://www.sps.nyu.edu/professional-pathways/certificates/technology/full-stack-web-development.html">
            certificate program
          </a>{" "}
          at NYU. And by day I've worked at Barclays Investment Bank, Perksy and
          Simon Data as a front end and full stack developer.
        </p>
        <p>
          You can follow me on{" "}
          <a href="https://github.com/DannyBoyNYC">Github</a>,{" "}
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a> and view
          my resume <a href="/resume">here</a>.
        </p>
      </div>
    </Layout>
  );
};

export default Bio;
