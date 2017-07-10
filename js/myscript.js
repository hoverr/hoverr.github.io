window.timerValue = 0;
var timerInit = window.setInterval(function(){
  if(timerValue < 100){
    timerValue += 1;
    console.log(timerValue);
    var event = new CustomEvent("trackevent", { "detail": timerValue });
    window.dispatchEvent(event);
  } else {
    window.clearInterval(timerInit);
  }
}, 1000);

window.checkAdLoad = function(){
  if($("._teraAdContainer")){
    console.log("Ad unit is present")
  }
  else{
    console.log("Ad unit is not present")
  }
};
var validateAd = new CustomEvent("trackAdLoad", { "detail": checkAdLoad });
window.dispatchEvent(validateAd);
