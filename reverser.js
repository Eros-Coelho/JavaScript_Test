// getting user's input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Give me a phrase ', (sentence) => {
  
    // splits user's sentence into an array of words
    const words = sentence.split(' ');

    // uses map to reverse each words' letters
    const reversedWords = words.map(word => word.split('').reverse().join(''));

    // 
    const result = reversedWords.reverse().join(' ');

    console.log("Reversed sentence:", result);

  rl.close();
});