function leader(arr){
    var store = arr[arr.length-1]
    var final_array = [store]
    for(var i=arr.length-1;i>=0;i--){
        if(arr[i]>store){
            store = arr[i]
           final_array.push(arr[i])
        }
    }
    console.log(final_array)
}
leader([13,5,4,32,5,1])