var people = {};

var person1 = new Object;
person1.firstName = "Jonh";
person1.lastName = "Doe";


var person2 = {
    firstName: "Jane",
    lastName: "Doe",
};

people["person1"] = person1;
people["person2"] = person2;

console.log(people["person1"].firstName);
console.log(people["person2"].firstName);


////////////////////////////////////////////////////
// <===================OUTPUT===================> //
// Jonh                                           //
// Jane                                           //
////////////////////////////////////////////////////
