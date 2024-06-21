const words = [
  { chinese: "蘋果", english: "apple" },
  { chinese: "香蕉", english: "banana" },
  { chinese: "貓", english: "cat" },
  { chinese: "狗", english: "dog" },
  { chinese: "魚", english: "fish" }
];

let currentWord = {};
let score = 0;
let attempts = 0;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function displayNewWord() {
  currentWord = getRandomWord();
  document.getElementById('word').innerText = currentWord.chinese;
  document.getElementById('answer').value = '';
  document.getElementById('result').innerText = '';
}

function checkAnswer() {
  const answer = document.getElementById('answer').value.trim().toLowerCase();
  attempts++;
  if (answer === currentWord.english) {
      score++;
      document.getElementById('result').innerText = '正確！';
  } else {
      document.getElementById('result').innerText = `錯誤，正確答案是：${currentWord.english}`;
  }
  if (attempts < 5) {
      setTimeout(displayNewWord, 2000);
  } else {
      document.getElementById('result').innerText += ` 測驗結束！總分：${score} / 5`;
  }
}

window.onload = function() {
  displayNewWord();
}
