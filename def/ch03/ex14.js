var text = "testing: 1, 2, 3, 4";
var pattern  = /\d+/g;          // including one or more digits
console.log(pattern.test(text));
console.log(text.search(pattern));
console.log(text.match(pattern));
console.log(text.replace(pattern, "#"));
console.log(text.split(/\D+/));              // Use non-digit to appart string

////////////////////////////////////////////////////
// <===================OUTPUT===================> //
// true                                           //
// 9                                              //
// [ '1', '2', '3', '4' ]                         //
// testing: #, #, #, #                            //
// [ '', '1', '2', '3', '4' ]                     //
////////////////////////////////////////////////////
