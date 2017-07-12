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

function checkAdLoad(){
  if(t$("._abmMainAdContainer")){
    return "Ad is Present";
    document.querySelectorAll('._abmMainAdContainer').length
  } else {
    return "Ad is Absent"
  }
}

setInterval(function(){
  var adLoaded = checkAdLoad();
  // console.log(adLoaded)
  // console.log("HE")
  var validateAd = new CustomEvent("adLoaded", { "info": adLoaded,"detail":adLoaded});

  window.dispatchEvent(validateAd);
}, 3000);

// t$(document).ready(function(){
//   console.log("Checking the AdInstances.");
//   window.checkAdLoadfunction = function(){
//     if(t$("._abmMainAdContainer")){
//       console.log("Ad unit is present");
//       t$('div').mouseover(function(){
//         t$(this).find('._abmAdContainer')
//         console.log('Hoverred mouse over tera ad unit')
//       });
//     }
//   }
// });
