import React from "react";
import { useState } from "react";

const Blogs = () => {
  const [option, setOption] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!option) {
      alert("please select your option");
    }
    console.log("You option: ", option);
  };

  return (
    <div className="container">
      <p className="bg-success">Blogs view</p>
      <p className="container mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus ab sint laudantium minus.
        Consequatur illo qui est omnis iusto ab eos nemo. Vel suscipit accusamus illo dolores reprehenderit vero. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Ex itaque molestiae laudantium optio aperiam impedit nesciunt
        autem dolores suscipit exercitationem officia at, porro laborum, iure pariatur sequi fugiat rem voluptatum!
      </p>
      {/* form radio  */}

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={handleSubmit}>
              <div className="radio">
                <label>
                  <input className="m-2" type="radio" name="option" value="tpv" id="tpv" onChange={handleChange} />
                  TPV
                </label>
              </div>
              <div className="radio">
                <label>
                  <input className="m-2" type="radio" name="option" value="bank" id="bank" onChange={handleChange} />
                  BANK
                </label>
              </div>
              <div className="radio">
                <label>
                  <input className="m-2" type="radio" name="option" value="bizum" id="bizum" onChange={handleChange} />
                  BIZUM
                </label>
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
