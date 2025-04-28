import React from "react";

function PropertyItem({ icon, label, onClick }) {
  return (
    <div className="flex gap-5 justify-between mt-8 first:mt-0 cursor-pointer" onClick={onClick}>
      <img loading="lazy" src={icon} className="shrink-0 w-6 aspect-square" alt="" />
      <div className="my-auto ml-28">{label}</div>
    </div>
  );
}

export default PropertyItem;
