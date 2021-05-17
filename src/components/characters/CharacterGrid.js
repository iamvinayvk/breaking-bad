import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

function CharacterGrid(props) {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {props.items.map((items) => (
        <CharacterItem key={items.char_id} item={items} />
      ))}
    </section>
  );
}

export default CharacterGrid;
