var numbersEntered = [];
var operator;
var firstNumber = numbersEntered.slice(0, (numbersEntered.length) - 1);
var secondNumber;
var finalResult;


$(".col").click(function() {
  var buttonPressed = this.textContent;
  var upperDataShown = document.querySelector(".lower-screen").textContent;


  if ((buttonPressed === '+') && (numbersEntered.length === 0)) {
    //do nothing
  } else if ((buttonPressed === '-') && (numbersEntered.length === 0)) {
    //do nothing
  } else if ((buttonPressed === '×') && (numbersEntered.length === 0)) {
    //do nothing
  } else if ((buttonPressed === '÷') && (numbersEntered.length === 0)) {
    //do nothing
  } else if ((buttonPressed === 'DEL') && (numbersEntered.length === 0)) {
    //do nothing
  } else if ((buttonPressed === '.') && (numbersEntered.length === 0)) {
    //do nothing
  } else if ((buttonPressed === '=') && (numbersEntered.length === 0)) {
    //do nothing
  } else {

    switch (this.textContent) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        document.querySelector(".lower-screen").textContent += buttonPressed;
        numbersEntered.push(buttonPressed);
        console.log(numbersEntered);
        break;

      case '+':
        if (numbersEntered[numbersEntered.length - 1] === '+') {
          //do nothing
        } else if ((numbersEntered[numbersEntered.length - 1] === '-')||(numbersEntered[numbersEntered.length - 1] === '×')||(numbersEntered[numbersEntered.length - 1] === '÷')) {
            numbersEntered.pop();
            numbersEntered.push(buttonPressed);
            operator='ADD';
            document.querySelector(".upper-screen").textContent=(numbersEntered.join(''));
        } else {
          if (document.querySelector(".upper-screen").textContent === "") {
            document.querySelector(".lower-screen").textContent += buttonPressed;
            numbersEntered.push(buttonPressed);
            document.querySelector(".upper-screen").textContent = document.querySelector(".lower-screen").textContent;
            $(".lower-screen").empty();
            operator = 'ADD';
            firstNumber = numbersEntered.slice(0, (numbersEntered.length) - 1);
          } else {
            // case '=':
            secondNumber = numbersEntered.slice((firstNumber.length + 1), (numbersEntered.length));
            firstNumber = parseFloat(firstNumber.join(''));
            secondNumber = parseFloat(secondNumber.join(''));
            operator = 'ADD';

            secondNumber = result(operator, firstNumber, secondNumber) + "+";

            $(".lower-screen").empty();
            $(".upper-screen").empty();
            document.querySelector(".upper-screen").textContent = secondNumber;

            numbersEntered = secondNumber.toString().split('');
            firstNumber = firstNumber.toString().split('');
            secondNumber = secondNumber.toString().split('');
            break;
          }
        }
        break;

      case '-':
        if (numbersEntered[numbersEntered.length - 1] === '-') {
          //do nothing
        } else if ((numbersEntered[numbersEntered.length - 1] === '+')||(numbersEntered[numbersEntered.length - 1] === '×')||(numbersEntered[numbersEntered.length - 1] === '÷')) {
            numbersEntered.pop();
            numbersEntered.push(buttonPressed);
            operator='SUBTRACT';
            document.querySelector(".upper-screen").textContent=(numbersEntered.join(''));
        } else {
          if (document.querySelector(".upper-screen").textContent === "") {
            document.querySelector(".lower-screen").textContent += buttonPressed;
            numbersEntered.push(buttonPressed);
            document.querySelector(".upper-screen").textContent = document.querySelector(".lower-screen").textContent;
            $(".lower-screen").empty();
            operator = 'SUBTRACT';
            firstNumber = numbersEntered.slice(0, (numbersEntered.length) - 1);
          } else {
            // case '=':
            secondNumber = numbersEntered.slice((firstNumber.length + 1), (numbersEntered.length));
            firstNumber = parseFloat(firstNumber.join(''));
            secondNumber = parseFloat(secondNumber.join(''));
            operator = 'SUBTRACT';

            secondNumber = result(operator, firstNumber, secondNumber) + "+";

            $(".lower-screen").empty();
            $(".upper-screen").empty();
            document.querySelector(".upper-screen").textContent = secondNumber;

            numbersEntered = secondNumber.toString().split('');
            firstNumber = firstNumber.toString().split('');
            secondNumber = secondNumber.toString().split('');
            break;
          }
        }
        break;


      case '×':
        if (numbersEntered[numbersEntered.length - 1] === '×') {
          //do nothing
        } else if ((numbersEntered[numbersEntered.length - 1] === '-')||(numbersEntered[numbersEntered.length - 1] === '+')||(numbersEntered[numbersEntered.length - 1] === '÷')) {
            numbersEntered.pop();
            numbersEntered.push(buttonPressed);
            operator='MULTIPLY';
            document.querySelector(".upper-screen").textContent=(numbersEntered.join(''));
        } else {
          if (document.querySelector(".upper-screen").textContent === "") {
            document.querySelector(".lower-screen").textContent += buttonPressed;
            numbersEntered.push(buttonPressed);
            document.querySelector(".upper-screen").textContent = document.querySelector(".lower-screen").textContent;
            $(".lower-screen").empty();
            operator = 'MULTIPLY';
            firstNumber = numbersEntered.slice(0, (numbersEntered.length) - 1);
          } else {
            // case '=':
            secondNumber = numbersEntered.slice((firstNumber.length + 1), (numbersEntered.length));
            firstNumber = parseFloat(firstNumber.join(''));
            secondNumber = parseFloat(secondNumber.join(''));
            operator = 'MULTIPLY';

            secondNumber = result(operator, firstNumber, secondNumber) + "+";

            $(".lower-screen").empty();
            $(".upper-screen").empty();
            document.querySelector(".upper-screen").textContent = secondNumber;

            numbersEntered = secondNumber.toString().split('');
            firstNumber = firstNumber.toString().split('');
            secondNumber = secondNumber.toString().split('');
            break;
          }
        }
        break;


      case '÷':
        if (numbersEntered[numbersEntered.length - 1] === '÷') {
          //do nothing
        } else if ((numbersEntered[numbersEntered.length - 1] === '-')||(numbersEntered[numbersEntered.length - 1] === '×')||(numbersEntered[numbersEntered.length - 1] === '+')) {
            numbersEntered.pop();
            numbersEntered.push(buttonPressed);
            operator='DIVIDE';
            document.querySelector(".upper-screen").textContent=(numbersEntered.join(''));
        } else {
          if (document.querySelector(".upper-screen").textContent === "") {
            document.querySelector(".lower-screen").textContent += buttonPressed;
            numbersEntered.push(buttonPressed);
            document.querySelector(".upper-screen").textContent = document.querySelector(".lower-screen").textContent;
            $(".lower-screen").empty();
            operator = 'DIVIDE';
            firstNumber = numbersEntered.slice(0, (numbersEntered.length) - 1);
          } else {
            // case '=':
            secondNumber = numbersEntered.slice((firstNumber.length + 1), (numbersEntered.length));
            firstNumber = parseFloat(firstNumber.join(''));
            secondNumber = parseFloat(secondNumber.join(''));
            operator = 'DIVIDE';

            secondNumber = result(operator, firstNumber, secondNumber) + "+";

            $(".lower-screen").empty();
            $(".upper-screen").empty();
            document.querySelector(".upper-screen").textContent = secondNumber;

            numbersEntered = secondNumber.toString().split('');
            firstNumber = firstNumber.toString().split('');
            secondNumber = secondNumber.toString().split('');
            break;
          }
        }
        break;

      case '=':
        secondNumber = numbersEntered.slice((firstNumber.length + 1), (numbersEntered.length));
        firstNumber = parseFloat(firstNumber.join(''));
        secondNumber = parseFloat(secondNumber.join(''));

        finalResult = result(operator, firstNumber, secondNumber);

        numbersEntered = finalResult.toString().split('');
        $(".lower-screen").empty();
        $(".upper-screen").empty();
        document.querySelector(".lower-screen").textContent = finalResult;
        break;

      case '.':
        document.querySelector(".lower-screen").textContent += buttonPressed;
        numbersEntered.push(buttonPressed);
        break;

      case 'AC':
        $(".lower-screen").empty();
        $(".upper-screen").empty();
        numbersEntered = [];
        break;

      case 'DEL':
        secondNumber = numbersEntered.slice((firstNumber.length + 1), (numbersEntered.length));

        if (document.querySelector(".lower-screen").textContent === "" && document.querySelector(".upper-screen").textContent !== "") {
          //do nothing
        } else if (document.querySelector(".lower-screen").textContent !== "" && document.querySelector(".upper-screen").textContent !== "") {
          if (secondNumber.length === 1) {
            $(".lower-screen").empty();
            numbersEntered = numbersEntered.slice(0, -1);
          } else {
            secondNumber = secondNumber.slice(0, -1);
            document.querySelector(".lower-screen").textContent = parseFloat(secondNumber.join(''));
            numbersEntered.pop();
          }
        } else {
          if (numbersEntered.length === 1) {
            $(".lower-screen").empty();
            numbersEntered = numbersEntered.slice(0, -1);
          } else {
            numbersEntered = numbersEntered.slice(0, -1);
            document.querySelector(".lower-screen").textContent = parseFloat(numbersEntered.join(''));
          }
        }
        break;
      default:
        alert("error");
    }
  }
});








function result(operation, num1, num2) {
  switch (operation) {
    case 'ADD':
      return num1 + num2;
      break;

    case 'SUBTRACT':
      return num1 - num2;
      break;

    case 'MULTIPLY':
      return num1 * num2;
      break;

    case 'DIVIDE':
      return num1 / num2;
      break;

    default:
      alert("error");
  }
}
