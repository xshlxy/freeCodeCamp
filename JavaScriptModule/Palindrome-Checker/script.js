const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', function() {
  const inputText = textInput.value.trim();

  if (!inputText) {
    alert("Please input a value");
    return;
  }

  const cleanedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedText = cleanedText.split('').reverse().join('');

  if (cleanedText === reversedText) {
    result.textContent = `${inputText} is a palindrome`;
  } else {
    result.textContent = `${inputText} is not a palindrome`;
  }
});