(function(global){
  'user strict'; // 브라우저가 보고 JS 문법 빡씨게 검사

  // ------------------------------------------------------
  // local variable
  // ------------------------------------------------------
  var _define = {

  }

  // ------------------------------------------------------
  // constructoer
  // ------------------------------------------------------
  function EventModule(options) {
      this.me = $.extend(true, {}, _define, options);
      this.me.instance = this;
    }

  // Header ※モジュールに関数を継承する。
  // 함수 승계라는데... 프로토타입으로 엘리먼트에 구현할 함수명을 미리 정의함
  // 다른 패턴에서도 prototype으로 붙여야지 export시켜서 다른 곳에서 호출해 사용가능
  EventModule['prototype']['constructor'] = EventModule;


  //event definition
  $('#search').on('click',function(){
    var tag = $('input.form-control').val();
    var url = 'https://trends.google.co.kr/trends/explore?q='+tag;
    window.open(url);
  });

  /*

  $('#signin-button').on('click', funtion() {
    handleSignInClick();
  });
  /*

  $('#signout-button').on('click',funtion(){
    handleSignOutClick();
  });
  */
  // ------------------------------------------------------
  // Exports ※モジュール生成
  // ------------------------------------------------------
  if ('process' in global) {
    module['exports'] = EventModule;
  }
  global['EventModule'] = EventModule;


  })((this || 0).self || global);
