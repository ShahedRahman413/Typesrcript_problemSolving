interface student {
    name: string,
    age: number,
    grades: number[]
}
const student1: student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
}

const calculateAverageGrade = (arr: student): number => {
    let sum=arr.grades.reduce((acc,curr)=>acc +curr,0)
    const average=sum/arr.grades.length
    return average
}

const averageGradeForBob = calculateAverageGrade(student1)
console.log(averageGradeForBob);
