const person={
    name: "John",
    age: 20
}

class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    print(){
        console.log("MY name is " + this.name + " and my age is " + this.age);
    }
}
module.exports.person=person
module.exports.student=student