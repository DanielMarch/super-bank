(function(){
  'use strict';

  $(document).ready(initialize);

  var balance = 1000;

  function initialize(){
    $('#deposit').click(deposit);
    $('#withdrawl').click(withdrawl);
  }

  function update(output){
    balance = output;
    $('#bal').text('$' + balance);
  }

  function deposit(){
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>');
    var $tr = $('<tr>');
    var input = $('#amount').val() * 1;
    var output = balance + input * 1;
    $td2.text('$' + input);
    $td4.text('$' + output);
    $tr.append($td1,$td2,$td3,$td4);
    $('#table').append($tr);
    $($td1).css('color', 'green');
    $($td2).css('color', 'blue');
    $($td4).css('color', 'black');
    update(output);
  }

  function withdrawl(){
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>');
    var $tr = $('<tr>');
    var input = $('#amount').val() * 1;
    var output = balance - input * 1;
    if(balance < 0){
      output = balance - input - 50 * 1;
      $td1.text('(' + '$' + 50 + ')');
      $td3.text('(' + '$' + input + ')');
      $td4.text('(' + '$' + output + ')');
      $tr.append($td1,$td2,$td3,$td4);
      $('#table').append($tr);
    }else{
      $td3.text('(' + '$' + input + ')');
      $td4.text('$' + output);
      $tr.append($td1,$td2,$td3,$td4);
      $('#table').append($tr);
    }
    $($td1).css('color', 'green');
    $($td3).css('color', 'red');
    $($td4).css('color', 'black');
    update(output);
  }
})();
