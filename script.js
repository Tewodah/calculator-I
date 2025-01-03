function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
function sub(num1, num2) {
  const diff = num1 - num2;
  return diff;
}
function div(num1, num2) {function add(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input");
  }
  const sum = num1 + num2;
  return sum;
}
function sub(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input");
  }
  const diff = num1 - num2;
  return diff;
}
function div(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input");
  }
  if (num2 == 0) {
    throw new Error("Division by zero");
  }
  const quotient = num1 / num2;
  return quotient;
}
function mul(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input");
  }
  const product = num1 * num2;
  return product;
}
function pow(n, p) {
  if (isNaN(n) || isNaN(p)) {
    throw new Error("Invalid input");
  }
  return Math.pow(n, p);
}
function log(base, number) {
  if (isNaN(base) || isNaN(number)) {
    throw new Error("Invalid input");
  }
  if (base <= 0) {
    throw new Error("Invalid base");
  }
  return Math.log(number) / Math.log(base);
}
function modulus(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid input");
  }
  if (num2 == 0) {
    throw new Error("Division by zero");
  }
  return num1 % num2;
}

let firstNumber = 0;
let secondNumber = 0;
let selectedOperator = "";
let result = 0;

const firstNumberElement = document.getElementById("first-number");
const secondNumberElement = document.getElementById("second-number");
const resultElement = document.getElementById("result");
const evaluateButton = document.getElementById("evaluate-button");
 
[firstNumberElement, secondNumberElement].forEach((element) => {
  element.addEventListener("change", function () {
    const value = parseInt(this.value);
    if (isNaN(value)) {
      alert("Invalid input");
      this.value = "";
    } else {
      if (this === firstNumberElement) {
        firstNumber = value;
      } else {
        secondNumber = value;
      }
    }
  });

  element.addEventListener("keypress", function (event) {
    if (event.code === "KeyE") {
      alert("Invalid character");
      event.preventDefault();
    }
  });
});

const operatorElements = document.getElementsByName("operators");

operatorElements.forEach(function (op) {
  op.addEventListener("change", function () {
    selectedOperator = this.value;
    displaySelectedOperator(selectedOperator);
  });
});

function displaySelectedOperator() {
  try {
    switch (selectedOperator) {
      case "add":
        selectedOperator = "+";
        result = add(firstNumber, secondNumber);
        break;
      case "mult":
        selectedOperator = "*";
        result = mul(firstNumber, secondNumber);
        break;
      case "sub":
        selectedOperator = "-";
        result = sub(firstNumber, secondNumber);
        break;
      case "div":
        result = div(firstNumber, secondNumber);
        selectedOperator = "/";
        break;
      case "pow":
        selectedOperator = "^";
        result = pow(firstNumber, secondNumber);
        break;
      case "remainder":
        selectedOperator = "%";
        result = modulus(firstNumber, secondNumber);
        break;
      case "log":
        selectedOperator = "log^";
        result = log(firstNumber, secondNumber);
        break;
      default:
        selectedOperator = "";
    }
    document.getElementById("selected-operator").innerHTML =
      "<h1 class='h1 m-6'>" + selectedOperator + "</h1>";
  } catch (error) {
    alert(error.message);
  }
}

const evaluateButtonElement = document.getElementById("evaluate-button");
evaluateButtonElement.addEventListener("click", function () {
  try {
    const resultElement = document.createElement("h1");
    resultElement.innerText = firstNumber.toString() + selectedOperator + secondNumber.toString() + "=" + result.toString();
    document.body.append(resultElement);
  } catch (error) {
    alert(error.message);
  }
});
  if (num2 == 0) {
    alert("division by 0");
    throw new Error("please change the number");
  }
  const quotient = num1 / num2;

  return quotient;
}
function mul(num1, num2) {
  const product = num1 * num2;
  return product;
}
function pow(n, p) {
  return Math.pow(n, p);
}
function log(base, number) {
  return Math.log(number) / Math.log(base);
}
function modulus(num1, num2) {
  return num1 % num2;
}

let firstNumber = 0;
let secondNumber = 0;
let selectedOperator = "";
let result = 0;




const firstNumberElement = document.getElementById("first-number");

firstNumberElement.addEventListener("change", function () {
  firstNumber = parseInt(this.value);
});

firstNumberElement.addEventListener("keypress", function (event) {
  if (event.code === "KeyE") {
    alert("invalid character");
    event.preventDefault();
  }
});

const secondNumberElement = document.getElementById("second-number");

secondNumberElement.addEventListener("change", function () {
  secondNumber = parseInt(this.value);
});
secondNumberElement.addEventListener("keypress", function (event) {
  if (event.code === "KeyE") {
    alert("invalid character");
    event.preventDefault();
  }
});

const operatorElements = document.getElementsByName("operators");

operatorElements.forEach(function (op) {
  op.addEventListener("change", function () {
    selectedOperator = this.value;
    displaySelectedOperator(selectedOperator);
  });
});

function displaySelectedOperator() {
  switch (selectedOperator) {
    case "add":
      selectedOperator = "+";
      result = add(firstNumber, secondNumber);
      break;
    case "mult":
      selectedOperator = "*";
      result = mul(firstNumber, secondNumber);
      break;
    case "sub":
      selectedOperator = "-";
      result = sub(firstNumber, secondNumber);
      break;
    case "div":
      result = div(firstNumber, secondNumber);
      selectedOperator = "/";
      break;
    case "pow":
      selectedOperator = "^";
      result = pow(firstNumber, secondNumber);
      break;
    case "remainder":
      selectedOperator = "%";
      result = modulus(firstNumber, secondNumber);
      break;
    case "log":
      selectedOperator = "log^";
      result = log(firstNumber, secondNumber);
      break;
    default:
      selectedOperator = "";
  }
  document.getElementById("selected-operator").innerHTML =
    "<h1 class='h1 m-6'>" + selectedOperator + "</h1>";
}

const evaluateButtonElement = document.getElementById("evaluate-button");
evaluateButtonElement.addEventListener("click", function () {
  const resultElement = document.createElement("h1");
  resultElement.innerText =  firstNumber.toString() + selectedOperator + secondNumber.toString() + "=" + result.toString();
  document.body.append(resultElement);
});
