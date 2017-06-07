import _ from 'lodash';
import InputKeys from '../../img/inputs/'; // used for dict lookup

/* ===================================================

  Input Parsing
  ------------
  - split by commas
  - check each item if is a unique input,
  - if not, go through additional parsing by special character case

==================================================== */

/**
 *  @param: input key (string)
 *  Check if the input exists as a key in dict
 */
const checkIfUniqueInputKey = (key) => (InputKeys[key]);


/**
 *  Case: '~'
 *  =========
 *  @param: input (string)
 *  @return: input array
 */
const parseImmediateAfterInputs = (input) => {
  // split any additional first half of section before (digit) ~
  let output = input.split(/(^\D+)+\+/g);
  // get the end section with ~
  let end = output.length - 1;
  let sect = output[end];
  // split by ~, and parse out sections that were attached
  sect = sect.split("~");
  sect = sect.map((s) => (checkIfUniqueInputKey(s)) ? s : parseSimultaneousInputs(s));
  sect.unshift('[');
  sect.push(']');
  output[end] = sect;
  output = _.flattenDeep(output);
  return output;
};


/**
 *  Case: '+'
 *  ==========
 *  @param: input (string)
 *  @return: input array
 */
const parseSimultaneousInputs = (input) => {
  // looks for pattern: (non-digit)(+)
  // if not there, will just split string by '+'
  let reg = /(\D+)+\+/g;
  let output = (reg.test(input)) ? input.split(reg) : input.split('+');
  return output;
};


/**
 *  @param: input key (string)
 *  @return: input keys (array)
 *  Parse an input string into an array of unique inputs
 */
const parseInputStringByCases = (inputString) => {
  let result = [];
  // split string into chunks by spaces and some special characters
  // Will look at each chunk and parse by special case
  result = inputString
  .split(/([\s?*():])/g)
  .map((input) => {
    if (input.includes('~')) {
      input = parseImmediateAfterInputs(input);
    }
    else if (input.includes('+')) {
      input = parseSimultaneousInputs(input);
    }
    return input;
  });
  // flatten result array
  return [].concat.apply([], result);
};


/**
 *  @method: parseInputFromString
 *  @param: input (string)
 *  @return: inputs (array)
 *  Will parse a string and return array of unique inputs for rendering
 */
export const parseInputFromString = (inputString) => {
  // parse string into array and do additional parsing if needed for special cases
  let parsedInput = inputString
  .split(/[\s,]/g)
  .map((input) => {
    input = input.trim();
    if (!checkIfUniqueInputKey(input)) {
      return parseInputStringByCases(input);
    }
    return input;
  });
  // return flattened array
  return [].concat.apply([], parsedInput);
};

export default {
  parseInputFromString
};
