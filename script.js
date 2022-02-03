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
  
  var num3 = document.getElementById('num3').value;

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
  if (num3 == ''|| num2 == null){
    alert ('Digite um valor.')
    document.getElementById('num3').focus()
    return false
    }
  var resultado = null

  num1 = Number(num1)
  num2 = Number(num2)
  num3 = Number(num3)
  
    

  resultado1 = Math.tan(num1*(Math.PI/180))
  resultado2 = Math.cos(0-num2*(Math.PI/180))
  resultado = Math.round(Math.atan((resultado1 * resultado2))/(Math.PI/180))
  /*resultado = Math.atan(resultado3)*(Math.PI/180)*/
  exagero_vertical =Math.atan( Math.tan(resultado * (Math.PI/180)) * num3)/(Math.PI/180)

  document.getElementById('resultado1').value = (`${resultado}°`)
  document.getElementById('resultado2').value = (`${Math.round(exagero_vertical, 1)}°`)
}
//function limpar () {
  //document.getElementById('resultado').value= "resultado";
//}
