import React from "react";
import "../filter/filter.scss";
type propsTypes = {
  index: number;
  item: string;
  removeSelection: (param: string) => void;
};
const SelectedFilters: React.FC<propsTypes> = ({
  index,
  item,
  removeSelection,
}) => {
  return (
    <div
      key={index}
      className="d-flex justify-content-between  wFit align-items-center bg-grey3 bg-grey2-hover rounded py-1 pe-1 ps-2 "
    >
      <span className="fs-6 slText  black1">{item}</span>
      <button
        className="text-danger border-0 bg-transparent"
        onClick={() => removeSelection(item)}
      >
        x
      </button>
    </div>
  );
};

export default SelectedFilters;
