import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="m-3">
      <h3 className="text-start"> {props.meaning.partOfSpeech}</h3>
      <div className="definition text-start">
        <strong>Definition:</strong>
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
