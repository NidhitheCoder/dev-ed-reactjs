import React from "react";
import './App.css';

const Tweet = ({name,message}) => {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h6>Number of likes</h6>
    </div>
  );
};

export default Tweet;
