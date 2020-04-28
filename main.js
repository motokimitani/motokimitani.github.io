var diceNum; //サイコロの出目
var eventCount; //イベント発生時の駒の移動数
var element;

//【プレイヤー1】
var diceSum1 = 0; //出目の合計（現在のマス）
var diceSumId1 = ("m" + diceSum1); //出目の合計ID（現在のマスID）
var leftGoal1 = 100; //残りのマス数
var countNum1 = 0; //サイコロを投げた回数
var dice_flag1 = false;
// var player = 1;

//【プレイヤー2】
var diceSum2 = 0; //出目の合計（現在のマス）
var diceSumId2 = ("m" + diceSum2); //出目の合計ID（現在のマスID）
var leftGoal2 = 100; //残りのマス数
var countNum2 = 0; //サイコロを投げた回数
var dice_flag2 = false;
// var player = 2;

//サイコロを振った時の表示処理【プレイヤー1】
function start_function1() {
  $(`#resetDice`).prop(`disabled`,true); //はじめからボタンは押せない
  diceNum = Math.floor(Math.random() * 6) + 1; //1～6のランダムな出目を生成
  $(`img`).attr(`src`, `${diceNum}.png`);
  $(`#dice-deme`).text(diceNum); //出目を表示
  countNum1++; //サイコロを投げた回数が加算
  $(`#count-dice`).text(countNum1 + "投目"); //サイコロを投げた回数を表示
  leftGoal1 = leftGoal1 - diceNum;
  diceSum1 = 100 - leftGoal1;
  $(`#left-goal`).text("ゴールまであと"+leftGoal1+"マス"); //残りマスの表示
  $(`#event-stop`).html(``); //イベント発生コメントは非表示
  if(leftGoal1 <= 0) { //ゴールした場合
  $(`#left-goal`).text("ゴールです!!"); //ゴール(残りマス0)した時の表示
  $(`#startDice`).prop(`disabled`,true); //サイコロをふるボタンは押せない
  }
}


//サイコロを振った時の表示処理【プレイヤー2】
function start_function2() {
  $(`#resetDice`).prop(`disabled`,true); //はじめからボタンは押せない
  diceNum = Math.floor(Math.random() * 6) + 1; //1～6のランダムな出目を生成
  $(`img`).attr(`src`, `${diceNum}.png`);
  $(`#dice-deme`).text(diceNum); //出目を表示
  countNum2++; //サイコロを投げた回数が加算
  $(`#count-dice`).text(countNum2 + "投目"); //サイコロを投げた回数を表示
  leftGoal2 = leftGoal2 - diceNum;
  diceSum2 = 100 - leftGoal2;
  $(`#left-goal`).text("ゴールまであと"+leftGoal2+"マス"); //残りマスの表示
  $(`#event-stop`).html(``); //イベント発生コメントは非表示
  if(leftGoal2 <= 0) { //ゴールした場合
  $(`#left-goal`).text("ゴールです!!"); //ゴール(残りマス0)した時の表示
  $(`#startDice`).prop(`disabled`,true); //サイコロをふるボタンは押せない
  }
}

