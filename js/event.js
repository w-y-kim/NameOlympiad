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
debugger
    $.ajax({
      url : "https://script.google.com/macros/s/AKfycbyXhOd7wRwiRdeGchg2-FqumSr7qju3IbmF-_Yqf8pfAx-9hkZq/exec ",
      data : {
        no:"",
        name : $name,
        meaning : $meaning,
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
