_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"4fT1":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/meteo/[countryIsoA2]",function(){return a("kJCu")}])},XWsC:function(e,t,a){"use strict";var n=a("wx14"),c=a("zLVn"),r=a("TSYQ"),i=a.n(r),l=a("q1tI"),s=a.n(l),o=a("vUet"),d=a("dbZe"),j=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.active,l=e.children,j=e.className,m=e.as,b=void 0===m?"li":m,u=e.linkAs,h=void 0===u?d.a:u,O=e.linkProps,f=e.href,p=e.title,x=e.target,w=Object(c.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),v=Object(o.a)(a,"breadcrumb-item");return s.a.createElement(b,Object(n.a)({ref:t},w,{className:i()(v,j,{active:r}),"aria-current":r?"page":void 0}),r?l:s.a.createElement(h,Object(n.a)({},O,{href:f,title:p,target:x}),l))}));j.displayName="BreadcrumbItem",j.defaultProps={active:!1,linkProps:{}};var m=j,b=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.listProps,d=e.children,j=e.label,m=e.as,b=void 0===m?"nav":m,u=Object(c.a)(e,["bsPrefix","className","listProps","children","label","as"]),h=Object(o.a)(a,"breadcrumb");return s.a.createElement(b,Object(n.a)({"aria-label":j,className:r,ref:t},u),s.a.createElement("ol",Object(n.a)({},l,{className:i()(h,null==l?void 0:l.className)}),d))}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}},b.Item=m;t.a=b},eqd1:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("nKUr"),c=a("T/rR"),r=a("fKaO"),i=a("1D/W"),l=a.n(i);function s(e){var t,a=e.weatherData,i=e.wdError,s=e.title,o="wi wi-day-sunny";if(a){t=a.list[0];var d=new Date,j=new Date(d.getTime()+6e4*d.getTimezoneOffset()),m=j.getTime()+1e3*a.city.timezone,b=(new Date(m),new Date(1e3*a.city.sunrise)),u=new Date(1e3*a.city.sunset);o=j>b&&j<u?"wi wi-owm-day-".concat(t.weather[0].id):"wi wi-owm-night-".concat(t.weather[0].id)}var h=Object(n.jsx)(c.a,{animation:"border",role:"status",size:"sm",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})});return i&&(h=Object(n.jsx)("div",{children:"failed to load weather data"})),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{style:{fontSize:"1.125rem",display:"inline-block"},children:s}),t?Object(n.jsxs)("div",{style:{display:"inline-block"},children:[Object(n.jsxs)("span",{className:l.a.mainTempFont,children:["\xa0",Object(n.jsx)(r.a,{value:t.main.temp})]}),Object(n.jsx)("i",{className:o,style:{fontSize:"1.1rem"}})]}):h]})}},kJCu:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return w})),a.d(t,"default",(function(){return v}));var n=a("nKUr"),c=a("g4pe"),r=a.n(c),i=a("YFqc"),l=a.n(i),s=a("JI6e"),o=a("7vrA"),d=a("3Z9Z"),j=a("XWsC"),m=a("XzT5"),b=a("VtrM"),u=a("vi2J"),h=a("eo+o"),O=a("snnE"),f=a("9Dj+"),p=a("e63Y"),x=a("eqd1"),w=!0;function v(e){var t,a=e.locale,c=e.location,i=e.locations,w=e.alternateNames,v=c=Object(O.a)(c,a,w);i=i.map((function(e){var t=(e=Object(O.a)(e,a,w)).name;return e.localeAltName&&e.localeAltName!==t&&(t="".concat(t," (").concat(e.localeAltName||e.name,")")),Object(n.jsx)(s.a,{md:4,children:Object(n.jsx)(l.a,{href:"/".concat(a,"/meteo/").concat(Object(h.b)(c.country),"/").concat(Object(h.b)("".concat(e.name,"-").concat(e.admin1))),passHref:!0,children:Object(n.jsx)(p.b,{location:t})})},e.geonameid)}));t=new URL("".concat("https://api.openweathermap.org/data/2.5","/forecast"));var N={lat:v&&v.latitude,lon:v&&v.longitude,lang:a,appid:"a574739f847295ea9c1e2399bb70539b",units:"metric"};Object.keys(N).forEach((function(e){return t.searchParams.append(e,N[e])}));var y=Object(b.a)((function(){return v.latitude?t:null}),u.a,{revalidateOnMount:!0,revalidateOnFocus:!1,revalidateOnReconnect:!1,dedupingInterval:6e5,focusThrottleInterval:6e5,errorRetryCount:0}),g=y.data,_=y.error,P=v&&(v.localeAltName||v.name)?m.a.t("weatherIn",{location:v.localeAltName||v.name}):m.a.t("current-weather");return Object(n.jsxs)(f.a,{children:[Object(n.jsxs)(r.a,{children:[Object(n.jsx)("title",{children:P}),Object(n.jsx)("meta",{property:"og:site_name",content:P}),Object(n.jsx)("meta",{property:"og:title",content:"".concat(P)}),Object(n.jsx)("meta",{name:"description",content:m.a.t("home:pageDescription")})]}),Object(n.jsxs)(o.a,{children:[Object(n.jsx)(d.a,{className:"mt-1 mb-5",children:Object(n.jsx)(s.a,{children:Object(n.jsx)(x.a,{weatherData:g,wdError:_,title:P})})}),Object(n.jsx)(d.a,{children:Object(n.jsx)(s.a,{children:Object(n.jsx)("h2",{style:{fontSize:"1.1rem"},children:m.a.t("moreWeatherConditions",{location:c.localeAltName||c.name})})})}),Object(n.jsx)(d.a,{children:Object(n.jsxs)(s.a,{md:4,children:[Object(n.jsx)(l.a,{href:"/".concat(a,"/meteo"),passHref:!0,children:Object(n.jsx)(p.b,{location:m.a.t("world")})}),Object(n.jsx)("h3",{className:"text-muted",style:{fontWeight:"400",fontSize:"1.1rem"},children:m.a.t("seeDetailed")})]})}),Object(n.jsx)(d.a,{children:i})]}),Object(n.jsxs)(j.a,{children:[Object(n.jsx)(j.a.Item,{href:"/".concat(a,"/meteo"),children:m.a.t("world")}),Object(n.jsx)(j.a.Item,{active:!0,children:c.localeAltName||c.name})]})]})}}},[["4fT1",0,2,6,1,3,4,5,7]]]);