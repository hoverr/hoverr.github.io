// window.checkAdLoad = function(){
//   var checkAdLoadfunction = function(){
//     var msg = "Ad unit is not present";
//     if($("._teraAdContainer")){
//       console.log("Ad unit is present")
//       msg = "Ad unit is present";
//     }
//     return msg;
//   }
//   checkAdLoadfunction()
//   console.log(checkAdLoadfunction);
//   var validateAd = new CustomEvent("trackAdLoad", { "detail": checkAdLoadfunction});
//   window.dispatchEvent(validateAd);
// }

$(document).ready(function(){
  console.log("Checking the AdInstances.");
  var checkAdLoadfunction = function(){
    var msg = "Ad unit is not present";
    if($("._teraAdContainer")){
      console.log("Ad unit is present")
      msg = "Ad unit is present";
    }
    return msg;
  }
  checkAdLoadfunction();
});
