abstract class Login {
    private userName: string

    constructor(userName: string) {
        this.userName = userName
    }
     
    display () {
        console.log("name: ", this.userName);
    }

    abstract checkLogin(): void;

}

class UserLogin extends Login {
    checkLogin(): void {
        console.log("check");
    }
}

let user1 = new UserLogin("phu")
user1.display()