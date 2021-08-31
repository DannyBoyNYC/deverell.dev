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
    justify-content: space-between;
  }

  a {
    color: inherit;
  }

  .experience {
    margin-bottom: 1.5rem;
    li {
      margin: 0.3rem 0;
      width: 70ch;
    }
  }

  .intro {
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 2rem;
    width: 80ch;
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
