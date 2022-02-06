import React, { useEffect, useState } from "react";
import { holaMundo, firebaseApp } from "../analytics/firebaseSetup";
import { getAnalytics, logEvent } from "firebase/analytics";
import headerImg from "../assets/img/header-1.jpg";
import skillsImg from "../assets/img/skills-1.png";
import contactImg from "../assets/img/contact-1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFortAwesome,
  faReact,
  faJs,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGoogle,
  faAws,
  faVuejs,
  faJira,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faDotCircle, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faServer, faTools } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  useEffect(() => {
    const analytics = getAnalytics(firebaseApp);
    logEvent(analytics, "AppreciationScreen");
    holaMundo();
  }, []);

  return (
    <div>
      <div className="container mb-5">
        <header className="d-flex justify-content-between">
          <section className="mt-5">
            <span className="color-lila small p-1">Hi, my name is</span>
            <h2 className="display-2 letter-spacing">Johan</h2>
            <h2 className="display-2 letter-spacing line-height">Bautista</h2>
          </section>
          <section className="movil-size-img">
            <img src={headerImg} alt="" />
          </section>
        </header>

        <section className="mt-4 text-start">
          <p>
            I’m a front end developer specializing in projects with technologies for build SPA’s i like the design also
            the user experience.
          </p>
          <p>
            If you knowmy last projects click{" "}
            <a href="/" className="color-lila">
              here
            </a>{" "}
            or if you know the artist behind this spectacular pictures for your works, please click{" "}
            <a href="/" className="color-lila">
              here
            </a>
            . Thanks!
          </p>
        </section>
      </div>

      <section className="section-skills">
        <div className="skills-shape">
          <p className="display-5 mt-1 skills-text">Skills</p>
        </div>
        <section>
          <div className="container-skills">
            <img src={skillsImg} alt="" className="movil-size-img-2" />

            <div className="skills-content">
              <div className="d-flex">
                <FontAwesomeIcon icon={faCheckSquare} className="color-lila" />
                <p className="skills-javascript">JavaScript (ES6+)</p>
              </div>
              <div className="margin-left">
                <div className="d-flex">
                  <FontAwesomeIcon icon={faCheckSquare} className="color-lila" />
                  <p className="skills-content-text">React</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faCheckSquare} className="color-lila" />
                  <p className="skills-content-text">Vue js</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faCheckSquare} className="color-lila" />
                  <p className="skills-content-text">TypeScript</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faCheckSquare} className="color-lila" />
                  <p className="skills-content-text">Node</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faCheckSquare} className="color-lila" />
                  <p className="skills-content-text">Mongo</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faCheckSquare} className="color-lila" />
                  <p className="skills-content-text">Phyton</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="container mb-5">
        <section className="mt-4 text-start">
          <p>
            I’m a front end developer specializing in projects with technologies for build SPA’s i like the design also
            the user experience.
          </p>
          <p>
            If you knowmy last projects click{" "}
            <a href="/" className="color-lila">
              here
            </a>{" "}
            or if you know the artist behind this spectacular pictures for your works, please click{" "}
            <a href="/" className="color-lila">
              here
            </a>
            . Thanks!
          </p>
        </section>

        <section className="mt-4 text-start">
          <p>
            I’m a front end developer specializing in projects with technologies for build SPA’s i like the design also
            the user experience.
          </p>
          <p>
            If you knowmy last projects click{" "}
            <a href="/" className="color-lila">
              here
            </a>{" "}
            or if you know the artist behind this spectacular pictures for your works, please click{" "}
            <a href="/" className="color-lila">
              here
            </a>
            . Thanks!
          </p>
        </section>
      </div>

      <section className="mb-4 section-experience">
        <div className="container mb-5 container-experience">
          <p className="display-5 pt-4 text-center">Experiences</p>
          <div className="m-4 experience-img text-center p-4">
            <div>
              <p>Img - Project</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-5">
        <section className="mt-4 text-start">
          <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
          <p>
            I’m a front end developer specializing in projects with technologies for build SPA’s i like the design also
            the user experience.
          </p>
          <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faVuejs}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faSass}></FontAwesomeIcon>
          {/* <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon> */}

          <p>
            If you knowmy last projects click{" "}
            <a href="/" className="color-lila">
              here
            </a>{" "}
            or if you know the artist behind this spectacular pictures for your works, please click{" "}
            <a href="/" className="color-lila">
              here
            </a>
            . Thanks!
          </p>
        </section>

        <section className="mt-4 text-start">
          <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTools}></FontAwesomeIcon>

          <p>
            I’m a front end developer specializing in projects with technologies for build SPA’s i like the design also
            the user experience.
          </p>
          <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faJira}></FontAwesomeIcon>
          {/* <FontAwesomeIcon icon={faAws}></FontAwesomeIcon> */}

          <p>
            If you knowmy last projects click{" "}
            <a href="/" className="color-lila">
              here
            </a>{" "}
            or if you know the artist behind this spectacular pictures for your works, please click{" "}
            <a href="/" className="color-lila">
              here
            </a>
            . Thanks!
          </p>
        </section>
      </div>

      <div className="contact-shape">
        <p className="display-5 mt-1 contact-text">Contact</p>
      </div>
      <section className="section-contact">
        <div className="container-contact">
          <div className="contact-content text-center mb-5">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <p>jsbparra@gmail.com</p>
            <div className="d-flex justify-content-evenly">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faFortAwesome}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </div>
          </div>
          <img src={contactImg} alt="" className="movil-size-img-2 mt-4" />
        </div>
      </section>
      {/* form  */}
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
        </label>
        <label>
          Enter your age:
          <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
        </label>
        <input type="submit" />
      </form> */}
    </div>
  );
};

export default Home;
