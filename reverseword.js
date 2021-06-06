// function reverseWord(str) {
//   let newStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

function reverseWord(str) {
  return str
    .split(' ')
    .map(function (word) {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log(reverseWord('Hello World'));
