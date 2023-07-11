// Função Calculation responsável por fazer o cáculo da operação matemática.
export default class Calculation {
  // O construtor é responsável por selecionar os elementos necessários para o módulo.
  constructor() {
    this.displayOperation = document.querySelector(".display-result-text"); // Está atribuindo ao this.displayOperation o elemento com a classe .display-result-text.
    this.displayResult = document.querySelector(".display-operation-text"); // Está atribuindo ao this.displayResult o elemento com a classe .display-operation-text.

    this.numbers = Array.from(document.querySelectorAll(".number, .dot")); // Está atribuindo ao this.numbers um array com os números e o ponto.
    this.operators = Array.from(document.querySelectorAll(".operator")); // Está atribuindo ao this.operators um array com os operadores matemáticos.

    this.acButton = document.querySelector(".ac"); // Está atribuindo ao this.acButton o elemento com o id #ac.
    this.arrowButton = document.querySelector(".arrow"); // Está atribuindo ao this.arrowButton o elemento com o id #arrow.
    this.equalButton = document.querySelector(".equal"); // Está atribuindo ao this.equalButton o elemento com o id #equal.
  }

  // O método addEvents é responsável por adicionar os eventos de click nos elementos necessários.
  addEvents() {
    // O forEach é responsável por percorrer o array this.numbers e executar o código dentro dele para cada elemento do array.
    this.numbers.forEach((number) => {
      // Está adicionando um evento de click em cada elemento do array this.numbers.
      number.addEventListener(
        "click",
        () => this.handleNumberClick(number.value) // Está chamando o método handleNumberClick responsável por adicionar os números no display da calculadora e passando como parâmetro o valor do número clicado.
      );
    });

    // O forEach é responsável por percorrer o array this.operators e executar o código dentro dele para cada elemento do array.
    this.operators.forEach((operator) => {
      // Está adicionando um evento de click em cada elemento do array this.operators.
      operator.addEventListener(
        "click",
        () => this.handleOperatorClick(operator) // Está chamando o método handleOperatorClick responsável por adicionar os operadores matemáticos no display da calculadora e passando como parâmetro o valor do operador matemático clicado.
      );
    });

    // Está adicionando um evento de click no botão de igual e chamando o método calculateResult responsável por calcular o resultado da operação matemática.
    this.equalButton.addEventListener("click", () => this.calculateResult());

    // Está adicionando um evento de click no botão de AC e chamando o método clearDisplay responsável por limpar o display da calculadora.
    this.acButton.addEventListener("click", () => this.clearDisplay());

    // Está adicionando um evento de click no botão de seta e chamando o método removeLastCharacter responsável por remover o último caractere do display da calculadora.
    this.arrowButton.addEventListener(
      "click",
      () => this.removeLastCharacter() // Está chamando o método removeLastCharacter responsável por remover o último caractere do display da calculadora.
    );
  }

  // O método handleNumberClick é responsável por adicionar os números no display da calculadora.
  handleNumberClick(number) {
    // Está verificando se o texto do displayOperation está com o valor 0, se estiver executa o código dentro do if.
    if (this.displayOperation.textContent === "0") {
      this.displayOperation.textContent = ""; // Está atribuindo ao texto do this.displayOperation o valor vazio.
    }

    this.displayOperation.textContent += number; // Está atribuindo ao texto do this.displayOperation o valor do número clicado.
  }

  // O método handleOperatorClick é responsável por adicionar os operadores matemáticos no display da calculadora.
  handleOperatorClick(operator) {
    this.displayOperation.textContent += ` ${operator.value} `; // Está atribuindo ao texto do this.displayOperation o valor do operador matemático clicado.
  }

  // O método calculateResult é responsável por calcular o resultado da operação matemática.
  calculateResult() {
    // O try catch é responsável por tentar executar o código dentro do try, se der erro executa o código dentro do catch.
    try {
      const expression = this.displayOperation.textContent; // Está atribuindo a const expression o valor do texto do this.displayOperation.

      const result = eval(expression); // Está atribuindo a const result o resultado da expressão matemática utilizando o método eval que faz o cálculo da expressão.

      const formattedResult = this.formatResult(result, expression); // Está atribuindo a const formattedResult o resultado do método formatResult que formata o resultado da expressão matemática e passando como parâmetro o resultado da expressão e o operador matemático utilizado.

      this.displayResult.textContent = formattedResult; // Está atribuindo ao texto do this.displayResult o valor da const result.
    } catch (error) {
      this.displayResult.textContent = "Erro"; // Está atribuindo ao texto do this.displayResult o valor "Error".
      this.displayResult.classList.add("error"); // Está adicionando a classe .error ao this.displayResult.

      // O setTimeout é responsável por executar o código dentro dele depois de 1s.
      setTimeout(() => {
        this.displayResult.textContent = "0"; // Está atribuindo ao texto do this.displayResult o valor 0.
        this.displayResult.classList.remove("error"); // Está remove a classe .error do this.displayResult.
      }, 4000);
    }
  }

  formatResult(result, operation) {
    let formattedResult; // Está criando a variável formattedResult.

    // Está verificando qual operador matemático foi utilizado e formatando o resultado de acordo com o operador.
    switch (operation) {
      case "+":
        formattedResult = result.toLocaleString(); // Formata o resultado com as configurações regionais padrão.
        break;
      case "-":
        formattedResult = result.toFixed(2); // Formata o resultado com 2 casas decimais.
        break;
      case "*":
        formattedResult = result.toExponential(2); // Formata o resultado em notação exponencial com 2 casas decimais.
        break;
      case "/":
        formattedResult = result.toPrecision(4); // Formata o resultado com até 4 dígitos significativos.
        break;
      default:
        formattedResult = result.toString(); // Formata o resultado como uma string padrão.
        break;
    }

    return formattedResult; // Está retornando o valor da variável formattedResult.
  }

  // O método resultMath é responsável por chamar o método calculateResult quando o botão de igual for clicado.
  resultMath() {
    // Está adicionando um evento de click no botão de igual.
    this.equalButton.addEventListener("click", () => {
      this.calculateResult(); // Está chamando o método calculateResult responsável por calcular o resultado da operação matemática.
    });
  }

  // O método cleanDisplay é responsável por limpar o display da calculadora.
  clearDisplay() {
    // Está atribuindo ao texto do this.displayOperation e this.displayResult o valor 0.
    this.displayOperation.textContent = "0";
    this.displayResult.textContent = "0";
  }

  // O método removeLastCharacter é responsável por remover o último caractere do display da calculadora.
  removeLastCharacter() {
    // Está adicionando um evento de click no botão de seta.
    this.displayOperation.textContent = this.displayOperation.textContent.slice(
      0,
      -1
    ); // Está atribuindo ao texto do displayOperation o valor do texto do displayOperation sem o último caractere(com o slice) e removendo os espaços em branco(com o trim).

    // Está verificando se o texto do displayOperation está vazio, se estiver executa o código dentro do if.
    if (this.displayOperation.textContent === "") {
      this.displayOperation.textContent = "0"; // Está atribuindo ao texto do this.displayOperation o valor 0.
    }
  }

  // O método init é responsável por chamar os métodos que serão usados na classe.
  init() {
    // Está verificando se o this.displayOperation e this.displayResult existem, se sim executa o if.
    if (this.displayOperation && this.displayResult) {
      // Está chamando o método addEvents.
      this.addEvents();
    }

    return this; // Está retornando o this para que seja possível acessar os métodos do módulo através do init.
  }
}
