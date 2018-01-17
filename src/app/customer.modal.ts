export class CustomerModel{
    name:string;
    address:string;
    age:number;
    constructor()
    {

    }
    getName()
    {
        return this.name;
    }
    onClick(insitute)
    {
        console.log("clicked");
        console.log(insitute);
        
    }
}