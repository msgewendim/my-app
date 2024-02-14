import React from "react";
import emojipedia from "../emojipedia";
import {createEmoji} from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojiPedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
