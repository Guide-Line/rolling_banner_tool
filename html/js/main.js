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
    selectMenu = function(n) {
        $(".icon li").removeClass("select");
        $(".icon li").eq(n).addClass("select");
        if(n == 0){
        	console.log("desktop select");
			self.contentsResize(980)
        }else{
        	console.log("mobile select")
        	self.contentsResize(375)
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
	var self = this;
	$("#mobileViewArea").stop(true, true).animate({
        width: stageWidth
    }, 200, function() {
        self.update();		
    });

};

RollingBanner.prototype.update = function(){
	console.log("update")
}
