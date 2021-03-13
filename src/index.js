const { compareLoose } = require("semver");

module.exports = function check(str, bracketsConfig) {
    
    let stack = [], 
    openedBrackets = ['(','[','{'], 
    closedBrackets = [')','}',']'],
    arr = str.split('')
    closeIndex,
    openIndex;

    for (let i = 0, fullLength = arr.length; i < fullLength; i ++) {
        openIndex = openedBrackets.indexOf(arr[i]);
        if (openIndex !== -1) {
            stack.push(openIndex);
            continue;
        }

        closeIndex = closedBrackets.indexOf(arr[i]);
        if (closeIndex !== -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false
    }
    
    return true;
}
