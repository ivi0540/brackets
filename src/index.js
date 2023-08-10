module.exports = function check(str, bracketsConfig) {
  let openBrace = "";
  let closeBrace = "";
  let truthTest = true;

  while (str.length !== 0) {
    if (str.length % 2 !== 0) {
      truthTest = false;
      break;
    };
    let copyStr = str.repeat(1);
    for (brackets of bracketsConfig) {
      openBrace = brackets[0];
      closeBrace = brackets[1];
      numCloseBrace = str.indexOf(closeBrace);
      if (str.at(numCloseBrace - 1) === openBrace) {
        str = str.slice(0, numCloseBrace - 1) + str.slice(numCloseBrace + 1);
      };
      // console.log(str);
    };
    if (copyStr === str) {
      truthTest = false;
      break;
    };
  };
  return truthTest;
}
// console.log(check('{(})', [['(', ')'], ['[', ']'], ['{', '}']]));
