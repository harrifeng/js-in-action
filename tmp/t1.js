var greet = function(person, greeting) {
    var text = greeting + ", " + person;
    return text;
}

console.log(greet("R", "Hello"));


(function(){
    var foo = "Hello World";
    console.log(foo);
})();
