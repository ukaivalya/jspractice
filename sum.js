const getExtra = (bString, eString) => 
{
    for(let char of eString)
    {
         if(bString.indexOf(char) === -1)
         { 
             return char;
         }
    }
}
console.log(getExtra('bacd', 'abcde'));