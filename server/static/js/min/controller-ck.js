var battleships=angular.module("battleships",["ngResource"]);battleships.factory("Entry",["$resource",function(t){return t("entries",{})}]),battleships.controller("ScoreListCtrl",["$scope","Entry",function(t,e){t.entries=e.query(),t.winPercentage=function(t){return 0-t.wins/(t.wins+t.losses)},setInterval(function(){var r=e.query(function(){t.entries=r})},100)}]),String.prototype.getHashCode=function(){var t=0;if(0==this.length)return t;for(var e=0;e<this.length;e++)t=this.charCodeAt(e)+((t<<5)-t),t&=t;return t},Number.prototype.intToHSL=function(){var t=this%360;return"hsl("+t+",100%,70%)"},battleships.filter("bgcolour",function(){return function(t){return t.name.getHashCode().intToHSL()}});