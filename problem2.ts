const findLargestNumber=(numbArray:number[]):number =>{
    return Math.max(...numbArray)

}

const numb=[23,34,35,35,3,532,532]
console.log(findLargestNumber(numb));
