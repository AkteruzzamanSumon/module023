class Parent{
    constructor(){
        this.fatherName = "jakir";
    }
}
class Child extends Parent{ 
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("sumon");
const baby2 = new Child("shopna");
console.log(baby.getFullName());
console.log(baby2.getFullName());