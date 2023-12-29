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
