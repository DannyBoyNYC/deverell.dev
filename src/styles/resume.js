import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 4rem 6rem;
  max-width: 840px;
  margin: 0 auto;
  font-size: 0.875rem;
  color: #000;
  line-height: 1.4;

  .contact-data {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: baseline;
    /* justify-content: space-between; */
    > .contact {
      margin-left: 2rem;
    }
  }

  a {
    color: inherit;
  }

  .head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    p a {
      /* text-decoration: underline; */
      color: #666;
    }
  }

  .experience {
    margin-bottom: 1.5rem;
    li {
      margin: 0.3rem 0;
      width: 70ch;
    }
  }

  .intro {
    font-size: 0.875rem;
    line-height: 1.4;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    width: 80ch;
    border-bottom: 1px solid #00000033;
  }

  .span {
    display: inline-block;
    margin-left: 1rem;
    font-size: smaller;
  }

  @media print {
    padding: 3rem;
    font-size: 0.75rem;
    * {
      color: black !important;
      line-height: 1.4;
    }
    .contact-data {
      padding: 0;
      list-style: none;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
    }
    a {
      display: none;
    }
    .head a {
      display: inline;
    }
    .experience {
      margin-bottom: 1.5rem;
      li {
        margin: 0.3rem 0;
      }
    }
    .intro {
      font-style: italic;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    .span {
      display: inline-block;
      margin-left: 1rem;
      font-size: smaller;
    }
  }
`;
