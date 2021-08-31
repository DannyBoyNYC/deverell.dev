import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10vh;
  .bio {
    color: var(--light);
    max-width: 480px;
    margin: 0 auto;
    h1 {
      margin-top: 1rem;
    }
    a {
      color: inherit;
    }
    .image-container {
      position: relative;
      width: 300px;
      height: 300px;
    }
    img,
    .blurry {
      border-radius: 50%;
      width: 300px;
      height: 300px;
      margin-left: -30px;
      position: absolute;
      top: 0;
      left: 0;
    }
    img {
      z-index: 100;
      filter: drop-shadow(0px 0px 5px hsl(0deg 0% 0% / 0.5));
      /* display: none; */
    }
    .blurry {
      background-image: linear-gradient(#ffffff33, #ffffff55);
      position: absolute;
      filter: blur(10px);
      transform: scale(1) /*  translateX(10%) */;
    }
  }
`;
