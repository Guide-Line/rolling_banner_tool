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

    this.pop = new Popup()//팝업 클래스 실행
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
        self.pop.resize(0)
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
 * 이벤트에 대한 업데이트
 */
RollingBanner.prototype.update = function(){
	console.log("update")
}


/**
 *  ================================================================================================================ 
 *  =====================================================  팝업 ====================================================
 *  ================================================================================================================ 
 */


/**
 * 팝업관련 class 생성  
 * 
 */
function Popup(){
    console.log('popup 생성자')
    var self = this;
    //팝업 class 에서 사용될 변수
    self.input_state = false;
    self.pop_img;// 팝업에 표시되는 이미지 저장
    self.pop_link; // 팝업에 표시되는 이미지 링크 저장

    
    self.init();
};
/**
 * Popup extents Abstract
 */
Popup.prototype = new Abstract();


/**
 * 
 */
Popup.prototype.init = function(){
    console.log('Popup.init()')
    var self = this;

    $("#popup .imgUrl").bind("change", function (e) {
        
		var $this = $(this);
        var imgUrl = $this.val();

		if (self.input_state == true) {
            $("#holder").empty()
        };

        if (imgUrl.indexOf(".jpg") != -1 || imgUrl.indexOf(".JPG") != -1 || imgUrl.indexOf(".PNG") != -1 || imgUrl.indexOf(".png") != -1) {

            //alert("이미지 경로가 정상으로 보임")
            $("#popup").animate({}, 5,
                function() {

                    $this.parents("#popup").find("#holder").append('' +
                        '<img class="popup_in_img" src="' + imgUrl + '"/>')
                    self.pop_img = imgUrl;

                    $('.popup_in_img').error(function() {
                        //로드된 팝업이미지가 404 error 이면 실행
                        //alert("이미지 경로가 입력되었으나, 잘못되었습니다.");
                        $('.popup_in_img').css("display", "none");

                        $this.parents("#popup").find("#holder").append('' +
                            '<div class="not_img_message" style="display:block;">해당 링크의 정보를 불러올수 없습니다<br>링크를 다시 확인 해 주세요</div>');

                        $(".imgUrl").val("");
                        self.resize(1) //팝업창 리사이즈 타입1번
                        //}).attr( "src", imgUrl);
                    }).load(function() {

                        console.log('------------------------------------');
                        console.log('정상적인 이미지 로드');
                        console.log('------------------------------------');
                        $('.popup_in_img').css("display", "block");
                        self.resize(2) //팝업창 리사이즈 타입2번
                    });

                    input_state = true;

                })

        } else {
            //popup_clear();            
            self.__alert('정상적인 이미지 경로가 아닙니다.');
            self.resize(0);
        }

	});//end change
};




/**
 * 팝업창의 높이 사이즈를 조절할수있다.
 * @param n : 0일때 기본입력 , 1일때 잘못된값 입력 , 2일때 미리보기 뷰일때
 */
Popup.prototype.resize = function(n){
    var self = this;
    var pos_margin_y = ['-160px', '-247px', '-280px'];
    var heightY = ['215px', '295px', '440px'];
    var spd = [300, 120, 120]

    $("#popup").animate({
        'top': '50%',
        'marginTop': pos_margin_y[n],
        'height': heightY[n]

    }, spd[n], function() {})
};


Popup.prototype.check = function(){

};