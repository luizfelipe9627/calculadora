// Função responsável por alterar o tema da calculadora.
export default class ModeTheme {
  // O construtor é responsável por selecionar os elementos necessários para o módulo.
  constructor() {
    this.calculator = document.querySelector(".calculator-container"); // Está atribuindo ao this.calculator o elemento com a classe .calculator-container.
    this.span = document.querySelector(".mode div span"); // Está atribuindo ao this.span o elemento com a classe .mode div span.
  }

  // O método pageReload é responsável por verificar se o tema está salvo no localStorage e remover a animação do botão quando a página for recarregada.
  pageReload() {
    // Está verificando se o evento DOMContentLoaded foi disparado, se sim executa o callback.
    document.addEventListener("DOMContentLoaded", () => {
      this.span.style.animation = "none"; // Está atribuindo ao this.span o valor none sendo assim removendo a animação.
      this.updateButtonPosition(); // Está chamando o método updateButtonPosition.
    });
  }

  // O método addEvent é responsável por adicionar um evento de click no this.span.
  addEvent() {
    // Está adicionando um evento de click no this.span, se o evento for disparado executa o callback.
    this.span.addEventListener("click", () => {
      this.toggleTheme(); // Está chamando o método toggleTheme que é responsável por alternar o tema.
    });
  }

  // O método themeDark é responsável por mudar o tema para dark.
  themeDark() {
    this.calculator.classList.remove("light"); // Está removendo a classe light do this.calculator.
    this.calculator.classList.add("dark"); // Está adicionando a classe dark no this.calculator.
    this.span.style.animation = "buttonMoveDark 0.5s ease-in-out forwards"; // Está atribuindo ao this.span o valor buttonMoveDark sendo assim adicionando a animação.
  }

  // O método themeLight é responsável por mudar o tema para light.
  themeLight() {
    this.calculator.classList.remove("dark"); // Está removendo a classe dark do this.calculator.
    this.calculator.classList.add("light"); // Está adicionando a classe light no this.calculator.
    this.span.style.animation = "buttonMoveLight 0.5s ease-in-out forwards"; // Está atribuindo ao this.span o valor buttonMoveLight sendo assim adicionando a animação.
  }

  // O método changeTheme é responsável por verificar se o tema está salvo no localStorage e mudar o tema.
  changeTheme() {
    // Está verificando se o tema está salvo no localStorage, se sim executa o if, se não executa o else.
    if (localStorage.getItem("theme") === "light") {
      this.themeLight(); // Está chamando o método themeLight responsável por mudar o tema para light.
    } else {
      this.themeDark(); // Está chamando o método themeDark responsável por mudar o tema para dark.
    }
  }

  // O método toggleTheme é responsável por alternar o tema.
  toggleTheme() {
    const theme = localStorage.getItem("theme") === "light" ? "dark" : "light"; // Está atribuindo a constante theme o valor do tema salvo no localStorage, se o tema for light, o valor da constante theme será dark, se não o valor da constante theme será light.
    localStorage.setItem("theme", theme); // Está salvando o tema no localStorage.
    this.changeTheme(); // Está chamando o método changeTheme responsável por mudar o tema.
  }

  // O método updateButtonPosition é responsável por atualizar a posição do botão.
  updateButtonPosition() {
    const theme = localStorage.getItem("theme"); // Está atribuindo a constante theme o valor do tema salvo no localStorage.
    this.span.style.transform = theme === "light" ? "translateX(0)" : "translateX(100%)"; // Se o tema for light, o botão ficará na posição inicial(translateX(0)), se não o botão ficará na posição final(translateX(100%)).
  }

  // O método init é responsável por iniciar o módulo.
  init() {
    // Está verificando se o this.span existe, se sim executa o if.
    if (this.span) {
      this.pageReload();
      this.changeTheme();
      this.addEvent();
    }
    return this; // Está retornando o this para que seja possível acessar os métodos do módulo através do init.
  }
}
