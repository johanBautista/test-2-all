import React from "react";
import { useState } from "react";

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

  return (
    <div className="container">
      <p className="bg-warning">Home view</p>
      {/* form  */}
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
      </form>
      <p className="container mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus ab sint laudantium minus.
        Consequatur illo qui est omnis iusto ab eos nemo. Vel suscipit accusamus illo dolores reprehenderit vero. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Ex itaque molestiae laudantium optio aperiam impedit nesciunt
        autem dolores suscipit exercitationem officia at, porro laborum, iure pariatur sequi fugiat rem voluptatum!
      </p>
    </div>
  );
};

export default Home;
