import React from "react";

function Title(props) {
  return (
    <div className="my-5">
      <h1 className="text-center">{props.pageName}</h1>
    </div>
  );
}

export default Title;
