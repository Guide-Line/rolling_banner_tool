/**
 * 
 * 2017.07.07 
 * 디자인된 시스템 얼럿
 * 
 */



/** 사용법  example 폴더에 파일 참고
 * ( 선언 )
 * <script src="https://code.jquery.com/jquery-1.12.4.js"></script>	
 * <script type="text/javascript" src="http://eventimg.auction.co.kr/md/auction/04D25F0304/jquery.easing-1.3.min.js"></script>
 * <link rel="stylesheet" href="com/display/view/SystemMsg.css"> 선언
 * <script src="com/display/view/SystemMsg.js"></script>
 * 
 * <script>
    * var sysMsg = new SystemMsg();
    * sysMsg.view('hi'); // 화면에 출력됨
    * sysMsg.viewClose(); //닫을때
 * </script>
 */

// 생성자
function SystemMsg(){
    console.log('SystemMsg')
    var self = this;
    self.msg='';
    self.pop_width;
    self.pop_height;
    self.popMc;

    self.viewMakeMarkup();
};

// body 사이에 해당 마크업 생성
SystemMsg.prototype.viewMakeMarkup=function(){
     $('body').prepend(`<div id="alert_layout">
			<p class="close">
				<a class="pop_close_skin" href="#">
					<img src="images/popup_close_btn.jpg" alt="">
				</a>
			</p>
			<p class="msg">
				<input type="text" value="..." readonly>
			</p>
			<p class="okBtn">
				<a class="btn_layout" href="#">확인</a>
			</p>		
	</div>`);

    this.popMc =  $('#alert_layout')      
    this.controls()
};

// 화면에 표현 변수 msg
SystemMsg.prototype.view = function(msg){
    console.log('view')
    var self = this;
    self.msg = msg;
    this.popMc.find('.msg input').val(msg);
   
    this.viewResize()
};

//가운데 오도록 리사이즈
SystemMsg.prototype.viewResize = function(){
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
SystemMsg.prototype.viewClose = function(){    
    console.log('viewClose')
    var self = this;
    self.popMc.find('.msg input').val( self.msg)
    self.popMc.stop().animate({
		top: '-30%',
        left: '50%',
        marginLeft: (self.pop_width/2)*-1,        
	}, 500,'easeInOutQuart' ,function () {
		
	});
}
//팝업 내에버튼 들
SystemMsg.prototype.controls = function(){
    var self = this;
    self.popMc.find('.close').bind('click' , function(){
        self.viewClose()  
    });
    self.popMc.find('.okBtn').bind('click' , function(){
        self.viewClose()  
    });  
}


