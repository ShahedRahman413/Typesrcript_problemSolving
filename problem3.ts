const filterEventNumbers=(numb: number[]): number[]=>{
   return numb.filter(num=>num%2==0)
}
const numb1=[23,34,35,35,3,532,532,35,3653,35]
console.log(filterEventNumbers(numb1));