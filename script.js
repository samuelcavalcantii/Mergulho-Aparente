document.addEventListener('keypress', function(e){
  if(e.keyCode == 13){
    calcular();
  }
}, false);
document.addEventListener('keydown', function(e){
  if(e.keyCode == 46){
    document.getElementById('limpar').click();
  }
}, false);


function calcular (){
  var num1 = document.getElementById('num1').value;

  var num2 = document.getElementById('num2').value;

  if (num1 == ''|| num1 == null){
      alert ('Digite um valor.')
      document.getElementById('num1').focus()
      return false
    }
  if (num2 == ''|| num2 == null){
    alert ('Digite um valor.')
    document.getElementById('num2').focus()
    return false
    }
  var resultado = null

  num1 = Number(num1)
  num2 = Number(num2)
  
    

  resultado1 = Math.tan(num1*(Math.PI/180))
  resultado2 = Math.cos(num2*(Math.PI/180))
  resultado = Math.round(Math.atan((resultado1 * resultado2))/(Math.PI/180),2)
  /*resultado = Math.atan(resultado3)*(Math.PI/180)*/

  document.getElementById('resultado').value = (`${resultado}°`)
}
//function limpar () {
  //document.getElementById('resultado').value= "resultado";
//}
