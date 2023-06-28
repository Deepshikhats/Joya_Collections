import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

type MenuPlacement = "auto" | "bottom" | "top";
interface propsTypes {
  loadOptions: () => any;
  styles?: Object;
  isSearchable?: boolean;
  value: { label: string; value: number | string } | string;
  isDisabled?: boolean;
  menuPlacement?: MenuPlacement | undefined;
  placeholder?: string;
  //   menuPosition?: string;
  customStyles?: Object;
  isMulti?: boolean;
  onChange: (option: any) => void | null;
}
const AsyncSelect: React.FC<propsTypes> = (props) => {
  const {
    loadOptions,
    styles,
    onChange,
    value,
    menuPlacement,
    // menuPosition,
    isMulti = false,
    isDisabled,
    placeholder,
    isSearchable,
  } = props;
  return (
    <AsyncPaginate
      loadOptions={loadOptions}
      styles={styles}
      isSearchable={isSearchable}
      onChange={onChange}
      // menuIsOpen={true}
      //   menuShouldScrollIntoView={true}
      value={value}
      isMulti={isMulti}
      menuPlacement={menuPlacement}
      placeholder={placeholder}
      isDisabled={isDisabled}
      //   menuPosition={menuPosition}
    />
  );
};

export default AsyncSelect;
