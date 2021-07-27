import React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
// import Bio from "../components/bio";

const Resume = () => {
  return (
    <>
      <Seo title="Daniel Deverell Resume" />
      {/* <Bio /> */}
      <div className="resume">
        <h1>Resume</h1>
        <ul>
          <li>917 865-5517</li>
          <li>daniel.deverell@gmail.com</li>
          <li>158 Underhill Avenue, Brooklyn, NY</li>
          <li>Github</li>
        </ul>
        <p>
          Front end engineer, teacher, communicator and designer. I craft and
          deliver applications using React, Redux, Apollo, GraphQL, Node,
          Express, Gatsby, HTML, CSS and JavaScript.
        </p>
        <h2>Full Stack Engineer, Simon Data - April 2021 - June 2021</h2>
        <ul>
          <li>
            Developed integrations for SMS, email and push messaging for a
            consumer data platform
          </li>
          <li>
            Developed web hooks and serverless function for data integration
          </li>
        </ul>
        <h2>Front End Engineer, Perksy - Oct 2019 - Oct 2020</h2>
        <ul>
          <li>
            Developed an intuitive SaaS application that allows brands to create
            consumer surveys (distributed via an innovative phone app
          </li>
          <li>
            Created reusable React components for all critical UI elements
          </li>
          <li>
            Designed and developed company website using GatsbyJS with React
            Spring for animation, Contentful for CMS, and EmotionJS for styling{" "}
          </li>
          <li>
            Documented and maintained all primary components using StorybookJS
          </li>
          <li>
            Converted significant portions of the legacy application to React
            Hooks
          </li>
          <li>Created custom NPM packages</li>
        </ul>
        <h2>
          Front End Engineer, Barclays Investment Bank - 2008-September 2019
        </h2>
        <ul>
          <li>
            Designed and developed a responsive framework for client-facing
            research distribution on the bank’s portal - Barclays Live
          </li>
          <li>
            Prototyped and developed a responsive content creation system with
            an advanced text editor and complex user roles using React -
            allowing analysts to publish on phone, tablet and desktop
          </li>
          <li>
            Developed the research publishing dashboard with web analytics to
            show traffic and user engagement - allowing management to determine
            the evolution of research offerings
          </li>
          <li>
            Introduced CSS in JS to the tech stack and oversaw the transition
            from SASS to modular component CSS Designed and evolved the
            investment bank’s module library using GatsbyJS, React and Storybook
            - dramatically increasing the speed of UI development
          </li>
          <li>
            Identified content sources for, designed, and developed an economic
            events calendar, visualizations for trade recommendations and
            video/audio features
          </li>
          <li>
            Rebranded the web presence and oversaw the transition of all major
            Lehman Brothers web properties to Barclays Capital
          </li>
        </ul>
        <h2>Adjunct Associate Professor, New York University - 1995-Present</h2>
        <ul>
          <li>
            Teach UX, visual design and Node/React for web design and
            development
          </li>
          <li>
            Developed curriculum for the MERN (Mongo, Express, React, Node)
            diploma program
          </li>
          <li>Awarded for Excellence in Teaching</li>
        </ul>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Resume;
