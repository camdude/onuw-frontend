import React from "react";

const Bookmark = props => {
  return (
    <div className={`Bookmark${props.isFavourite ? "--favourited" : ""}`} onClick={props.onClick}>
      <i className={`icon fa fa-bookmark${!props.isFavourite ? "-o" : ""}`} />
    </div>
  );
};

export default Bookmark;
