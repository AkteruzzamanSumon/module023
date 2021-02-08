class Student{
    constructor(sId, sName, sAge){
        this.id = sId;
        this.name = sName;
        this.age = sAge;
        this .school = "Andulbaia School";
    }
}

const student1 = new Student(11, "Sumon", 25);
const student2 = new Student(7, "Akter", 27 );
console.log(student1, student2);