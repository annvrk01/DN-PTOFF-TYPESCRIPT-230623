type OrderDetailType = {
    orderDetailId: number,
    orderId: number,
    sequenceNo: number,
    productId: number,
    unitPrice: number,
    quantity: number,
    subTotalPrice: number,
}

enum OrderStatus {
    NEW_ORDER,
    AUTHENTICATED,
    DELIVERING,
    DELIVERED,
    PAID,
    COMPLETE,
    REJECTED
}



class Order {
    private orderId: number;
    private serialNumber: string;
    private userId: number;
    private orderedAt: string | number;
    private phoneNumber: string;
    private deliveryAddress: string;
    private totalPrice: number;
    private status: OrderStatus;
    private note: string;
    private ordersDetails: OrderDetailType[];
    private isDeleted: boolean;
    private createdAt: string | number;
    private createdById: number;
    private updatedAt: string | number;
    private updatedById: number;

    constructor ( 
        orderId: number,
        serialNumber: string,
        userId: number,
        orderedAt: string | number,
        phoneNumber: string,
        deliveryAddress: string,
        totalPrice: number,
        status: OrderStatus,
        note: string,
        ordersDetails: OrderDetailType[] | null,
        isDeleted: boolean) {
            this.orderId = orderId;
            this.serialNumber = serialNumber;
            this.userId = userId;
            this.orderedAt = orderedAt;
            this.phoneNumber = phoneNumber;
            this.deliveryAddress = deliveryAddress;
            this.totalPrice = totalPrice;
            this.status = status;
            this.note = note;
            this.ordersDetails = ordersDetails;
            this.isDeleted = isDeleted
    }

    public get getOrderId(): number {
        return this.orderId;
    }

    public set setOrderId(value:  number) {
        this.orderId = value;
    }

    public get getSerialNumber(): string {
        return this.serialNumber;
    }

    public set setSerialNumber(value:  string) {
        this.serialNumber = value;
    }

    public get getUserId(): number {
        return this.userId;
    }

    public set setUserId(value:  number) {
        this.userId = value;
    }

    public get getOrderedAt(): string | number {
        return this.orderedAt;
    }

    public set setOrderedAt(value:  string | number) {
        this.orderedAt = value;
    }

    public get getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public set setPhoneNumber(value:  string) {
        this.phoneNumber = value;
    }

    public get getDeliveryAddress(): string {
        return this.deliveryAddress;
    }

    public set setDeliveryAddress(value:  string) {
        this.deliveryAddress = value;
    }

    public get getTotalPrice(): number {
        return this.totalPrice;
    }

    public set setTotalPrice(value:  number) {
        this.totalPrice = value;
    }

    public get getStatus(): OrderStatus {
        return this.status;
    }

    public set setStatus(value:  OrderStatus) {
        this.status = value;
    }

    public get getNote(): string {
        return this.note;
    }

    public set setNote(value:  string) {
        this.note = value;
    }

    public get getOrdersDetails(): OrderDetailType[] {
        return this.ordersDetails;
    }

    public set setOrdersDetails(value:  OrderDetailType[]) {
        this.ordersDetails = value;
    }

    public get getIsDeleted(): boolean {
        return this.isDeleted;
    }

    public set setIsDeleted(value:  boolean) {
        this.isDeleted = value;
    }

    public get getCreatedAt(): string | number {
        return this.createdAt;
    }

    public set setCreatedAt(value:  string | number) {
        this.createdAt = value;
    }

    public get getCreatedById(): number {
        return this.createdById;
    }

    public set setCreatedById(value:  number) {
        this.createdById = value;
    }

    public get getUpdatedAt(): string | number {
        return this.updatedAt;
    }

    public set setUpdatedAt(value:  string | number) {
        this.updatedAt = value;
    }

    public get getUpdatedById(): number {
        return this.updatedById;
    }

    public set setUpdatedById(value:  number) {
        this.updatedById = value;
    }
}


const order = new Order(
    1, 
    'abc', 
    1, 
    Date.now(), 
    '1234', 
    'DN', 
    1200, 
    OrderStatus.NEW_ORDER, 
    'Lorem', 
    null, 
    false
    )