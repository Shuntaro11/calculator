$(function(){

  let resultNumber = 0;
  let inputNumber = 0;
  let whatCalculation = 0;

  // 数字ボタン
  $("#number1").on('click', function(e) {
    clickNumber(1);
  });
  $("#number2").on('click', function(e) {
    clickNumber(2);
  });
  $("#number3").on('click', function(e) {
    clickNumber(3);
  });
  $("#number4").on('click', function(e) {
    clickNumber(4);
  });
  $("#number5").on('click', function(e) {
    clickNumber(5);
  });
  $("#number6").on('click', function(e) {
    clickNumber(6);
  });
  $("#number7").on('click', function(e) {
    clickNumber(7);
  });
  $("#number8").on('click', function(e) {
    clickNumber(8);
  });
  $("#number9").on('click', function(e) {
    clickNumber(9);
  });
  $("#number0").on('click', function(e) {
    clickNumber(00);
  });

  // 計算ボタン
  $("#addition").on('click', function(e) {
    calculation(1);
  });
  $("#subtraction").on('click', function(e) {
    calculation(2);
  });
  $("#multiplication").on('click', function(e) {
    calculation(3);
  });
  $("#division").on('click', function(e) {
    calculation(4);
  });
  $("#resultCalculation").on('click', function(e) {
    calculation(5);
  });

    // クリアボタン
  $("#clear").on('click', function(e) {
    resultNumber = 0;
    inputNumber = 0;
    whatCalculation = 0;
    $("#notice").html("");
    $("#resultNumber").html(resultNumber);
  });

  // 数字ボタン
  function clickNumber(pushNumber){
    inputNumber = (inputNumber * 10) + pushNumber;
    $("#resultNumber").html(inputNumber);

    // 限界値
    if(inputNumber > 999999999){
      inputNumber = "E";
      $("#resultNumber").html(inputNumber);
    }
  }

  $("#number00").on('click', function(e) {

    inputNumber = (inputNumber * 100);
    $("#resultNumber").html(inputNumber);
  
    // 限界値
    if(inputNumber > 999999999){
      inputNumber = "E";
      $("#resultNumber").html(inputNumber);
    }
  });

  function calculation(kind){
    if(whatCalculation === 1){
      resultNumber = resultNumber + inputNumber;
    }else if(whatCalculation === 2){
      resultNumber = resultNumber - inputNumber;
    }else if(whatCalculation === 3){
      resultNumber = resultNumber * inputNumber;
    }else if(whatCalculation === 4){
      resultNumber = resultNumber / inputNumber;
    }else if(whatCalculation === 5){
      resultNumber = resultNumber;
    }else{
      resultNumber = inputNumber;
    }
    // 限界値
    if(resultNumber > 999999999 || resultNumber < -999999999){
      resultNumber = "E";
    }
  
    inputNumber = 0;
    $("#resultNumber").html(resultNumber);
  
    // 計算記号表示
    if(kind === 1){
      whatCalculation = 1;
      $("#notice").html("+");
    }else if(kind === 2){
      whatCalculation = 2;
      $("#notice").html("−");
    }else if(kind === 3){
      whatCalculation = 3;
      $("#notice").html("×");
    }else if(kind === 4){
      whatCalculation = 4;
      $("#notice").html("÷");
    }else if(kind === 5){
      $("#notice").html("");
      whatCalculation = 5;
    }
  }

});