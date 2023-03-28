var romanToInt = function(s) {
     const romanToDecimalMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    let strArr = s.split('');
    let number =0;

    for(let i=0; i<strArr.length;i++) {
        const current = romanToDecimalMap[strArr[i]];
        const next = romanToDecimalMap[strArr[i+1]];
        if(next > current) {
            number -= current
            
        } else {
            number += current;
        }
    }
    return number;
};


console.log(romanToInt("III"));