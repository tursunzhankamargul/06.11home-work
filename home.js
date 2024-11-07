var check = '';
var burger= prompt("Burder zakaz beriniz!" +"\n"+ "a)tauyk eti" +"\n"+"b)siyr eti" +"\n"+"c)etsiz");


switch (burger){
 case 'a':
    check += 'Burger chicken \n'
    break;
 case'b':
   alert('siyr eti');
    break;
 case 'c':
    alert('etsiz'); 
    break;     
  
}

var drink= prompt("Susyn zakaz beriniz!" +"\n" +"a)Cola"+"\n"+"b)Sprite"+"\n"+"c)Fanta" );

switch(drink){
 case'a':
  check += "cola 0.5 \n"
  break;
  case'b':
  alert('Sprite');
  break;
  case'c':
  alert('Fanta') ;
  break;

}

var fri= prompt("Fri zakaz beriniz!"+"\n"+ "a) Ulken"+"\n"+ "b)orta" +"\n"+"c)kishi");

switch(fri){
    case 'a':
    alert('Ulken');
    break;
    case'b':
    check +="orta"
    alert('orta');
    break;
    case'c':
    alert('kishi');
    break;
}

alert(check)