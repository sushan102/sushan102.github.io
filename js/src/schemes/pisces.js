// build time:Sun Jan 26 2020 19:01:49 GMT+0800 (GMT+08:00)
$(document).ready(function(){var e=$(".sidebar-inner"),i=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;function t(){var t,a,f=$(".header-inner").height()+i,o=(t=$(".footer-inner"),a=t.outerHeight(!0)-t.outerHeight(),t.outerHeight(!0)+a);f+($("#sidebar").height()+NexT.utils.getSidebarb2tHeight())<$("#content").height()&&(e.affix({offset:{top:f-i,bottom:o}}),e.affix("checkPosition")),$("#sidebar").css({"margin-top":f,"margin-left":"initial"})}t(),window.matchMedia("(min-width: 992px)").addListener(function(i){i.matches&&($(window).off(".affix"),e.removeData("bs.affix").removeClass("affix affix-top affix-bottom"),t())})});
//rebuild by neat 