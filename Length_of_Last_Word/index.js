var lengthOfLastWord = function(s) {
    let count=0;
    let result=s.trim().split(" ");
   
    return result[result.length-1].length;
};


console.log(lengthOfLastWord("Hello world"));