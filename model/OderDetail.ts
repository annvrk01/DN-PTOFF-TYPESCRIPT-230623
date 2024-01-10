export default class OderDetail {
    private order_detail_id: number;
    private order_id: number;
    private sequence_no: number;
    private product_id: number;
    private unit_price: number;
    private quantity: number;
    private sub_total_price: number;
    constructor(
        order_detail_id: number,
        order_id: number,
        sequence_no: number,
        product_id: number,
        unit_price: number,
        quantity: number,
        sub_total_price: number,
    ) {
        this.order_detail_id = order_detail_id;
        this.order_id = order_id;
        this.sequence_no = sequence_no;
        this.product_id = product_id;
        this.unit_price = unit_price;
        this.quantity = quantity;
        this.sub_total_price = sub_total_price;
    }
    public set setOrder_detail_id(order_detail_id: number) {
        this.order_detail_id = order_detail_id;
    }
    public get getOrder_detail_id(): number {
        return this.order_detail_id;
    }
    //
    public set setOrder_id(order_id: number) {
        this.order_id = order_id;
    }
    public get getOrder_id(): number {
        return this.order_id;
    }
    //
    public set setSequence_no(sequence_no: number) {
        this.sequence_no = sequence_no;
    }
    public get getSequence_no(): number {
        return this.sequence_no;
    }
    //
    public set setProduct_id(product_id: number) {
        this.product_id = product_id;
    }
    public get getProduct_id(): number {
        return this.product_id;
    }
    //
    public set setUnit_price(unit_price: number) {
        this.unit_price = unit_price;
    }
    public get getUnit_price(): number {
        return this.unit_price;
    }
    //
    public set setQuantity(quantity: number) {
        this.quantity = quantity;
    }
    public get getQuantity(): number {
        return this.quantity;
    }
    //
    public set setSub_total_price(sub_total_price: number) {
        this.sub_total_price = sub_total_price;
    }
    public get getSub_total_price(): number {
        return this.sub_total_price;
    }
}
let orderdetail = new OderDetail(1, 24, 3, 4, 5, 6, 7)
console.log("someOrder after changed is ", orderdetail);