//駒を進める処理【プレイヤー1】
function forward_function1 () {
  if (diceSum1 < 100 ) { //20マス未満の場合
  document.getElementById(diceSumId1).innerHTML = "";//出目の合計ID（現在のマス）を空にする
  diceSumId1 = ("m" + diceSum1); //出目の合計ID（現在のマス）
  document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`; //現在のマスにアイコンを送信
  // document.getElementById(diceSumId1).insertAdjacentHTML('afterbegin','<i id="currentPosition1" class="fas fa-biking play1"></i>');
  element = document.getElementById(`currentPosition1`); //要素(駒)の現在地を取得
  element.scrollIntoView({behavior: 'smooth',block: 'center'});//スクロール時の要素(駒)の位置指定
} else {
  //ゴール時の駒の処理
  document.getElementById(diceSumId1).innerHTML = "";
  diceSum1 = 100;
  diceSumId1 = ("m" + diceSum1); 
  document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-child play1"></i>`;
  element = document.getElementById(`currentPosition1`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#resetDice`).prop(`disabled`,false); //ゴール時ははじめからボタンを押せる
  $(`#startDice`).prop(`disabled`,true); //ゴール時はサイコロ振るボタンは押せない
}
} 

//駒を進める処理【プレイヤー2】
function forward_function2 () {
  if (diceSum2 < 100 ) { //20マス未満の場合
  document.getElementById(diceSumId2).innerHTML = "";//出目の合計ID（現在のマス）を空にする
  diceSumId2 = ("m" + diceSum2); //出目の合計ID（現在のマス）
  document.getElementById(diceSumId2).innerHTML=`<i id="currentPosition2" class="fas fa-biking play2"></i>`; //現在のマスにアイコンを送信
  // document.getElementById(diceSumId2).insertAdjacentHTML('afterbegin','<i id="currentPosition2" class="fas fa-biking play2"></i>');
  element = document.getElementById(`currentPosition2`); //要素(駒)の現在地を取得
  element.scrollIntoView({behavior: 'smooth',block: 'center'});//スクロール時の要素(駒)の位置指定
} else {
  //ゴール時の駒の処理
  document.getElementById(diceSumId2).innerHTML = "";
  diceSum2 = 100;
  diceSumId2 = ("m" + diceSum2); 
  document.getElementById(diceSumId2).innerHTML=`<i id="currentPosition2" class="fas fa-child play2"></i>`;
  element = document.getElementById(`currentPosition2`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#resetDice`).prop(`disabled`,false); //ゴール時ははじめからボタンを押せる
  $(`#startDice`).prop(`disabled`,true); //ゴール時はサイコロ振るボタンは押せない
}
} 

//あたりイベントorはずれイベントをランダムで選択【プレイヤー1】
function select_event1(){
  if (document.getElementById(diceSumId1).classList.contains("event") == true) { //"event"クラスの存在を確認
    var eventSelect = Math.floor(Math.random()* 2) + 1; 
  if (eventSelect === 1){ //あたりイベントの場合
    setTimeout("forward_event1()",950); //イベント発生までの待機時間
  } else if(eventSelect === 2) { //はずれイベントの場合
    setTimeout("back_event1()",950); //イベント発生までの待機時間
  }
  }
  }

//あたりイベントorはずれイベントをランダムで選択【プレイヤー2】
function select_event2(){
  if (document.getElementById(diceSumId2).classList.contains("event") == true) { //"event"クラスの存在を確認
    var eventSelect = Math.floor(Math.random()* 2) + 1; 
  if (eventSelect === 1){ //あたりイベントの場合
    setTimeout("forward_event2()",950); //イベント発生までの待機時間
  } else if(eventSelect === 2) { //はずれイベントの場合
    setTimeout("back_event2()",950); //イベント発生までの待機時間
  }
  }
  }


//イベントマスで進む処理（あたりイベント）【プレイヤー1】
function forward_event1(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("あたりイベント！"+eventCount+"マス進む").css('color','red'); //あたりイベント+進むマス数の表示
  document.getElementById(diceSumId1).innerHTML = "";
  diceSum1 = diceSum1 + eventCount; //イベント発生時の駒の動き
  diceSumId1 = ("m" + diceSum1); 
  leftGoal1 = leftGoal1 - eventCount; //残りマスを確認
  document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`;
  element = document.getElementById(`currentPosition1`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}

//イベントマスで進む処理（あたりイベント）【プレイヤー2】
function forward_event2(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("あたりイベント！"+eventCount+"マス進む").css('color','red'); //あたりイベント+進むマス数の表示
  document.getElementById(diceSumId2).innerHTML = "";
  diceSum2 = diceSum2 + eventCount; //イベント発生時の駒の動き
  diceSumId2 = ("m" + diceSum2); 
  leftGoal2 = leftGoal2 - eventCount; //残りマスを確認
  document.getElementById(diceSumId2).innerHTML=`<i id="currentPosition2" class="fas fa-biking play2"></i>`;
  element = document.getElementById(`currentPosition2`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}

//イベントマスで戻る処理（はずれイベント）【プレイヤー1】
function back_event1(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("はずれイベント！"+eventCount+"マス戻る").css('color','blue');//はずれイベント+戻るマス数の表示
  document.getElementById(diceSumId1).innerHTML = "";
  diceSum1 = diceSum1 - eventCount; //イベント発生時の駒の動き
  diceSumId1 = ("m" + diceSum1); 
  leftGoal1 = leftGoal1 + eventCount; //残りマスを確認
  document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`;
  element = document.getElementById(`currentPosition1`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}


//イベントマスで戻る処理（はずれイベント）【プレイヤー2】
function back_event2(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("はずれイベント！"+eventCount+"マス戻る").css('color','blue');//はずれイベント+戻るマス数の表示
  document.getElementById(diceSumId2).innerHTML = "";
  diceSum2 = diceSum2 - eventCount; //イベント発生時の駒の動き
  diceSumId2 = ("m" + diceSum2); 
  leftGoal2 = leftGoal2 + eventCount; //残りマスを確認
  document.getElementById(diceSumId2).innerHTML=`<i id="currentPosition2" class="fas fa-biking play2"></i>`;
  element = document.getElementById(`currentPosition2`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}

//プレイヤー1のターン
function player1_action(){
  if (dice_flag2 === false) { //プレイヤー2が停止状態の時
  dice_flag1 = true; //プレイヤー1は動作可能
  // element = document.getElementById(`currentPosition1`);
  // element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#player-turn`).html("プレイヤー1の順番です").css('color','green');
  forward_function1();
  } else if (dice_flag2 = true) { //プレイヤー2が動作している時
    dice_flag1 === false;//プレイヤー1は停止
    document.getElementById(diceNum).innerHTML = "";
    document.getElementById(`player-turn`).innerHTML = "";
  } 
}

//プレイヤー2のターン
function player2_action(){
  if (dice_flag1 === false) { //プレイヤー1が停止状態の時
  dice_flag2 = true; //プレイヤー2は動作可能
  // element = document.getElementById(`currentPosition2`);
  // element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#player-turn`).html("プレイヤー2の順番です").css('color','red');
  forward_function2();
  } else if (dice_flag1 = true) { //プレイヤー1が動作している時
    dice_flag2 === false; //プレイヤー2は停止
    document.getElementById(diceNum).innerHTML = "";
    document.getElementById(`player-turn`).innerHTML = "";
  } 
}


//はじめからボタン（リセット）でリロード
function reset_function(){
  window.location.reload();
}

$(function(){
    $(`#startDice`).click(start_function1);
    $(`#startDice`).click(forward_function1);
    $(`#startDice`).click(select_event1);
    $(`#startDice`).click(player1_action);
    $(`#startDice`).click(start_function2);
    $(`#startDice`).click(forward_function2);
    $(`#startDice`).click(select_event2);
    $(`#startDice`).click(player2_action);
    $(`#resetDice`).click(reset_function);
});



