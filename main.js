var diceNum; //サイコロの出目
var diceSum = 0; //出目の合計（現在のマス）
var diceSumId = ("m" + diceSum); //出目の合計ID（現在のマスID）
var leftGoal = 20; //残りのマス数
var countNum = 0; //サイコロを投げた回数

//サイコロを振った時の表示処理
function start_function() {
    $(`#resetDice`).prop(`disabled`,true); //はじめからボタンは押せない
  diceNum = Math.floor(Math.random() * 6) + 1; //1～6のランダムな出目を生成
  $(`img`).attr(`src`, `${diceNum}.png`);
  $(`#dice-deme`).text(diceNum); //出目を表示
  countNum++;
  $(`#count-dice`).text(countNum + "投目"); //サイコロを投げた回数を表示
  leftGoal = leftGoal - diceNum;
  diceSum = 20 - leftGoal;
  $(`#left-goal`).text("ゴールまであと"+leftGoal+"マス"); //残りマスの表示
  if(leftGoal <= 0) { //ゴールした場合
  $(`#left-goal`).text("ゴールです!!"); //ゴール(残りマス0)した時の表示
  $(`#startDice`).prop(`disabled`,true); //サイコロをふるボタンは押せない
  }
}

//駒を進める処理
function forward_function () {
   if (diceSum < 20 ) { //20マス未満の場合
  document.getElementById(diceSumId).innerHTML = "";//出目の合計ID（現在のマス）を空にする
  diceSumId = ("m" + diceSum); //出目の合計ID（現在のマス）
  document.getElementById(diceSumId).innerHTML=`<i id="currentPosition" class="fas fa-biking"></i>`; //現在のマスにアイコンを送信
  var element = document.getElementById(`currentPosition`); //要素(駒)の現在地を取得
  element.scrollIntoView({behavior: 'smooth',block: 'center'});//スクロール時の要素(駒)の位置指定
} else {
  //ゴール時の駒の処理
  document.getElementById(diceSumId).innerHTML = "";
  diceSum = 20;
  diceSumId = ("m" + diceSum); 
  document.getElementById(diceSumId).innerHTML=`<i id="currentPosition" class="fas fa-child"></i>`;
  var piece = document.getElementById(`currentPosition`);
  piece.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#resetDice`).prop(`disabled`,false); //ゴール時ははじめからボタンを押せる
  $(`#startDice`).prop(`disabled`,true); //ゴール時はサイコロ振るボタンは押せない
}
}

//はじめからボタン（リセット）でリロード
function reset_function(){
  window.location.reload();
}

$(function(){
$(`#startDice`).click(start_function);
$(`#startDice`).click(forward_function);
$(`#resetDice`).click(reset_function);
});
