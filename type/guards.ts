type combineInput = string | number;

function combineDemo(input1 : combineInput, input2 : combineInput) : combineInput {
    if(typeof input1 === 'number' 
    && typeof input2 === 'number'){
        return input1 + input2;
    }

    return input1.toString() + input2.toString();
}

class Panadol {
    
}

class Alaxan {

}

type Medical = {
    type: string;
    quantity: number
}

type Drug = {
    name: string;
    price: string
}

type Pharma = Medical & Drug;

type Drugs = Alaxan |Panadol

function printPharma(item: Pharma, item2: Drugs) {
    console.log("name: " + item.name);
    if("quantity" in item) {
        console.log("quantity: " + item.quantity);
    } else {
        console.log("Wrong case");
        
    }
    if (item2 instanceof Panadol) {
       console.log("Panadol");
    } else {
        console.log("Alaxan");
    }
    
}
const data : Pharma = {
    type: "A",
    quantity: 200,
    name: "Panadol",
    price: "12.000đ"
}

const pharma1 = new Panadol()
const pharma2 = new Alaxan()

printPharma(data, pharma2)

const fetchUserData = {
    id : 1,
    name : "abc",
    job: {title : "123", abc : "abc"}
}

console.log("fetchUserData 's job title", fetchUserData?.job?.title)
console.log("fetchUserData 's job title", fetchUserData.job.title);

const something = undefined;
const abc = something ?? "default something";
console.log("abc", abc);

