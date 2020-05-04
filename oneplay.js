var diceNum; //サイコロの出目
var eventCount; //イベント発生時の駒の移動数
var element;

//【プレイヤー1】
var diceSum1 = 0; //出目の合計（現在のマス）
var diceSumId1 = ("m" + diceSum1); //出目の合計ID（現在のマスID）
var leftGoal1 = 100; //残りのマス数
var countNum1 = 0; //サイコロを投げた回数


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
    $(`#startDice1`).prop(`disabled`,true); //サイコロをふるボタンは押せない
    $(`#resetDice`).prop(`disabled`,false);
  }
}


//駒を進める処理【プレイヤー1】
function forward_function1 () {
  if (diceSum1 < 100 ) { //100マス未満の場合
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
  document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`;
  element = document.getElementById(`currentPosition1`);
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


//イベントマスで進む処理（あたりイベント）【プレイヤー1】
function forward_event1(){
  eventCount = Math.floor(Math.random()* 3) + 1; //1～3の数字をランダムで生成
  $(`#event-stop`).text("あたりイベント！"+eventCount+"マス進む"); //あたりイベント+進むマス数の表示
  document.getElementById(diceSumId1).innerHTML = "";
  diceSum1 = diceSum1 + eventCount; //イベント発生時の駒の動き
  diceSumId1 = ("m" + diceSum1); 
  leftGoal1 = leftGoal1 - eventCount; //残りマスを確認
  document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`;
  element = document.getElementById(`currentPosition1`);
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
  document.getElementById(diceSumId1).innerHTML=`<i id="currentPosition1" class="fas fa-biking play1"></i>`;
  element = document.getElementById(`currentPosition1`);
  element.scrollIntoView({behavior: 'smooth',block: 'center'});
}



//はじめからボタン（リセット）でリロード
function reset_function(){
  window.location.reload();
}

$(function(){
    $(`#startDice1`).click(start_function1);
    $(`#startDice1`).click(forward_function1);
    $(`#startDice1`).click(select_event1);

    $(`#resetDice`).click(reset_function);
    
});

