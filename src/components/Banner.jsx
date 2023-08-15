import React from "react";

export default function Banner(props) {
  const classNameValue = props.classNameValue;
  console.log(classNameValue);
  return (
    <div className={`${classNameValue} banner`}>
      {!classNameValue && <p>Chez vous, partout et ailleurs</p>}
    </div>
  );
}
