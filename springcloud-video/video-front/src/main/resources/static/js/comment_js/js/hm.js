(function(){var h={},mt={},c={id:"b3a3fc356d0af38b811a0ef8d50716b8",dm:["jq22.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:1,rp:[[18503, 2]],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'896E463E2A17F568',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var s=void 0,u=!0,w=null,x=!1;mt.cookie={};mt.cookie.set=function(a,b,d){var e;d.O&&(e=new Date,e.setTime(e.getTime()+d.O));document.cookie=a+"="+b+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(e?"; expires="+e.toGMTString():"")+(d.sc?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:w};
mt.cookie.Pb=function(a,b){try{var d="Hm_ck_"+ +new Date;mt.cookie.set(d,"is-cookie-enabled",{domain:a,path:b,O:s});var e="is-cookie-enabled"===mt.cookie.get(d)?"1":"0";mt.cookie.set(d,"",{domain:a,path:b,O:-1});return e}catch(f){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.wa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.K=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.g=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.J=function(a,b){var d=x;if(a==w||!mt.lang.d(a,"Array")||b===s)return d;if(Array.prototype.indexOf)d=-1!==a.indexOf(b);else for(var e=0;e<a.length;e++)if(a[e]===b){d=u;break}return d};mt.url={};mt.url.m=function(a,b){var d=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return d?d[3]:w};
mt.url.oc=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:w};mt.url.wb=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):w};mt.url.Q=function(a){return(a=mt.url.wb(a))?a.replace(/:\d+$/,""):a};mt.url.sa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):w};
(function(){var a=mt.lang,b=mt.url;mt.f={};mt.f.pa=function(d){return document.getElementById(d)};mt.f.La=function(d){if(!d)return w;try{d=String(d);if(0===d.indexOf("!HMCQ!"))return d;if(0===d.indexOf("!HMCC!"))return document.querySelector(d.substring(6,d.length));for(var e=d.split(">"),a=document.body,b=e.length-1;0<=b;b--)if(-1<e[b].indexOf("#")){var k=e[b].split("#")[1];(a=document.getElementById(k))||(a=document.getElementById(decodeURIComponent(k)));e=e.splice(b+1,e.length-(b+1));break}for(d=
0;a&&d<e.length;){var m=String(e[d]).toLowerCase();if(!("html"===m||"body"===m)){var b=0,p=e[d].match(/\[(\d+)\]/i),k=[];if(p)b=p[1]-1,m=m.split("[")[0];else if(1!==a.childNodes.length){for(var r=0,t=0,q=a.childNodes.length;t<q;t++){var v=a.childNodes[t];1===v.nodeType&&v.nodeName.toLowerCase()===m&&r++;if(1<r)return w}if(1!==r)return w}for(r=0;r<a.childNodes.length;r++)1===a.childNodes[r].nodeType&&a.childNodes[r].nodeName.toLowerCase()===m&&k.push(a.childNodes[r]);if(!k[b])return w;a=k[b]}d++}return a}catch(g){return w}};
mt.f.sa=function(a,e){var b=[],l=[];if(!a)return l;for(;a.parentNode!=w;){for(var k=0,m=0,p=a.parentNode.childNodes.length,r=0;r<p;r++){var t=a.parentNode.childNodes[r];if(t.nodeName===a.nodeName&&(k++,t===a&&(m=k),0<m&&1<k))break}if((p=""!==a.id)&&e){b.unshift("#"+encodeURIComponent(a.id));break}else p&&(p="#"+encodeURIComponent(a.id),p=0<b.length?p+">"+b.join(">"):p,l.push(p)),b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<k?"["+m+"]":""));a=a.parentNode}l.push(b.join(">"));return l};
mt.f.Ab=function(a){return(a=mt.f.sa(a,u))&&a.length?String(a[0]):""};mt.f.zb=function(a){return mt.f.sa(a,x)};mt.f.mc=function(a,e){for(e=e.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==e)return a;return w};mt.f.tb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.nc=function(a){var e={top:0,left:0};if(!a)return e;var b=mt.f.tb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect());return{top:e.top+(window.pageYOffset||b.scrollTop)-
(b.clientTop||0),left:e.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};mt.f.getAttribute=function(a,e){var b=a.getAttribute&&a.getAttribute(e)||w;if(!b&&a.attributes&&a.attributes.length)for(var l=a.attributes,k=l.length,m=0;m<k;m++)l[m].nodeName===e&&(b=l[m].nodeValue);return b};mt.f.Y=function(a){var e="document";a.tagName!==s&&(e=a.tagName);return e.toLowerCase()};mt.f.Db=function(b){var e="";b.textContent?e=a.trim(b.textContent):b.innerText&&(e=a.trim(b.innerText));e&&(e=e.replace(/\s+/g,
" ").substring(0,255));return e};mt.f.qa=function(d,e){var f;a.K(d)&&0===String(d).indexOf("!HMCQ!")?(f=String(d),f=b.m(document.location.href,f.substring(6,f.length))):a.K(d)||(f=mt.f.Y(d),"input"===f&&e&&("button"===d.type||"submit"===d.type)?f=a.trim(d.value)||"":"input"===f&&!e&&"password"!==d.type?f=a.trim(d.value)||"":"img"===f?(f=mt.f.getAttribute,f=f(d,"alt")||f(d,"title")||f(d,"src")):f="body"===f||"html"===f?["(hm-default-content-for-",f,")"].join(""):mt.f.Db(d));return String(f||"").substring(0,
255)};(function(){(mt.f.Ba=function(){function a(){if(!a.aa){a.aa=u;for(var e=0,b=l.length;e<b;e++)l[e]()}}function e(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(e,1);return}a()}var b=x,l=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,x);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!b)if(b=u,"complete"===document.readyState)a.aa=u;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",k,x),window.addEventListener("load",a,x);else if(document.attachEvent){document.attachEvent("onreadystatechange",k);window.attachEvent("onload",a);var l=x;try{l=window.frameElement==w}catch(p){}document.documentElement.doScroll&&l&&e()}})();return function(e){a.aa?e():l.push(e)}}()).aa=x})();return mt.f})();mt.event={};
mt.event.e=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(e){d.call(a,e)}):a.addEventListener&&a.addEventListener(b,d,x)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=x};
(function(){var a=mt.event;mt.h={};mt.h.Qa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.xb=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.Ub=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=
window.screen.colorDepth||0;mt.h.Z=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.h.R=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.h.orientation=0;(function(){function b(){var a=0;window.orientation!==s&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==s)&&(a=screen.orientation.angle);mt.h.orientation=
a}b();a.e(window,"orientationchange",b)})();return mt.h})();mt.o={};mt.o.parse=function(a){return(new Function("return ("+a+")"))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var e=d[a];if(e)return e;e=a.charCodeAt();return"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return a(e);case "boolean":return String(e);
default:if(e===w)return"null";if(e instanceof Array){var f=["["],d=e.length,k,m,p;for(m=0;m<d;m++)switch(p=e[m],typeof p){case "undefined":case "function":case "unknown":break;default:k&&f.push(","),f.push(mt.o.stringify(p)),k=1}f.push("]");return f.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+b(e.getMonth()+1)+"-"+b(e.getDate())+"T"+b(e.getHours())+":"+b(e.getMinutes())+":"+b(e.getSeconds())+'"';k=["{"];m=mt.o.stringify;for(d in e)if(Object.prototype.hasOwnProperty.call(e,d))switch(p=
e[d],typeof p){case "undefined":case "unknown":case "function":break;default:f&&k.push(","),f=1,k.push(m(d)+":"+m(p))}k.push("}");return k.join("")}}}();mt.localStorage={};mt.localStorage.ga=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return x}return u};
mt.localStorage.set=function(a,b,d){var e=new Date;e.setTime(e.getTime()+d||31536E6);try{window.localStorage?(b=e.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.ga()&&(mt.localStorage.l.expires=e.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),d=a.substring(0,b)-0;if(d&&d>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.ga())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(e){}return w};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.ga())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(d){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):w}catch(b){return w}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.Ya={};mt.Ya.log=function(a,b){var d=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=d;d.onload=function(){d.onload=w;d=window[e]=w;b&&b(a)};d.src=a};mt.Ca={};
mt.Ca.Eb=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return a};
mt.Ca.lc=function(a,b,d,e,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+d+'" height="'+e+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+d+'" height="'+e+'" src="'+b+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};
(function(){function a(){for(var a=x,d=document.getElementsByTagName("script"),e=d.length,e=100<e?100:e,f=0;f<e;f++){var l=d[f].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=u;break}}return a}return h.qb=a})();var A=h.qb;
h.z={pc:"http://tongji.baidu.com/hm-web/welcome/ico",Va:"hm.baidu.com/hm.gif",fb:/^(tongji|hmcdn).baidu.com$/,$a:"tongji.baidu.com",Ib:"hmmd",Jb:"hmpl",fc:"utm_medium",Hb:"hmkw",hc:"utm_term",Fb:"hmci",ec:"utm_content",Kb:"hmsr",gc:"utm_source",Gb:"hmcu",dc:"utm_campaign",L:0,H:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",xa:A()||"https:"===document.location.protocol?"https:":"http:",qc:0,jc:6E5,Qb:6E5,rc:5E3,kc:5,la:1024,ic:1,ca:2147483647,Za:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt".split(" "),
S:u,Ia:["a","input","button"],hb:{id:"data-hm-id",ka:"data-hm-class",Fa:"data-hm-xpath",content:"data-hm-content",Da:"data-hm-tag",link:"data-hm-link"},Ha:"data-hm-enabled",Ga:"data-hm-disabled",Rb:"https://hmcdn.baidu.com/static/tongji/plugins/",Ua:["UrlChangeTracker"]};(function(){var a={D:{},e:function(a,d){this.D[a]=this.D[a]||[];this.D[a].push(d)},I:function(a,d){this.D[a]=this.D[a]||[];for(var e=this.D[a].length,f=0;f<e;f++)this.D[a][f](d)}};return h.w=a})();
(function(){function a(a,e){var f=document.createElement("script");f.charset="utf-8";b.d(e,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=w,e()}:f.onload=function(){e()});f.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(f,l)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";if(h.c.b.nv){a=encodeURIComponent(document.referrer);try{window.sessionStorage?d.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)}catch(f){}}else try{a=(window.sessionStorage?d.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||""}catch(l){}return a}var b=mt.localStorage,d=mt.sessionStorage;return h.rb=a})();
(function(){var a=mt.cookie,b=mt.localStorage,d=mt.sessionStorage,e={getData:function(e){try{return a.get(e)||d.get(e)||b.get(e)}catch(l){}},setData:function(f,l,k){try{a.set(f,l,{domain:e.P(),path:e.X(),O:k}),k?b.set(f,l,k):d.set(f,l)}catch(m){}},Tb:function(f){try{a.set(f,"",{domain:e.P(),path:e.X(),O:-1}),d.remove(f),b.remove(f)}catch(l){}},T:function(a,e){a="."+a.replace(/:\d+/,"");e="."+e.replace(/:\d+/,"");var b=a.indexOf(e);return-1<b&&b+e.length===a.length},ba:function(a,e){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(e)},P:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(e.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},X:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&e.ba(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.ma=e})();
(function(){var a=mt.lang,b=mt.o,d=h.ma,e={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},f={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},l=["session","user"],k="Hm_up_"+c.id,m={init:function(){m.Nb()},Nb:function(){try{var p=b.parse(decodeURIComponent(d.getData(k)));a.d(p,"Object")&&(e.user=p)}catch(f){}},A:function(a){var b={};e[a]!==s&&(b=e[a]);a=this.ta();for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a},ta:function(){for(var a={},b,d=l.length-
1;0<=d;d--){b=e[l[d]];for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f])}return a},setProperty:function(d,f,k){var q=e[d];if(a.d(q,"Object")&&a.d(f,"Object")){for(var l in f)if(f.hasOwnProperty(l)){var g=a.g(String(l));if(k||!((/^_/.test(g)||/_$/.test(g))&&"_iden"!==g)){var n=f[l];if(n==w)delete q[g];else{if(a.d(n,"Object")||a.d(n,"Array"))n=b.stringify(n);n=a.g(String(n));m.Ob(d,g,n)&&(q[g]={value:n,scope:m.Na(d)})}}}"user"===d&&m.za()}},r:function(b){b!==s&&("userId"===b&&a.d(e.user,"Object")?(delete e.user.uid_,
m.za()):"user"===b&&a.d(e.user,"Object")?(b=e.user.uid_,e.user=b===s?{}:{uid_:b},m.za()):e[b]!==s&&(e[b]={}))},za:function(){try{d.setData(k,encodeURIComponent(b.stringify(e.user)),c.age)}catch(a){}},Ob:function(a,b,d){var f=u,k=e[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(d)).length)f=x;else{var g=k[b];k[b]={value:d,scope:m.Na(a)};a=m.M(m.A(a));2048<encodeURIComponent(a).length&&(g!==s?k[b]=g:delete k[b],f=x)}return f},M:function(a){var e=[],b,d;for(d in a)a.hasOwnProperty(d)&&
(b=[d,a[d].value],(1===a[d].scope||2===a[d].scope)&&b.push(a[d].scope),e.push(b.join("*")));return e.join("!")},Na:function(a){a=f[a];return a!==s?a:f.others}};return h.N=m})();
(function(){var a=mt.f,b=mt.lang,d=mt.o,e=h.w,f=h.N,l=f.M;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var k={Ta:{},ea:{},init:function(){for(var a,e=0;e<c.cptrk.length;e++)try{if(a=d.parse(decodeURIComponent(String(c.cptrk[e]))),a.a!==s&&b.d(a.a,"Object")){var f=a.a,l;for(l in f)f.hasOwnProperty(l)&&(k.ea[l]=String(f[l]))}}catch(q){}},Sa:function(){var e,b,d;for(d in k.ea)if(k.ea.hasOwnProperty(d)&&k.Ta[d]===s&&(e=k.ea[d],e=a.La(e)))b=b===s?{}:b,b[d]=a.qa(e,x),k.Ta[d]=u;return b},ua:function(){var a=
k.Sa();a&&k.Wb(a)},Mb:function(){"MutationObserver"in window?(new MutationObserver(k.ua)).observe(document.body,{childList:u,subtree:u}):window.setInterval(k.ua,15E3)},Wb:function(a){if(b.d(a,"Object")){f.setProperty("pageview",a);a=h.c.b.p;var e=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=l(f.A("pageview"));h.c.i();h.c.b.p=a;h.c.b.ep=e;f.r("pageview")}}};k.init();e.e("pv-b",function(){var a=k.Sa();a&&f.setProperty("pageview",a)});k.Mb();a.Ba(k.ua)}})();
(function(){var a=mt.lang,b=mt.f,d={W:function(a,f){return function(l){var k=l.target||l.srcElement;if(k){var m=k.getAttribute(a.fa);l=l.clientX+":"+l.clientY;if(m&&m===l)k.removeAttribute(a.fa);else if(f&&0<f.length&&(k=b.zb(k))&&k.length)if(m=k.length,l=k[k.length-1],1E4>m*l.split(">").length)for(l=0;l<m;l++)d.Xa(a,k[l]);else d.Xa(a,l)}}},Xa:function(e,b){for(var d={},k=String(b).split(">").length,m=0;m<k;m++)d[b]="",b=b.substring(0,b.lastIndexOf(">"));e&&(a.d(e,"Object")&&e.Ja)&&e.Ja(d)},Sb:function(a,
b){return function(d){(d.target||d.srcElement).setAttribute(a.fa,d.clientX+":"+d.clientY);a&&a.s&&(b?a.s(b):a.s("#"+encodeURIComponent(this.id),d.type))}}};return h.oa=d})();
(function(){var a=mt.f,b=mt.o,d=mt.event,e=mt.lang,f=h.oa,l=h.N,k=l.M,m={fa:"HM_ce",ab:function(){if(c.cetrk&&c.cetrk.length){d.e(document,"click",f.W(m,c.cetrk));for(var e=0,k=c.cetrk.length;e<k;e++){var l;try{l=b.parse(decodeURIComponent(String(c.cetrk[e])))}catch(q){l={}}var v=l.p||"";-1===v.indexOf(">")&&(0===v.indexOf("#")&&(v=v.substring(1)),(v=a.pa(v))&&d.e(v,"click",f.Sb(m,l)))}}},Ja:function(a){if(c.cetrk&&c.cetrk.length)for(var e=0,d=c.cetrk.length;e<d;e++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[e])))}catch(k){f=
{}}var g=m.ub(f.p,a);g&&m.s(f,g)}},ub:function(a,b){a=String(a);if(0<a.indexOf("*")){var e=RegExp("^"+a.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\*/,"\\d+")+"$"),d;for(d in b)if(b.hasOwnProperty(d)&&e.test(d))return d;return w}return b.hasOwnProperty(a)?a:w},s:function(b,d){h.c.b.et=7;var f=b&&b.k||"",f=e.g(f),q={};if(b&&b.a&&e.d(b.a,"Object")){var v=b.a,g;for(g in v)if(v.hasOwnProperty(g)){var n=m.Bb(v[g]||"",d),n=n?a.qa(n,x):"";q[g]=n}}q._iden=f;l.setProperty("customEvent",q);h.c.b.ep=
"";h.c.b.p=k(l.A("customEvent"));h.c.i();h.c.b.p="";l.r("customEvent")},Bb:function(b,e){b=String(b);e=String(e);if(0<b.indexOf("*")){var d=/.*\[(\d+)\]$/.exec(e);b=b.replace("*",d?d[1]:"1")}return a.La(b)}};h.w.e("pv-b",m.ab);return m})();
(function(){var a=mt.lang,b=mt.f,d=mt.event,e=mt.h,f=h.z,l=h.w,k=h.N,m=k.M,p=+new Date,r=[],t={W:function(){return function(e){if(h.c&&h.c.S&&c.aet&&c.aet.length){var d=e.target||e.srcElement;if(d){var g=h.c.Ia,n=b.getAttribute(d,f.Ha)!=w?u:x;if(b.getAttribute(d,f.Ga)==w)if(n)t.ha(t.ra(d,e));else{var z=b.Y(d);if(a.J(g,"*")||a.J(g,z))t.ha(t.ra(d,e));else for(;d.parentNode!=w;){var n=d.parentNode,z=b.Y(n),y="a"===z&&a.J(g,"a")?u:x,z="button"===z&&a.J(g,"button")?u:x,B=b.getAttribute(n,f.Ha)!=w?u:x;
if(b.getAttribute(n,f.Ga)==w&&(y||z||B)){t.ha(t.ra(n,e));break}d=d.parentNode}}}}}},ra:function(d,k){var g={},n=f.hb;g.id=b.getAttribute(d,n.id)||b.getAttribute(d,"id")||"";g.ka=b.getAttribute(d,n.ka)||b.getAttribute(d,"class")||"";g.Fa=b.getAttribute(d,n.Fa)||b.Ab(d);g.content=b.getAttribute(d,n.content)||b.qa(d,u);g.Da=b.getAttribute(d,n.Da)||b.Y(d);g.link=b.getAttribute(d,n.link)||b.getAttribute(d,"href")||"";g.type=k.type||"click";n=a.wa(d.offsetTop)?d.offsetTop:0;"click"===k.type?n=e.Qa?k.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):k.pageY:"touchend"===k.type&&(k.ya&&a.d(k.ya.changedTouches,"Array")&&k.ya.changedTouches.length)&&(n=k.ya.changedTouches[0].pageY);g.bc=n;return g},ha:function(b){var e=a.g;b=[+new Date-(h.c.F!==s?h.c.F:p),e(b.id),e(b.ka),e(b.Da),e(b.Fa),e(b.link),e(b.content),b.type,b.bc].join("*");t.ia(b);a.d(this.V(),"Function")&&this.V()()},ia:function(a){a.length>f.la||(encodeURIComponent(r.join("!")+a).length>f.la&&(t.s(r.join("!")),r=[]),
r.push(a))},s:function(a){h.c.b.et=5;h.c.b.ep=a;h.c.b.p=m(k.A("autoEventTracking"));h.c.i();h.c.b.p=""},V:function(){return function(){r&&r.length&&(t.s(r.join("!")),r=[])}}};a.K(c.aet)&&""!==c.aet&&l.e("pv-b",function(){d.e(document,"click",t.W());"ontouchend"in document&&d.e(window,"touchend",t.W());d.e(window,"unload",t.V())});return t})();
(function(){var a=mt.event,b=mt.h,d=h.z,e=h.w,f=+new Date,l=[],k=w,m={nb:function(){return function(){h.c&&(h.c.S&&c.aet&&c.aet.length)&&(window.clearTimeout(k),k=window.setTimeout(function(){m.cb(b.Z()+b.R())},150))}},cb:function(a){m.ia([+new Date-(h.c.F!==s?h.c.F:f),a].join("*"))},ia:function(a){if(encodeURIComponent(l.join("!")+a).length>d.la||3<l.length)m.s(l.join("!")),l=[];l.push(a)},s:function(a){h.c.b.et=6;h.c.b.vh=b.R();h.c.b.ep=a;h.c.i()},V:function(){return function(){l&&l.length&&(m.s(l.join("!")),
l=[])}}};mt.lang.K(c.aet)&&""!==c.aet&&e.e("pv-b",function(){a.e(window,"scroll",m.nb());a.e(window,"unload",m.V())});return m})();
(function(){var a=mt.f,b=h.z,d=h.load,e=h.rb;h.w.e("pv-b",function(){var f=b.protocol+"//crs.baidu.com/";c.rec&&a.Ba(function(){for(var l=0,k=c.rp.length;l<k;l++){var m=c.rp[l][0],p=c.rp[l][1],r=a.pa("hm_t_"+m);if(p&&!(2==p&&!r||r&&""!==r.innerHTML))r="",r=Math.round(Math.random()*b.ca),r=4==p?f+"hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+r].join("&"):f+"t.js?"+["siteId="+c.id,"planId="+m,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
r].join("&"),d(r)}})})})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.na.yb()+","+h.na.vb();h.c.i()}}function b(){clearTimeout(y);var a;n&&(a="visible"==document[n]);z&&(a=!document[z]);m="undefined"==typeof a?u:a;if((!k||!p)&&m&&r)g=u,q=+new Date;else if(k&&p&&(!m||!r))g=x,v+=+new Date-q;k=m;p=r;y=setTimeout(b,100)}function d(a){var n=document,b="";if(a in n)b=a;else for(var e=["webkit","ms","moz","o"],d=0;d<e.length;d++){var y=e[d]+a.charAt(0).toUpperCase()+a.slice(1);if(y in n){b=
y;break}}return b}function e(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))r="focus"==a.type||"focusin"==a.type?u:x,b()}var f=mt.event,l=h.w,k=u,m=u,p=u,r=u,t=+new Date,q=t,v=0,g=u,n=d("visibilityState"),z=d("hidden"),y;b();(function(){var a=n.replace(/[vV]isibilityState/,"visibilitychange");f.e(document,a,b);f.e(window,"pageshow",b);f.e(window,"pagehide",b);"object"==typeof document.onfocusin?(f.e(document,"focusin",e),f.e(document,"focusout",e)):(f.e(window,"focus",e),
f.e(window,"blur",e))})();h.na={yb:function(){return+new Date-t},vb:function(){return g?+new Date-q+v:v}};l.e("pv-b",function(){f.e(window,"unload",a())});l.e("duration-send",a());l.e("duration-done",function(){q=t=+new Date;v=0});return h.na})();
(function(){var a=mt.lang,b=h.z,d=h.load,e={Lb:function(e){if((window._dxt===s||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var l=h.c.P();d([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),e)}},ac:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.lb=e})();
(function(){function a(a,b,e,d){if(!(a===s||b===s||d===s)){if(""===a)return[b,e,d].join("*");a=String(a).split("!");for(var f,k=x,g=0;g<a.length;g++)if(f=a[g].split("*"),String(b)===f[0]){f[1]=e;f[2]=d;a[g]=f.join("*");k=u;break}k||a.push([b,e,d].join("*"));return a.join("!")}}function b(a){for(var d in a)if({}.hasOwnProperty.call(a,d)){var y=a[d];e.d(y,"Object")||e.d(y,"Array")?b(y):a[d]=String(y)}}var d=mt.url,e=mt.lang,f=mt.o,l=mt.h,k=h.z,m=h.w,p=h.lb,r=h.load,t=h.ma,q=h.N,v=q.M,g={U:[],da:0,Ra:x,
C:{Ea:"",page:""},init:function(){g.j=0;q.init();m.e("pv-b",function(){g.mb();g.ob()});m.e("pv-d",function(){g.pb();g.C.page=""});m.e("stag-b",function(){h.c.b.api=g.j||g.da?g.j+"_"+g.da:"";h.c.b.ct=[decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),g.C.Ea,g.C.page].join("!")});m.e("stag-d",function(){h.c.b.api=0;g.j=0;g.da=0})},mb:function(){var a=window._hmt||[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var n=arguments[b];
e.d(n,"Array")&&(a.cmd[a.id].push(n),"_setAccount"===n[0]&&(1<n.length&&/^[0-9a-f]{32}$/.test(n[1]))&&(n=n[1],a.id=n,a.cmd[n]=a.cmd[n]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},ob:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],e=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,f=b.length;d<f;d++){var k=b[d];e.test(k[0])?g.U.push(k):g.Aa(k)}a.cmd[c.id]={push:g.Aa}},pb:function(){if(0<g.U.length)for(var a=0,b=g.U.length;a<b;a++)g.Aa(g.U[a]);g.U=
w},Aa:function(a){var b=a[0];if(g.hasOwnProperty(b)&&e.d(g[b],"Function"))g[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(g.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],x===a||u===a))g.j|=2,h.c.Oa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){g.j|=4;h.c.b.sn=h.c.Ma();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=l.Z()+l.R();h.c.b.kb=0;h.c.va?(h.c.b.nv=0,h.c.b.st=4):h.c.va=u;var b=h.c.b.u,e=h.c.b.su;h.c.b.u=k.protocol+"//"+document.location.host+
a[1];g.Ra||(h.c.b.su=document.location.href);h.c.b.p=v(q.A("pageview"));h.c.i();h.c.b.u=b;h.c.b.su=e;h.c.b.p="";h.c.F=+new Date;q.r("pageview")}},_trackEvent:function(a){2<a.length&&(g.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=e.g(a[1])+"*"+e.g(a[2])+(a[3]?"*"+e.g(a[3]):"")+(a[4]?"*"+e.g(a[4]):""),h.c.b.p=v(q.ta()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],d=a[4]||3;if(0<b&&6>b&&0<d&&4>d){g.da++;for(var f=(h.c.b.cv||"*").split("!"),k=f.length;k<b-1;k++)f.push("*");
f[b-1]=d+"*"+e.g(a[2])+"*"+e.g(a[3]);h.c.b.cv=f.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?t.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):t.Tb("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var d=e.g(b[1]);b=e.g(b[2]);if(d!==s&&b!==s){var y=decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),y=a(y,d,1,b);t.setData("Hm_ct_"+c.id,encodeURIComponent(y),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var d=e.g(b[1]);b=e.g(b[2]);if(d!==
s&&b!==s){var y=g.C.Ea,y=a(y,d,2,b);g.C.Ea=y}}},_setPageTag:function(b){if(!(3>b.length)){var d=e.g(b[1]);b=e.g(b[2]);if(d!==s&&b!==s){var y=g.C.page,y=a(y,d,3,b);g.C.page=y}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?k.protocol+"//"+window.location.host+a[1]:a[1],g.Ra=u)},_trackOrder:function(a){a=a[1];e.d(a,"Object")&&(b(a),g.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=f.stringify(a),h.c.b.p=v(q.ta()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a=
{webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])g.j|=32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];p.Lb();p.ac(a)},_setUserId:function(a){a=a[1];if(a!==s&&(e.K(a)||e.wa(a))){var b=q.A("user").uid_;if(!(b&&b.value===e.g(String(a)))){var b=h.c.b.p,d=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+e.g(String(a));h.c.i();var f={};f.uid_=a;q.setProperty("user",f,u);h.c.b.p=b;h.c.b.ep=d}}},_clearUserId:function(a){1<a.length&&u===a[1]&&q.r("userId")},_setUserProperty:function(a){a=
a[1];e.d(a,"Object")&&q.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&u===a[1]&&q.r("user")},_setSessionProperty:function(a){a=a[1];e.d(a,"Object")&&q.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&u===a[1]&&q.r("session")},_setPageviewProperty:function(a){a=a[1];e.d(a,"Object")&&q.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&u===a[1]&&q.r("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];e.d(a,"Object")&&q.setProperty("autoEventTracking",
a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&u===a[1]&&q.r("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],x===a||u===a))h.c.Pa=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],x===a||u===a))h.c.S=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):m.I("duration-send");m.I("duration-done")},_require:function(a){1<a.length&&(a=a[1],k.fb.test(d.Q(a))&&r(a))},_providePlugin:function(a){if(1<
a.length){var b=window._hmt,d=a[1];a=a[2];if(e.J(k.Ua,d)&&e.d(a,"Function")&&(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[d]=a,b.B=b.B||[],a=b.B.slice(),d&&a.length&&a[0][1]===d))for(var f=0,g=a.length;f<g;f++){var l=a[f][2]||{};if(b.plugins[d]&&!b.G[d])b.G[d]=new b.plugins[d](l),b.B.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1],f=a[2]||{};if(e.J(k.Ua,d))if(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[d]&&!b.G[d])b.G[d]=new b.plugins[d](f);else{b.B=b.B||
[];for(var f=0,l=b.B.length;f<l;f++)if(b.B[f][1]===d)return;b.B.push(a);g._require([w,k.Rb+d+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];e.d(a,"Object")||(a={});a._iden=b;q.setProperty("customEvent",a);h.c.b.et=7;h.c.b.ep="";h.c.b.p=v(q.A("customEvent"));h.c.i();h.c.b.p="";q.r("customEvent")}}};g.init();h.gb=g;return h.gb})();
(function(){var a=h.w;c.spa!==s&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),a.e("pv-b",function(){""!==window.location.hash&&(h.c.b.u=window.location.href)}))})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Pa=this.Oa=u,this.S=g.S,this.Ia=f.K(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.va=x,this.init())}var b=mt.url,d=mt.Ya,e=mt.Ca,f=mt.lang,l=mt.cookie,k=mt.h,m=mt.sessionStorage,p=mt.o,r=mt.event,t=h.ma,q=h.N,v=q.M,g=h.z,n=h.load,z=h.w;a.prototype={T:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ba:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},$:function(a){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.ba(a,c.dm[d]))return u}else{var e=b.Q(a);if(e&&this.T(e,c.dm[d]))return u}return x},P:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},X:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ba(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Cb:function(){if(!document.referrer)return g.H-g.L>c.vdur?1:4;var a=x;this.$(document.referrer)&&this.$(document.location.href)?a=u:(a=b.Q(document.referrer),a=this.T(a||"",document.location.hostname));return a?g.H-g.L>c.vdur?1:4:3},Zb:function(){var a,b,d,e,f;g.L=t.getData("Hm_lpvt_"+c.id)||0;13===g.L.length&&(g.L=Math.round(g.L/1E3));b=this.Cb();a=4!==b?1:0;if(d=t.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));
for(;2592E3<g.H-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(g.H);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=g.H,e="",f=1;t.setData("Hm_lvt_"+c.id,d,c.age);t.setData("Hm_lpvt_"+c.id,g.H);d=l.Pb(this.P(),this.X());if(0===c.nv&&this.$(document.location.href)&&(""===document.referrer||this.$(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=e;this.b.lv=f},Yb:function(){for(var a=[],b=this.b.et,d=+new Date,e=0,f=g.Za.length;e<f;e++){var k=g.Za[e],l=this.b[k];
"undefined"!==typeof l&&""!==l&&("tt"!==k||"tt"===k&&0===b)&&(("ct"!==k||"ct"===k&&0===b)&&("kb"!==k||"kb"===k&&3===b))&&a.push(k+"="+encodeURIComponent(l))}switch(b){case 0:this.b.rt&&a.push("rt="+encodeURIComponent(this.b.rt));break;case 5:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},$b:function(){this.Zb();this.b.si=c.id;this.b.sn=this.Ma();this.b.su=document.referrer;this.b.ds=
k.Ub;this.b.cl=k.colorDepth+"-bit";this.b.ln=String(k.language).toLowerCase();this.b.ja=k.javaEnabled?1:0;this.b.ck=k.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=e.Eb();this.b.v="1.2.65";this.b.cv=decodeURIComponent(t.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=k.Z()+k.R();var a=document.location.href;this.b.cm=b.m(a,g.Ib)||"";this.b.cp=b.m(a,g.Jb)||b.m(a,g.fc)||"";this.b.cw=b.m(a,g.Hb)||b.m(a,g.hc)||"";this.b.ci=b.m(a,g.Fb)||b.m(a,g.ec)||"";this.b.cf=
b.m(a,g.Kb)||b.m(a,g.gc)||"";this.b.cu=b.m(a,g.Gb)||b.m(a,g.dc)||""},init:function(){try{this.$b(),0===this.b.nv?this.Xb():this.Ka(),h.c=this,this.jb(),this.ib(),z.I("pv-b"),this.Vb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(g.xa+"//"+g.Va+"?"+b.join("&"))}},Vb:function(){function a(){z.I("pv-d")}this.Oa?(this.va=u,this.b.et=0,this.b.ep="",this.b.p=v(q.A("pageview")),
this.b.vl=k.Z()+k.R(),this.i(a),this.b.p=""):a();this.F=+new Date;q.r("pageview")},i:function(a){if(this.Pa){var b=this;b.b.rnd=Math.round(Math.random()*g.ca);z.I("stag-b");var e=g.xa+"//"+g.Va+"?"+b.Yb();z.I("stag-d");b.eb(e);d.log(e,function(d){b.Wa(d);f.d(a,"Function")&&a.call(b)})}},jb:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=b.Q(document.referrer)===g.$a?1:0,f=b.m(a,"jn"),k=/^heatlink$|^select$|^pageclick$/.test(f);a&&(d.test(a)&&e&&k)&&(this.b.rnd=Math.round(Math.random()*
g.ca),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",g.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},ib:function(){if(window.postMessage&&window.self!==window.parent){var a=this;r.e(window,"message",function(d){if(b.Q(d.origin)===g.$a){d=d.data||{};var e=d.jn||"",f=/^customevent$/.test(e);if(RegExp(c.id).test(d.sd||"")&&f)a.b.rnd=Math.round(Math.random()*
g.ca),n(g.protocol+"//"+c.js+e+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},eb:function(a){var b;try{b=p.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);m.set("Hm_unsent_"+c.id,p.stringify(b))},Wa:function(a){var b;try{b=p.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");
for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?m.set("Hm_unsent_"+c.id,p.stringify(b)):this.Ka()}},Ka:function(){m.remove("Hm_unsent_"+c.id)},Xb:function(){var a=this,b;try{b=p.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(e){b=[]}if(b.length)for(var f=function(b){d.log(g.xa+"//"+b,function(b){a.Wa(b)})},k=0;k<b.length;k++)f(b[k])},Ma:function(){return Math.round(+new Date/1E3)%65535}};return new a})();
(function(){var a=mt.event,b=mt.lang,d=h.z;if(c.kbtrk&&"undefined"!==typeof h.c){h.c.b.kb=b.wa(h.c.b.kb)?h.c.b.kb:0;var e=function(){h.c.b.et=85;h.c.b.ep=h.c.b.kb;h.c.i()};a.e(document,"keyup",function(){h.c.b.kb++});a.e(window,"unload",function(){e()});setInterval(e,d.Qb)}})();var C=h.z,D=h.load;c.pt&&D([C.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var a=mt.h,b=mt.lang,d=mt.event,e=mt.o;if("undefined"!==typeof h.c&&(c.med||(!a.Qa||7<a.xb())&&c.cvcc)){var f,l,k,m,p=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},r=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===x)return x},t=function(a,d){var g={};g.n=f;g.t="clk";g.v=a;if(d){var l=d.getAttribute("href"),m=d.getAttribute("onclick")?""+d.getAttribute("onclick"):w,p=d.getAttribute("id")||"";k.test(l)?(g.sn=
"mediate",g.snv=l):b.d(m,"String")&&k.test(m)&&(g.sn="wrap",g.snv=m);g.id=p}h.c.b.et=86;h.c.b.ep=e.stringify(g);h.c.i();for(g=+new Date;400>=+new Date-g;);};if(c.med)l="/zoosnet",f="swt",k=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(k.test(e)||k.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){l="/other-comm";f="other";k=c.cvcc.q||s;var q=c.cvcc.id||s;m={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f,g=0,l=b.length;g<l;g++)d=b[g],k!==s?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),q?(d=d.getAttribute("id"),(k.test(e)||
k.test(f)||q.test(d))&&a.push(b[g])):(k.test(e)||k.test(f))&&a.push(b[g])):q!==s&&(d=d.getAttribute("id"),q.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof k){var v;l+=/\/$/.test(l)?"":"/";var g=function(a,d){if(v===d)return t(l+a,d),x;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(v===d[e])return t(l+a+"/"+(e+1),d[e]),x};d.e(document,"mousedown",function(a){a=a||window.event;v=a.target||a.srcElement;var d={};for(r(m,function(a,e){d[a]=b.d(e,
"Function")?e():document.getElementById(e)});v&&v!==document&&r(d,g)!==x;)v=v.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,d=mt.event,e=mt.o;if("undefined"!==typeof h.c&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var f={bb:function(){for(var b=c.cvcf.length,e,m=0;m<b;m++)(e=a.pa(decodeURIComponent(c.cvcf[m])))&&d.e(e,"click",f.oa())},oa:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=e.stringify(a);h.c.i()}}};a.Ba(function(){f.bb()})}})();
(function(){var a=mt.event,b=mt.o;if(c.med&&"undefined"!==typeof h.c){var d={n:"anti",sb:0,kb:0,clk:0},e=function(){h.c.b.et=86;h.c.b.ep=b.stringify(d);h.c.i()};a.e(document,"click",function(){d.clk++});a.e(document,"keyup",function(){d.kb=1});a.e(window,"scroll",function(){d.sb++});a.e(window,"load",function(){setTimeout(e,5E3)})}})();})();
