// build time:Fri Jan 31 2020 19:10:18 GMT+0800 (GMT+08:00)
$(document).ready(function(){var i={lines:[],push:function(i){this.lines.push(i)},init:function(){this.lines.forEach(function(i){i.init()})},arrow:function(){this.lines.forEach(function(i){i.arrow()})},close:function(){this.lines.forEach(function(i){i.close()})}};function t(i){this.el=$(i.el);this.status=$.extend({},{init:{width:"100%",opacity:1,transform:"rotate(0deg)",top:0,left:0}},i.status);this.init=function(){this.transform("init")};this.arrow=function(){this.transform("arrow")};this.close=function(){this.transform("close")};this.transform=function(i){this.el.css(this.status[i])}}var e=CONFIG.sidebar.position!=="left";var s=new t({el:".sidebar-toggle-line-first",status:e?{arrow:{width:"50%",transform:"rotate(-45deg)",top:"2px"},close:{width:"100%",transform:"rotate(-45deg)",top:"5px"}}:{arrow:{width:"50%",transform:"rotate(45deg)",top:"2px",left:"50%"},close:{width:"100%",transform:"rotate(-45deg)",top:"5px",left:"0px"}}});var o=new t({el:".sidebar-toggle-line-middle",status:e?{arrow:{width:"90%"},close:{opacity:0}}:{arrow:{width:"90%",left:"2px"},close:{opacity:0,left:"0px"}}});var n=new t({el:".sidebar-toggle-line-last",status:e?{arrow:{width:"50%",transform:"rotate(45deg)",top:"-2px"},close:{width:"100%",transform:"rotate(45deg)",top:"-5px"}}:{arrow:{width:"50%",transform:"rotate(-45deg)",top:"-2px",left:"50%"},close:{width:"100%",transform:"rotate(45deg)",top:"-5px",left:"0px"}}});i.push(s);i.push(o);i.push(n);var a=CONFIG.sidebar.width||"320px";var r=200;var d={};var l={};var h={sidebarEl:$(".sidebar"),isSidebarVisible:false,init:function(){i.init();$("body").on("mousedown",this.mousedownHandler.bind(this)).on("mouseup",this.mouseupHandler.bind(this));$("#sidebar-dimmer").on("click",this.clickHandler.bind(this));$(".sidebar-toggle").on("click",this.clickHandler.bind(this)).on("mouseenter",this.mouseEnterHandler.bind(this)).on("mouseleave",this.mouseLeaveHandler.bind(this));this.sidebarEl.on("touchstart",this.touchstartHandler.bind(this)).on("touchend",this.touchendHandler.bind(this)).on("touchmove",function(i){i.preventDefault()});$(document).on("sidebar.isShowing",function(){NexT.utils.isDesktop()&&$("body").stop().animate(e?{"padding-right":a}:{"padding-left":a},r)})},mousedownHandler:function(i){d.X=i.pageX;d.Y=i.pageY},mouseupHandler:function(i){var t=i.pageX-d.X;var e=i.pageY-d.Y;if(this.isSidebarVisible&&Math.sqrt(t*t+e*e)<20&&$(i.target).is(".main")){this.clickHandler()}},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar();this.isSidebarVisible=!this.isSidebarVisible},mouseEnterHandler:function(){if(!this.isSidebarVisible){i.arrow()}},mouseLeaveHandler:function(){if(!this.isSidebarVisible){i.init()}},touchstartHandler:function(i){l.X=i.originalEvent.touches[0].clientX;l.Y=i.originalEvent.touches[0].clientY},touchendHandler:function(i){var t=i.originalEvent.changedTouches[0].clientX-l.X;var s=i.originalEvent.changedTouches[0].clientY-l.Y;if(Math.abs(s)<20&&(t>30&&e||t<-30&&!e)){this.clickHandler()}},showSidebar:function(){var t=this;i.close();if($.isFunction($("html").velocity)){this.sidebarEl.stop().velocity({width:a},{display:"block",duration:r,begin:function(){$(".sidebar .motion-element").not(".site-state").velocity(e?"transition.slideRightIn":"transition.slideLeftIn",{stagger:50,drag:true});$(".site-state").velocity(e?"transition.slideRightIn":"transition.slideLeftIn",{stagger:50,drag:true,display:"flex"})},complete:function(){t.sidebarEl.addClass("sidebar-active")}})}else{$(".sidebar .motion-element").show();this.sidebarEl.stop().animate({width:a,display:"block"},r,function(){t.sidebarEl.addClass("sidebar-active")})}this.sidebarEl.trigger("sidebar.isShowing")},hideSidebar:function(){NexT.utils.isDesktop()&&$("body").stop().animate(e?{"padding-right":0}:{"padding-left":0});this.sidebarEl.find(".motion-element").hide();this.sidebarEl.stop().animate({width:0,display:"none"}).removeClass("sidebar-active");i.init();if($(".post-toc-wrap")){if($(".site-overview-wrap").css("display")==="block"){$(".post-toc-wrap").removeClass("motion-element")}else{$(".post-toc-wrap").addClass("motion-element")}}}};h.init();function c(){var i=$("#footer").attr("position")?$(".container").height()+$("#footer").outerHeight(true):$(".container").height();if(i<window.innerHeight){$("#footer").css({position:"fixed",bottom:0,left:0,right:0}).attr("position","fixed")}else{$("#footer").removeAttr("style position")}}c();$(window).on("resize scroll",c)});
//rebuild by neat 