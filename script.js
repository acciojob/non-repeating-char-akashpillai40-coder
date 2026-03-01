function firstNonRepeatedChar(str) {
    if (!str) return null;
    
    //counting frequency of char
    let count = {};
    for (let char of str) {
        if (count[char]) {
            count[char] = count[char] + 1;
        }
        else{
            count[char] = 1;
        }
    }
    
    for(let char of str) {
        if(count[char] === 1) {
            return char;
        }
    }
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
