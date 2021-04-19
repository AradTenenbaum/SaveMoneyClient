export type UserType = ({
    _id: string;
    username: string;
    password: string;
} | {
    username: string;
    password: string;
} | null);

export type PurchasesType = ({
    _id: string;
    name: string;
    price: Number;
    userId: string;
});