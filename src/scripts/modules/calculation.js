// Função responsável por fazer o cáculo da operação matemática.
export default class Calculation {
  // O construtor é responsável por selecionar os elementos necessários para o módulo.
  constructor() {
    this.displayOperation = document.querySelector(".display-result-text"); // Está atribuindo ao this.displayOperation o elemento com a classe .display-result-text.
    this.displayResult = document.querySelector(".display-operation-text"); // Está atribuindo ao this.displayResult o elemento com a classe .display-operation-text.

    // Está atribuindo ao this.numbers um array com os números de 0 a 9.
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
      document.querySelector("#dot")
    ];

    // Está atribuindo ao this.arithmeticOperators um array com os operadores matemáticos.
    this.arithmeticOperators = [
      document.querySelector("#addition"),
      document.querySelector("#subtraction"),
      document.querySelector("#multiplication"),
      document.querySelector("#division"),
    ];
    this.acButton = document.querySelector("#ac"); // Está atribuindo ao this.acButton o elemento com o id #ac.
    this.arrowButton = document.querySelector("#arrow"); // Está atribuindo ao this.arrowButton o elemento com o id #arrow.
    this.equalButton = document.querySelector("#equal"); // Está atribuindo ao this.equalButton o elemento com o id #equal.
  }

  // O método addNumber é responsável por adicionar os números no display da calculadora.
  addNumber() {
    // Está percorrendo o array this.numbers e adicionando um evento de click em cada elemento do array.
    this.numbers.forEach((number) => {
      // Está adicionando um evento de click em cada elemento do array.
      number.addEventListener("click", () => {
        // Está verificando se o texto do displayOperation está com o valor 0, se estiver executa o código dentro do if.
        if (this.displayOperation.textContent === "0") {
          this.displayOperation.textContent = ""; // Está atribuindo ao texto do this.displayOperation o valor vazio.
        }

        this.displayOperation.textContent += number.value; // Está atribuindo ao texto do this.displayOperation o valor do número clicado.
      });
    });
  }

  // O método operationMath é responsável por adicionar os operadores matemáticos no display da calculadora.
  operationMath() {
    // Está percorrendo o array this.arithmeticOperators e adicionando um evento de click em cada elemento do array.
    this.arithmeticOperators.forEach((operator) => {
      // Está adicionando um evento de click em cada elemento do array.
      operator.addEventListener("click", () => {
        this.displayOperation.textContent += ` ${operator.value} `; // Está atribuindo ao texto do this.displayOperation o valor do operador matemático clicado.
      });
    });
  }

  // O método calculateResult é responsável por calcular o resultado da operação matemática.
  calculateResult() {
    // O try catch é responsável por tentar executar o código dentro do try, se der erro executa o código dentro do catch.
    try {
      const expression = this.displayOperation.textContent; // Está atribuindo a const expression o valor do texto do this.displayOperation.
      const result = eval(expression); // O eval é responsável por calcular a expressão matemática do texto do this.displayOperation e atribuir o resultado a const result.

      const formattedResult = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Está atribuindo a const formattedResult ao resultado, utilizando o método toString para transformar o resultado em string e o método replace para substituir os pontos por vírgulas utilizando uma expressão regular.

      this.displayResult.textContent = formattedResult; // Está atribuindo ao texto do this.displayResult o valor da const result.
    } catch (error) {      
      this.displayResult.textContent = "Operação inválida"; // Está atribuindo ao texto do this.displayResult o valor "Operação inválida".
      this.displayResult.style.fontSize = "28px"; // Está atribuindo ao estilo do this.displayResult o valor 28px.
      this.displayResult.style.color = "red"; // Está atribuindo ao estilo do this.displayResult a cor vermelha.

      // O setTimeout é responsável por executar o código dentro dele depois de 1s.
      setTimeout(() => {
        this.displayResult.textContent = "0"; // Está atribuindo ao texto do this.displayResult o valor 0.
        this.displayResult.style.fontSize = "48px"; // Está atribuindo ao estilo do this.displayResult o valor 48px.
        this.displayResult.style.color = ""; // Está atribuindo ao estilo do this.displayResult a cor padrão definida no CSS.
      }, 1500);
    }
  }

  // O método resultMath é responsável por chamar o método calculateResult quando o botão de igual for clicado.
  resultMath() {
    // Está adicionando um evento de click no botão de igual.
    this.equalButton.addEventListener("click", () => {
      this.calculateResult(); // Está chamando o método calculateResult.
    });
  }

  // O método cleanDisplay é responsável por limpar o display da calculadora.
  cleanDisplay() {
    // Está adicionando um evento de click no botão de AC.
    this.acButton.addEventListener("click", () => {
      // Está atribuindo ao texto do this.displayOperation e this.displayResult o valor 0.
      this.displayOperation.textContent = "0";
      this.displayResult.textContent = "0";
    });

    // Está adicionando um evento de click no botão de seta.
    this.arrowButton.addEventListener("click", () => {
      this.displayOperation.textContent = this.displayOperation.textContent.slice(0, -1).trim(); // Está atribuindo ao texto do displayOperation o valor do texto do displayOperation sem o último caractere(com o slice) e removendo os espaços em branco(com o trim).

      // Está verificando se o texto do displayOperation está vazio, se estiver executa o código dentro do if.
      if (this.displayOperation.textContent === "") {
        this.displayOperation.textContent = "0"; // Está atribuindo ao texto do this.displayOperation o valor 0.
      }
    });
  }

  // O método init é responsável por chamar os métodos que serão usados na classe.
  init() {
    if(this.displayOperation && this.displayResult) {
      // Está chamando os métodos.
      this.addNumber();
      this.operationMath();
      this.resultMath();
      this.cleanDisplay();
    }
  }
}
