

function isPalindrome(str) {
    const cleanStr = str.toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr ? true : false;
}


console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 