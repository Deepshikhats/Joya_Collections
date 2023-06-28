export const baseStyles = {
  control: provided => ({
    ...provided,
    boxShadow: 'none'
  }),
  container: provided => ({
    ...provided,
    // width: 'fit-content',
    padding: 0
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    paddingLeft: 0,
    transition: 'all .2s ease',
    transform: state?.selectProps?.menuIsOpen && 'rotate(180deg)'
  }),
  placeholder: provided => ({
    ...provided,
    color: '#6A737D',
    fontSize: 12,
    fontWeight: 400
  }),
  menuList: provided => ({
    maxHeight: '700px',
    ...provided,
    '::-webkit-scrollbar': {
      background: '-webkit-linear-gradient(0, #ecedeb 50%, white 100%)',
      width: '5px !important'
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgb(172 172 172)',
      width: '1px !important'
      // borderRadius: '30px !important'
    }
  })
}

export const stockDetailsStyles = {
  ...baseStyles,
  control: provided => ({
    ...provided,
    border: '2px solid grey'
  })
}
export const sortStyle = {
  ...baseStyles,
  control: provided => ({
    ...provided,
    border: 'none !important',
    boxShadow: 'none !important',
    background: 'transparent',
    outline: 'none'
  })
}
