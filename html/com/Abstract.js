/**
 * 
 * 추상화 클래스 선언
 * 메서드 생성시 네이밍 주의   예) Abstract.prototype.__view = function(){}  ;; 상속받는 class의 메서드와  중복될 경우 override 됨
 * 
 */

function Abstract(){
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
