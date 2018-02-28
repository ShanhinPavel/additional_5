module.exports = function check(str, bracketsConfig) {
  // your solution
   let arrayBrackets = [];
   let lastElement;
   let count = 0;
   let count1 = 0;
   
   let newString;

//[['(',')']]
   while (bracketsConfig[count1]) {
     newString = bracketsConfig[count1].join("");
     str += newString;
     count1++;
   }

//test brackets
   while (str[count] !== undefined) {
    
     if ((str[count] === '(') ||
      (str[count] === '[') ||
      (str[count] === '|') ||
      (str[count] === '{')) 
     {
       arrayBrackets.push(str[count]);
       if (str[count] === '|') {
        arrayBrackets.pop();
      }
     } else {

       if (arrayBrackets.length === 0) {
         return false;
       } else {
         lastElement = arrayBrackets.pop();
      
         if ((lastElement === '(' && str[count] !== ')') ||
             (lastElement === '[' && str[count] !== ']') ||
             (lastElement === '{' && str[count] !== '}'))
             {
           return false;
         }
         }
       }
       count++;
     }
   if(arrayBrackets.length === 0) {
     return true;
} else {return false};
}
