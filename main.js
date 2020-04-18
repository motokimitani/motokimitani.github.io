var diceNum; //サイコロの出目
var count;  // サイコロ表示切替回数
var diceImg; //サイコロの画像
var diceSum = 0; //出目の合計
var diceSumId = ("box" + diceSum) //出目の合計（駒の位置）
var leftGoal = 20; //残りのマス
var countNum = 0; //振った回数


//サイコロを振る+ランダムな数字を生成
function start_function() {
  diceNum = Math.floor(Math.random() * 6) + 1;
  $(`img`).attr(`src`, `${diceNum}.png`);
  // document.getElementById('diceDeme').innerHTML = diceDeme;
}

//サイコロを振るアニメーション
function anime (){
  if (count > 20) { //20回振る
    count = 0;
    $(`#startDice`).prop(`disabled`,false); //サイコロ振るボタンは押せる
    return 0;
   }
   start_function();
   count++;
   setTimeout(anime,50); //50ミリ秒間隔で画像を表示切替え
}

function saikoro(){
  count = 0;
  $(`#startDice`).prop(`disabled`,true);
  anime();
}

// //駒を進める
// function forwardPiece (){
//   leftGoal = leftGoal - diceNum;
//   diceSum = 20 - leftGoal;
//   //カウント項目の取得+表示
//   if(diceSum < 20){
//     countNum++;
//     $(`#count-dice`).text(`${countNum}投目`);
//     $(`#left-goal`).text(`ゴールまであと${leftGoal}マス`);

// }
// }

$(function(){
  $(`#startDice`).click(start_function); //サイコロを振るボタン
  // $('#resetDice').click(reset_function); //はじめからボタン
