// build time:Wed Jan 29 2020 16:35:30 GMT+0800 (GMT+08:00)
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function n(o){function t(e,n,r){var i;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=a({path:"/"},t.defaults,r)).expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*r.expires),r.expires=c}r.expires=r.expires?r.expires.toUTCString():"";try{i=JSON.stringify(n),/^[\{\[]/.test(i)&&(n=i)}catch(a){}n=o.write?o.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in r)r[s]&&(f+="; "+s,!0!==r[s]&&(f+="="+r[s]));return document.cookie=e+"="+n+f}e||(i={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(a){}if(e===g){i=C;break}e||(i[g]=C)}catch(a){}}return i}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}(function(){})});
//rebuild by neat 