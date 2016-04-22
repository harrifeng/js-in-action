var sparseArray = [1, , , , 5];

console.log(sparseArray);

for (var i = 0; i < sparseArray.length; i++) {
    console.log(sparseArray[i]);
}

////////////////////////////////////////////////////
// <===================OUTPUT===================> //
// [ 1, , , , 5 ]                                 //
// 1                                              //
// undefined                                      //
// undefined                                      //
// undefined                                      //
// 5                                              //
////////////////////////////////////////////////////
