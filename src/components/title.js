import React from "react";

function Title(props) {
  return (
    <div className="mt-5 mb-3">
      <h1 className="text-center">{props.pageName}</h1>
    </div>
  );
}

export default Title;
