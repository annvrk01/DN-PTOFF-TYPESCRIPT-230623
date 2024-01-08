export class InfoUser {
    private idCard: number;
    private driveCard: number;
    private bankCard: number;
    private degree: string;
        constructor(
            idCard: number,
            driveCard: number,
            bankCard: number,
            degree: string,
        ) {
            this.idCard = idCard;
            this.driveCard = driveCard;
            this.bankCard = bankCard;
            this.degree = degree;
        }

        public set setIdCard (idCard: number) {
            this.idCard = idCard
        }
        public get getIdCard () :number {
            return this.idCard
        }

        card() {
            console.log("carduser");
        }
}   
