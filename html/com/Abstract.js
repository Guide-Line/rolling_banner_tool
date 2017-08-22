/**
 * 
 * 추상화 클래스 선언
 * 
 * 메서드 생성시 네이밍 주의   예) Abstract.prototype.__view = function(){}  ;; 상속받는 class의 메서드와  중복될 경우 override 됨
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

