//selected all the buttons

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const plus = document.querySelector(".plus");
const divide = document.querySelector(".divide");
const decimal = document.querySelector(".decimal");
const aclear = document.querySelector(".clear");

// selected the output section where i want to give the output
const output = document.querySelector("#output");
let out = [];



// all clear function
aclear.addEventListener("click", allClear);
function allClear() {
  let n = out.splice(0, out.length, "");
  output.innerHTML = out;
}

//displaying the output function
function displayOut(outt) {
  let mianOut = "";
  for (i = 0; i < outt.length; i++) {
    mianOut = mianOut + outt[i];
  }
  return mianOut;
}
//getting the numbers from various button click

one.addEventListener("click", function () {
  out[out.length] = 1;
  output.innerHTML = displayOut(out);
});

two.addEventListener("click", function () {
  out[out.length] = 2;
  output.innerHTML = displayOut(out);
});

three.addEventListener("click", function () {
  out[out.length] = 3;
  output.innerHTML = displayOut(out);
});

four.addEventListener("click", function () {
  out[out.length] = 4;
  output.innerHTML = displayOut(out);
});

five.addEventListener("click", function () {
  out[out.length] = 5;
  output.innerHTML = displayOut(out);
});

six.addEventListener("click", function () {
  out[out.length] = 6;
  output.innerHTML = displayOut(out);
});

seven.addEventListener("click", function () {
  out[out.length] = 7;
  output.innerHTML = displayOut(out);
});

eight.addEventListener("click", function () {
  out[out.length] = 8;
  output.innerHTML = displayOut(out);
});

nine.addEventListener("click", function () {
  out[out.length] = 9;
  output.innerHTML = displayOut(out);
});

zero.addEventListener("click", function () {
  out[out.length] = 0;
  output.innerHTML = displayOut(out);
});

minus.addEventListener("click", function () {
  out[out.length] = "-";
  output.innerHTML = displayOut(out);
});

multiply.addEventListener("click", function () {
  out[out.length] = "*";
  output.innerHTML = displayOut(out);
});

plus.addEventListener("click", function () {
  out[out.length] = "+";
  output.innerHTML = displayOut(out);
});

divide.addEventListener("click", function () {
  out[out.length] = "/";
  output.innerHTML = displayOut(out);
});

decimal.addEventListener("click", function () {
  out[out.length] = ".";
  output.innerHTML = displayOut(out);
});



 function outputString (){
  return displayOut(out);
}

//import { outputString } from "./script.js";


let postfixExp;
let evalExp;
let stackarr = [];
let topp = -1;
function push(e) {
  topp++;
  stackarr[topp] = e;
}

function pop() {
  if (topp == -1) return 0;
  else {
    var popped_ele = stackarr[topp];
    topp--;
    return popped_ele;
  }
}

function operator(op) {
  if (
    op == "+" ||
    op == "-" ||
    op == "^" ||
    op == "*" ||
    op == "/" ||
    op == "(" ||
    op == ")"
  ) {
    return true;
  } else return false;
}

function precedency(pre) {
  if (pre == "@" || pre == "(" || pre == ")") {
    return 1;
  } else if (pre == "+" || pre == "-") {
    return 2;
  } else if (pre == "/" || pre == "*") {
    return 3;
  } else if (pre == "^") {
    return 4;
  } else return 0;
}

function InfixtoPostfix() {
  var postfix = [];
  var temp = 0;
  push("@");
   // input string

  for (var i = 0; i < displayOut(out).length; i++) {
    var el = displayOut(out)[i];

    if (operator(el)) {
      if (el == ")") {
        while (stackarr[topp] != "(") {
          postfix[temp++] = pop();
        }
        pop();
      } else if (el == "(") {
        push(el);
      } else if (precedency(el) > precedency(stackarr[topp])) {
        push(el);
      } else {
        while (precedency(el) <= precedency(stackarr[topp]) && topp > -1) {
          postfix[temp++] = pop();
        }
        push(el);
      }
    } else {
      postfix[temp++] = el;
    }
  }

  while (stackarr[topp] != "@") {
    postfix[temp++] = pop();
  }

  var st = "";
  for (var i = 0; i < postfix.length; i++) st += postfix[i];

  postfixExp = st;

 evalExp = eval (postfixExp);

  output.innerHTML = evalExp;
}

const equal = document.querySelector(".equal");
equal.addEventListener("click", InfixtoPostfix);




// now postfixExp jhas the postfix expression now we will convert it into evaluated form

// this will be presented inside the function of infixtopostfix 
// assuming only single digits
let stack2 = [];
let top2 = -1;

function push2(e) {
  top2++;
  stack2[top2] = e;
}

function pop2() {
  if (top2 == -1) return 0;
  else {
    var popped_elee = stack2[top2];
    top2--;
    return popped_elee;
  }
}


function eval (postExp)
{

  for (let  i =0 ; i < postExp.length ; i++)
  {
    elee = postExp[i];
    if(!operator(elee))
    {
      push2(parseInt(elee));
    }
    else 
    {
      let poppedd1= pop2();
      let poppedd2 = pop2();
      let newer
      if (elee === '+')
      {
        newer = poppedd1 + poppedd2;
        push2(newer)      
      }
      if (elee === '/')
      {
        newer = poppedd2 / poppedd1;
        push2(newer)
      }
      if (elee === '*')
      {
        newer = poppedd1 * poppedd2;
        push2(newer)
      }
      if (elee === '-')
      {
        newer = poppedd2 - poppedd1;
        push2(newer)
      }
    }
  }
  let final =  pop2();
  return final;
}