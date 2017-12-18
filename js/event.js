
$(function(){


  $('#search').on('click',function(){
    var tag = $('input.form-control').val();
    var url = 'https://trends.google.co.kr/trends/explore?q='+tag;
    window.open(url);
  });

  $('#btn_enroll').on('click', function(){
    var $name = $('#name').val();
    var $meaning = $('#meaning').val();

    if(name === undefined || meaning === undefined) {
      alert('취득실패');
      return;
    }

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxdPb82dkHZdC800E42nZ0PAZpgvdJ60agGJV2JPVRjh6mY_-H-/exec",
      data : {
        no:" ",
        name : $name,
        meaning : $meaning,
        score: "1",
        writer : "admin"
      },
      type : "POST",
      error : function(error) {
        alert("전송실패");
      },
      success : function(data) {
        alert("전송성공");
        $('#name').val('');
        $('#meaning').val('');

      },
      complete : function() {
        // alert("finally");
      }

    });
  });


})
