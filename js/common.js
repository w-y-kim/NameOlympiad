
/*
  * 一覧テーブルに行を追加し、行オブジェクトを返却
  */
 function addheader() {

   var trTag = multiline(function() {/*!@preserve
     <!--header begin-->
     <div class="header">
       <nav class="navbar navbar-inverse">
         <div class="container-fluid">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynav">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
             <a class="navbar-brand" href="./index.html">올림피아드</a>
           </div>
           <div class="collapse navbar-collapse" id="mynav">
             <ul class="nav navbar-nav">
               <li class="active"><a href="./index.html"><span class="glyphicon glyphicon-home"> 홈</a></li>
               <li class="inactive"><a href="./page/entry.html"><span class="glyphicon glyphicon-edit"></span> 후보등록</a></li>
               <li class="inactive"><a href="./page/match.html"><span class="glyphicon glyphicon-flag"></span> 경기수행</a></li>
               <li class="inactive"><a href="./page/result.html"><span class="glyphicon glyphicon-tasks"></span> 결과보기</a></li>


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
     </div>
     <!--header end-->

    */
   });
   var $tag = $(trTag).clone();
   return $tag;
   }
/**
 *
**/
$(document).ready(function(){

$("#header").html(addheader())
console.log('aa')

});
