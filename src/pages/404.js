import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Container = styled.div`
  color: #fff;
`;

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Container>
          <Seo title="404: Not Found" />
          <h1>Not Found</h1>
          <p>You've just found a page that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
