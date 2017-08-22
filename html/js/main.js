/**
 * 2017.08.21
 * 
 */

function RollingBanner(){
    console.log("생성자 함수 () => RollingBanner");
   	this.isWeb = true; // pc 화면일때  true  , mobile 화면일때 false

};

RollingBanner.prototype.init = function(){
	console.log("기본실행 () => init");
	this.btnEvent();	
};

RollingBanner.prototype.btnEvent = function(){
	console.log("이벤르틑 발생시키는 버튼 () = > btnEvent");
	var _this = this;
	var isView = 0;

    $(".icon li>a").each(function(index) {
        var $this = $(this)
        $this.click(function() {
            isView = index;
            if (isView == 0) {            	
                _this.isWeb = true;
                console.log("desktop" , _this.isWeb)
            } else {            	
                _this.isWeb = false;
                console.log("mobile" , _this.isWeb)
            };            
            selectMenu(isView);
        });
    });
    selectMenu = function(n) {
        $(".icon li").removeClass("select");
        $(".icon li").eq(n).addClass("select");
        if(n == 0){
        	console.log("desktop select");
			_this.contentsResize(980)
        }else{
        	console.log("mobile select")
        	_this.contentsResize(375)
        }
    };

    $(".downBtn").bind('click', function(e) {
		e.preventDefault();
    });
    $('.viewBtn').bind("click", function(e) {
        e.preventDefault();
       
    });
};

RollingBanner.prototype.contentsResize = function(stageWidth){
	console.log("보여지는 화면 리사이즈 () = > contentsResize");

	$("#mobileViewArea").stop(true, true).animate({
        width: stageWidth
    }, 200, function() {
        //ui_update();
    });
}
