import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nyc.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      tag="div"
      fluid={image.sharp.fluid}
      fadeIn="soft"
      style={{
        width: "100vw",
        height: "420px",
        backgroundPosition: "top 36% center",
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          padding: "3rem",
          ...scale(1.5),
          paddingTop: "4rem",
          margin: 0,
        }}
      >
        <span style={{ display: "block" }}>Applied</span> Procrastination
      </h1>
    </BackgroundImage>
  )
}

export default Hero
