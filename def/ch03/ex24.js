var scope = "global";

function checkscope() {
    var scope = "local";
    return scope;
}

console.log(checkscope());

////////////////////////////////////////////////////
// <===================OUTPUT===================> //
// local                                          //
////////////////////////////////////////////////////
