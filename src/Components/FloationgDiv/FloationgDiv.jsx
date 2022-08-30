import React from "react";
import "./FloationgDiv.css"

export default function FloationgDiv({img,txt1,txt2}) {
  return (
    <div className="floatingdiv">
      <img src={img} alt="" />
      <span>
        {txt1}
        <br />
       {txt2}
      </span>
    </div>
  );
}
