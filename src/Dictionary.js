import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

import "./App.css";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [images, setImages] = useState(null);

  function handleDicResponse(response) {
    console.log(response);
    console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    console.log(response);
    setImages(response.data);
  }

  function search() {
    let apiKey = "a62bt3c87f1eoc3b004febcaf4a111f5";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiURL).then(handleDicResponse);

    let apiKeyImages = "a62bt3c87f1eoc3b004febcaf4a111f5";
    let apiURLImages = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${apiKeyImages}`;
    axios.get(apiURLImages).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <div className="container m-2">
          <form onSubmit={handleSubmit} className="text-center">
            <input
              type="search"
              placeholder="Welcome"
              autoFocus={true}
              onChange={handleKeyWordChange}
              className="p-2"
            />
          </form>
          <div className="hint">i.e: sunset, wine, yoga, plant...</div>
        </div>

        <div className="container m-2">
          <Results data={results} />
        </div>
        <div className="container m-2 ">
          <Images images={images} />
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
