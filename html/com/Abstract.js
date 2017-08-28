/**
 * 
 * 추상화 클래스 선언
 * 메서드 생성시 네이밍 주의   예) Abstract.prototype.__view = function(){}  ;; 상속받는 class의 메서드와  중복될 경우 override 됨
 * 
 */

function Abstract(){
    //index.html 에 js 선언 되어있다.
    this.alertMc = new SystemMsg();
    this.souceMc = new InputView();
};

/**
 * @param massage : 얼럿창에 메세지를 보여줌
 */
Abstract.prototype.__alert = function(massage){
    this.alertMc.view(massage)
};

/**
 * @param massage : 화면에 소스보기 창을 보여줌
 */
Abstract.prototype.__souce_alert = function(massage){
    this.souceMc.view(massage)
};


/**
 * @param filename : 저장할 파일 네임을 지정합니다 예) mobile_swiper.html  or desktop_swiper.html
 * @param text     : 파일의 내용
 */
Abstract.prototype.__download = function(filename , text){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=euc-kr,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

/**
 * @param axis    : x축과 y축 중 하나로만 이동
 * @param opacity : 불투명도
 * @param cancel  : Sort대상에서 제외하고자 할 때 id설정, 해당 컨트롤은 드래그 X
 * @param handle  : "span" - 해당영역 <span>태그 부분을 핸들로 설정, <span>부분 끌기 가능
 * @param helper  : function(e, ui) - 소팅되는 동안 해당 요소의 정보를 알 수 있는 이벤트
 * @param start   : function 소팅을 위해서 드래그 하는 순간 발생하는 이벤트
 * @param sort    : function 소팅을 위해서 드래그 하는 순간 발생하는 이벤트
 * @param change  : function 소팅을 위해서 드래그 하는 순간 발생하는 이벤트
 * @param update  : 소팅 후 드롭 할 때(update) 발생하는 이벤트
 * @param stop    : 완료 되었을때 발생
 */
Abstract.prototype.__sortable = function(){
    $("#sortable").sortable({
        revert: true,
        axis: "x",
        opacity: 0.8,
        placeholder: "ui-state-highlight",
        update: function(evt) {            
            self.update();
        }
    });
};


