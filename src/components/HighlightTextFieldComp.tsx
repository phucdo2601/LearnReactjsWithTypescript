import React, { useState } from "react";
import Highlighter from "react-highlight-words";
const HighlightTextFieldComp = () => {
  const [text, setText] = useState(
    `The dog is chasing the cat. Or perhaps they're just playing?`
  );

  const [searchVal, setSearchVal] = useState("");

  const searchWords: Array<any> = searchVal.split(/\s/).filter((word) => word);

  const [isCasesentitive, setIsCasesentitive] = useState(false);

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <>
      <div>
        <div>
          <h4>Search terms</h4>
          <input
            name="searchTerms"
            value={searchVal}
            onChange={(event) => setSearchVal(event.target.value)}
          />
          <h4>Active Index</h4>
          <input
            name="activeIndex"
            value={activeIndex}
            onChange={(event: any) => setActiveIndex(event.target.value)}
            type="number"
          />
        </div>

        <h4>Case Sensitive?</h4>
        <input
          checked={isCasesentitive}
          name="caseSensitive"
          onChange={(event) => setIsCasesentitive(event.target.checked)}
          type="checkbox"
        />
        <br />
        <label>Body Content:</label>
        <textarea
          style={{
            width: "100%",
            height: "100%",
          }}
          name="textToHighlight"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <br />

        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={searchWords}
          activeIndex={activeIndex}
          autoEscape={true}
          textToHighlight={text}
          caseSensitive={isCasesentitive}
          highlightStyle={{ fontWeight: "normal" }}
        />
      </div>
    </>
  );
};

export default HighlightTextFieldComp;
