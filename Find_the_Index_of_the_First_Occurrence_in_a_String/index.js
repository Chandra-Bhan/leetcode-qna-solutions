var strStr = function(haystack, needle) {
    if(!needle){
        return 0;
    }
    for(i=0;i<haystack.length;i++){
        let isMatch=true;
        for(j=0;j<needle.length;j++){
            if(haystack[i+j]!==needle[j]){
                isMatch=false;
                break;
            }
        }
        if(isMatch){
            return i
        }
    }
    return -1;
}

console.log(strStr("sustringsub","sub"));