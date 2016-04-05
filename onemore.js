console.log("**************************");
console.log(window);
console.log(window._$_tera_hoverr);
console.log("**************************");

var intr = window.setInterval(function(){
    if(window._$_tera_hoverr !== undefined){
      window._$_tera_hoverr.log('Tera : Main JS Loaded.');
      window.clearInterval(intr);
      // Load jQuery if not present and swipe handler if mobile
      if (window.jQuery === undefined || parseInt(window.jQuery.fn.jquery.split('.').join("")) < 142) {
        window._$_tera_hoverr.loadJS(jqueryLink, function(status){
          initialize();
        });
      }
      else initialize();
    }
  });