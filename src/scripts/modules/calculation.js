export default class Calculation {
  constructor() {
    this.displayOperation = document.querySelector(".display-result-text");
    this.displayResult = document.querySelector(".display-operation-text");

    this.numbers = [
      document.querySelector("#number-one"),
      document.querySelector("#number-two"),
      document.querySelector("#number-three"),
      document.querySelector("#number-four"),
      document.querySelector("#number-five"),
      document.querySelector("#number-six"),
      document.querySelector("#number-seven"),
      document.querySelector("#number-eight"),
      document.querySelector("#number-nine"),
      document.querySelector("#number-zero"),
    ];
    this.arithmeticOperators = [
      document.querySelector("#addition"),
      document.querySelector("#subtraction"),
      document.querySelector("#multiplication"),
      document.querySelector("#division"),
    ];
    this.acButton = document.querySelector("#ac");
    this.arrowButton = document.querySelector("#arrow");
    this.dotButton = document.querySelector("#dot");
  }

  addNumber() {
    this.numbers.forEach((number) => {
      number.addEventListener("click", () => {
        if (this.displayOperation.textContent === "0") {
          this.displayOperation.textContent = "";
        }

        this.displayOperation.textContent += number.value;
      });
    });
  }

  operationMath() {
    this.arithmeticOperators.forEach((operator) => {
      operator.addEventListener("click", () => {
        this.displayOperation.textContent += ` ${operator.value} `;
      });
    });
  }

  calculateResult() {
    const expression = this.displayOperation.textContent;
    const result = eval(expression);

    this.displayResult.textContent = result;
  }

  resultMath() {
    document.querySelector("#equal").addEventListener("click", () => {
      this.calculateResult();
    });
  }

  cleanDisplay() {
    this.acButton.addEventListener("click", () => {
      this.displayOperation.textContent = "0";
      this.displayResult.textContent = "0";
    });

    this.arrowButton.addEventListener("click", () => {
      this.displayOperation.textContent =
        this.displayOperation.textContent.slice(0, -1);
      if (this.displayOperation.textContent === "") {
        this.displayOperation.textContent = "0";
      }
    });
  }

  init() {
    this.addNumber();
    this.operationMath();
    this.resultMath();
    this.cleanDisplay();
  }
}
