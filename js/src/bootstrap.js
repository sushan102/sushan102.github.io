// build time:Wed Jan 29 2020 11:29:20 GMT+0800 (GMT+08:00)
$(document).ready(function(){$(document).trigger("bootstrap:before"),CONFIG.fastclick&&NexT.utils.isMobile()&&window.FastClick.attach(document.body),CONFIG.lazyload&&NexT.utils.lazyLoadPostsImages(),NexT.utils.registerESCKeyEvent(),NexT.utils.registerBackToTop(),$(".site-nav-toggle button").on("click",function(){var e=$(".site-nav"),t=e.hasClass("site-nav-on"),o=t?"slideUp":"slideDown",a=t?"removeClass":"addClass";e.stop()[o]("fast",function(){e[a]("site-nav-on")})}),CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.tabs&&NexT.utils.registerTabsTag(),NexT.utils.embeddedVideoTransformer(),NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar),$(document).trigger("motion:before"),CONFIG.motion.enable&&NexT.motion.integrator.bootstrap(),$(document).trigger("bootstrap:after")});
//rebuild by neat 