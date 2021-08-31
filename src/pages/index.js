import React from "react";
// import { graphql } from "gatsby";
import Bio from "../components/bio";
import { Container } from "../styles/bio";
// import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title;
  // const posts = data.allMarkdownRemark.edges;

  return (
    <Container>
      <Bio />
      {/* SAMPLE LINKS TO OLD CONTENT */}
      {/* https://www.deverell.dev/node-examples/ */}
      {/* https://www.deverell.dev/expressjs/ */}
      {/* https://www.deverell.dev/audio/ */}
      {/* <Hero />
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        
        <Img fluid={data.file.childImageSharp.fluid} alt="Devo poster" />

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      </Layout> */}
    </Container>
  );
};

export default BlogIndex;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     file(relativePath: { eq: "Devopop_1296x.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 200) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//              date(formatString: "MMMM DD, YYYY")
//              title
//              description
//            }
//          }
//        }
//      }
//    }
//  `;
