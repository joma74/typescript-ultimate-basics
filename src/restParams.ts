function sumAll(arr: number[]){
    return arr.reduce((sum, cur) => sum + cur);
}

console.log(sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

/**
 * When using rest arguments, you are collapsing all remaining arguments of a function into one array
 * 
 * @param message 
 * @param arr 
 */
function sumAllRest(message: string, ...arr: number[]){
    console.log(message)
    return arr.reduce((sum, cur) => sum + cur);
}

function sumAllRestLogArgs(message: string, ...arr: number[]){
    console.log(arguments)
    return arr.reduce((sum, cur) => sum + cur);
}


console.log(sumAllRest("Hello", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

console.log(sumAllRest("Hey!", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

console.log(sumAllRestLogArgs("Hi", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10))