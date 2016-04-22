var s = "hello, world";
console.log(s.charAt(0));
console.log(s.charAt(s.length - 1));
console.log(s.substring(1, 4));
console.log(s.slice(1, 4));
console.log(s.slice(-3));
console.log(s.indexOf("1"));
console.log(s.lastIndexOf("1"));
console.log(s.indexOf("l", 3));
console.log(s.split(", "));

////////////////////////////////////////////////////
// <===================OUTPUT===================> //
// h                                              //
// d                                              //
// ell                                            //
// ell                                            //
// rld                                            //
// -1                                             //
// -1                                             //
// 3                                              //
// [ 'hello', 'world' ]                           //
////////////////////////////////////////////////////
