// Função responsável por aplicar o tema escuro ou claro de acordo com o valor do localStorage.
export default class ModeTheme {
  // O construtor é responsável por selecionar os elementos necessários para o módulo.
  constructor() {
    this.calculator = document.querySelector(".calculator-container");
    this.span = document.querySelector(".mode div span");
  }

  // Função responsável por verificar o tema atual e aplicar a animação correta.
  pageReload() {
    // Está adicionando um evento de DOMContentLoaded na página.
    document.addEventListener("DOMContentLoaded", () => {
      this.span.style.animation = "none"; // Está atribuindo ao this.span a propriedade animation com o valor none, assim removendo a animação.

      // Está verificando se o valor da chave theme do localStorage é light, se for executa o código dentro do if.
      if (localStorage.getItem("theme") === "light") {
        this.span.style.transform = "translateX(0)"; // Está atribuindo ao this.span a propriedade transform com o valor translateX(0), assim movendo o botão para a esquerda.
      } else {
        this.span.style.transform = "translateX(100%)"; // Está atribuindo ao this.span a propriedade transform com o valor translateX(100%), assim movendo o botão para a direita.
      }
    });
  }

  // Função responsável por adicionar o evento de click no botão de mudar o tema.
  addEvent() {
    // Está adicionando um evento de click no this.span.
    this.span.addEventListener("click", () => {
      localStorage.getItem("theme") === "light"; // Está atribuindo a chave theme do localStorage o valor light.
      this.watchLocalStorage(); // Está chamando a função watchLocalStorage para verificar o valor do localStorage e aplicar o tema correto.
    });
  }

  // Função responsável por aplicar o tema escuro.
  themeDark() {
    this.calculator.classList.remove("light"); // Está removendo a classe light do this.calculator.
    this.calculator.classList.add("dark"); // Está adicionando a classe dark no this.calculator.
    this.span.style.animation = "buttonMoveDark 0.5s ease-in-out forwards"; // Está atribuindo ao this.span a propriedade animation com o valor buttonMoveDark 0.5s ease-in-out forwards, assim aplicando a animação.
  }

  // Função responsável por aplicar o tema claro.
  themeLight() {
    this.calculator.classList.remove("dark"); // Está removendo a classe dark do this.calculator.
    this.calculator.classList.add("light"); // Está adicionando a classe light no this.calculator.
    this.span.style.animation = "buttonMoveLight 0.5s ease-in-out forwards"; // Está atribuindo ao this.span a propriedade animation com o valor buttonMoveLight 0.5s ease-in-out forwards, assim aplicando a animação.
  }

  // Função responsável por verificar o valor do localStorage e aplicar o tema correto de acordo com o valor.
  changeTheme() {
    // Está verificando se o valor da chave theme do localStorage é light, se for executa o código dentro do if, se não executa o código dentro do else.
    if (localStorage.getItem("theme") === "light") {
      this.themeLight(); // Está chamando a função themeLight para aplicar o tema claro.
    } else {
      this.themeDark(); // Está chamando a função themeDark para aplicar o tema escuro.
    }
  }

  // Função responsável por verificar o localStorage e aplicar o tema correto de acordo com o valor.
  watchLocalStorage() {
    // Está verificando se o valor da chave theme do localStorage é light, se for executa o código dentro do if, se não executa o código dentro do else.
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark"); // Está atribuindo a chave theme do localStorage o valor dark.
    } else {
      localStorage.setItem("theme", "light"); // Está atribuindo a chave theme do localStorage o valor light.
    }

    this.changeTheme(); // Está chamando a função changeTheme para aplicar o tema correto de acordo com o valor do localStorage.
  }

  // Função responsável por iniciar o módulo.
  init() {
    // Está verificando se o this.span existe, se existir executa o código dentro do if.
    if (this.span) {
      // Está chamando as funções necessárias para iniciar o módulo.
      this.pageReload();
      this.changeTheme();
      this.addEvent();
    }
    return this;
  }
}
