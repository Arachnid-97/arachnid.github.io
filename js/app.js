// build time:Tue Jan 10 2023 20:21:04 GMT+0800 (中国标准时间)
var e={version:"0.2.5",hostname:"https://arachnid.cc",root:"/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},darkmode:false,auto_scroll:true,js:{valine:"js/MiniValine.min.js",chart:"https://unpkg.com/frappe-charts@1.5.0/dist/frappe-charts.min.iife.js",copy_tex:"https://unpkg.com/katex@0.12.0/dist/contrib/copy-tex.min.js",fancybox:"https://unpkg.com/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"},css:{valine:"css/comment.css",katex:"https://unpkg.com/katex@0.12.0/dist/katex.min.css",mermaid:"css/mermaid.css",fancybox:"https://unpkg.com/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"},loader:{start:true,"switch":false},search:{path:"search.xml"},valine:{appId:"e7se2hR0plU3o56eyaeVFfmg-MdYXbMMI",appKey:"hsxEFrPYQHhSctO1BPB4CHq5",placeholder:"💪请遵守评价礼仪, 禁止恶意评价\n🤣一起来玩啊, 留下你的足迹吧\n⚠️公开网络, 注意隐私信息",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,NoRecordIP:true,serverURLs:"https://cloud.arachnid.cc",powerMode:true,tagMeta:{visitor:"新朋友",master:"博主",friend:"小伙伴",investor:"金主粑粑"},tagColor:{master:"var(--color-orange)",friend:"var(--color-aqua)",investor:"var(--color-pink)"},tagMember:{master:["1b4667a96bae271de6775d323ac4ad4d"],friend:null,investor:["12d86e152d24a9d55ba56c6cd89cf90e"]}},quicklink:{timeout:3e3,priority:true},audio:["https://music.163.com/#/playlist?id=2902118194"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const a=function(){return u("main > .inner").offsetHeight};const n=function(e,t,a){if(a){t()}else{var n=document.createElement("script");n.onload=n.onreadystatechange=function(e,a){if(a||!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null;n=undefined;if(!a&&t)setTimeout(t,0)}};n.src=e;document.head.appendChild(n)}};const i=function(t,a){var n=e[t][a];if(n.indexOf("npm")>-1||n.indexOf("gh")>-1||n.indexOf("combine")>-1)return"//cdn.jsdelivr.net/"+n;if(n.indexOf("http")>-1)return n;return v+n};const r=function(e,t,a){if(LOCAL[e]){n(i("js",e),t||function(){window[e]=true},a||window[e])}};const s=function(e,t){if(window["css"+e])return;if(LOCAL[e]){document.head.createChild("link",{rel:"stylesheet",href:i("css",e)});window["css"+e]=true}};const o=function(e){var t=e.text||e.textContent||e.innerHTML||"";var a=e.parentNode;a.removeChild(e);var n=document.createElement("script");if(e.id){n.id=e.id}if(e.className){n.className=e.className}if(e.type){n.type=e.type}if(e.src){n.src=e.src;n.async=false}if(e.dataset.pjax!==undefined){n.dataset.pjax=""}if(t!==""){n.appendChild(document.createTextNode(t))}a.appendChild(n)};const c=function(e,t,a){var n={targets:typeof t=="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||(typeof e=="number"?e:e?e.top()+document.documentElement.scrollTop-R:0),complete:function(){a&&a()}};anime(n)};const l=function(e,t,a){var n={};var i="none";switch(t){case 0:n={opacity:[1,0]};break;case 1:n={opacity:[0,1]};i="block";break;case"bounceUpIn":n={begin:function(t){e.display("block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]};i="block";break;case"shrinkIn":n={begin:function(t){e.display("block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1};i="block";break;case"slideRightIn":n={begin:function(t){e.display("block")},translateX:[100,0],opacity:[0,1]};i="block";break;case"slideRightOut":n={translateX:[0,100],opacity:[1,0]};break;default:n=t;i=t.display;break}anime(Object.assign({targets:e,duration:200,easing:"linear"},n)).finished.then(function(){e.display(i);a&&a()})};const d={get:function(e){return localStorage.getItem(e)},set:function(e,t){localStorage.setItem(e,t);return t},del:function(e){localStorage.removeItem(e)}};const u=function(e,t){t=t||document;if(e.indexOf("#")===0){return t.getElementById(e.replace("#",""))}return t.querySelector(e)};u.all=function(e,t){t=t||document;return t.querySelectorAll(e)};u.each=function(e,t,a){return u.all(e,a).forEach(t)};Object.assign(HTMLElement.prototype,{createChild:function(e,t,a){var n=document.createElement(e);Object.assign(n,t);switch(a){case"after":this.insertAfter(n);break;case"replace":this.innerHTML="";default:this.appendChild(n)}return n},wrap:function(e){var t=document.createElement("div");Object.assign(t,e);this.parentNode.insertBefore(t,this);this.parentNode.removeChild(this);t.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t===null){return this.removeAttribute(e)}if(t){this.setAttribute(e,t);return this}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){if(e==null){return this.style.display}else{this.style.display=e;return this}},child:function(e){return u(e,this)},find:function(e){return u.all(e,this)},_class:function(e,t,a){var n=t.indexOf(" ")?t.split(" "):[t];var i=this;n.forEach(function(t){if(e=="toggle"){i.classList.toggle(t,a)}else{i.classList[e](t)}})},addClass:function(e){this._class("add",e);return this},removeClass:function(e){this._class("remove",e);return this},toggleClass:function(e,t){this._class("toggle",e,t);return this},hasClass:function(e){return this.classList.contains(e)}});var f=null;const h=/mobile/i.test(window.navigator.userAgent);const p=function(e,t){var a={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause":function(t){if(i.paused){e.player.play()}else{e.player.pause()}},music:function(e){if(r.el.hasClass("show")){r.hide()}else{r.el.addClass("show");s.scroll().title()}}}},n={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(a){var n=new RegExp(a[0]);var i=n.exec(e);if(i!==null){t=[a[1],a[2],i[1]]}});return t},fetch:function(e){var t=[];return new Promise(function(a,i){e.forEach(function(e){var i=n.parse(e);if(i[0]){var r=JSON.stringify(i);var s=d.get(r);if(s){t.push.apply(t,JSON.parse(s));a(t)}else{fetch("https://api.i-meto.com/meting/api?server="+i[0]+"&type="+i[1]+"&id="+i[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){d.set(r,JSON.stringify(e));t.push.apply(t,e);a(t)}).catch(function(e){})}}else{t.push(e);a(t)}})})},secondToTime:function(e){var t=function(e){return isNaN(e)?"00":e<10?"0"+e:""+e};var a=Math.floor(e/3600);var n=Math.floor((e-a*3600)/60);var i=Math.floor(e-a*3600-n*60);return(a>0?[a,n,i]:[n,i]).map(t).join(":")},nameMap:{dragStart:h?"touchstart":"mousedown",dragMove:h?"touchmove":"mousemove",dragEnd:h?"touchend":"mouseup"}},i=null;e.player={_id:n.random(999999),group:true,load:function(e){var t="";var a=this;if(e&&e.length>0){if(this.options.rawList!==e){this.options.rawList=e;s.clear()}}else{t="none";this.pause()}for(var n in g.el){g.el[n].display(t)}return this},fetch:function(){var e=this;return new Promise(function(t,a){if(s.data.length>0){t()}else{if(e.options.rawList){var i=[];e.options.rawList.forEach(function(t,a){i.push(new Promise(function(i,r){var o=a;var c;if(!t.list){o=0;e.group=false;c=[t]}else{e.group=true;c=t.list}n.fetch(c).then(function(e){s.add(o,e);i()})}))});Promise.all(i).then(function(){t(true)})}}}).then(function(t){if(t){s.create();v.create();e.mode()}})},mode:function(){var e=s.data.length;if(!e||s.errnum==e)return;var t=v.step=="next"?1:-1;var a=function(){var a=s.index+t;if(a>e||a<0){a=v.step=="next"?0:e-1}s.index=a};var i=function(){var t=n.random(e);if(s.index!==t){s.index=t}else{a()}};switch(this.options.mode){case"random":i();break;case"order":a();break;case"loop":if(v.step)a();if(s.index==-1)i();break}this.init()},"switch":function(e){if(typeof e=="number"&&e!=s.index&&s.current()&&!s.current().error){s.index=e;this.init()}},init:function(){var e=s.current();if(!e||e["error"]){this.mode();return}var t=false;if(!i.paused){t=true;this.stop()}i.attr("src",e.url);i.attr("title",e.name+" - "+e.artist);this.volume(d.get("_PlayerVolume")||"0.7");this.muted(d.get("_PlayerMuted"));p.create();if(this.options.type=="audio")l.create();if(t==true){this.play()}},play:function(){f&&f.player.pause();if(s.current().error){this.mode();return}var e=this;i.play().then(function(){s.scroll()}).catch(function(e){})},pause:function(){i.pause();document.title=y},stop:function(){i.pause();i.currentTime=0;document.title=y},seek:function(e){e=Math.max(e,0);e=Math.min(e,i.duration);i.currentTime=e;p.update(e/i.duration)},muted:function(e){if(e=="muted"){i.muted=e;d.set("_PlayerMuted",e);v.update(0)}else{d.del("_PlayerMuted");i.muted=false;v.update(i.volume)}},volume:function(e){if(!isNaN(e)){v.update(e);d.set("_PlayerVolume",e);i.volume=e}},mini:function(){r.hide()}};var r={el:null,create:function(){if(this.el)return;this.el=e.createChild("div",{className:"player-info",innerHTML:(e.player.options.type=="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after");l.el=this.el.child(".preview");s.el=this.el.child(".playlist");v.el=this.el.child(".controller")},hide:function(){var e=this.el;e.addClass("hide");window.setTimeout(function(){e.removeClass("show hide")},300)}};var s={el:null,data:[],index:-1,errnum:0,add:function(e,t){var a=this;t.forEach(function(t,n){t.group=e;t.name=t.name||t.title||"Meida name";t.artist=t.artist||t.author||"Anonymous";t.cover=t.cover||t.pic;t.type=t.type||"normal";a.data.push(t)})},clear:function(){this.data=[];this.el.innerHTML="";if(this.index!==-1){this.index=-1;e.player.fetch()}},create:function(){var t=this.el;this.data.map(function(a,n){if(a.el)return;var r="list-"+e.player._id+"-"+a.group;var o=u("#"+r);if(!o){o=t.createChild("div",{id:r,className:e.player.group?"tab":"",innerHTML:"<ol></ol>"});if(e.player.group){o.attr("data-title",e.player.options.rawList[a.group]["title"]).attr("data-id",e.player._id)}}a.el=o.child("ol").createChild("li",{title:a.name+" - "+a.artist,innerHTML:'<span class="info"><span>'+a.name+"</span><span>"+a.artist+"</span></span>",onclick:function(t){var a=t.currentTarget;if(s.index===n&&p.el){if(i.paused){e.player.play()}else{e.player.seek(i.duration*p.percent(t,a))}return}e.player.switch(n);e.player.play()}});return a});he()},current:function(){return this.data[this.index]},scroll:function(){var e=this.current();var t=this.el.child("li.active");t&&t.removeClass("active");var a=this.el.child(".tab.active");a&&a.removeClass("active");t=this.el.find(".nav li")[e.group];t&&t.addClass("active");a=this.el.find(".tab")[e.group];a&&a.addClass("active");c(e.el,e.el.offsetTop);return this},title:function(){if(i.paused)return;var e=this.current();document.title="Now Playing..."+e["name"]+" - "+e["artist"]+" | "+y},error:function(){var e=this.current();e.el.removeClass("current").addClass("error");e.error=true;this.errnum++}};var o={el:null,data:null,index:0,create:function(e){var t=s.index;var a=this;var n=s.current().lrc;var i=function(n){if(t!==s.index)return;a.data=a.parse(n);var i="";a.data.forEach(function(e,t){i+="<p"+(t===0?' class="current"':"")+">"+e[1]+"</p>"});a.el=e.createChild("div",{className:"inner",innerHTML:i},"replace");a.index=0};if(n.startsWith("http"))this.fetch(n,i);else i(n)},update:function(e){if(!this.data)return;if(this.index>this.data.length-1||e<this.data[this.index][0]||(!this.data[this.index+1]||e>=this.data[this.index+1][0])){for(var t=0;t<this.data.length;t++){if(e>=this.data[t][0]&&(!this.data[t+1]||e<this.data[t+1][0])){this.index=t;var a=-(this.index-1);this.el.style.transform="translateY("+a+"rem)";this.el.style.webkitTransform="translateY("+a+"rem)";this.el.getElementsByClassName("current")[0].removeClass("current");this.el.getElementsByTagName("p")[t].addClass("current")}}}},parse:function(e){if(e){e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["});const t=e.split("\n");var a=[];const n=t.length;for(var i=0;i<n;i++){const r=t[i].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g);const s=t[i].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(r){const o=r.length;for(var c=0;c<o;c++){const l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(r[c]);const d=l[1]*60;const u=parseInt(l[2]);const f=l[4]?parseInt(l[4])/((l[4]+"").length===2?100:1e3):0;const h=d+u+f;a.push([h,s])}}}a=a.filter(function(e){return e[1]});a.sort(function(e,t){return e[0]-t[0]});return a}else{return[]}},fetch:function(e,t){fetch(e).then(function(e){return e.text()}).then(function(e){t(e)}).catch(function(e){})}};var l={el:null,create:function(){var t=s.current();this.el.innerHTML='<div class="cover"><div class="disc"><img src="'+t.cover+'" class="blur" /></div></div>'+'<div class="info"><h4 class="title">'+t.name+"</h4><span>"+t.artist+"</span>"+'<div class="lrc"></div></div>';this.el.child(".cover").addEventListener("click",e.player.options.events["play-pause"]);o.create(this.el.child(".lrc"))}};var p={el:null,bar:null,create:function(){var e=s.current().el;if(e){if(this.el){this.el.parentNode.removeClass("current").removeEventListener(n.nameMap.dragStart,this.drag);this.el.remove()}this.el=e.createChild("div",{className:"progress"});this.el.attr("data-dtime",n.secondToTime(0));this.bar=this.el.createChild("div",{className:"bar"});e.addClass("current");e.addEventListener(n.nameMap.dragStart,this.drag);s.scroll()}},update:function(e){this.bar.width(Math.floor(e*100)+"%");this.el.attr("data-ptime",n.secondToTime(e*i.duration))},seeking:function(e){if(e)this.el.addClass("seeking");else this.el.removeClass("seeking")},percent:function(e,t){var a=((e.clientX||e.changedTouches[0].clientX)-t.left())/t.width();a=Math.max(a,0);return Math.min(a,1)},drag:function(t){t.preventDefault();var a=s.current().el;var r=function(e){e.preventDefault();var t=p.percent(e,a);p.update(t);o.update(t*i.duration)};var c=function(t){t.preventDefault();a.removeEventListener(n.nameMap.dragEnd,c);a.removeEventListener(n.nameMap.dragMove,r);var s=p.percent(t,a);p.update(s);e.player.seek(s*i.duration);i.disableTimeupdate=false;p.seeking(false)};i.disableTimeupdate=true;p.seeking(true);a.addEventListener(n.nameMap.dragMove,r);a.addEventListener(n.nameMap.dragEnd,c)}};var v={el:null,btns:{},step:"next",create:function(){if(!e.player.options.controls)return;var t=this;e.player.options.controls.forEach(function(a){if(t.btns[a])return;var r={onclick:function(n){t.events[a]?t.events[a](n):e.player.options.events[a](n)}};switch(a){case"volume":r.className=" "+(i.muted?"off":"on");r.innerHTML='<div class="bar"></div>';r["on"+n.nameMap.dragStart]=t.events["volume"];r.onclick=null;break;case"mode":r.className=" "+e.player.options.mode;break;default:r.className="";break}r.className=a+r.className+" btn";t.btns[a]=t.el.createChild("div",r)});t.btns["volume"].bar=t.btns["volume"].child(".bar")},events:{mode:function(t){switch(e.player.options.mode){case"loop":e.player.options.mode="random";break;case"random":e.player.options.mode="order";break;default:e.player.options.mode="loop"}v.btns["mode"].className="mode "+e.player.options.mode+" btn";d.set("_PlayerMode",e.player.options.mode)},volume:function(t){t.preventDefault();var a=t.currentTarget;var r=false;var s=function(t){t.preventDefault();e.player.volume(v.percent(t,a));r=true};var o=function(t){t.preventDefault();a.removeEventListener(n.nameMap.dragEnd,o);a.removeEventListener(n.nameMap.dragMove,s);if(r){e.player.muted();e.player.volume(v.percent(t,a))}else{if(i.muted){e.player.muted();e.player.volume(i.volume)}else{e.player.muted("muted");v.update(0)}}};a.addEventListener(n.nameMap.dragMove,s);a.addEventListener(n.nameMap.dragEnd,o)},backward:function(t){v.step="prev";e.player.mode()},forward:function(t){v.step="next";e.player.mode()}},update:function(e){v.btns["volume"].className="volume "+(!i.muted&&e>0?"on":"off")+" btn";v.btns["volume"].bar.width(Math.floor(e*100)+"%")},percent:function(e,t){var a=((e.clientX||e.changedTouches[0].clientX)-t.left())/t.width();a=Math.max(a,0);return Math.min(a,1)}};var m={onerror:function(){s.error();e.player.mode()},ondurationchange:function(){if(i.duration!==1){p.el.attr("data-dtime",n.secondToTime(i.duration))}},onloadedmetadata:function(){e.player.seek(0);p.el.attr("data-dtime",n.secondToTime(i.duration))},onplay:function(){e.parentNode.addClass("playing");Q(this.attr("title"));f=e},onpause:function(){e.parentNode.removeClass("playing");f=null},ontimeupdate:function(){if(!this.disableTimeupdate){p.update(this.currentTime/this.duration);o.update(this.currentTime)}},onended:function(t){e.player.mode();e.player.play()}};var g={el:{},create:function(){if(!e.player.options.btns)return;var t=this;e.player.options.btns.forEach(function(a){if(t.el[a])return;t.el[a]=e.createChild("div",{className:a+" btn",onclick:function(t){e.player.fetch().then(function(){e.player.options.events[a](t)})}})})}};var b=function(t){if(e.player.created)return;e.player.options=Object.assign(a,t);e.player.options.mode=d.get("_PlayerMode")||e.player.options.mode;g.create();i=e.createChild(e.player.options.type,m);r.create();e.parentNode.addClass(e.player.options.type);e.player.created=true};b(t);return e};var v=e.statics.indexOf("//")>0?e.statics:e.root;var m={x:"undefined",y:"undefined"};var g=0;var y,b;const w=document.getElementsByTagName("body")[0];const C=document.documentElement;const x=u("#container");const k=u("#loading");const L=u("#nav");const E=u("#header");const T=L.child(".toggle");const N=u("#quick");const M=u("#sidebar");const O=u("#brand");var j=u("#tool"),I,H,S,A;var q=u("#search");var R,_,D;var P=window.innerHeight;var B=window.innerWidth;var Y=0,z=window.location.href;var W;const U=lozad("img, [data-background-image]",{loaded:function(e){e.addClass("lozaded")}});const F={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");k.attr("style","display:block");F.lock=false},hide:function(t){if(!e.loader.start)t=-1;this.timer=setTimeout(this.vanish,t||3e3)},vanish:function(){if(F.lock)return;if(e.loader.start)l(k,0);document.body.addClass("loaded");F.lock=true}};const X=function(e){var t=u(".theme .ic");if(e=="dark"){C.attr("data-theme",e);t.removeClass("i-sun");t.addClass("i-moon")}else{C.attr("data-theme",null);t.removeClass("i-moon");t.addClass("i-sun")}};const V=function(e){if(C.attr("data-theme")=="dark")e="#222";u('meta[name="theme-color"]').attr("content",e)};const $=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){X("dark")}else{X()}});var t=d.get("theme");if(t){X(t)}else{if(e.darkmode){X("dark")}}u(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");var a=w.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'});var n=function(){l(a,{delay:2500,opacity:0},function(){w.removeChild(a)})};if(t.hasClass("i-sun")){var i=function(){a.addClass("dark");X("dark");d.set("theme","dark");n()}}else{a.addClass("dark");var i=function(){a.removeClass("dark");X();d.set("theme","light");n()}}l(a,1,function(){setTimeout(i,210)})})};const J=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":u('[rel="icon"]').attr("href",v+e.favicon.hidden);document.title=LOCAL.favicon.hide;if(e.loader.switch)F.show();clearTimeout(b);break;case"visible":u('[rel="icon"]').attr("href",v+e.favicon.normal);document.title=LOCAL.favicon.show;if(e.loader.switch)F.hide(1e3);b=setTimeout(function(){document.title=y},2e3);break}})};const Q=function(e){if(!e)return;var t=w.createChild("div",{innerHTML:e,className:"tip"});setTimeout(function(){t.addClass("hide");setTimeout(function(){w.removeChild(t)},300)},3e3)};const K=function(e){R=L.height();_=E.height();D=_+u("#waves").height();if(B!=window.innerWidth)ae(null,1);P=window.innerHeight;B=window.innerWidth;M.child(".panels").height(P+"px")};const G=function(e){var t=window.innerHeight;var n=a();var i=n>t?n-t:document.body.scrollHeight-t;var r=window.pageYOffset>_;var s=window.pageYOffset>0;if(r){V("#FFF")}else{V("#222")}L.toggleClass("show",r);j.toggleClass("affix",s);O.toggleClass("affix",s);M.toggleClass("affix",window.pageYOffset>D&&document.body.offsetWidth>991);if(typeof m.y=="undefined"){m.y=window.pageYOffset}g=m.y-window.pageYOffset;if(g<0){L.removeClass("up");L.toggleClass("down",r)}else if(g>0){L.removeClass("down");L.toggleClass("up",r)}else{}m.y=window.pageYOffset;var o=Math.round(Math.min(100*window.pageYOffset/i,100))+"%";H.child("span").innerText=o;u(".percent").width(o)};const Z=function(){if(e.auto_scroll)d.set(z,m.y)};const ee=function(t){var a=window.location.hash;var n=null;if(Y){d.del(z);return}if(a)n=u(decodeURI(a));else{n=e.auto_scroll?parseInt(d.get(z)):0}if(n){c(n);Y=1}if(t&&a&&!Y){c(n);Y=1}};const te=function(e,t){var a=w.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:true,value:e});const n=document.getSelection();const i=n.rangeCount>0?n.getRangeAt(0):false;a.select();a.setSelectionRange(0,e.length);a.readOnly=false;var r=document.execCommand("copy");t&&t(r);a.blur();if(i){n.removeAllRanges();n.addRange(i)}w.removeChild(a)};const ae=function(e,t){if(M.hasClass("on")){M.removeClass("on");T.removeClass("close");if(t){M.style=""}else{l(M,"slideRightOut")}}else{if(t){M.style=""}else{l(M,"slideRightIn",function(){M.addClass("on");T.addClass("close")})}}};const ne=function(){var e=M.child(".inner");var t=M.find(".panel");if(M.child(".tab")){e.removeChild(M.child(".tab"))}var a=document.createElement("ul"),n="active";a.className="tab";["contents","related","overview"].forEach(function(e){var t=M.child(".panel."+e);if(t.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){if(e=="contents"){A.display("none")}return}if(e=="contents"){A.display("")}var i=document.createElement("li");var r=document.createElement("span");var s=document.createTextNode(t.attr("data-title"));r.appendChild(s);i.appendChild(r);i.addClass(e+" item");if(n){t.addClass(n);i.addClass(n)}else{t.removeClass("active")}i.addEventListener("click",function(e){var t=event.currentTarget;if(t.hasClass("active"))return;M.find(".tab .item").forEach(function(e){e.removeClass("active")});M.find(".panel").forEach(function(e){e.removeClass("active")});M.child(".panel."+t.className.replace(" item","")).addClass("active");t.addClass("active")});a.appendChild(i);n=""});if(a.childNodes.length>1){e.insertBefore(a,e.childNodes[0]);M.child(".panels").style.paddingTop=""}else{M.child(".panels").style.paddingTop=".625rem"}};const ie=function(){var t=u.all(".contents li");if(t.length<1){return}var a=Array.prototype.slice.call(t)||[];var n=null;a=a.map(function(t,a){var i=t.child("a.toc-link");var s=u(decodeURI(i.attr("href")));if(!s)return;var o=s.child("a.anchor");var l=function(e){e.preventDefault();var t=u(decodeURI(e.currentTarget.attr("href")));n=a;c(t,null,function(){r(a);n=null})};i.addEventListener("click",l);o&&o.addEventListener("click",function(t){l(t);te(e.hostname+"/"+LOCAL.path+t.currentTarget.attr("href"))});return s});var i=M.child(".contents.panel");var r=function(e,n){var r=t[e];if(!r)return;if(r.hasClass("current")){return}u.each(".toc .active",function(e){e&&e.removeClass("active current")});a.forEach(function(e){e&&e.removeClass("active")});r.addClass("active current");a[e]&&a[e].addClass("active");var s=r.parentNode;while(!s.matches(".contents")){if(s.matches("li")){s.addClass("active");var o=u(s.child("a.toc-link").attr("href"));if(o){o.addClass("active")}}s=s.parentNode}if(getComputedStyle(M).display!="none"&&i.hasClass("active")){c(i,r.offsetTop-i.offsetHeight/4)}};var s=function(e){var t=0;var n=e[t];if(n.boundingClientRect.top>0){t=a.indexOf(n.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){n=e[t]}else{return a.indexOf(n.target)}}return a.indexOf(n.target)};var o=function(){if(!window.IntersectionObserver)return;var e=new IntersectionObserver(function(e,t){var a=s(e)+(g<0?1:0);if(n===null){r(a)}},{rootMargin:"0px 0px -100% 0px",threshold:0});a.forEach(function(t){t&&e.observe(t)})};o()};const re=function(){c(0)};const se=function(){c(parseInt(x.height()))};const oe=function(){c(u("#comments"))};const ce=function(){u.each(".menu .item:not(.title)",function(t){var a=t.child("a[href]");var n=t.parentNode.parentNode;if(!a)return;var i=a.pathname===location.pathname||a.pathname===location.pathname.replace("index.html","");var r=!e.root.startsWith(a.pathname)&&location.pathname.startsWith(a.pathname);var s=a.hostname===location.hostname&&(i||r);t.toggleClass("active",s);if(t.parentNode.child(".active")&&n.hasClass("dropdown")){n.removeClass("active").addClass("expand")}else{n.removeClass("expand")}})};const le=function(){if(!u(".index.wrap"))return;if(!window.IntersectionObserver){u.each(".index.wrap article.item, .index.wrap section.item",function(e){if(e.hasClass("show")===false){e.addClass("show")}})}else{var e=new IntersectionObserver(function(t){t.forEach(function(t){if(t.target.hasClass("show")){e.unobserve(t.target)}else{if(t.isIntersecting||t.intersectionRatio>0){t.target.addClass("show");e.unobserve(t.target)}}})},{root:null,threshold:[.3]});u.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)});u(".index.wrap .item:first-child").addClass("show")}u.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){if(u(".cards .item.active")){u(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})};const de=function(){u.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const ue=function(e){if(u(e+" .md img")){s("fancybox");r("fancybox",function(){var t=jQuery.noConflict();u.each(e+" p.gallery",function(e){var t=document.createElement("div");t.className="gallery";t.attr("data-height",e.attr("data-height")||220);t.innerHTML=e.innerHTML.replace(/<br>/g,"");e.parentNode.insertBefore(t,e);e.remove()});u.each(e+" .md img:not(.emoji):not(.vemoji)",function(e){var a=t(e);var n,i="image-info";if(!a.is("a img")){var r=a.attr("data-src")||a.attr("src");a.data("safe-src",r);var s=a.wrap('<a class="fancybox" href="'+r+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");if(!a.is(".gallery img")){s.attr("data-fancybox","default").attr("rel","default")}else{i="jg-caption"}}if(n=e.attr("title")){s.attr("data-caption",n);var o=document.createElement("span");var c=document.createTextNode(n);o.appendChild(c);o.addClass(i);e.insertAfter(o)}});u.each(e+" div.gallery",function(e,a){t(e).justifiedGallery({rowHeight:t(e).data("height")||120,rel:"gallery-"+a}).on("jg.complete",function(){t(this).find("a").each(function(e,t){t.attr("data-fancybox","gallery-"+a)})})});t.fancybox.defaults.hash=false;t(e+" .fancybox").fancybox({loop:true,helpers:{overlay:{locked:false}}})},window.jQuery)}};const fe=function(){pe();if(!u(".md"))return;ue(".post.block");u(".post.block").oncopy=function(e){Q(LOCAL.copyright);if(LOCAL.nocopy){e.preventDefault();return}var t=u("#copyright");if(window.getSelection().toString().length>30&&t){e.preventDefault();var a="# "+t.child(".author").innerText;var n="# "+t.child(".link").innerText;var i="# "+t.child(".license").innerText;var r=a+"<br>"+n+"<br>"+i+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>");var s=a+"\n"+n+"\n"+i+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData){e.clipboardData.setData("text/html",r);e.clipboardData.setData("text/plain",s)}else if(window.clipboardData){return window.clipboardData.setData("text",s)}}};u.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.addClass("ruby")});u.each("ol[start]",function(e){e.style.counterReset="counter "+parseInt(e.attr("start")-1)});u.each(".md table",function(e){e.wrap({className:"table-container"})});u.each(".highlight > .table-container",function(e){e.className="code-container"});u.each("figure.highlight",function(e){var t=e.child(".code-container");var a=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var n=e.child(".copy-btn");if(LOCAL.nocopy){n.remove()}else{n.addEventListener("click",function(e){var a=e.currentTarget;var n="",i="";t.find("pre").forEach(function(e){i+=n+e.innerText;n="\n"});te(i,function(e){a.child(".ic").className=e?"ic i-check":"ic i-times";a.blur();Q(LOCAL.copyright)})});n.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},1e3)})}var i=e.child(".breakline-btn");i.addEventListener("click",function(t){var a=t.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");a.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");a.child(".ic").className="ic i-align-justify"}});var r=e.child(".fullscreen-btn");var s=function(){e.removeClass("fullscreen");e.scrollTop=0;w.removeClass("fullscreen");r.child(".ic").className="ic i-expand"};var o=function(t){var a=t.currentTarget;if(e.hasClass("fullscreen")){s();u&&u();c(e)}else{e.addClass("fullscreen");w.addClass("fullscreen");r.child(".ic").className="ic i-compress";d&&d()}};r.addEventListener("click",o);a&&a.addEventListener("click",o);if(t&&t.find("tr").length>15){t.style.maxHeight="300px";t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var l=t.child(".show-btn");var d=function(){t.style.maxHeight="";l.addClass("open")};var u=function(){t.style.maxHeight="300px";l.removeClass("open")};l.addEventListener("click",function(e){if(l.hasClass("open")){s();u();c(t)}else{d()}})}});u.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});u.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=u("#qr");if(t.display()==="inline-flex"){l(t,0)}else{l(t,1,function(){t.display("inline-flex")})}})});u.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}});
});u.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})});u.each(".quiz > p:first-child",function(e){var t=e.parentNode;var a="choice";if(t.hasClass("true")||t.hasClass("false"))a="true_false";if(t.hasClass("multi"))a="multiple";if(t.hasClass("fill"))a="gap_fill";if(t.hasClass("essay"))a="essay";e.attr("data-type",LOCAL.quiz[a])});u.each(".quiz .mistake",function(e){e.attr("data-type",LOCAL.quiz.mistake)});u.each("div.tags a",function(e){e.className=["primary","success","info","warning","danger"][Math.floor(Math.random()*5)]});u.each(".md div.player",function(e){p(e,{type:e.attr("data-type"),mode:"order",btns:[]}).player.load(JSON.parse(e.attr("data-src"))).fetch()})};const he=function(){var e;u.each("div.tab",function(t,a){if(t.attr("data-ready"))return;var n=t.attr("data-id");var i=t.attr("data-title");var r=u("#"+n);if(!r){r=document.createElement("div");r.className="tabs";r.id=n;r.innerHTML='<div class="show-btn"></div>';var s=r.child(".show-btn");s.addEventListener("click",function(e){c(r)});t.parentNode.insertBefore(r,t);e=true}else{e=false}var o=r.child(".nav ul");if(!o){o=r.createChild("div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul")}var l=o.createChild("li",{innerHTML:i});if(e){l.addClass("active");t.addClass("active")}l.addEventListener("click",function(e){var a=e.currentTarget;r.find(".active").forEach(function(e){e.removeClass("active")});t.addClass("active");a.addClass("active")});r.appendChild(t);t.attr("data-ready",true)})};const pe=function(){var e=u("#comments");if(!e){S.display("none");return}else{S.display("")}if(!window.IntersectionObserver){s("valine")}else{var t=new IntersectionObserver(function(e,t){var a=e[0];s("valine");if(a.isIntersecting||a.intersectionRatio>0){l(u("#comments"),"bounceUpIn");t.disconnect()}});t.observe(e)}};const ve=function(t){if(e.search===null)return;if(!q){q=w.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})}var a=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var t=u(".search-input");if(t.value){e.search()}}});a.on("render",function(){t.refresh(u("#search-hits"))});a.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,searchOnEnterKeyPressOnly:true,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var a=t.categories?"<span>"+t.categories.join('<i class="ic i-angle-right"></i>')+"</span>":"";return'<a href="'+e.root+t.path+'">'+a+"<b>"+t._highlightResult.title.value+"</b><br>"+t._snippetResult.contentStrip.value+"<br>( 匹配字词 : "+t._highlightResult.contentStrip.matchedWords+" ) | ( 匹配等级 : "+t._highlightResult.contentStrip.matchLevel+" )"+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);a.start();u.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";l(q,"shrinkIn",function(){u(".search-input").focus()})})});const n=function(){document.body.style.overflow="";l(q,0)};q.addEventListener("click",function(e){if(e.target===q){n()}});u(".close-btn").addEventListener("click",n);window.addEventListener("pjax:success",n);window.addEventListener("keyup",function(e){if(e.key==="Escape"){n()}})};const me=function(){u.each(".overview .menu > .item",function(e){L.child(".menu").appendChild(e.cloneNode(true))});k.addEventListener("click",F.vanish);T.addEventListener("click",ae);u(".dimmer").addEventListener("click",ae);N.child(".down").addEventListener("click",se);N.child(".up").addEventListener("click",re);if(!j){j=E.createChild("div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})}I=j.child(".player");H=j.child(".back-to-top");S=j.child(".chat");A=j.child(".contents");H.addEventListener("click",re);S.addEventListener("click",oe);A.addEventListener("click",ae);p(I);u("main").addEventListener("click",function(){I.player.mini()})};const ge=function(){Z();if(M.hasClass("on")){l(M,function(){M.removeClass("on");T.removeClass("close")})}u("#main").innerHTML="";u("#main").appendChild(k.lastChild.cloneNode(true));c(0)};const ye=function(t){Y=0;z=window.location.href;s("katex");r("copy_tex");s("mermaid");r("chart");r("valine",function(){var t=Object.assign({},e.valine);t=Object.assign(t,LOCAL.valine||{});t.el="#comments";t.pathname=LOCAL.path;t.pjax=W;t.lazyload=U;new MiniValine(t);setTimeout(function(){ee(1);ue(".v")},1e3)},window.MiniValine);if(!t){u.each("script[data-pjax]",o)}y=document.title;K();ce();ne();ie();de();fe();he();I.player.load(LOCAL.audio||e.audio||{});F.hide();setTimeout(function(){ee()},500);le();U.observe()};const be=function(){me();W=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);J();$();window.addEventListener("scroll",G);window.addEventListener("resize",K);window.addEventListener("pjax:send",ge);window.addEventListener("pjax:success",ye);window.addEventListener("beforeunload",function(){Z()});ye(1)};window.addEventListener("DOMContentLoaded",be);console.log("%c Theme.Shoka v"+e.version+" %c https://shoka.lostyu.me/ ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
//rebuild by hrmmi 