import React, { useState } from "react";
import data from "./data.js";
import "./Accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleMultiple = (id) => {
    setMultiple((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleClick = (id) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h1>Accordion</h1>
      <button
        onClick={() => setEnableMultiple(!enableMultiple)}
        className="btn"
      >
        {enableMultiple
          ? "Disable Multiple Questions"
          : "Enable Multiple Questions"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                onClick={
                  enableMultiple
                    ? () => handleMultiple(item.id)
                    : () => handleClick(item.id)
                }
                className="title"
              >
                <h3 className="question">
                  Question {item.id}: {item.question}
                </h3>
                <span className="icon">
                  {selected === item.id || multiple.includes(item.id)
                    ? "-"
                    : "+"}
                </span>
              </div>
              {(selected === item.id || multiple.includes(item.id)) && (
                <p>{item.answer}</p>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
