import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./App.css";

export default function Results(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="results">
        <div className="about ps-3 pt-3 pb-2 mt-5">
          <h2 className="text-start text-capitalize">{props.data.word}</h2>
          <h5 className="text-start blockquote-footer">
            <Phonetic phonetic={props.data.phonetic} />
          </h5>
        </div>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
