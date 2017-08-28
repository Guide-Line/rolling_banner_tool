/**
 * 
 * 2017.07.11 
 * 소스보기 textarea
 * 
 */


 /** 사용법 
 * ( 선언 )
 * <script src="https://code.jquery.com/jquery-1.12.4.js"></script>	
 * <script type="text/javascript" src="http://eventimg.auction.co.kr/md/auction/04D25F0304/jquery.easing-1.3.min.js"></script>
 * <link rel="stylesheet" href="com/display/view/InputView.css"> 선언
 * <script src="com/display/view/InputView.js"></script>
 * 
 * <script>
    * var sysTextarea = new InputView();
    * sysTextarea.view('hi');   // 화면에 출력됨
    * sysTextarea.viewClose(); //팝업 닫을때
 * </script>
 */


function InputView(){
    console.log('InputView')
    var self = this;
    self.msg='';
    self.pop_width;
    self.pop_height;
    self.popMc;
    

    self.viewMakeMarkup()
    
}

// body 사이에 해당 마크업 생성
InputView.prototype.viewMakeMarkup = function(){
    $('body').prepend(`<div id="souceview_layout">
		<strong class="title">소스보기</strong>
		<p class="close">			
			<a class="pop_close_skin" href="#">
				<img src="images/popup_close_btn.jpg" alt="">
			</a>
		</p>
        <p class="msg">
            <textarea type="text" value="" cols="30" rows="10" readonly></textarea>
		</p>			
    </div>`);
  //   $('body').prepend(`<div id="souceview_layout">
		// <strong class="title">소스보기</strong>
		// <p class="close">			
		// 	<a class="pop_close_skin" href="#">
		// 		<img src="images/popup_close_btn.jpg" alt="">
		// 	</a>
		// </p>
        
  //           <pre class="line-numbers">
  //               <code class="language-markup">
  //                   <textarea type="" value="" cols="30" rows="10"></textarea>
  //               </code>
  //           </pre>
		
  //   </div>`);

    
    this.popMc = $('#souceview_layout')  
    this.controls()
}

// 화면에 소스 copy
InputView.prototype.view = function(msg){
    console.log('view')
    var self = this;
    self.msg = msg;

    this.popMc.find('.msg textarea').val(msg);

   

    // 뷰어 에디터 재실행
    //Prism.highlightAll();
    this.viewResize()
};
//가운데 오도록 리사이즈
InputView.prototype.viewResize = function(){
    var self = this;
    self.pop_width = this.popMc.width()
    self.pop_height = this.popMc.height()

    this.popMc.stop(true, true).animate({
		top: '47%',
        left: '50%',
        marginLeft: (self.pop_width/2)*-1,
        marginTop: (self.pop_height/2)*-1
	}, 500,'easeInOutQuart' ,function () {
		
	});
}
//팝업 닫기
InputView.prototype.viewClose = function(){    
    console.log('viewClose')
    var self = this;
    self.popMc.find('.msg textarea').val( self.msg)
    self.popMc.stop().animate({
		top: '47%',
        left: '150%',
        marginLeft: (self.pop_width/2)*-1,        
        marginTop: (self.pop_heihgt/2)*-1,        
	}, 500,'easeInOutQuart' ,function () {
		
	});
}
//팝업 내에버튼 들
InputView.prototype.controls = function(){
    var self = this;
    self.popMc.find('.close a img').bind('click' , function(){        
        self.viewClose()  
    });    
}
