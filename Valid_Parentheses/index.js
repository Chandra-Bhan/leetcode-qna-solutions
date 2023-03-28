var isValid = function(s) {
    const stack = [];
 
     for (const c of s) {
         if (c == '(' || c == '[' || c == '{')
             stack.push(c);
         
         else {
             if (stack.length === 0)
                 return false;
             
             const d = stack.pop();
             
             if (c === ')' && d !== '(' || c === ']' && d !== '[' || c === '}' && d !== '{')
                 return false;
         }
     }
 
     return stack.length === 0;
 };

 console.log(isValid("(){}[]"));