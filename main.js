//サイコロを振るアニメーション
function shake(){
var diceNum = Math.floor(Math.random() * 6) + 1;
diceNum = diceNum +".png";
$id('saikoro').innerHTML ="<img src='" + diceNum + "' width='100 height='100'>";
}
