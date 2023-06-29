import React from "react";
import Select from "react-select";

type MenuPlacement = "auto" | "bottom" | "top";
interface propsTypes {
  options: { label: string; value: string | number }[];
  styles?: Object;
  isSearchable?: boolean;
  value: object | string;
  isDisabled?: boolean;
  menuPlacement?: MenuPlacement | undefined;
  placeholder?: string;
  //   menuPosition?: string;
  customStyles?: Object;
  onChange: (option: any) => void | null;
  onBlur?: (option: any) => void | null;
  name?: string;
}
const CustomSelect: React.FC<propsTypes> = (props) => {
  const {
    options,
    styles,
    onChange,
    onBlur,
    value,
    menuPlacement,
    // menuPosition,
    isDisabled,
    placeholder,
    isSearchable = false,
    name,
  } = props;
  return (
    <Select
      options={options}
      styles={styles}
      isSearchable={isSearchable}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      // menuIsOpen={true}
      //   menuShouldScrollIntoView={true}
      value={value}
      menuPlacement={menuPlacement}
      placeholder={placeholder}
      isDisabled={isDisabled}
      //   menuPosition={menuPosition}
    />
  );
};

export default CustomSelect;
