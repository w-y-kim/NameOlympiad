(function(global){

  var _define = _define || {}

  _define = {
//    var entry = new ('#');
  }

  function entryModule(options){
    this.me = $.extend(true, {}, _define, options);
    this.me.instance = this;
  }

  entryModule['prototype']['constructor'] = entryModule;
  entryModule['prototype']['submitsheet'] = submitsheet;

// 화면에서 구글시트에 입력
/* 시트제출 */
	function submitsheet() {
		var name = $('#name').val();
		var meaning = $('#meaning').val();

    if(name === undefined || meaning === undefined) {
      alert('취득실패');
      return;
    }

		$.ajax({
			url : "https://script.google.com/macros/s/AKfycbyXhOd7wRwiRdeGchg2-FqumSr7qju3IbmF-_Yqf8pfAx-9hkZq/exec",
			data : {
				name : name,
				meaning : meaning,
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
	}

var data2 = [
    [
        "Tiger Nixon",
        "System Architect",
        "Edinburgh",
        "5421",
        "2011/04/25",
        "$3,120"
    ],
    [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ]
]
//insert
//참고 : http://nubiz.tistory.com/538
//구글 시트의 ｇｓ스크립트에 정의한 구글스크립트프로그램이 호출함
//그 웹앱이 사용자의 ajax호출을 통해 받은 파라미터를 구글시트에 저장
$.ajax({
  url: "https://script.google.com/macros/s/AKfycbyXhOd7wRwiRdeGchg2-FqumSr7qju3IbmF-_Yqf8pfAx-9hkZq/exec",
  data: {
    no:" ",
    name:"test",
    meaning: "good",
    score: "1",
    writer: "admin"
  },
  type: "POST"
});


//read
//https://docs.google.com/spreadsheets/d/e/2PACX-1vRTGLh60JFm3ZX6EzwfBvaOiLikSMPOo4VFJwBEpMhrbNJS1pxMGCfCh7naB2XFgI-SjsTEoh-HIGRm/pubhtml
//query
//https://spreadsheets.google.com/tq?tqx=out:html&tq=&key=2PACX-1vRTGLh60JFm3ZX6EzwfBvaOiLikSMPOo4VFJwBEpMhrbNJS1pxMGCfCh7naB2XFgI-SjsTEoh-HIGRm
//list
//https://spreadsheets.google.com/feeds/list/1SrtY3mZI4jNo19CXBvsoHuxObLVEpxKoP_IgEaSntuw/1/public/basic?alt=json-in-script

//1.리스트로받음,객체긴객체인데 정작 데이터는 열구분 없이 하나의 프로퍼티 안에 스트링으로 들어있는 듯,아닐수도있고...
var sheetId = '1SrtY3mZI4jNo19CXBvsoHuxObLVEpxKoP_IgEaSntuw';
var GSSurl = "https://spreadsheets.google.com/feeds/list/"+ sheetId +"/1/public/basic?alt=json-in-script&callback=?";
//2.셀로 받음
//var GSSurl = "https://spreadsheets.google.com/feeds/cells/1SrtY3mZI4jNo19CXBvsoHuxObLVEpxKoP_IgEaSntuw/1/public/basic?alt=json-in-script&callback=?";

$.getJSON(GSSurl,function(result){

	var data = result.feed.entry;//구글 스프레드 시트의 모든 내용은 feed.entry에 담겨있습니다.
  var totalist = [];
  $.each(data, function(index,item){
    var i = 0;
    var arryList = [];
    var list = item.content.$t;
    var arr = list.split(',')

    for(var a=0;a<arr.length;a++){

      var val = arr[a].split(':');
      arryList.push(val[1]);
    }
    totalist.push(arryList);
  })
console.log(totalist);
  // $('div.contents').text(entry);

  //객체로 받아와서 다른 프로퍼티가 섞여있다. 편집이 필요
  //구글 스크립트에서부터 수정해서 쓰는게 좋을것 같긴함
    // $.each(data, function(index,item){
	// 	// $('ul.list').append('<li>'+ item.content.$t + '</li>');// .content.$t 에는 나머지행의 데이터가 header정보와 함께 들어있습니다.
  //   // $('div.contents').append(item.title.$t);// .title.$t 에는 1행의 내용이 들어있습니다.
  //   // item.content.$t.split(',')
  //
  //   // targetList.push(JSON.stringify(str));
  //   // str = str.replace(/([a-z][^:]*)(?=\s*:)/gi, '"$1"')
  //   // var p = JSON.parse(str);
  //   // targetList.push(JSON.Stringify(p));
  // });
  // // console.log(t);
  // // console.log(targetList);
  // // debugger;

  $('#listTable').DataTable({
      data: totalist
     ,columns: [
          { title: "이름" }
         ,{ title: "의미" }
         ,{ title: "점수" }
         ,{ title: "작성자"}
         ,{ title: "시간"}
      ]
      ,"oLanguage" : {
                "sProcessing" : "처리 중...",
                "sZeroRecords" : "データはありません。",
                "sLengthMenu" : " _MENU_ 건씩",
                "oPaginate" : {
                  "sFirst" : "선두",
                  "sNext" : "다음",
                  "sPrevious" : "이전",
                  "sLast" : "마지막"
                },
                "sInfo" : "전체_TOTAL_건중 _START_건부터_END_건을 표시",
                "sInfoEmpty" : " 0 건 중 0 부터 0 까지 표시",
                "sInfoFiltered" : "（전체 _MAX_ 건으로부터 추출）",
                "sSearch" : "검색："
              },
              "bPaginate" : true,
              "bLengthChange" : true,
              "bFilter" : true,
              "bSort" : true,// 矢印表示
              "bAutoWidth" : false
  });

});

  // ------------------------------------------------------
  // Exports ※モジュール生成
  // ------------------------------------------------------
  if ('process' in global) {
    module['exports'] = entryModule;
  }
  global['EventModule'] = entryModule;


  })((this || 0).self || global);
