_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"TNH/":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/[lweather]/[locname]/[locationId]",function(){return t("usjJ")}])},XWsC:function(e,a,t){"use strict";var c=t("wx14"),n=t("zLVn"),r=t("TSYQ"),l=t.n(r),o=t("q1tI"),i=t.n(o),s=t("vUet"),m=t("dbZe"),d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.active,o=e.children,d=e.className,b=e.as,j=void 0===b?"li":b,u=e.linkAs,h=void 0===u?m.a:u,O=e.linkProps,f=e.href,p=e.title,x=e.target,N=Object(n.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),v=Object(s.a)(t,"breadcrumb-item");return i.a.createElement(j,Object(c.a)({ref:a},N,{className:l()(v,d,{active:r}),"aria-current":r?"page":void 0}),r?o:i.a.createElement(h,Object(c.a)({},O,{href:f,title:p,target:x}),o))}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var b=d,j=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.listProps,m=e.children,d=e.label,b=e.as,j=void 0===b?"nav":b,u=Object(n.a)(e,["bsPrefix","className","listProps","children","label","as"]),h=Object(s.a)(t,"breadcrumb");return i.a.createElement(j,Object(c.a)({"aria-label":d,className:r,ref:a},u),i.a.createElement("ol",Object(c.a)({},o,{className:l()(h,null==o?void 0:o.className)}),m))}));j.displayName="Breadcrumb",j.defaultProps={label:"breadcrumb",listProps:{}},j.Item=b;a.a=j},usjJ:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return v})),t.d(a,"default",(function(){return y}));var c=t("nKUr"),n=t("g4pe"),r=t.n(n),l=t("VtrM"),o=t("XzT5"),i=t("cWnB"),s=t("7vrA"),m=t("3Z9Z"),d=t("JI6e"),b=t("XWsC"),j=t("eo+o"),u=t("vi2J"),h=t("snnE"),O=t("9Dj+"),f=t("MQ8C"),p=t("3R1W"),x=t("DhpO"),N=t("doQz"),v=!0;function y(e){var a,t=e.locale,n=e.location,v=e.admin1,y=e.admin2,w=e.admin3,g=e.country,P=e.alternateNames,_=Object(h.a)(v,t,P);y=Object(h.a)(y,t,P),w=Object(h.a)(w,t,P);a=new URL("".concat("https://api.openweathermap.org/data/2.5","/forecast"));var A={lat:n&&n.latitude,lon:n&&n.longitude,lang:t,appid:"a574739f847295ea9c1e2399bb70539b",units:"metric"};Object.keys(A).forEach((function(e){return a.searchParams.append(e,A[e])}));var E=Object(l.a)((function(){return n.latitude?a:null}),u.a,{revalidateOnMount:!0,revalidateOnFocus:!1,revalidateOnReconnect:!1,dedupingInterval:6e5,focusThrottleInterval:6e5,errorRetryCount:0}),I=E.data,R=E.error,T=o.a.t("locationpage:pageTitle",{city:n.localeAltName||n.name,admin1Place:_&&_.localeAltName||_.name}),k=n&&(n.localeAltName||n.name)?o.a.t("locationpage:h1",{city:n.localeAltName||n.name,admin1Place:_&&_.localeAltName||_.name}):o.a.t("current-weather"),W=[Object(c.jsx)(i.a,{style:{borderRadius:16,fontWeight:450},size:"sm",href:"#today-hourly",variant:"outline-primary",children:o.a.t("nextHours")},"1"),Object(c.jsx)(i.a,{style:{borderRadius:16,fontWeight:450,marginLeft:"0.5rem"},size:"sm",href:"#forecast-next-days",variant:"outline-primary",children:o.a.t("next5days")},"2")];_&&_.name&&W.push(Object(c.jsx)(i.a,{style:{borderRadius:16,fontWeight:450,marginLeft:"0.5rem",marginTop:3},size:"sm",href:"/".concat(t,"/meteo/").concat(Object(j.b)(g.country),"/").concat(Object(j.b)("".concat(_.name,"-").concat(_.admin1))),variant:"outline-primary",children:o.a.t("inAdmin1Place",{admin1Place:_.localeAltName||_.name})},"3"));var z=w?"".concat(n.localtAltName||n.name,", ").concat(w.localeAltName||w.name):n.localtAltName||n.name;return Object(c.jsxs)(O.a,{children:[Object(c.jsxs)(r.a,{children:[Object(c.jsx)("title",{children:T}),Object(c.jsx)("meta",{property:"og:site_name",content:T}),Object(c.jsx)("meta",{property:"og:title",content:"".concat(T)}),Object(c.jsx)("meta",{name:"description",content:o.a.t("locationpage:pageDescription")})]}),Object(c.jsxs)(s.a,{children:[Object(c.jsx)(m.a,{className:"mt-1",children:Object(c.jsx)(d.a,{children:Object(c.jsx)(f.a,{weatherData:I,wdError:R,buttons:W,title:k})})}),Object(c.jsx)(m.a,{className:"mt-1",children:Object(c.jsx)(d.a,{children:Object(c.jsx)(x.a,{weatherData:I,wdError:R,location:n})})}),Object(c.jsx)(m.a,{className:"mt-1",id:"forecast-next-days",children:Object(c.jsx)(d.a,{children:Object(c.jsx)(p.a,{weatherData:I,wdError:R,expand:!0})})}),n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("hr",{}),Object(c.jsx)(N.a,{location:n,admList:[_,g]})]})]}),Object(c.jsxs)(b.a,{className:"mb-0",children:[Object(c.jsx)(b.a.Item,{href:"/".concat(t,"/meteo"),children:o.a.t("world")}),Object(c.jsx)(b.a.Item,{href:"/".concat(t,"/meteo/").concat(Object(j.b)(n.country)),children:n.country}),Object(c.jsx)(b.a.Item,{href:"/".concat(t,"/meteo/").concat(Object(j.b)(n.country),"/").concat(Object(j.b)("".concat(_.name,"-").concat(_.admin1))),children:_.localtAltName||_.name}),Object(c.jsx)(b.a.Item,{href:"/".concat(t,"/meteo/").concat(Object(j.b)(n.country),"/").concat(Object(j.b)("".concat(_.name,"-").concat(_.admin1)),"/").concat(Object(j.b)("".concat(y.name,"-").concat(y.admin2))),children:y.localtAltName||y.name}),Object(c.jsx)(b.a.Item,{active:!0,children:z})]})]})}}},[["TNH/",0,2,8,11,9,1,3,4,5,10]]]);