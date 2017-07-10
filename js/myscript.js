var hoverr = window.setInterval(function(){
  var checkAdLoad = function(){
    if($("._teraAdContainer")){
      console.log("Ad unit is present")
    }
    else{
      console.log("Ad unit is not present")
    }
  };
  var validateAd = new CustomEvent("trackAdLoad", { "detail": checkAdLoad });
  window.dispatchEvent(validateAd);
},3000);
