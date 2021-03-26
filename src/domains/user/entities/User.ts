export default class User{
    private firstName:string;
    private lastName: string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName = () => `${this.firstName} ${this.lastName}`;
}