window.checkAdLoad = function(){
  var checkAdLoadfunction = function(){
    if($("._teraAdContainer")){
      console.log("Ad unit is present")
    }
    else{
      console.log("Ad unit is not present")
    }
  };
var validateAd = new CustomEvent("trackAdLoad", { "detail": checkAdLoadfunction });
window.dispatchEvent(validateAd);
