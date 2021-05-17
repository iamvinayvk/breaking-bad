import React, { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Charcters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}

export default Search;
