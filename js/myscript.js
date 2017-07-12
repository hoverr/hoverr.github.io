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

window.sayHello = function(name){
console.log("Hey "+name);
}

t$(document).ready(function(){
  console.log("Checking the AdInstances.");
  window.checkAdLoadfunction = function(){
    if(t$("._abmMainAdContainer")){
      console.log("Ad unit is present");
      t$('div').mouseover(function(){
        t$(this).find('._abmAdContainer')
        console.log('Hoverred mouse over tera ad unit')
      });
    }
  }
});
