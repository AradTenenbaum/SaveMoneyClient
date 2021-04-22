export type UserType = ({
    _id?: string;
    username: string;
    password: string;
}| {
    user: {
        _id?: string;
        username: string;
        password: string; 
    };
    token: string | null;
} | null);

export type PurchasesType = ({
    _id?: string;
    name: string;
    price: Number;
    userId: string;
    date?: Date;
});