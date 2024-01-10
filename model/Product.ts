enum ISDELETED { DELETED, NODELETED }

class Product {
    private name: string;
    private des: string;
    private img: string;
    private isDeleted: ISDELETED;

    constructor(
        name: string,
        des: string,
        img: string,
        isDeleted: ISDELETED
    ) {
        this.name = name;
        this.des = des;
        this.img = img;
        this.isDeleted = isDeleted;
    }

    public set setName(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
    public set setDes(des: string) {
        this.des = des;
    }
    public getDes(): string {
        return this.des;
    }
    public set setImg(img: string) {
        this.img = img;
    }
    public getImg(): string {
        return this.img;
    }
    public set setIsDeleted(isDeleted: ISDELETED) {
        this.isDeleted = isDeleted;
    }
    public getisDeleted(): ISDELETED {
        return this.isDeleted;
    }
}