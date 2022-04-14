function modify(str){
    let splitArr = str.split('')
    
    let reg = RegExp(/^[a-z]+$/g);
    if(reg.test(str)){
        return str
    }

    if(str.includes('_')){
splitArr.forEach((e,i) => {
        if(e === '_'){
            splitArr.splice(i, 2, splitArr[i+1].toUpperCase())
        }
    })
}else{
    splitArr.forEach((e,i) => {
        if(e === e.toUpperCase()){
var temp = splitArr[i].toLowerCase()
            splitArr.splice(i, 1, '_',temp)
        }
    })
}
return splitArr.join('')

}


modify("thisIsAVariable")