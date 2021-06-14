import React from 'react';

const textinput = (props) => {
  return (
    <input
      className={`${
        props.disabled && 'text-gray'
      } pl-4 px-8 py-1 rounded-full font-medium border hover:border-2 transition ease-out bg-white border-grey placeholder-gray text-lg focus:outline-none focus:border-gray hover:border-dark-grey  focus:bg-white mt-5`}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      disabled={props.disabled}
    />
  );
};

export default textinput;
