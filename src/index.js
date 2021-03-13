module.exports = function check(str, bracketsConfig) {
    
    let stack = [], 
    openedBrackets = ['(','[','{'], 
    closedBrackets = [')','}',']'],
    arr = str.split('')
    closeIndex,
    openIndex;

    for (let i = 0, fullLength = arr.length; i < fullLength; i ++) {
        openIndex = openedBrackets.indexOf(arr[i]);

    }
}
