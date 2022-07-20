export class Order  {
    id: number
    firstName: string
    lastName: string
    address: string
    productBrand: string
    productName: string
    productSize: number
    productColor: string
    productDescription: string

    constructor (id: number,firstName: string, lastName: string, address: string, productBrand: string, productName: string, productSize: number, productColor: string, productDescription: string
        ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.productBrand = productBrand;
        this.productName = productName;
        this.productSize = productSize;
        this.productColor = productColor;
        this.productName = productName;
        this.productDescription = productDescription;


    }
};