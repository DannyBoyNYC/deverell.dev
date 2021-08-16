import React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
// import Bio from "../components/bio";

const Resume = () => {
  return (
    <>
      <Seo title="Daniel Deverell Resume" />
      <div className="resume">
        <h1>Resume</h1>
        <ul className="contact-data">
          <li>
            <h2>Daniel Deverell</h2>
          </li>
          <li>daniel.deverell@gmail.com</li>
          <li>158 Underhill Avenue, Brooklyn, NY</li>
          <li>917 865-5517</li>
          <li>
            <a href="">Github</a>
          </li>
        </ul>
        <p className="intro">
          Front end engineer, teacher and designer. I craft and deliver
          applications using React, Redux, TypeScript, Apollo, GraphQL, Node,
          Express, HTML, CSS and JavaScript.
        </p>
        <h2>
          New York University, Associate Adjunct Professor
          <span className="span">1995~present</span>
        </h2>
        <ul className="experience">
          <li>
            Teach intermediate and advanced classes in full stack web
            development with Node, ExpressJS and React
          </li>
          <li>
            Developed curriculum for the MERN (Mongo, Express, React, Node)
            certificate program
          </li>
          <li>Awarded for Excellence in Teaching 2012</li>
        </ul>
        <h2>
          Simon Data NY, Full Stack Engineer
          <span className="span">April 2021~June 2021</span>
        </h2>
        <ul className="experience">
          <li>
            Createded integration for SMS and push messaging for the consumer
            data platform allowing clients to more effectively market across all
            channels
          </li>
          <li>
            Developed web hooks and serverless functions to facilitate data
            integration
          </li>
          <li>
            Customized Material UI components to better align with the firm's
            branding and integrate with TypeScript
          </li>
        </ul>
        <h2>
          Perksy NY, Front End Engineer
          <span className="span">Oct 2019~Oct 2020</span>
        </h2>
        <ul className="experience">
          <li>
            Developed an intuitive SaaS application that allows brands to create
            consumer surveys (distributed via an innovative phone app
          </li>
          <li>
            Created reusable React components for all critical UI elements
          </li>
          <li>
            Designed and developed company website using GatsbyJS with React
            Spring for animation, Contentful for CMS, and EmotionJS for styling
          </li>
          <li>
            Documented and maintained all primary components using StorybookJS
          </li>
          <li>
            Converted significant portions of the legacy application to React
            Hooks and TypeScript
          </li>
          <li>Created custom NPM packages</li>
        </ul>
        <h2>
          Barclays Investment Bank NY, Front End Engineer
          <span className="span">2008~Sept 2019</span>
        </h2>
        <ul className="experience">
          <li>
            Designed and developed a responsive framework for client-facing
            research distribution on the bank’s broker/dealer portal
          </li>
          <li>
            Developed a responsive content creation system with an advanced text
            editor and complex user roles using React - allowing analysts to
            publish on phone, tablet and desktop
          </li>
          <li>
            Developed a research publishing dashboard with web analytics to show
            traffic and user engagement - allowing management to determine the
            evolution of research offerings
          </li>
          <li>
            Transitioned from SASS to CSS in JS and evolved the investment
            bank’s module library using GatsbyJS, React and Storybook -
            dramatically increasing the speed of UI development
          </li>
        </ul>

        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Resume;
