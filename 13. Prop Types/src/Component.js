import PropTypes, { number, string } from "prop-types";

const Component = ({ name, age }) => {
  return `In 5 Years ${name} will be ${age + 5}`;
};

Component.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  // optionalArray: PropTypes.array,
  // optionalBigInt: PropTypes.bigint,
  // optionalBool: PropTypes.bool,
  // optionalFunc: PropTypes.func,
  // optionalObject: PropTypes.object,
  // optionalSymbol: PropTypes.symbol,
  // optionalAny: PropTypes.any,
  // optionRederable: PropTypes.node, // Anything that can be rendered: numbers, strings, elements or an array (not Object)
  // optionalElememnt: PropTypes.element, eg: <Expense/>

  // optionalBoth: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  // ]),
};

export default Component;
