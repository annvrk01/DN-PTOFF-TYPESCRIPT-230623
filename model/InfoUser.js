"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoUser = void 0;
var InfoUser = /** @class */ (function () {
    function InfoUser(idCard, driveCard, bankCard, degree) {
        this.idCard = idCard;
        this.driveCard = driveCard;
        this.bankCard = bankCard;
        this.degree = degree;
    }
    Object.defineProperty(InfoUser.prototype, "setIdCard", {
        set: function (idCard) {
            this.idCard = idCard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InfoUser.prototype, "getIdCard", {
        get: function () {
            return this.idCard;
        },
        enumerable: false,
        configurable: true
    });
    InfoUser.prototype.card = function () {
        console.log("carduser");
    };
    return InfoUser;
}());
exports.InfoUser = InfoUser;
