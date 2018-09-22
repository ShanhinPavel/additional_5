module.exports = function check(str, bracketsConfig) {
  let arrayBrackets = [];
  let count = 0;

  while(str[count]) {
    bracketsConfig.forEach((element) => {
        let lastElement = arrayBrackets[arrayBrackets.length - 1];
        if (str[count] === element[0]) {
            if (element[0] === element[1] && lastElement === str[count]) {
                arrayBrackets.pop(lastElement);
            } else arrayBrackets.push(str[count]);
        } else if (lastElement === element[0] && str[count] === element[1]) {
            arrayBrackets.pop(lastElement);
        }
    });
    count++;
}
    return arrayBrackets.length === 0 ? true : false;
  }