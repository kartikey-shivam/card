import React from "react";

export default function Card(props) {
  return (
    <div className="">
      <div>
        <img src="" className="" />
      </div>
      <div className="">
        <h3 className="">{props.heading}</h3>
        <button type="" className="">
          {props.button}
        </button>
        <p className="">{props.para}</p>
      </div>
    </div>
  );
}
