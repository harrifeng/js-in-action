var point = {
    x: 1,
    y: 1
};
console.log("x" in point);
console.log("z" in point);
console.log("toString" in point); // toString is a function from Object

////////////////////////////////////////////////////
// <===================OUTPUT===================> //
// true                                           //
// false                                          //
// true                                           //
////////////////////////////////////////////////////
