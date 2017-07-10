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

t$(document).ready(function(){
  console.log("Checking the AdInstances.");
  var checkAdLoadfunction = function(){
    if(t$("._teraAdContainer")){
      console.log("Ad unit is present");
      t$('._teraAdContainer').mouseover(function(){
        t$(this).focus();
        console.log('Hoverred mouseover tera ad unit')
      });
    }
  }
  checkAdLoadfunction();
});
