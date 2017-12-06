// 화면에서 구글시트에 입력
// function submitsheet() {
// 	var answerdata = $('#Myquestion2').val();
// 	var questiondata = $("#Myquestion").val();
// 	$.ajax({
// 		url : "https://script.google.com/macros/s/AKfycbzlPq5wascXsZqpjga77mPylCpMtDj6AX86K7cTpRSXipsC1zw/exec",
// 		data : {
// 			"질문" : questiondata,
// 			"답변" : answerdata
// 		},
// 		type : "POST"
// 	});
// 	$('#Myquestion').val('');
// 	$('#Myquestion2').val('');
// 	console.log('전송완료'+questiondata+'/'+answerdata);
// }

var data = [
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
var GSSurl = "https://spreadsheets.google.com/feeds/list/1SrtY3mZI4jNo19CXBvsoHuxObLVEpxKoP_IgEaSntuw/1/public/basic?alt=json-in-script&callback=?";
//2.셀로 받음
//var GSSurl = "https://spreadsheets.google.com/feeds/cells/1SrtY3mZI4jNo19CXBvsoHuxObLVEpxKoP_IgEaSntuw/1/public/basic?alt=json-in-script&callback=?";

$.getJSON(GSSurl,function(result){
	var data = result.feed.entry;//구글 스프레드 시트의 모든 내용은 feed.entry에 담겨있습니다.
  // $('div.contents').text(entry);
debugger;
  //객체로 받아와서 다른 프로퍼티가 섞여있다. 편집이 필요
  //구글 스크립트에서부터 수정해서 쓰는게 좋을것 같긴함
  var targetObj = {};
  $.each(data, function(index,item){
		$('ul.list').append('<li>'+ item.content.$t + '</li>');// .content.$t 에는 나머지행의 데이터가 header정보와 함께 들어있습니다.
    // $('div.contents').append(item.title.$t);// .title.$t 에는 1행의 내용이 들어있습니다.

  //  $('div.contents').append('<br>')
  });

  $('#listTable').DataTable({
      data: data.content,
      columns: [
          { data: '후보명' },
          { data: '의미' },
          { data: '제안자' },
          { data: '점수' }
      ],
      "oLanguage" : {
                "sProcessing" : "処理中...",
                "sZeroRecords" : "データはありません。",
                "sLengthMenu" : " _MENU_ 件表示",
                "oPaginate" : {
                  "sFirst" : "先頭",
                  "sNext" : "次のページ",
                  "sPrevious" : "前のページ",
                  "sLast" : "最終"
                },
                "sInfo" : "全_TOTAL_件中 _START_件から_END_件を表示",
                "sInfoEmpty" : " 0 件中 0 から 0 まで表示",
                "sInfoFiltered" : "（全 _MAX_ 件より抽出）",
                "sSearch" : "検索："
              },
              "bPaginate" : true,
              "bLengthChange" : true,
              "bFilter" : true,
              "bSort" : false,// 矢印表示
              "bAutoWidth" : false
  });
});
