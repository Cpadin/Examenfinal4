//podria a las funciones autoejecutables sacarles eso y ponerlas en un objeto init para inicializarlas
  var Calculadora = ( function(){
    var pantalla = document.getElementById('display');
    var todasTeclas = document.getElementsByClassName('tecla');
    var teclasNumericas = [document.getElementById('0'), document.getElementById('1'), document.getElementById('2'), document.getElementById('3'), document.getElementById('4'), document.getElementById('5'), document.getElementById('6'), document.getElementById('7'), document.getElementById('8'), document.getElementById('9')];
    var teclaOn = document.getElementById('on');
    var teclaPunto = document.getElementById('punto');

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
        
        };
      })();
  //
    var displayNumeros = (function (){

      })();
  //
    var displayNumeros = (function (){

      })();
  //
    var displayNumeros = (function (){

      })();







})();
