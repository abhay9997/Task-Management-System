import React from 'react';

const ActionButton = ({ text, iconSrc }) => {
  return (
    <div className="flex gap-3.5 p-2 whitespace-nowrap rounded bg-zinc-100">
      <div className="my-auto">{text}</div>
      <img loading="lazy" src={iconSrc} alt="" className="shrink-0 w-6 aspect-square" />
    </div>
  );
};

export default ActionButton;