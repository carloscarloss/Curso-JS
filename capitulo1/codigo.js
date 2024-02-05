/* 
! A)
3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema:
    los precios no esta al lado de cada estante con su respectivo helado.
Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que..
    veamos como podemos ayudarlos */

/* Roberto tiene 1.5€, Pedro tiene 1.7€, Cofla tiene 3€ 

Los precios de helados son los siguientes:
    Palito de helado de agua: 0.6€
    Palito de helado de crema: 1€
    Bombon helado marca heladix: 1.6€
    Bombón helado marca heladovich: 1.7€
    Bombón helado marca helardo: 1.8€
    Potecito de helado con confites: 2.9€
    Pote de 1/4KG: 2.9€*/

 /* 
 TODO Crear soluciones:
   TODO - Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar
   TODO - Si hay 2 o mas con el mismo precio, mostrar ámbos.
   TODO - Cofla quiere saber cuanto es el vuelto  */

dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?");
dineroPedro = prompt("¿Cuanto dinero tienes Pedro?");
  
dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, compra el Palito de helado de agua");
    alert("Y te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, compra el Palito de helado de crema");
    alert("Y te sobran " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, compra el Bombon helado marca heladix");
    alert("Y te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, compra el Bombón helado marca heladovich");
    alert("Y te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, compra el Bombon helado marca helardo");
    alert("Y te sobran " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
    alert("Cofla, compra el Potecito de helado con confites o el Pote de 1/4KG");
    alert("Y te sobran " + (dineroCofla - 2.9));
}
else {
    alert("Cofla, no tienes suficiente dinero");
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, compra el Palito de helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, compra el Palito de helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, compra el Bombon helado marca heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, compra el Bombón helado marca heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, compra el Bombon helado marca helardo");
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto, compra el Potecito de helado con confites o el Pote de 1/4KG");
}
else {
    alert("Roberto, no tienes suficiente dinero");
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, compra el Palito de helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, compra el Palito de helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, compra el Bombon helado marca heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, compra el Bombón helado marca heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, compra el Bombon helado marca helardo");
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, compra el Potecito de helado con confites o el Pote de 1/4KG");
}
else {
    alert("Pedro, no tienes suficiente dinero");
}
