var diceDeme //サイコロを振って出た目


getdice6 = new Array(
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png");

  count = 20; // 点滅させる回数
  mSec = 50; // 点滅速度 （1秒=1000）
  
//サイコロを振るアニメーション
function startDice(){
   diceDeme = Math.floor(Math.random() * 6) + 1;
   document.imgdice1.src = getdice6[diceDeme-1];
  document.getElementById('diceDeme').innerHTML = (dice1 + 1);
   count--;
   //countが1より大きい時、mSecで"startDice"のプログラムを実行   
   if (count >=1) {tim = setTimeout("startDice()",mSec);}
   //countの数字が0になった時、プログラムは動作せず、count20に戻す   
   if (count ==0) {count = 20;}
}
