var $id = function(id){ return document.getElementById(id); };
var start_flag = false; //初期状態
var diceNum; //サイコロの出目
var diceSum = 0; //出目の合計（現在のマス）
var diceSumId = ("m" + diceSum); //出目の合計ID（現在のマスID）
var leftGoal = 20; //残りのマス数
var countNum = 0; //サイコロを投げた回数


//サイコロを振った時の処理
function start_function() {
  if (start_flag === false){
    $(`#resetDice`).prop(`disabled`,true);
  //1～6のランダムな出目を生成
  diceNum = Math.floor(Math.random() * 6) + 1;
  $(`img`).attr(`src`, `${diceNum}.png`);
  $(`#dice-deme`).text(diceNum);
  //サイコロを投げた回数を表示
  countNum++;
  $(`#count-dice`).html(countNum + "投目");
  //残りマスの表示
  leftGoal = leftGoal - diceNum;
  diceSum = 20 - leftGoal;
  $(`#left-goal`).html("ゴールまであと"+leftGoal+"マス");
  //ゴール(残りマス0)した時の表示
  if(leftGoal <= 0) {
  $(`#left-goal`).html("ゴールです!!");
  $(`#startDice`).prop(`disabled`,true);
  }
  forward_fuction();
}
}


$(function(){
  $(`#startDice`).click(start_function); //サイコロを振るボタン
  // $('#resetDice').click(reset_function); //はじめからボタン
});
