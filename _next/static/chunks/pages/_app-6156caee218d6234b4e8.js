(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{676:function(e,t,o){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}o.d(t,{Z:function(){return n}})},7329:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var n=o(676);var r=o(2961);function i(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2961:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(676);function r(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?(0,n.Z)(e,t):void 0}}},6967:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return I}});var n=o(6156),r=o(5893),i=(o(1582),o(1554),o(7329)),a=o(847),s=o(6610),u=o(5991),c=[],l=c.forEach,d=c.slice;function p(e){return l.call(d.call(arguments,1),(function(t){if(t)for(var o in t)void 0===e[o]&&(e[o]=t[o])})),e}var f=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,m=function(e,t,o){var n=o||{};n.path=n.path||"/";var r=e+"="+encodeURIComponent(t);if(n.maxAge>0){var i=n.maxAge-0;if(isNaN(i))throw new Error("maxAge should be a Number");r+="; Max-Age="+Math.floor(i)}if(n.domain){if(!f.test(n.domain))throw new TypeError("option domain is invalid");r+="; Domain="+n.domain}if(n.path){if(!f.test(n.path))throw new TypeError("option path is invalid");r+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");r+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r},h=function(e,t,o,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};o&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+60*o*1e3)),n&&(r.domain=n),document.cookie=m(e,encodeURIComponent(t),r)},g=function(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var r=o[n];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},y={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!==typeof document){var o=g(e.lookupCookie);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!==typeof document&&h(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},w={name:"querystring",lookup:function(e){var t;if("undefined"!==typeof window)for(var o=window.location.search.substring(1).split("&"),n=0;n<o.length;n++){var r=o[n].indexOf("=");if(r>0)o[n].substring(0,r)===e.lookupQuerystring&&(t=o[n].substring(r+1))}return t}},v=null,k=function(){if(null!==v)return v;try{v="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(t){v=!1}return v},S={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&k()){var o=window.localStorage.getItem(e.lookupLocalStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&k()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},b=null,O=function(){if(null!==b)return b;try{b="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(t){b=!1}return b},x={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&O()){var o=window.sessionStorage.getItem(e.lookupSessionStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&O()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},j={name:"navigator",lookup:function(e){var t=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var o=0;o<navigator.languages.length;o++)t.push(navigator.languages[o]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},N={name:"htmlTag",lookup:function(e){var t,o=e.htmlTag||("undefined"!==typeof document?document.documentElement:null);return o&&"function"===typeof o.getAttribute&&(t=o.getAttribute("lang")),t}},D={name:"path",lookup:function(e){var t;if("undefined"!==typeof window){var o=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(o instanceof Array)if("number"===typeof e.lookupFromPathIndex){if("string"!==typeof o[e.lookupFromPathIndex])return;t=o[e.lookupFromPathIndex].replace("/","")}else t=o[0].replace("/","")}return t}},C={name:"subdomain",lookup:function(e){var t;if("undefined"!==typeof window){var o=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);o instanceof Array&&(t="number"===typeof e.lookupFromSubdomainIndex?o[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):o[0].replace("http://","").replace("https://","").replace(".",""))}return t}};var P=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,s.Z)(this,e),this.type="languageDetector",this.detectors={},this.init(t,o)}return(0,u.Z)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=p(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(y),this.addDetector(w),this.addDetector(S),this.addDetector(x),this.addDetector(j),this.addDetector(N),this.addDetector(D),this.addDetector(C)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var o=[];return e.forEach((function(e){if(t.detectors[e]){var n=t.detectors[e].lookup(t.options);n&&"string"===typeof n&&(n=[n]),n&&(o=o.concat(n))}})),this.services.languageUtils.getBestMatchFromCodes?o:o.length>0?o[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var o=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach((function(t){o.detectors[t]&&o.detectors[t].cacheUserLanguage(e,o.options)})))}}]),e}();P.type="languageDetector";var E=P,L=["en","ro"],T=Object.assign.apply(Object,[{}].concat((0,i.Z)(Object.keys(L).map((function(e){return(0,n.Z)({},L[e],{common:o(8957)("./"+L[e]+"/common.json"),"3hourly-weather":o(2151)("./"+L[e]+"/3hourly-weather.json"),aboutlocation:o(4504)("./"+L[e]+"/aboutlocation.json"),daily3hweather:o(274)("./"+L[e]+"/daily3hweather.json"),"days-of-week":o(2254)("./"+L[e]+"/days-of-week.json"),home:o(8893)("./"+L[e]+"/home.json"),locationpage:o(4118)("./"+L[e]+"/locationpage.json"),"months-of-year":o(3285)("./"+L[e]+"/months-of-year.json")})})))));a.Z.use(E).init({detection:{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag","path","subdomain"],lookupCookie:"lng",lookupLocalStorage:"lng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieOptions:{path:"/",sameSite:"strict"}},fallbackLng:"en",resources:T,ns:["common"],defaultNS:"common",returnObjects:!0,debug:!1,interpolation:{escapeValue:!1},react:{wait:!0}});function A(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var I=function(e){var t=e.Component,o=e.pageProps;return a.Z.changeLanguage(o.locale),(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?A(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o))}},1780:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(6967)}])},1582:function(){},1554:function(){},9792:function(e){"use strict";e.exports={weather:"wetter"}},5826:function(e){"use strict";e.exports=JSON.parse('{"pageTitle":"Ionkom Weather - Precise weather forecast using Artificial Intelligence"}')},7648:function(e){"use strict";e.exports=JSON.parse('{"card-subtitle":"Hourly weather conditions"}')},9833:function(e){"use strict";e.exports=JSON.parse('{"about-location":"About {{location}}","short-geo-desc":"{{city}} is a city in {{admList}}.","geo-coords":"Geographic coordinates:","show-in-gmaps":"Show {{name}} in Google Maps"}')},2116:function(e){"use strict";e.exports=JSON.parse('{"weather":"weather","siteName":"Weather","home":"Home","cities":"Cities","counties":"Counties","current-weather":"Current weather","today-weather-in":"Today in {{place}}","nextHours":"Next hours","next5days":"5 days","inAdmin1Place":"{{admin1Place}}","precipitation":"Precipitation","wind":"Wind","humidity":"Humidity","clouds":"Clouds","visibility":"Visibility","pressure":"Pressure","feelsLike":"Feels like","forecast":"Forecast for","15daysforecast":"Next 15 days","request15draport":"Request meteo raport","latitude":"latitude","longitude":"longitude"}')},8433:function(e){"use strict";e.exports=JSON.parse('{"title":"Next 5 days","card-subtitle":"Daily weather forecast starting from today"}')},5001:function(e){"use strict";e.exports=JSON.parse('{"0":"Sunday","1":"Monday","2":"Tuesday","3":"Wednesday","4":"Thursday","5":"Friday","6":"Saturday"}')},7542:function(e){"use strict";e.exports=JSON.parse('{"pageTitle":"Ionkom Weather - Precise weather forecast using Artificial Intelligence","pageDescription":"Ionkom World Weather. View detailed weather forecast for the current month, The weather shows temperature, precipitation, wind and humidity for 15 days. See the weather by hours and days.","h1":"Current weather in {{city}}, {{admin1Place}}","showBigCities":"{{country}} weather conditions in cities","showAdmin1":"{{country}} States/Regions","showCountries":"World Weather"}')},5130:function(e){"use strict";e.exports=JSON.parse('{"pageTitle":"Weather in {{city}}, {{admin1Place}} - 15 days forecast","h1":"{{city}}, {{admin1Place}}"}')},8836:function(e){"use strict";e.exports=JSON.parse('{"0":"January","1":"February","2":"March","3":"April","4":"May","5":"June","6":"July","7":"August","8":"September","9":"October","10":"November","11":"December"}')},8636:function(e){"use strict";e.exports=JSON.parse('{"card-subtitle":"Prognoza meteo pe ore \xeencep\xe2nd de acum {{timeDisp}}"}')},5580:function(e){"use strict";e.exports=JSON.parse('{"about-location":"Despre {{location}}","short-geo-desc":"Localitatea {{city}} face parte din {{admList}}.","geo-coords":"Coordonate geografice:","show-in-gmaps":"Arat\u0103 {{name}} \xeen Google Maps."}')},2853:function(e){"use strict";e.exports=JSON.parse('{"weather":"vremea","siteName":"Vremea","home":"Acas\u0103","cities":"Ora\u0219e","counties":"Jude\u021be","current-weather":"Vremea acum","today-weather-in":"Ast\u0103zi \xeen {{place}}","nextHours":"Urm\u0103toarele Ore","next5days":"5 zile","inAdmin1Place":"\xcen {{admin1Place}}","precipitation":"Precipita\u021bii","wind":"V\xe2nt","humidity":"Umiditate","clouds":"Nori","visibility":"Vizibilitate","pressure":"Presiune","feelsLike":"Se simte ca","forecast":"Prognoza meteo","15daysforecast":"Prognoza meteo pe 15 zile","request15draport":"Cere raportul detaliat","latitude":"latitudine","longitude":"longitudine"}')},8387:function(e){"use strict";e.exports=JSON.parse('{"title":"Vremea \xeen urm\u0103toarele 5 zile","card-subtitle":"Buletin meteo pe ore \xeencep\xe2nd de ast\u0103zi"}')},3614:function(e){"use strict";e.exports=JSON.parse('{"0":"Duminic\u0103","1":"Luni","2":"Mar\u021bi","3":"Miercuri","4":"Joi","5":"Vineri","6":"S\xe2mb\u0103t\u0103"}')},773:function(e){"use strict";e.exports=JSON.parse('{"pageTitle":"Vremea \xeen Rom\xe2nia, 15 zile de prognoz\u0103 meteo precis\u0103","pageDescription":"Vremea \xeen Rom\xe2nia. Vezi prognoza meteo detaliata pentru luna curenta, Starea vremii prezint\u0103 temperatura, precipita\u021biile, v\xe2ntul si umiditatea pentru 15 zile. Vezi vremea pe ore sau zile \xeen localit\u0103\u021bile din Rom\xe2nia.","h1":"Vremea \xeen {{city}}, {{admin1Place}}","showBigCities":"Condi\u021biile meteo \xeen marile ora\u0219e","showAdmin1":"Prognoza meteo pe jude\u021be","showCountries":"\xcen lume"}')},1257:function(e){"use strict";e.exports=JSON.parse('{"pageTitle":"Vremea \xeen {{city}}, {{admin1Place}} - Meteo pe 15 zile","h1":"Vremea \xeen {{city}}, {{admin1Place}}"}')},6134:function(e){"use strict";e.exports=JSON.parse('{"0":"Ianuarie","1":"Februarie","2":"Martie","3":"Aprilie","4":"Mai","5":"Iunie","6":"Iulie","7":"August","8":"Septembrie","9":"Octombrie","10":"Noiembrie","11":"Decembrie"}')},2151:function(e,t,o){var n={"./en/3hourly-weather.json":7648,"./ro/3hourly-weather.json":8636};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=2151},4504:function(e,t,o){var n={"./en/aboutlocation.json":9833,"./ro/aboutlocation.json":5580};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=4504},8957:function(e,t,o){var n={"./de/common.json":9792,"./en/common.json":2116,"./ro/common.json":2853};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=8957},274:function(e,t,o){var n={"./en/daily3hweather.json":8433,"./ro/daily3hweather.json":8387};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=274},2254:function(e,t,o){var n={"./en/days-of-week.json":5001,"./ro/days-of-week.json":3614};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=2254},8893:function(e,t,o){var n={"./de/home.json":5826,"./en/home.json":7542,"./ro/home.json":773};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=8893},4118:function(e,t,o){var n={"./en/locationpage.json":5130,"./ro/locationpage.json":1257};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=4118},3285:function(e,t,o){var n={"./en/months-of-year.json":8836,"./ro/months-of-year.json":6134};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=3285}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,351,847,669],(function(){return t(1780),t(2441)}));var o=e.O();_N_E=o}]);