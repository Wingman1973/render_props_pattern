import React from "react";

const Picture = props => {
  return (
    <div>
      <img src={props.src} className="picture" />
      {props.children}
    </div>
  );
};

export default Picture;
