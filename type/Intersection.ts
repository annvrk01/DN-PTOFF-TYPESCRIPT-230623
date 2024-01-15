type ClassA ={
    name: string;
    students: number;
}

type ClassB = {
    name: string;
    teachername:string;
}

type compineClass = ClassA & ClassB

const compineclass : compineClass = {
    name:"nguyen van A",
    students: 24,
    teachername:"Nguyen van C"
};
console.log("aftercompine :", compineclass)


type ClassC = string | number
type ClassD = number | boolean

type compineClass2 = ClassC & ClassD
const combineclass2 : ClassC = 10;
const combineclass3: ClassD = 5;
console.log(combineclass2,combineclass3)