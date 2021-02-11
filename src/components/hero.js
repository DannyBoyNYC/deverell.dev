import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

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
    <header>
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
        <h1>
          <span style={{ display: "block" }}>Applied</span> Procrastination
        </h1>
      </BackgroundImage>
    </header>
    
  )
}

export default Hero
