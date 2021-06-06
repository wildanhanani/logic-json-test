let palindrome = function (a) {
  let len = a.length;
  let start = a.substring(0, Math.floor(len / 2));
  let end = a.substring(len - Math.floor(len / 2));
  //   console.log(start, end);

  let flip = end.split('').reverse().join('');
  return start === flip;
};

console.log(palindrome('radar'));
console.log(palindrome('malam'));
console.log(palindrome('kasur ini rusak'));
console.log(palindrome('ibu ratna antar ubi'));
console.log(palindrome('malas'));
console.log(palindrome('makan nasi goreng'));
console.log(palindrome('balonku ada lima'));
