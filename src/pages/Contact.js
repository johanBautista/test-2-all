import React from "react";
// import { Link } from "react-router-dom";

const Contact = () => {
  const handleClick = () => {
    console.log("this is:", this);
  };

  return (
    <div className="container">
      <p className="bg-primary">Contact view</p>
      <p className="container mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus ab sint laudantium minus.
        Consequatur illo qui est omnis iusto ab eos nemo. Vel suscipit accusamus illo dolores reprehenderit vero. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Ex itaque molestiae laudantium optio aperiam impedit nesciunt
        autem dolores suscipit exercitationem officia at, porro laborum, iure pariatur sequi fugiat rem voluptatum!
      </p>

      <div>
        <a href="/NoPage" className="btn btn-warning m-2" onClick={handleClick}>
          No Page
        </a>
        <a href="/blogs" className="btn btn-warning m-2" onClick={handleClick}>
          Blog
        </a>
        <a href="/contact" className="btn btn-warning m-2" onClick={handleClick}>
          Contact
        </a>
        <a href="/" className="btn btn-warning m-2" onClick={handleClick}>
          Ho-me
        </a>
      </div>
    </div>
  );
};

export default Contact;
