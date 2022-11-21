let array = [4, 8, 15, 16, 23, 42, 4];
for(let i=0; i<array.length;i++){
    let fromIndex = i+1;
    console.log("arr[i]", array[i]);
    console.log("fromIndex", fromIndex);
    let matchNumbers = array.includes(array[i],fromIndex);
    if(matchNumbers===true){
        console.log(matchNumbers);
        break;
    }else if(matchNumbers===false && i===array.length-1){
        console.log(matchNumbers);
        break;
    }
}