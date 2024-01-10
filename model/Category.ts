class Category {
    private category_id: number;
    private code: string;
    private name: string;
    constructor(
        category_id: number,
        code: string,
        name: string,
    ) {
        this.category_id = category_id,
            this.code = code,
            this.name = name
    }
    public set setCategory_id(category_id: number) {
        this.category_id = category_id
    }
    public get getCategory_id(): number {
        return this.category_id
    }
    //
    public set setCode(code: string) {
        this.code = code
    }
    public get getCode(): string {
        return this.code
    }
    //
    public set setName(name: string) {
        this.name = name
    }
    public get getName(): string {
        return this.name
    }
}
let category = new Category(1, "tan", "hoang")
console.log("category:", category)