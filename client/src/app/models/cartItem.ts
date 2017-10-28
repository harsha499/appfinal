export class CartItem {
    cartItemId;
    total;
    constructor(public productId: string,
        public name: string,
        public unitPrice: number,
        public quantity: number) { }
}
