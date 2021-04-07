(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{6788:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),a=n(847),s=n(4051),i=n(1555);function o(e){var t=e.location,n=e.admList.map((function(e){return!e||""===e.localeAltName&&""===e.name?null:e.localeAltName||e.name})).filter((function(e){return e})).join(", ");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h3",{children:a.Z.t("aboutlocation:about-location",{location:t.localeAltName||t.name})}),(0,r.jsx)("p",{children:a.Z.t("aboutlocation:short-geo-desc",{city:t.localeAltName||t.name,admList:n})}),(0,r.jsxs)("p",{children:[a.Z.t("aboutlocation:geo-coords")," ",a.Z.t("latitude"),": ",t.latitude,"; ",a.Z.t("longitude"),": ",t.longitude]}),(0,r.jsx)("a",{href:"http://www.google.com/maps/place/".concat(t.latitude,",").concat(t.longitude),target:"_blank",children:a.Z.t("aboutlocation:show-in-gmaps",{name:t.name})})]})})})}},1863:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),a=n(9008),s=n(1664),i=n(1163),o=n(847),c=n(682),l=n(4051),u=n(1555),d=n(5602),h=n(8906),m=n(2491),x=n.n(m),f=n(8483),p=n.n(f);function j(e){var t=e.children,n=(e.home,(0,i.useRouter)()),m=o.Z.t("siteName");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})}),(0,r.jsxs)(d.Z,{collapseOnSelect:!0,bg:"white",expand:"lg",className:"align-items-center p-2 px-md-4 mb-1 ".concat(p().borderBottom," ").concat(p().boxShadow),children:[(0,r.jsx)(s.default,{href:"/",passHref:!0,children:(0,r.jsx)(d.Z.Brand,{className:p().logoFont,children:m})}),(0,r.jsx)(d.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,r.jsx)(d.Z.Collapse,{id:"responsive-navbar-nav",children:(0,r.jsxs)(h.Z,{className:"ml-auto",activeKey:n.pathname,children:[(0,r.jsx)(s.default,{href:"/",passHref:!0,children:(0,r.jsx)(h.Z.Link,{children:o.Z.t("home")})}),(0,r.jsx)(s.default,{href:"/#cities",passHref:!0,children:(0,r.jsx)(h.Z.Link,{children:o.Z.t("cities")})}),(0,r.jsx)(s.default,{href:"/#counties",passHref:!0,children:(0,r.jsx)(h.Z.Link,{children:o.Z.t("counties")})})]})})]}),(0,r.jsx)("main",{children:t}),(0,r.jsx)("footer",{className:p().footer,children:(0,r.jsxs)(c.Z,{fluid:!0,children:[(0,r.jsx)(l.Z,{}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(u.Z,{xs:"auto",children:(0,r.jsx)(s.default,{href:"https://ionkom.com/about",children:(0,r.jsx)("a",{className:p().footerLink,target:"_blank",children:"About"})})}),(0,r.jsx)(u.Z,{xs:"auto",children:(0,r.jsx)(s.default,{href:"https://ionkom.com/policies/privacy",children:(0,r.jsx)("a",{className:p().footerLink,target:"_blank",children:"Privacy Policy"})})}),(0,r.jsx)(u.Z,{xs:"auto",children:(0,r.jsx)(s.default,{href:"https://ionkom.com/policies/terms",children:(0,r.jsx)("a",{className:p().footerLink,target:"_blank",children:"Terms and Conditions"})})}),(0,r.jsx)(u.Z,{xs:"auto",children:(0,r.jsx)(s.default,{href:"https://openweathermap.org/",children:(0,r.jsx)("a",{className:p().footerLink,target:"_blank",rel:"noopener",children:"Weather data from OpenWeather (TM)"})})})]})]})}),(0,r.jsxs)(x(),{disableStyles:!0,buttonText:"DA, INTELEG",buttonClasses:"btn btn-secondary float-right",containerClasses:"alert alert-secondary",style:{fontSize:"0.85rem",link:"#5f6368",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{fontSize:"0.85rem"},children:["Folosim cookies pentru analiza traficului, continut personalizat si imbunatatirea continua a site-ului. Pentru a afla mai multe sau a schimba setarile acceseaza ",(0,r.jsx)(s.default,{href:"/politici/cookies",children:(0,r.jsx)("a",{className:"alert-link",children:"Politica de Cookies"})}),". Confirmand ca ai inteles sau navig\xe2nd pe acest website, e\u0219ti de acord s\u0103 permi\u021bi colectarea de informa\u021bii prin cookie-uri sau tehnologii similare."]})]})}},1538:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),a=n(847),s=n(864),i=n(682),o=n(4051),c=n(1555),l=n(9341),u=n(3934);function d(e){for(var t=e.daily,n=e.location,d=a.Z.t("today-weather-in",{place:n.localeAltName||n.name}),h=new Date,m=h.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/,"$1$3"),x=h.getDate(),f="".concat(a.Z.t("days-of-week:".concat(h.getDay())),", ").concat(h.getDate()," ").concat(a.Z.t("months-of-year:".concat(h.getMonth()))),p=[],j=0;j<t.length;j++){var Z=t[j],g=new Date(1e3*Z.dt),y=g.toLocaleTimeString().replace(/([\d]+)(:[\d]{2})(:[\d]{2})(.*)/,"$1$4").toLowerCase();if(g.getDate()!==x)break;p.push((0,r.jsx)(u.Z,{dweather:Z,index:j,timeDisp:y},j))}return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(s.Z.Body,{children:[(0,r.jsx)(s.Z.Title,{children:(0,r.jsx)("h2",{id:"today-hourly",style:{fontSize:"1.12rem"},children:d})}),(0,r.jsx)(s.Z.Subtitle,{className:"mb-2 text-muted",style:{fontWeight:"400"},children:a.Z.t("3hourly-weather:card-subtitle",{timeDisp:m})}),(0,r.jsx)(i.Z,{className:"pr-0 pl-0",children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(c.Z,{className:"mt-3",children:(0,r.jsx)(s.Z.Text,{style:{fontWeight:"450",fontSize:"1.1rem"},children:f})}),(0,r.jsx)(l.Z,{className:"container",children:p})]})})]})})})}},3934:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5893),a=n(847),s=n(9341),i=n(4051),o=n(1555),c=n(682),l=n(384),u=n(1709),d=n(5333),h=n(7294),m=n(8792),x=n(9583);function f(e){var t=e.eventKey;return(0,h.useContext)(m.Z)===t?(0,r.jsx)(x.wbB,{}):(0,r.jsx)(x.EIY,{})}var p=n(1525),j=n(2533),Z=n.n(j),g=n(4665),y=n.n(g);function v(e){var t=e.dweather,n=e.index,h=e.timeDisp;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.Z.Toggle,{as:i.Z,eventKey:"".concat(n),className:"mt-1 ".concat(y().togleRow),children:[(0,r.jsx)(o.Z,{xs:3,className:"align-self-center",children:h}),(0,r.jsx)(o.Z,{md:1,xs:2,className:"pl-1 pr-0 align-self-center",style:{fontSize:"1.3rem",fontWeight:"450"},children:(0,r.jsx)(d.Z,{value:t.main.temp})}),(0,r.jsx)(o.Z,{xs:2,className:"pr-0 pl-0",children:(0,r.jsx)("img",{src:"/weather_icons/".concat(t.weather[0].icon,"@2x.png"),alt:t.weather[0].description,width:50,height:50})}),(0,r.jsxs)(o.Z,{xs:3,className:"pl-0 pr-0 text-right justify-content-right align-self-center",style:{},children:[(0,r.jsx)(l.XOE,{size:"2em",color:"#1b4de4"})," ",Math.floor(100*t.pop),"%"]}),(0,r.jsx)(o.Z,{md:3,xs:2,className:"text-right justify-content-right align-self-center",style:{},children:(0,r.jsx)(f,{eventKey:"".concat(n)})})]}),(0,r.jsx)(s.Z.Collapse,{eventKey:"".concat(n),children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(c.Z,{children:(0,r.jsxs)(i.Z,{className:"flex-nowrap flex-sm-wrap ".concat(Z().mobileRow),children:[(0,r.jsx)(o.Z,{className:"text-center ".concat(Z().mobileCol),children:(0,r.jsx)("span",{children:(0,u.T)(t.weather[0].description)})}),(0,r.jsx)(o.Z,{className:"text-center ".concat(Z().mobileCol),children:(0,r.jsx)(p.Z,{pkey:a.Z.t("precipitation"),value:"".concat(Math.floor(100*t.pop),"%")})}),(0,r.jsx)(o.Z,{className:"text-center ".concat(Z().mobileCol),children:(0,r.jsx)(p.Z,{pkey:a.Z.t("humidity"),value:"".concat(t.main.humidity,"%")})}),(0,r.jsx)(o.Z,{className:"text-center ".concat(Z().mobileCol),children:(0,r.jsx)(p.Z,{pkey:a.Z.t("clouds"),value:"".concat(Math.floor(t.clouds.all),"%")})}),(0,r.jsx)(o.Z,{className:"text-center ".concat(Z().mobileCol),children:(0,r.jsx)(p.Z,{pkey:a.Z.t("wind"),value:"".concat(Math.floor(3.6*t.wind.speed)," kph")})})]})})})})]},n)}},3417:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),a=n(847),s=n(1555),i=n(864),o=n(682),c=n(4051),l=n(5434),u=n(1709),d=n(5333),h=n(1525),m=n(4994),x=n.n(m),f=n(2533),p=n.n(f);function j(e){var t=e.weatherData,n=e.locDetect,m=e.buttons,f=e.title,j=(new Date).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/,"$1$3"),Z=n?(0,r.jsx)(l.$0r,{color:"blue"}):(0,r.jsx)(l.nNs,{color:"red"});t&&"current"in t&&(t.main=t.current,t.weather=t.current.weather,t.visibility=t.current.visibility,t.wind={speed:t.current.wind_speed,deg:t.current.wind_deg},t.clouds={all:t.current.clouds},t.rain={"1h":t.current.rain&&t.current.rain["1h"]},t.snow={"1h":t.current.snow&&t.current.snow["1h"]},t.dt=t.current.dt,t.sys={sunrise:t.current.sunrise,sunset:t.current.sunset});var g=[{pkey:a.Z.t("wind"),value:Math.floor(3.6*t.wind.speed)+" kph"},{pkey:a.Z.t("humidity"),value:Math.floor(t.main.humidity)+"%"},{pkey:a.Z.t("clouds"),value:Math.floor(t.clouds.all)+"%"},{pkey:a.Z.t("visibility"),value:Math.floor(t.visibility/1e3)+"+ km"},{pkey:a.Z.t("pressure"),value:Math.floor(t.main.pressure)+" hPa"}].map((function(e,t){return(0,r.jsx)(s.Z,{className:"".concat(p().mobileCol),children:(0,r.jsx)(h.Z,{pkey:e.pkey,value:e.value},t)},t)}));return(0,r.jsx)(i.Z,{className:"mb-2",children:(0,r.jsxs)(i.Z.Body,{className:x().cardStyle,children:[(0,r.jsx)(i.Z.Title,{children:(0,r.jsx)("h1",{style:{fontSize:"1.125rem"},children:f})}),(0,r.jsxs)(i.Z.Subtitle,{className:"mb-2 text-muted",style:{fontWeight:"400"},children:[a.Z.t("forecast")," ",j," | ",Z]}),(0,r.jsxs)(o.Z,{className:"px-0",children:[(0,r.jsxs)(c.Z,{className:"justify-content-center",children:[(0,r.jsx)(s.Z,{xs:"auto",className:"px-0",children:(0,r.jsx)("img",{src:"/weather_icons/".concat(t.weather[0].icon,"@2x.png"),alt:t.weather[0].description,width:80,height:80})}),(0,r.jsxs)(s.Z,{xs:"auto",className:"px-0",children:[(0,r.jsxs)("span",{className:x().mainTempFont,children:[(0,r.jsx)(d.Z,{value:t.main.temp}),(0,r.jsxs)("span",{children:["\xa0",(0,u.T)(t.weather[0].description)]})]}),(0,r.jsxs)("p",{style:{fontSize:"1.3rem"},children:[(0,r.jsx)("span",{style:{fontWeight:"300"},children:"".concat(a.Z.t("feelsLike"),":")})," ",Math.floor(t.main.feels_like),String.fromCharCode(176)]})]})]}),(0,r.jsx)(c.Z,{className:"flex-nowrap flex-sm-wrap ".concat(p().mobileRow),children:g}),m&&(0,r.jsx)(c.Z,{className:"mt-3",children:(0,r.jsx)(s.Z,{children:m})})]})]})})}},2364:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),a=n(847),s=n(9341),i=n(864),o=n(682),c=n(4051),l=n(1555),u=n(3934);function d(e){for(var t=e.daily,n=e.expand,d=a.Z.t("daily3hweather:title"),h=n?"0":"-1",m=[],x=[],f=new Date,p=0;p<t.length;p++){var j=t[p],Z=new Date(1e3*j.dt),g=Z.toLocaleTimeString().replace(/([\d]+)(:[\d]{2})(:[\d]{2})(.*)/,"$1$4").toLowerCase();if(Z.getDate()!==f.getDate()||p==t.length-1){var y="".concat(a.Z.t("days-of-week:".concat(f.getDay())),", ").concat(f.getDate()," ").concat(a.Z.t("months-of-year:".concat(f.getMonth())));m.push({weatherDateDisp:y,listDaily:x}),x=[],f=Z}x.push((0,r.jsx)(u.Z,{dweather:j,index:p,timeDisp:g},p))}return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Z,{defaultActiveKey:h,children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z.Toggle,{as:i.Z.Header,eventKey:"0",style:{cursor:"pointer"},children:(0,r.jsx)("h2",{style:{fontSize:"1.12rem"},children:d})}),(0,r.jsx)(s.Z.Collapse,{eventKey:"0",children:(0,r.jsxs)(i.Z.Body,{children:[(0,r.jsx)(i.Z.Subtitle,{className:"mb-2 text-muted",style:{fontWeight:"400"},children:a.Z.t("daily3hweather:card-subtitle")}),(0,r.jsx)(o.Z,{className:"pr-0 pl-0",children:m.map((function(e,t){return(0,r.jsx)("div",{children:(0,r.jsxs)(c.Z,{className:"mt-3",children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(i.Z.Text,{style:{fontWeight:"450",fontSize:"1.115rem"},children:e.weatherDateDisp})}),(0,r.jsx)(s.Z,{className:"container",children:e.listDaily})]})},t)}))})]})})]})})})}},5333:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){var t=Math.floor(e.value);return(0,r.jsxs)(r.Fragment,{children:[t,String.fromCharCode(176)]})}},1525:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(5416),s=n.n(a);function i(e){var t=e.pkey,n=e.value,a=e.um||"";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:s().key,children:[t,": "]}),(0,r.jsxs)("span",{className:s().value,children:[n," ",a]})]})}},981:function(e,t,n){"use strict";n.d(t,{_:function(){return i}});var r=n(7757),a=n.n(r),s=n(2137),i=function(){var e=(0,s.Z)(a().mark((function e(t){var n,r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=10;break}return r=new Error("An error occurred while fetching the data."),e.next=7,n.json();case 7:throw r.info=e.sent,r.status=n.status,r;case 10:return e.next=12,n.json();case 12:return s=e.sent,e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1709:function(e,t,n){"use strict";n.d(t,{rE:function(){return i},T:function(){return o}});var r=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.replace(/ /g,t)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return e.replace(/-/g,t)},i=function(e){return a(s(r(e))).toLowerCase()},o=function(e){return e.length>0?e[0].toUpperCase()+e.slice(1):e}},8966:function(e,t,n){"use strict";n.d(t,{A:function(){return r},m:function(){return a}});var r=function(e,t,n){if(!e)return e;var r=n.filter((function(e){return e.isoLanguage===t}));if(r&&r.length>0){var a=r.filter((function(t){return t.geonameid==e.geonameid}));e.localeAltName=a&&a.length>0?a[0].alternateName:void 0}return e};function a(e){if(2!==e.length)return e;function t(e){return String.fromCodePoint(127397+e.toUpperCase().charCodeAt(0))}return t(e[0])+t(e[1])}},4665:function(e){e.exports={togleRow:"accordionrow_togleRow__3MSDu"}},8483:function(e){e.exports={logoFont:"layout_logoFont__oDCNs",boxShadow:"layout_boxShadow__cDusR",borderTop:"layout_borderTop__UuK3D",borderBottom:"layout_borderBottom__sbe6y","col-centered":"layout_col-centered__2Uufq",footer:"layout_footer__3CGvb",footerLink:"layout_footerLink__3L0mb",navbarSearchForm:"layout_navbarSearchForm__3YhWQ"}},2533:function(e){e.exports={mobileRow:"mobile_mobileRow__h3A4V",mobileCol:"mobile_mobileCol__2EgAz"}},4994:function(e){e.exports={mainTempFont:"weather_mainTempFont__mPQsn",feelsLikeTempFont:"weather_feelsLikeTempFont__3RJKa",cardStyle:"weather_cardStyle__2CvPX"}},5416:function(e){e.exports={key:"weatherstatpair_key__3NjPD",value:"weatherstatpair_value__OUO_z"}}}]);