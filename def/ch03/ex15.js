if (!undefined) {
    console.log("undefined is considered as false");
}

if (!null) {
    console.log("null is considered as false");
}

if (!NaN) {
    console.log("NaN is considered as false");
}

if (!0) {
    console.log("0 is considered as false");
}

if (!-0) {
    console.log("-0 is considered as false");
}

////////////////////////////////////////////////////
// <===================OUTPUT===================> //
// undefined is considered as false               //
// null is considered as false                    //
// NaN is considered as false                     //
// 0 is considered as false                       //
// -0 is considered as false                      //
////////////////////////////////////////////////////
