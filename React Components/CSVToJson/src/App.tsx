import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { writeFile } from "fs";
import { saveAs } from "file-saver";
var jquery = require("jquery-csv");

function App() {
  const [currentFile, setCurrentFile] = useState<File>();
  const Convert = () => {
    jquery.toObjects(currentFile);
    writeFile("./converted.json", JSON.stringify(currentFile), (err) => {
      console.log(err);
      return;
    });
    saveAs("./converted.json", currentFile?.name + ".json");
  };
  return (
    <div className="App">
      <header className="App-header">
        <input
          type={"file"}
          onChange={(event) => {
            // @ts-ignore: Object is possibly 'null'.
            setCurrentFile(event.target.files[0]);
          }}
        />
        {"\n"}
        <button onClick={() => Convert}>Convert!</button>
      </header>
    </div>
  );
}

export default App;
