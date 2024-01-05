var User = /** @class */ (function () {
    function User(name, age, isMale) {
        this.name = name;
        this.age = age;
        this.isMale = isMale;
    }
    Object.defineProperty(User.prototype, "setName", {
        set: function (newName) {
            this.name = newName || "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getGender", {
        get: function () {
            return this.isMale;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var someUser = new User("Nguyen Van A", 18, true);
console.log("someUser is ", someUser);
someUser.setName = "Tran Van B";
console.log("someUser after changed is ", someUser);
