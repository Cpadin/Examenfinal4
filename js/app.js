//podria a las funciones autoejecutables sacarles eso y ponerlas en un objeto init para inicializarlas
  var Calculadora = ( function(){
    var pantalla = document.getElementById('display');
    var todasTeclas = document.getElementsByClassName('tecla');
    var teclasNumericas = [document.getElementById('0'), document.getElementById('1'), document.getElementById('2'), document.getElementById('3'), document.getElementById('4'), document.getElementById('5'), document.getElementById('6'), document.getElementById('7'), document.getElementById('8'), document.getElementById('9')];
    var teclaOn = document.getElementById('on');
    var teclaPunto = document.getElementById('punto');
    var teclaSigno = document.getElementById('sign');
    var teclasOperadoras = [document.getElementById('mas'), document.getElementById('menos'), document.getElementById('por'), document.getElementById('dividido')];
    var teclaSuma = document.getElementById('mas');
    var teclaResta = document.getElementById('menos');
    var teclaMultiplica = document.getElementById('por');
    var teclaDivide = document.getElementById('dividido');
    var teclaIgual = document.getElementById('igual');
    var num1 = null;
    var num2 = null;
    var resultado = null;

  // mostrar graficamente la presion en las teclas
    var apretarSoltarTeclas = ( function (){
        for (var i=0; i<todasTeclas.length; i++){
        todasTeclas[i].onmousedown = function reducirTecla() {
          this.setAttribute('style', 'transform: scale(0.95,0.95)');}
        todasTeclas[i].onmouseup = function normalizarTecla() {
          this.setAttribute('style', 'transform: scale(1,1)');}
      }
    })();
  // mostrar los numeros presionados en la pantalla de la calculadora sin superar las 8 cifras y sin empezar con cero(s)
    var displayNumeros = ( function (){
        for (var i = 0; i < teclasNumericas.length; i++) {
          teclasNumericas[i].onclick = function imprimirValor() {
            if (pantalla.innerHTML == '0')
              pantalla.innerHTML = "";
            if (pantalla.innerHTML.length < 8) {
              pantalla.innerHTML += teclasNumericas.indexOf(this);
            }
          };
        }
      })();
  // al presionar la tecla ON se borra el contenido de la pantalla y queda en cero
    var limpiarPantalla = (function (){
      teclaOn.onclick = function (){
        pantalla.innerHTML = '0';
        };
      })();
  // colocar un unico separador decimal
   var separadorDecimal = (function (){
      teclaPunto.onclick = function (){
        if (pantalla.innerHTML.indexOf(".") == -1) {
          pantalla.innerHTML += '.';
          };
        }
      })();
  // asignar signo positivo o negativo siempre y cuando no haya un cero en la pantalla
    var signo = (function (){
        teclaSigno.onclick = function () {
          if (pantalla.innerHTML != '0') {
            if (pantalla.innerHTML.charAt(0) == '-') {
              pantalla.innerHTML = pantalla.innerHTML.slice(1);
            } else {
              pantalla.innerHTML = '-' + pantalla.innerHTML;
            }
          }
        };
        })();

    var operaciones = (function (){
      function sumar(num1, num2){
        return num1 + num2;
      };
      function restar(num1, num2){
        return num1 - num2;
      };
      function multiplicar(num1, num2){
        return num1 * num2;
      };
      function dividir(num1, num2){
        return num1 / num2;
      };
      for (var i = 0; i < teclasOperadoras.length; i++) {
        teclasOperadoras[i].onclick = function captarNumero(){
          var self = this;
          if (num1==undefined) {
             num1 =  Number(pantalla.innerHTML);
          }
        pantalla.innerHTML = '';
        teclaIgual.onclick = function mostrarResultado(){
          num2 = Number(pantalla.innerHTML);
          if (self == teclaSuma) {
            resultado = sumar(num1, num2);
            } else if (self == teclaResta) {
              resultado = restar(num1, num2);
            } else if (self == teclaMultiplica) {
              resultado = multiplicar(num1, num2);
            } else if (self == teclaDivide) {
              resultado = dividir(num1, num2);
            }
          pantalla.innerHTML = resultado;
          };
        };
      }
    })();
})();
