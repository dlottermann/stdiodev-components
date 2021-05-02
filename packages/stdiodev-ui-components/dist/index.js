function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var buttonStyle = {
  padding: '10px 20px',
  color: 'white',
  backgroundColor: '#340920',
  border: 'none',
  margin: '10px',
  borderRadius: '3px'
};

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "btn btn-default",
    style: buttonStyle,
    onClick: props.handleClick
  }, props.label);
};

Button.defaultProps = {
  onClick: function onClick() {},
  label: ''
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
