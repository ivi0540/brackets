module.exports = function check(str, bracketsConfig) {
  // your solution
}


function check(str, bracketsConfig) {
  let openBrace = "";
  let closeBrace = "";
  let examination = true;
  if (str.length % 2 === 0) {
    for (brackets of bracketsConfig) {
      openBrace = brackets[0];
      closeBrace = brackets[1];

      // while (str.indexOf(closeBrace) !== -1) {
      //     console.log(str.indexOf(closeBrace));
      // };

    };
  } else {
    examination = false;
  };
}
console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));

// check('[(])', [['(', ')'], ['[', ']']]) // -> false
