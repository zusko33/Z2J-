function add (a, b) {
        return a + b;
    } 

function dec (a, b) {
        return a - b;
    }
function mul (a, b){
        return a * b;
    }
function div (a, b){
            if (b === 0) {
                alert ("do not divide by ZERO");
            } else {
                return a / b;
            }
        }

function prec (a, b){
        return a % b;
    }



    let num1 = parseFloat(prompt("Enter first number"));
    if (typeof num1 != "number") { 
       alert ("This is not a number");
    }
    let operations = true
    
    while (operations) {
        if (typeof num1 != "number") {
            alert ("wrong, refresh and start again");
            break;
        }
        let mat = prompt("Select the operation +, -, *, /, %");
        let num2 = parseFloat(prompt("Enter second number"));

        if (typeof num2 != "number") {
            alert ("This is not a number");
        }

        
    switch (mat) {
        case "+" : 
            alert (num1 = add(num1,num2));
            break;
        case "-" :
            alert (num1 = dec(num1, num2));
            break;
        case "*":
            alert (num1 = mul(num1, num2));
            break;
        case "/":
            alert (num1 = div(num1,num2));
            break;
        case "%":
            alert (num1 = prec(num1,num2));
            break;
        default:
            alert("something is wrong")
    }
}