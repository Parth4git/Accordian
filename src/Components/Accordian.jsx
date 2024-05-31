import React from "react";
import { useState } from "react";
import data from "./data.js";
import "./Accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  function handleClick(getDataid) {
    if (selected === getDataid) {
      return setSelected(null);
    }
    setSelected(getDataid);
  }
  return (
    <div>
      <h1>Accordian</h1>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <h2>Question {item.id}</h2>
              <div onClick={() => handleClick(item.id)} className="title">
                <h3 className="question">{item.question}</h3>
                <span className="icon">+</span>
              </div>

              {selected === item.id ? <p>{item.answer}</p> : null}
            </div>
          ))
        ) : (
          <div> "No data found" </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
