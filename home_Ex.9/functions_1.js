// hello world function

var str = hello();

console.log(str);

function hello(){
    var hello_str = "Hello World"
    return hello_str;
}

// hello with a name
var name = "Avi";
var str = helloName(name);

console.log(str);

function helloName(name){
    var hello = "Hello ";
    hello += name;
    return hello;
}

// hello with a name or alice
var name = "Avi";
// var name = "Alice";
var str = helloAlice(name);

console.log(str);

function helloAlice(name){
    var hello = "Hello ";
    if (name == "Alice"){
        hello += "dear " + name;
        // return hello; 
    }
    else{
        hello += name;
    }
    return hello;
}

// sum numbers

var num = 10;
var sumUntilNum = sum(num);

console.log(sumUntilNum);

function sum(number){
    var sum = 0;
    for(var index = 1; index <= number; index++){
        sum += index;
    }
    return sum;
}

// multiplication function

var num1 = 2, num2 = 5;
var mult = multiplication(num1, num2);

console.log(mult);

function multiplication(number1, number2){
    var multiplicationResult = number1 * number2;
    return multiplicationResult;
}