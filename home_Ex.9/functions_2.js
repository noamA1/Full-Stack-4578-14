// Triangle function

var bais = 5, left = 3, right = 3;
calculateTriangle(bais, left, right);


function calculateTriangle(num1, num2, num3){
    if(num1 <=0 || num2 <= 0 || num3 <= 0){
        console.log("chack the numbers and try again");
        return;
    }

    var s = num1 + num2 + num3; // היקף המשולש
    console.log("s:", s);
    var average = s/3;
    console.log("average:", average);
    
    var calculateForSquareRoot = s*(s-num1)*(s-num2)*(s-num3);
    var squareRoot = Math.sqrt(calculateForSquareRoot); // שטח המשולש
    console.log("Square Root:", squareRoot);
    console.log("average:", average, "s:", s, "Square Root:", squareRoot);
}

// max result function

var first = 4, second = 7, third = 10;

var result = maximumResult(first, second, third);

console.log(result);

function maximumResult(one, two, three){
    sumOfFirstOption = one * (two + three);
    sumOfSecondOption = one + (two * three);
    var str;

    if (sumOfFirstOption > sumOfSecondOption){
        str =  one + "*" + "(" + two + "+" + three + ") = " +sumOfFirstOption;
        return str; 
    }
    else{
        str =  one + "+" + "(" + two + "*" + three + ") = " +sumOfSecondOption;
        return str; 
    }
}

 /* winner game, num_1 is the first team that host the first game, 
 num_2 is the first team that was the gust in the second game,
 num_3 is the second team that host the second game, 
 num_4 is the second team that was the gust in the first game
*/

var num_1 = 0, num_2 = 2, num_3 = 1, num_4 = 0; 
var result = matchWinner(num_1, num_2, num_3, num_4);
console.log(result);

function matchWinner(home_1, out_1, home_2, out_2){
    if ((home_1 + out_1 > out_2 + home_2) || (home_1 + out_2 == out_1 + home_2 && out_1 > out_2)){
        return 1;
    }
    else if((home_1 + out_1 < out_2 + home_2)|| (home_1 + out_2 == out_1 + home_2 && out_2 > out_1)){
        return 2;
    }
    else {
        return 0;
    }
}
