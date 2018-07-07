Money = prompt("Сколько у вас денег?");
Apples = prompt("Сколько вы купили яблок");
Breads = prompt("Сколько вы купили батонов хлеба");
OneApple = prompt("Сколько стоит одно яблоко");
OneBread = prompt("Сколько стоит один батон");
Hvatit = Money>=Apples*OneApple+Breads*OneBread;
document.body.innerText=Hvatit;
