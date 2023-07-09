// Função responsável por aplicar o tema escuro ou claro de acordo com o valor do localStorage.
export default class ModeTheme {
  // O construtor é responsável por selecionar os elementos necessários para o módulo.
  constructor() {
    this.calculator = document.querySelector(".calculator-container");
    this.span = document.querySelector(".mode div span");
  }

  // Função responsável por verificar o tema atual e aplicar a animação correta.
  pageReload() {
    document.addEventListener("DOMContentLoaded", () => {
      this.span.style.animation = "none";
      if (localStorage.getItem("theme") === "light") {
        this.span.style.transform = "translateX(0)";
      } else {
        this.span.style.transform = "translateX(100%)";
      }
    });
  }

  // Função responsável por adicionar o evento de click no botão de mudar o tema.
  addEvent() {
    this.span.addEventListener("click", () => {
      localStorage.getItem("theme") === "light";
      this.watchLocalStorage();
    });
  }

  // Função responsável por aplicar o tema escuro.
  themeDark() {
    this.calculator.classList.remove("light");
    this.calculator.classList.add("dark");
    this.span.style.animation = "buttonMoveDark 0.5s ease-in-out forwards";
  }

  // Função responsável por aplicar o tema claro.
  themeLight() {
    this.calculator.classList.remove("dark");
    this.calculator.classList.add("light");
    this.span.style.animation = "buttonMoveLight 0.5s ease-in-out forwards";
  }

  // Função responsável por verificar o valor do localStorage e aplicar o tema correto de acordo com o valor.
  changeTheme() {
    if (localStorage.getItem("theme") === "light") {
      this.themeLight();
    } else {
      this.themeDark();
    }
  }

  // Função responsável por verificar o localStorage e aplicar o tema correto de acordo com o valor.
  watchLocalStorage() {
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    this.changeTheme();
  }

  // Função responsável por iniciar o módulo.
  init() {
    if (this.span) {
      this.pageReload();
      this.changeTheme();
      this.addEvent();
    }
    return this;
  }
}
