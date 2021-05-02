import React from 'react';

const buttonStyle = {
  padding: '10px 20px',
  color: 'white',
  backgroundColor: '#340920',
  border: 'none',
  margin: '10px',
  borderRadius: '3px'
};

const Button = props => {
  return /*#__PURE__*/React.createElement("button", {
    className: "btn btn-default",
    style: buttonStyle,
    onClick: props.handleClick
  }, props.label);
};

Button.defaultProps = {
  onClick: () => {},
  label: ''
};

export { Button };
//# sourceMappingURL=index.modern.js.map
