//khai báo biến username có kiểu dữ liệu là string và gán giá trị cho biến đó là "Nguyen Van A".
// let là từ khóa dùng để khai báo biến.
// username là tên của biến.
// string là kiểu dữ liệu của biến.
// "Nguyen Van A" là giá trị của biến.
let username: string = "Nguyen Van A";

// kiểu dữ liệu numbers
let age: number = 21;

//kiểu dữ liệu boolean
let isMale: boolean = true;

//any là kiểu dữ liệu cho phép bạn gán giá trị bất kì vào biến.
let price: any = 100
price = 'mot tram'

//Object
const user: {
    name: string,
    age: number,
    gender: boolean
} = {
    name: 'Nguyen Van B',
    age: 22,
    gender: true
}

// Array number
let nums: number[] = [2, 4, 6, 8]

// Array any
let anyArray: any[] = ['213', 123, 'false', true, { something: "false" }]


//Bài tập 
// Khai báo 1 array numbers,  
// Áp dụng vòng lặp, để show data
// Kết hợp câu lệnh điều kiện ( nếu item  > 5 kết thúc vòng lặp, item  = 3  thoát vòng lặp hiện tại ) 
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        break
    } else if (numbers[i] === 3) {
        continue
    }
}

const sum = (a: number, b: number): number => a + b;
sum(2, 3);

// Type tuple
let roles: [string, string]= ["admin", "mode"];
// Type enum
enum ROLE {ADMIN, MOD, USERS}

let person: {
    name: string;
    age: number;
    role: ROLE.ADMIN;
} ={
    name: 'quan',
    age: 18,
    role: ROLE.ADMIN
}

// Union type t
let result: number | string =10;

// Type alias 
type ProductModel = {name: string, price: number, quantity: number, status: boolean}

const product1: ProductModel = {
    name: 'Product 1',
    price: 1000,
    quantity: 5,
    status: true
} 

const product2: ProductModel = {
    name: 'Product 22',
    price: 1500,
    quantity: 2,
    status: false
} 
console.log('prod33uct2', product2)

type combineInputs = string | number;

function combine(input1 : combineInput, input2 : combineInput) : combineInput {
    if(typeof input1 === 'number' 
    && typeof input2 === 'number'){
        return input1 + input2;
    }

    return input1.toString() + input2.toString();
}
combine( "2", 5)