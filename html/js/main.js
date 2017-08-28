/**
 * 2017.08.21
 * 
 */
function RollingBanner(){
    console.log("생성자 함수 () => RollingBanner");
    this.isWeb = true; // pc 화면일때  true  , mobile 화면일때 false
};

/**
 * RollingBanner extends Abstract
 * 상속받게되는 클래스는 Abstract 내의 모든 메서드 접근이 가능하다 
 */
RollingBanner.prototype = new Abstract();


RollingBanner.prototype.init = function(){
	console.log("기본실행 () => init" );    
    var self = this;

    // list sort
    $("#sortable").sortable({
        revert: true,
        axis: "x",
        opacity: 0.8,
        placeholder: "ui-state-highlight",
        update: function(evt) {            
            self.update();
        }
    });

    self.btnEvent();
};


RollingBanner.prototype.btnEvent = function(){
	console.log("이벤르틑 발생시키는 버튼들 () = > btnEvent");
	var self = this;
	var isView = 0;
    $(".icon li>a").each(function(index) {
        var $this = $(this)
        $this.click(function() {
            isView = index;
            if (isView == 0) {            	
                self.isWeb = true;
                console.log("desktop" , self.isWeb)
            } else {            	
                self.isWeb = false;
                console.log("mobile" , self.isWeb)
            };            
            selectMenu(isView);
        });
    });
    var selectMenu = function(n) {
        $(".icon li").removeClass("select");
        $(".icon li").eq(n).addClass("select");
        if(n == 0){
        	console.log("desktop select");
			self.contentsResize(980);
        }else{
        	console.log("mobile select")
            self.contentsResize(375);
        };
    };

    $(".downBtn").bind('click', function(e) {
        e.preventDefault();
        self.__alert('downBtn click');
    });
    $('.viewBtn').bind("click", function(e) {
        e.preventDefault();
        self.__souce_alert('test test test test test test test test');
    });
    //상품추가버튼
    $(".new_btn .addBtn").bind("click", function(e) {
        e.preventDefault()          
        self.popupResize(0)
        //viewSouce.viewClose();
    });

};

/**
 * @param stageWidth : 스테이지 가로 사이즈 
 */
RollingBanner.prototype.contentsResize = function(stageWidth){
	console.log("보여지는 화면 리사이즈 () = > contentsResize");
	var self = this;
	$("#mobileViewArea").stop(true, true).animate({
        width: stageWidth
    }, 200, function() {
        self.update();		
    });
};


/**
 * 
 * @param {*} n : 0일때 기본입력 , 1일때 잘못된값 입력 , 2일때 미리보기 뷰일때
 */
RollingBanner.prototype.popupResize = function(n){
    
    var pos_margin_y = ['-160px', '-247px', '-280px'];
    var heightY = ['215px', '295px', '440px'];
    var spd = [300, 120, 120]

    $("#popup").animate({
        'top': '47%',
        'marginTop': pos_margin_y[n],
        'height': heightY[n]

    }, spd[n], function() {})
};


/**
 * 이벤트에 대한 업데이트
 */
RollingBanner.prototype.update = function(){
	console.log("update")
}
