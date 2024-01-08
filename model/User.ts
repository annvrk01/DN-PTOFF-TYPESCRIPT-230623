import { InfoUser } from "./InfoUser";
enum ROLE {ADMIN, USERS}
enum ISACTIVED {ACTIVED, NONEACTIVES}
class User extends InfoUser {
    private firstName: string;
    private lastName: string;
    private email: string;
    private age: number;
    private phoneNum: string;
    private psd: string;
    private address: string;
    private isMale: boolean;
    private isActived: ISACTIVED;
    private role: ROLE;
    private avatar: string;
    private createdAt: string;
    private updatedAt: string;
    private createdBy: string;
    private updatedBy: string;
        constructor(
            firstName: string,
            lastName: string,
            email: string,
            age: number,
            phoneNum: string,
        ) {
            super(482000, 1235,2120,"A+")
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
            this.phoneNum = phoneNum; 
        }

        override card() {
            super.card()
            console.log("editcarduser");
            
        }
        
    public set setFirstName(firstName : string){
        this.firstName = firstName;
    }

    public get getFirstName() : string {
        return this.firstName;
    }
    
    public set setLastName(lastName : string){
        this.lastName = lastName;
    }

    public get getLastName() : string{
        return this.lastName;
    }

    public set setAge (age: number) {
        this.age = age;
    }
    public get getAge() : number{
        return this.age;
    }

    public set setEmail (email : string) {
        this.email = email;
    } 
    public get getEmail () : string {
        return this.email
    }

    public set setPhoneNum (phoneNum : string) {
        this.phoneNum = phoneNum;
    }
    public get getPhoneNum (): string {
        return this.phoneNum
    }
}

let user  = new User("Phu", "Nguyen","haiphu@gmail.com",24,"0123456789")
console.log("someUser after changed is ", user);
user.card();
console.log(user.getIdCard);

