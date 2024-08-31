const inputField = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
checkButton.addEventListener('click', function() {
const userInput = inputField.value;
//Check if input is empty
if(userInput==""){
    alert("Input value");
}else{
// Perform some action with the value (e.g., check if it's a palindrome)
if (isPalindrome(userInput)) {
    resultDiv.innerHTML = `<strong>${userInput}</strong> is a palindrome!`;
} else {
    resultDiv.innerHTML = `<strong>${userInput}</strong> is not a palindrome.`;
}
}
function isPalindrome(str){
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}}
);