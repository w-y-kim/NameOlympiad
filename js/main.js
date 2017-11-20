(function(global){

  var _define = _define || {}

  _define = {
    var entry = new ('#');
  }

  function MainModule(options){
    this.me = $.extend(true, {}, _define, options);
    this.me.instance = this;
  }

  MainModule['prototype']['constructor'] = MainModule;
  MainModule['prototype']['init'] = init;



  //define funtion
  function init(){
    var me = this.me;
    me = $.find('.main');

    _setElement(me);

    handleClientLoad();
  };



  function _setElement(me){
  //  var $target = me.find('.header');
    $('.header').css('background-color','black');

  }

  //start
  init();

  // ------------------------------------------------------
  // Exports ※モジュール生成
  // ------------------------------------------------------
  if ('process' in global) {
    module['exports'] = MainModule;
  }
  global['EventModule'] = MainModule;


  })((this || 0).self || global);
