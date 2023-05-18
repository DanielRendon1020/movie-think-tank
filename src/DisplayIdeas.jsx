import React from "react";

export default function DisplayIdeas({ ideas }) {
  let crazyIdeas = ideas.map((idea) => {
    return <li>{idea}</li>;
  });

  return (
    <div>
      <ul>{crazyIdeas}</ul>
    </div>
  );
}
