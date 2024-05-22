class Car{
    brand:string;
    model:string;
    year:number

    constructor(brand:string,model:string,year:number){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    showCar():string{
        return `your car brand is  ${this.brand}, creator ${this.model}  and first created in ${this.year}`;
    }
}
console.log(new Car("Toyota", "Corolla", 2020).showCar());
