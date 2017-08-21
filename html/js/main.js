/**
 * 2017.08.21
 * 
 */

function RollingBanner(){
    console.log("생성자 함수 () => RollingBanner");
};

RollingBanner.prototype.init = function(){
	console.log("기본실행 () => init");
	this.btnEvent();
};

RollingBanner.prototype.btnEvent = function(){
	console.log("이벤르틑 발생시키는 버튼 () = > btnEvent");
	var isView = 0;

    $(".icon li>a").each(function(index) {
        var $this = $(this)
        $this.click(function() {
            isView = index;            
            selectMenu(isView)
        });
    });
    selectMenu = function(n) {
        $(".icon li").removeClass("select");
        $(".icon li").eq(n).addClass("select");
    };

    $(".downBtn").bind('click', function() {
		e.preventDefault();
    });
    $('.viewBtn').bind("click", function(e) {
        e.preventDefault();
       
    });
};


