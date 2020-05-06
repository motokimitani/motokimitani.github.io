var diceNum; //サイコロの出目
var eventCount; //イベント発生時の駒の移動数
var element;

//【プレイヤー1】
var diceSum1 = 0; //出目の合計（現在のマス）
var diceSumId1 = ("m" + diceSum1); //出目の合計ID（現在のマスID）
var leftGoal1 = 100; //残りのマス数
var countNum1 = 0; //サイコロを投げた回数


//【プレイヤー2】
var diceSum2 = 0; //出目の合計（現在のマス）
var diceSumId2 = ("m" + diceSum2); //出目の合計ID（現在のマスID）
var leftGoal2 = 100; //残りのマス数
var countNum2 = 0; //サイコロを投げた回数

//【プレイヤー3】
var diceSum3 = 0; //出目の合計（現在のマス）
var diceSumId3 = ("m" + diceSum3); //出目の合計ID（現在のマスID）
var leftGoal3 = 100; //残りのマス数
var countNum3 = 0; //サイコロを投げた回数

var player1;
var player2;
var player3;



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
    $(`#current-place`).text("現在"+diceSum1+"マス目"); //現在マス位置の表示
    $(`#left-goal`).text("ゴールまであと"+leftGoal1+"マス"); //残りマスの表示
    $(`#event-stop`).html(``); //イベント発生コメントは非表示
}

//サイコロを振った時の表示処理【プレイヤー2】
function start_function2() {
  // $(`#startDice2`).prop(`disabled`,true); //サイコロをふるボタンは押せない
  $(`#resetDice`).prop(`disabled`,true); //はじめからボタンは押せない
  diceNum = Math.floor(Math.random() * 6) + 1; //1～6のランダムな出目を生成
  $(`img`).attr(`src`, `${diceNum}.png`);
  $(`#dice-deme`).text(diceNum); //出目を表示
  countNum2++; //サイコロを投げた回数が加算
  $(`#count-dice`).text(countNum2 + "投目"); //サイコロを投げた回数を表示
  leftGoal2 = leftGoal2 - diceNum;
  diceSum2 = 100 - leftGoal2;
  $(`#current-place`).text("現在"+diceSum2+"マス目"); //現在マス位置の表示
  $(`#left-goal`).text("ゴールまであと"+leftGoal2+"マス"); //残りマスの表示
  $(`#event-stop`).html(``); //イベント発生コメントは非表示
}

//サイコロを振った時の表示処理【プレイヤー3】
function start_function3() {
  $(`#resetDice`).prop(`disabled`,true); //はじめからボタンは押せない
  diceNum = Math.floor(Math.random() * 6) + 1; //1～6のランダムな出目を生成
  $(`img`).attr(`src`, `${diceNum}.png`);
  $(`#dice-deme`).text(diceNum); //出目を表示
  countNum3++; //サイコロを投げた回数が加算
  $(`#count-dice`).text(countNum3 + "投目"); //サイコロを投げた回数を表示
  leftGoal3 = leftGoal3 - diceNum;
  diceSum3 = 100 - leftGoal3;
  $(`#current-place`).text("現在"+diceSum3+"マス目"); //現在マス位置の表示
  $(`#left-goal`).text("ゴールまであと"+leftGoal3+"マス"); //残りマスの表示
  $(`#event-stop`).html(``); //イベント発生コメントは非表示
}


