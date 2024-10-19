import React from "react";

export default function Example(props) {
  console.log(props.example);
  if (props.example) {
    return (
      <div>
        <em>
          <strong>Example:</strong>
          {props.example}
        </em>
      </div>
    );
  } else {
    return null;
  }
}
