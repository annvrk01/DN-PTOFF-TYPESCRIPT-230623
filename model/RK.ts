import { Sales } from "./Sales";

class RK implements Sales {
    public name: string;

    constructor(name: string) {
        this.name = name
    }

    sale(): void {
        console.log('Doing sale');
    }
}

const rk = new RK('A')
rk.sale()