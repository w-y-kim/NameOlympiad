function multiline(f) {
  return f.toString().replace(/^[^\/]+\/\*!?/, '').
  replace(/\*\/[^\/]+$/, '');
}


var commonTag = multiline(function(){
/*
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynav">
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
     </button>
      <a class="navbar-brand" href="./home.html">올림피아드</a>
    </div>
    <div class="collapse navbar-collapse" id="mynav">
      <ul class="nav navbar-nav">
        <li id="home" class="menu active"><a href="./home.html"><span class="glyphicon glyphicon-home"> 홈</a></li>
        <li id="entry" class="menu inactive"><a href="./entry.html"><span class="glyphicon glyphicon-edit"></span> 후보등록</a></li>
        <li id="match" class="menu inactive"><a href="./match.html"><span class="glyphicon glyphicon-flag"></span> 경기수행</a></li>
        <li id="result" class="menu inactive"><a href="./result.html"><span class="glyphicon glyphicon-tasks"></span> 결과보기</a></li>


      </ul>
      <ul class="nav navbar-nav navbar-right">
        <form class="navbar-form navbar-left">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="빅데이터검색">
            <div class="input-group-btn">
              <button id="search" class="btn btn-default btn-modal" type="submit" data-toggle="modal" data-target="#myModal">
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
        </form>
        <li><a href="page/signup.html"><span class="glyphicon glyphicon-user"></span> 회원가입</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 로그인</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="info"></div>
 */
});




$(document).ready(function(){

  // $('.test').replaceWith(commonTag);
  $('.header').html(commonTag);

  //corss origin request only support for protocol error
  // $('.test').load("./html/test.html")

  var tabID = $('div.header').data('tab');
  var menuArr = $('ul.nav li.menu');

  // for(var i = 0; i < menuArr.length; i++) {
  //   menuArr[i].removeClass();
  //   var id = menuArr[i].attr('id');
  //   if(id.equals(tabID)) {
  //     menuArr[i].addClass('active');
  //   }else {
  //     menuArr[i].addClass('inactive');
  //   }
  // }
  $(menuArr).each(function() {
    $(this).removeClass();
    var id = $(this).attr('id');
    if(tabID==id) {

      $(this).addClass('active');
    }else {
      $(this).addClass('inactive');
    }
  });
});
