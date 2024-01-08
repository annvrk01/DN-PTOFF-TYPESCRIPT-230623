"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var InfoUser_1 = require("./InfoUser");
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USERS"] = 1] = "USERS";
})(ROLE || (ROLE = {}));
var ISACTIVED;
(function (ISACTIVED) {
    ISACTIVED[ISACTIVED["ACTIVED"] = 0] = "ACTIVED";
    ISACTIVED[ISACTIVED["NONEACTIVES"] = 1] = "NONEACTIVES";
})(ISACTIVED || (ISACTIVED = {}));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName, email, age, phoneNum) {
        var _this = _super.call(this, 482000, 1235, 2120, "A+") || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.age = age;
        _this.email = email;
        _this.phoneNum = phoneNum;
        return _this;
    }
    User.prototype.card = function () {
        _super.prototype.card.call(this);
        console.log("editcarduser");
    };
    Object.defineProperty(User.prototype, "setFirstName", {
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setLastName", {
        set: function (lastName) {
            this.lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setAge", {
        set: function (age) {
            this.age = age;
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
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setPhoneNum", {
        set: function (phoneNum) {
            this.phoneNum = phoneNum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getPhoneNum", {
        get: function () {
            return this.phoneNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}(InfoUser_1.InfoUser));
var user = new User("Phu", "Nguyen", "haiphu@gmail.com", 24, "0123456789");
console.log("someUser after changed is ", user);
