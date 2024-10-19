import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(keyWord);
    let apiKey = "a62bt3c87f1eoc3b004febcaf4a111f5";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search} className="text-center m-4">
        <input
          type="search"
          placeholder="Type the word"
          autoFocus={true}
          onChange={handleChange}
        />
        <div className="container m-2">
          <Results data={results} />
        </div>
      </form>
    </div>
  );
}
