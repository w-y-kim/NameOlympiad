/**
 * SYSTEM : NameOlympiad
 * PGID   : googleSheetApiEntry : GASE
 * DETAIL : google sheet api logic
 *          This file is designed with module pattern
 * CODER  : 2017-11-20 KOR)SOM
 * MODIFY :
 */

//범용 네임스페이스 : http://asfirstalways.tistory.com/233?category=654665
var app = app || {}; // false인 경우 {} 객체 변수 새로선언

//즉시함수 : 선언과 동시에 호출, 변수와 함수의 범위를 제한하는 클래스 역할
(function(global){
  'user strict'; // 브라우저가 보고 JS 문법 빡씨게 검사

  // ------------------------------------------------------
  // local variable
  // ------------------------------------------------------
  var _define = {}

  // ------------------------------------------------------
  // constructoer
  // ------------------------------------------------------
  function Gase(options) {
      this.me = $.extend(true, {}, _define, options);
      this.me.instance = this;
    }

  // Header ※モジュールに関数を継承する。
  // 함수 승계라는데... 프로토타입으로 엘리먼트에 구현할 함수명을 미리 정의함
  // 다른 패턴에서도 prototype으로 붙여야지 export시켜서 다른 곳에서 호출해 사용가능
  Gase['prototype']['constructor'] = Gase;
  Gase['prototype']['handleSignInClick'] = handleSignInClick;
  Gase['prototype']['handleSignOutClick'] = handleSignOutClick;
  // ------------------------------------------------------
  // Implementation : public method
  // ------------------------------------------------------
  function makeApiCall(sheetId, cellRange) {
    var params = {
      // The ID of the spreadsheet to retrieve data from.
      spreadsheetId: '1SrtY3mZI4jNo19CXBvsoHuxObLVEpxKoP_IgEaSntuw',  // TODO: Update placeholder value.

      // The A1 notation of the values to retrieve.
      range: 'A2:E101',  // TODO: Update placeholder value.

      // How values should be represented in the output.
      // The default render option is ValueRenderOption.FORMATTED_VALUE.
      valueRenderOption: '',  // TODO: Update placeholder value.

      // How dates, times, and durations should be represented in the output.
      // This is ignored if value_render_option is
      // FORMATTED_VALUE.
      // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
      dateTimeRenderOption: '',  // TODO: Update placeholder value.
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
      // TODO: Change code below to process the `response` object:
      console.log(response.result);
    }, function(reason) {
      console.error('error: ' + reason.result.error.message);
    });
  }

  function initClient() {
    var API_KEY = 'AIzaSyCxs2EXOr56VYOD7khW7oESsX70jBZi5V0';  // TODO: Update placeholder with desired API key.

    var CLIENT_ID = '452361811603-j4q8oeku3b4gbccahu8rmj2jjqnu6uj9.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

    // TODO: Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/drive.readonly'
    //   'https://www.googleapis.com/auth/spreadsheets'
    //   'https://www.googleapis.com/auth/spreadsheets.readonly'
    var SCOPE = 'https://www.googleapis.com/auth/drive.file';

    gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'scope': SCOPE,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
      updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  function updateSignInStatus(isSignedIn) {
    if (isSignedIn) {
      makeApiCall();
    }
  }

  function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
  }

  // ------------------------------------------------------
  // Exports ※モジュール生成
  // ------------------------------------------------------
  if ('process' in global) {
    module['exports'] = Gase;
  }
  global['Gase'] = Gase;


})((this || 0).self || global);
