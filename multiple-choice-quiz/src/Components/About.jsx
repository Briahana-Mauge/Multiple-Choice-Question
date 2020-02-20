import React from 'react';
import {
  FaHtml5,
  FaReact,
  FaGithub,
  FaCss3Alt,
  FaLinkedinIn,
} from 'react-icons/fa';
import {  DiJavascript1 } from 'react-icons/di';

const About = () => {
  return (
    <div>
      <h1>Hello, I'm Briahana!</h1>
      <p>I am a Full-Stack web developer based in NYC.
        Thank you for viewing my solution to the frontend takehome assessment!
      </p>
      <p>This assignment was completed using the following technolgies</p>
      <FaHtml5 className="icons" />
      <FaReact className="icons" />
      <FaCss3Alt className="icons" />
      <DiJavascript1 className="icons" />
      <p>Feel free to view any of my links below!</p>
      <div className="contact">
        {' '}
        <a href="https://www.linkedin.com/in/bmauge">
          <FaLinkedinIn className="icons contact" />
        </a>
        <a href="https://github.com/Briahana-Mauge">
          <FaGithub className="icons contact" />
        </a>{' '}
      </div>
    </div>
  );
};
export default About;
