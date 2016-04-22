var n = 123456.789;

console.log(n.toFixed(0));
console.log(n.toFixed(2));
console.log(n.toFixed(5));

console.log(n.toExponential(1));
console.log(n.toExponential(3));

console.log(n.toPrecision(4));
console.log(n.toPrecision(7));
console.log(n.toPrecision(10));

////////////////////////////////////////////////////
// <===================OUTPUT===================> //
// 123457                                         //
// 123456.79                                      //
// 123456.78900                                   //
// 1.2e+5                                         //
// 1.235e+5                                       //
// 1.235e+5                                       //
// 123456.8                                       //
// 123456.7890                                    //
////////////////////////////////////////////////////
