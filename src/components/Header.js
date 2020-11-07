import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header>
        <p>
          <FontAwesomeIcon className="todo-logo" icon={faListAlt} />
        </p>
        <h1>Todo List</h1>
      </header>
      <hr />
    </>
  );
};

export default Header;
