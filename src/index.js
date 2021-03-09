module.exports = function check(str, bracketsConfig) {
  let arrBrackets = [],
  openedBrackets = '({[',
  closedBrackets = ')}]';

  for(let part of str) {
        let i = openedBrackets.indexOf(part);
        if (i > -1) {
            arrBrackets.push(closedBrackets[i]);
        }
        if (closedBrackets.includes(part) && part!= arrBrackets.pop()) {
            return false;
        }
  }
  return arrBrackets === 0;

}
