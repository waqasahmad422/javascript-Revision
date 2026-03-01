function palindrome(str){
    const strToLower = str.toLowerCase();
    const reverseToStr= strToLower.split('').reverse().join('');

    return strToLower === reverseToStr ? true:false;
}

console.log(palindrome("madam"));