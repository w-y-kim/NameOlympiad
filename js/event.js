$(function(){

  //event definition
  $('#search').on('click',function(){
    var tag = $('input.form-control').val();
    var url = 'https://trends.google.co.kr/trends/explore?q='+tag;
    window.open(url);
  });
})
