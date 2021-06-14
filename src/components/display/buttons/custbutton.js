import React from "react";

const custbutton = (props) => {
  return (
    <button
      onClick={props.onClick}
      ref={props.ref}
      type={props.type}
      className={`${props.className} m-0 py-3 px-9 items-center text-lg transition ease-in text-white font-normal rounded shadow-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75`}
    >
      <span>{props.children}</span>
    </button>
  );
};

export default custbutton;
