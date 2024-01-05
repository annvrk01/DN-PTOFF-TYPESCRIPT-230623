class User {
    private name: string;
    private age: number;
    private isMale: boolean;

    constructor(
        name: string,
        age: number,
        isMale: boolean,
    ) {

        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }

    public set setName(newName : string){
        this.name = newName || "";
    }

    public get getName(){
        return this.name;
    }

    public get getAge(){
        return this.age;
    }

    public get getGender(){
        return this.isMale;
    }
}

let someUser = new User("Nguyen Van A", 18, true);
console.log("someUser is ", someUser);


someUser.setName = "Tran Van B";
console.log("someUser after changed is ", someUser);