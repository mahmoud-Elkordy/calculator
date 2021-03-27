var numbersEntered = [];
var operator;
var firstNumber;
var secondNumber;
var finalResult;

// button animation (used as hover in css)
// $(".col").mouseover(function() { // mouseover = mouseenter
//   $(this).css("background-color", "#fff");
// })
// $(".col").mouseout(function() { // mouseout = mouseleave
//   $(this).css("background-color", "#d3e0ea");
// })



// (this.textContent)   v.i.p
// something called find("span") to write the numbers on the screen while calculation



$(".col").click(function() {
  var buttonPressed = this.textContent;
  var upperDataShown = document.querySelector(".lower-screen").textContent;

  //write the button clicked on the screen
  document.querySelector(".lower-screen").textContent += buttonPressed;

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
      numbersEntered.push(buttonPressed);
      break;

    case '+':
      numbersEntered.push(buttonPressed);
      document.querySelector(".upper-screen").textContent = document.querySelector(".lower-screen").textContent;
      $(".lower-screen").empty();
      operator='ADD';
      firstNumber=numbersEntered.slice(0,(numbersEntered.length)-1);
      break;

    case '-':
      numbersEntered.push(buttonPressed);
      document.querySelector(".upper-screen").textContent = document.querySelector(".lower-screen").textContent;
      $(".lower-screen").empty();
      operator='SUBTRACT';
      firstNumber=numbersEntered.slice(0,(numbersEntered.length)-1);
      break;

    case '×':
      numbersEntered.push(buttonPressed);
      document.querySelector(".upper-screen").textContent = document.querySelector(".lower-screen").textContent;
      $(".lower-screen").empty();
      operator='MULTIPLY';
      firstNumber=numbersEntered.slice(0,(numbersEntered.length)-1);
      break;

    case '÷':
      numbersEntered.push(buttonPressed);
      document.querySelector(".upper-screen").textContent = document.querySelector(".lower-screen").textContent;
      $(".lower-screen").empty();
      operator='DIVIDE';
      firstNumber=numbersEntered.slice(0,(numbersEntered.length)-1);
      break;

    case '=':
      secondNumber=numbersEntered.slice((firstNumber.length+1),(numbersEntered.length));
      firstNumber=parseFloat(firstNumber.join(''));
      secondNumber=parseFloat(secondNumber.join(''));

      finalResult=result(operator,firstNumber,secondNumber);
      
      numbersEntered=finalResult.toString().split('');
      $(".lower-screen").empty();
      $(".upper-screen").empty();
      document.querySelector(".lower-screen").textContent=finalResult;
      break;

    case '.':
      numbersEntered.push(buttonPressed);
      break;

    case 'AC':

      $(".lower-screen").empty();
      $(".upper-screen").empty();
      numbersEntered = [];
      break;

    case 'DEL':
      numbersEntered=numbersEntered.slice(0,-1);
      document.querySelector(".lower-screen").textContent = parseFloat(numbersEntered.join(''));

      break;
    default:
  }
});








function result(operation,num1,num2){
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

    default:alert("error");
  }
}
