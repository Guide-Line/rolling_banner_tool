/**
 * 
 * 추상화 클래스 선언
 * 
 * 메서드 생성시 네이밍 주의   예) Abstract.prototype.__view = function(){}  ;; 기존에 생성된 함수와 중복될 경우 override 되는 현상이있다.
 * 
 */

function Abstract(){
    this.alertMc = new SystemMsg();
    this.souceMc = new InputView();
};

Abstract.prototype.__alert = function(massage){
     this.alertMc.view(massage)
};
Abstract.prototype.__souce_alert = function(massage){
    this.souceMc.view(massage)
};