//駒を進める処理【プレイヤー1】
function forward_function1 () {
  if (diceSum1 < 100 ) { //100マス未満の場合
  // document.getElementById(diceSumId1).innerHTML = "";//出目の合計ID（現在のマス）を空にする
  player1 = document.getElementById(`currentPosition1`);
  document.getElementById(diceSumId1).removeChild(player1);
  diceSumId1 = ("m" + diceSum1); //出目の合計ID（現在のマス）
  // document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`; //現在のマスにアイコンを送信
  document.getElementById(diceSumId1).insertAdjacentHTML('beforeend','<i id="currentPosition1" class="fas fa-biking play1"></i>');
  element = document.getElementById(`currentPosition1`); //要素(駒)の現在地を取得
  element.scrollIntoView({behavior: 'smooth',block: 'center'});//スクロール時の要素(駒)の位置指定
} else {
  //ゴール時の駒の処理
  document.getElementById(diceSumId1).innerHTML = "";
  diceSum1 = 100;
  diceSumId1 = ("m" + diceSum1); 
  // document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`;
  document.getElementById(diceSumId1).insertAdjacentHTML('beforeend','<i id="currentPosition1" class="fas fa-child play1"></i>');
  element = document.getElementById(`currentPosition1`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#resetDice`).prop(`disabled`,false); //ゴール時ははじめからボタンを押せる
}
} 

//駒を進める処理【プレイヤー2】
function forward_function2 () {
  if (diceSum2 < 100 ) { //100マス未満の場合
  // document.getElementById(diceSumId2).innerHTML = "";//出目の合計ID（現在のマス）を空にする
  player2 = document.getElementById(`currentPosition2`);
  document.getElementById(diceSumId2).removeChild(player2);
  diceSumId2 = ("m" + diceSum2); //出目の合計ID（現在のマス）
  // document.getElementById(diceSumId2).innerHTML=`<i id="currentPosition2" class="fas fa-biking play2"></i>`; //現在のマスにアイコンを送信
  document.getElementById(diceSumId2).insertAdjacentHTML('beforeend','<i id="currentPosition2" class="fas fa-biking play2"></i>');
  // document.getElementById(diceSumId2).insertAdjacentHTML('afterbegin','<i id="currentPosition2" class="fas fa-biking play2"></i>');
  element = document.getElementById(`currentPosition2`); //要素(駒)の現在地を取得
  element.scrollIntoView({behavior: 'smooth',block: 'center'});//スクロール時の要素(駒)の位置指定
} else {
  //ゴール時の駒の処理
  document.getElementById(diceSumId2).innerHTML = "";
  diceSum2 = 100;
  diceSumId2 = ("m" + diceSum2); 
  // document.getElementById(diceSumId2).innerHTML=`<i id="currentPosition2" class="fas fa-biking play2"></i>`;
  document.getElementById(diceSumId2).insertAdjacentHTML('beforeend','<i id="currentPosition2" class="fas fa-child play2"></i>');
  element = document.getElementById(`currentPosition2`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#resetDice`).prop(`disabled`,false); //ゴール時ははじめからボタンを押せる
}
} 

//駒を進める処理【プレイヤー3】
function forward_function3 () {
  if (diceSum3 < 100 ) { //100マス未満の場合
  player3 = document.getElementById(`currentPosition3`);
  document.getElementById(diceSumId3).removeChild(player3);
  diceSumId3 = ("m" + diceSum3); //出目の合計ID（現在のマス）
  document.getElementById(diceSumId3).insertAdjacentHTML('beforeend','<i id="currentPosition3" class="fas fa-biking play3"></i>');
  element = document.getElementById(`currentPosition3`); //要素(駒)の現在地を取得
  element.scrollIntoView({behavior: 'smooth',block: 'center'});//スクロール時の要素(駒)の位置指定
} else {
  //ゴール時の駒の処理
  document.getElementById(diceSumId3).innerHTML = "";
  diceSum3 = 100;
  diceSumId3 = ("m" + diceSum3); 
  document.getElementById(diceSumId3).insertAdjacentHTML('beforeend','<i id="currentPosition3" class="fas fa-child play3"></i>');
  element = document.getElementById(`currentPosition3`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#resetDice`).prop(`disabled`,false); //ゴール時ははじめからボタンを押せる
}
} 


//あたりイベントorはずれイベントをランダムで選択【プレイヤー1】
function select_event1(){
  if (document.getElementById(diceSumId1).classList.contains("event") == true) { //"event"クラスの存在を確認
    var eventSelect = Math.floor(Math.random()* 2) + 1; 
  if (eventSelect == 1){ //あたりイベントの場合
    setTimeout("forward_event1()",950); //イベント発生までの待機時間
  } else if(eventSelect == 2) { //はずれイベントの場合
    setTimeout("back_event1()",950); //イベント発生までの待機時間
  }
  }
  }

//あたりイベントorはずれイベントをランダムで選択【プレイヤー2】
function select_event2(){
  if (document.getElementById(diceSumId2).classList.contains("event") == true) { //"event"クラスの存在を確認
    var eventSelect = Math.floor(Math.random()* 2) + 1; 
  if (eventSelect == 1){ //あたりイベントの場合
    setTimeout("forward_event2()",950); //イベント発生までの待機時間
  } else if(eventSelect == 2) { //はずれイベントの場合
    setTimeout("back_event2()",950); //イベント発生までの待機時間
  }
  }
  }

//あたりイベントorはずれイベントをランダムで選択【プレイヤー3】
function select_event3(){
  if (document.getElementById(diceSumId3).classList.contains("event") == true) { //"event"クラスの存在を確認
    var eventSelect = Math.floor(Math.random()* 2) + 1; 
  if (eventSelect == 1){ //あたりイベントの場合
    setTimeout("forward_event3()",950); //イベント発生までの待機時間
  } else if(eventSelect == 2) { //はずれイベントの場合
    setTimeout("back_event3()",950); //イベント発生までの待機時間
  }
  }
  }

//イベントマスで進む処理（あたりイベント）【プレイヤー1】
function forward_event1(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("あたりイベント！"+eventCount+"マス進む"); //あたりイベント+進むマス数の表示
  document.getElementById(diceSumId1).innerHTML = "";
  diceSum1 = diceSum1 + eventCount; //イベント発生時の駒の動き
  diceSumId1 = ("m" + diceSum1); 
  leftGoal1 = leftGoal1 - eventCount; //残りマスを確認
  // document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`;
  document.getElementById(diceSumId1).insertAdjacentHTML('beforeend','<i id="currentPosition1" class="fas fa-biking play1"></i>');
  element = document.getElementById(`currentPosition1`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}

//イベントマスで進む処理（あたりイベント）【プレイヤー2】
function forward_event2(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("あたりイベント！"+eventCount+"マス進む"); //あたりイベント+進むマス数の表示
  document.getElementById(diceSumId2).innerHTML = "";
  diceSum2 = diceSum2 + eventCount; //イベント発生時の駒の動き
  diceSumId2 = ("m" + diceSum2); 
  leftGoal2 = leftGoal2 - eventCount; //残りマスを確認
  // document.getElementById(diceSumId2).innerHTML=`<i id="currentPosition2" class="fas fa-biking play2"></i>`;
  document.getElementById(diceSumId2).insertAdjacentHTML('beforeend','<i id="currentPosition2" class="fas fa-biking play2"></i>');
  element = document.getElementById(`currentPosition2`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}

//イベントマスで進む処理（あたりイベント）【プレイヤー3】
function forward_event3(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("あたりイベント！"+eventCount+"マス進む"); //あたりイベント+進むマス数の表示
  document.getElementById(diceSumId3).innerHTML = "";
  diceSum3 = diceSum3 + eventCount; //イベント発生時の駒の動き
  diceSumId3 = ("m" + diceSum3); 
  leftGoal3 = leftGoal3 - eventCount; //残りマスを確認
  document.getElementById(diceSumId3).insertAdjacentHTML('beforeend','<i id="currentPosition3" class="fas fa-biking play3"></i>');
  element = document.getElementById(`currentPosition3`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}

//イベントマスで戻る処理（はずれイベント）【プレイヤー1】
function back_event1(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("はずれイベント！"+eventCount+"マス戻る");//はずれイベント+戻るマス数の表示
  document.getElementById(diceSumId1).innerHTML = "";
  diceSum1 = diceSum1 - eventCount; //イベント発生時の駒の動き
  diceSumId1 = ("m" + diceSum1); 
  leftGoal1 = leftGoal1 + eventCount; //残りマスを確認
  // document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`;
  document.getElementById(diceSumId1).insertAdjacentHTML('beforeend','<i id="currentPosition1" class="fas fa-biking play1"></i>');
  element = document.getElementById(`currentPosition1`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}


//イベントマスで戻る処理（はずれイベント）【プレイヤー2】
function back_event2(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("はずれイベント！"+eventCount+"マス戻る");//はずれイベント+戻るマス数の表示
  document.getElementById(diceSumId2).innerHTML = "";
  diceSum2 = diceSum2 - eventCount; //イベント発生時の駒の動き
  diceSumId2 = ("m" + diceSum2); 
  leftGoal2 = leftGoal2 + eventCount; //残りマスを確認
  // document.getElementById(diceSumId2).innerHTML=`<i id="currentPosition2" class="fas fa-biking play2"></i>`;
  document.getElementById(diceSumId2).insertAdjacentHTML('beforeend','<i id="currentPosition2" class="fas fa-biking play2"></i>');
  element = document.getElementById(`currentPosition2`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}

//イベントマスで戻る処理（はずれイベント）【プレイヤー3】
function back_event3(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("はずれイベント！"+eventCount+"マス戻る");//はずれイベント+戻るマス数の表示
  document.getElementById(diceSumId3).innerHTML = "";
  diceSum3 = diceSum3 - eventCount; //イベント発生時の駒の動き
  diceSumId3 = ("m" + diceSum3); 
  leftGoal3 = leftGoal3 + eventCount; //残りマスを確認
  document.getElementById(diceSumId3).insertAdjacentHTML('beforeend','<i id="currentPosition3" class="fas fa-biking play3"></i>');
  element = document.getElementById(`currentPosition3`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}

function player1_turn(){
  document.getElementById(`startDice1`).onclick = player1_action;
  element = document.getElementById(`currentPosition2`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#count-dice`).text(countNum2+1 + "投目");
  $(`#current-place`).text("現在"+diceSum2+"マス目"); 
  $(`#left-goal`).text("ゴールまであと" + leftGoal2 + "マス");
  $(`#player-turn`).html("プレイヤー2の順番です").css('color','red');
  $(`#event-stop`).text("");
}

function player2_turn(){
  document.getElementById(`startDice2`).onclick = player2_action;
  element = document.getElementById(`currentPosition3`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#count-dice`).text(countNum3+1 + "投目");
  $(`#current-place`).text("現在"+diceSum3+"マス目"); 
  $(`#left-goal`).text("ゴールまであと" + leftGoal3 + "マス");
  $(`#player-turn`).html("プレイヤー3の順番です").css('color','blueviolet');
  $(`#event-stop`).text("");
}

function player3_turn(){
  document.getElementById(`startDice3`).onclick = player3_action;
  element = document.getElementById(`currentPosition1`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#count-dice`).text(countNum1+1 + "投目");
  $(`#current-place`).text("現在"+diceSum1+"マス目"); 
  $(`#left-goal`).text("ゴールまであと" + leftGoal1 + "マス");
  $(`#player-turn`).html("プレイヤー1の順番です").css('color','green');
  $(`#event-stop`).text("");
}



//プレイヤー1のターン
function player1_action(){
  document.getElementById(`startDice1`).onclick = "";
  element = document.getElementById(`currentPosition1`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#startDice1`).prop(`disabled`,true); 
  $(`#startDice2`).prop(`disabled`,false);
  $(`#startDice3`).prop(`disabled`,true);
  var timeId = setTimeout("player1_turn()",2000);
  if(leftGoal1 <= 0) { //ゴールした場合
    clearTimeout(timeId);
    $(`#left-goal`).text("ゴール!!プレイヤー1の勝利です!!").css("color","green"); //ゴール(残りマス0)した時の表示
    $(`#startDice1`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    $(`#startDice2`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    $(`#startDice3`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    }
}

function player2_action() {
  document.getElementById(`startDice2`).onclick = "";
  element = document.getElementById(`currentPosition2`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#startDice1`).prop(`disabled`,true); 
  $(`#startDice2`).prop(`disabled`,true); 
  $(`#startDice3`).prop(`disabled`,false); 
  var timeId = setTimeout("player2_turn()",2000);
  if(leftGoal2 <= 0) { //ゴールした場合
    clearTimeout(timeId);
    $(`#left-goal`).text("ゴール!!プレイヤー2の勝利です!!").css("color","red"); //ゴール(残りマス0)した時の表示
    $(`#startDice1`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    $(`#startDice2`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    $(`#startDice3`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    }
}

function player3_action() {
  document.getElementById(`startDice3`).onclick = "";
  element = document.getElementById(`currentPosition3`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
  $(`#startDice1`).prop(`disabled`,false); 
  $(`#startDice2`).prop(`disabled`,true); 
  $(`#startDice3`).prop(`disabled`,true); 
  var timeId = setTimeout("player3_turn()",2000);
  if(leftGoal3 <= 0) { //ゴールした場合
    clearTimeout(timeId);
    $(`#left-goal`).text("ゴール!!プレイヤー3の勝利です!!").css("color","blueviolet"); //ゴール(残りマス0)した時の表示
    $(`#startDice1`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    $(`#startDice2`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    $(`#startDice3`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    }
}


//はじめからボタン（リセット）でリロード
function reset_function(){
  window.location.reload(true);
}

$(function(){
    $(`#startDice1`).click(start_function1);
    $(`#startDice1`).click(forward_function1);
    $(`#startDice1`).click(select_event1);
    $(`#startDice1`).click(player1_action);

    $(`#startDice2`).click(start_function2);
    $(`#startDice2`).click(forward_function2);
    $(`#startDice2`).click(select_event2);
    $(`#startDice2`).click(player2_action);

    $(`#startDice3`).click(start_function3);
    $(`#startDice3`).click(forward_function3);
    $(`#startDice3`).click(select_event3);
    $(`#startDice3`).click(player3_action);

    $(`#resetDice`).click(reset_function);
    
});

