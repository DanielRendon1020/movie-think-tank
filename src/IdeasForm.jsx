import { useState } from "react";

export default function IdeasForm({ onAddIdea }) {
  let [inputVal, setInputVal] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onAddIdea(inputVal);
    setInputVal("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={(e) => setInputVal(e.target.value)} />
      <button type="submit">Add Idea</button>
    </form>
  );
}
