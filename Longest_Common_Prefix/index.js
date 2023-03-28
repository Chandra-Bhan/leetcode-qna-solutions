var longestCommonPrefix = function(strs) {
    
    let FirstStr=strs[0];
    let temp="";
    for(i=1;i<strs.length;i++){
        for(j=0;j<FirstStr.length;j++)
        if(FirstStr[j]==strs[i][j]){
            temp+=FirstStr[j]
        }
        else{
            break;
        }
        FirstStr=temp;
        temp=""
    }
    return FirstStr;
};

console.log(longestCommonPrefix(["fiill", "fiit", "fiiil"]))