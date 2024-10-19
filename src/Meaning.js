import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./App.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="mt-3 about shadow-sm p-3 rounded">
      <h3 className="text-start text-capitalize">
        {" "}
        {props.meaning.partOfSpeech}
      </h3>
      <div className="definition text-start">
        <strong>Definition: </strong>
        {props.meaning.definition}
      </div>

      <div className="example text-start">
        <Example example={props.meaning.example} />
      </div>
      <div className="synonyms text-start">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
