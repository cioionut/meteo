(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{8150:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return j},default:function(){return b}});var n=t(5893),r=t(9008),c=t(8100),l=t(847),o=t(5005),i=t(682),s=t(4051),m=t(1555),d=t(5412),u=t(1709),h=t(981),f=t(8966),p=t(1863),Z=t(3417),x=t(2364),N=t(1538),v=t(6788),j=!0;function b(e){var a,t=e.locale,j=e.location,b=e.admin1,y=e.admin2,g=e.admin3,E=e.country,P=e.alternateNames,A=(0,f.A)(b,t,P);y=(0,f.A)(y,t,P),g=(0,f.A)(g,t,P);a=new URL("".concat("https://api.openweathermap.org/data/2.5","/forecast"));var w={lat:j&&j.latitude,lon:j&&j.longitude,lang:t,appid:"a574739f847295ea9c1e2399bb70539b",units:"metric"};Object.keys(w).forEach((function(e){return a.searchParams.append(e,w[e])}));var _=(0,c.ZP)((function(){return j.latitude?a:null}),h._,{revalidateOnMount:!0,revalidateOnFocus:!1,revalidateOnReconnect:!1,dedupingInterval:6e5,focusThrottleInterval:6e5,errorRetryCount:0}),k=_.data,I=_.error,R=l.Z.t("locationpage:pageTitle",{city:j.localeAltName||j.name,admin1Place:A&&A.localeAltName||A.name}),O=j&&(j.localeAltName||j.name)?l.Z.t("locationpage:h1",{city:j.localeAltName||j.name,admin1Place:A&&A.localeAltName||A.name}):l.Z.t("current-weather"),D=[(0,n.jsx)(o.Z,{style:{borderRadius:16,fontWeight:450},size:"sm",href:"#today-hourly",variant:"outline-primary",children:l.Z.t("nextHours")},"1"),(0,n.jsx)(o.Z,{style:{borderRadius:16,fontWeight:450,marginLeft:"0.5rem"},size:"sm",href:"#forecast-next-days",variant:"outline-primary",children:l.Z.t("next5days")},"2")];A&&A.name&&D.push((0,n.jsx)(o.Z,{style:{borderRadius:16,fontWeight:450,marginLeft:"0.5rem",marginTop:3},size:"sm",href:"/".concat(t,"/meteo/").concat((0,u.rE)(E.country),"/").concat((0,u.rE)("".concat(A.name,"-").concat(A.admin1))),variant:"outline-primary",children:l.Z.t("inAdmin1Place",{admin1Place:A.localeAltName||A.name})},"3"));var T=g?"".concat(j.localtAltName||j.name,", ").concat(g.localeAltName||g.name):j.localtAltName||j.name;return(0,n.jsxs)(p.Z,{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:R}),(0,n.jsx)("meta",{property:"og:title",content:"".concat(R)}),(0,n.jsx)("meta",{name:"description",content:l.Z.t("locationpage:pageDescription",{city:j.localeAltName||j.name,admin1Place:A&&A.localeAltName||A.name})}),(0,n.jsx)("meta",{property:"og:description",content:l.Z.t("locationpage:pageDescription",{city:j.localeAltName||j.name,admin1Place:A&&A.localeAltName||A.name})})]}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(s.Z,{className:"mt-1",children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(Z.Z,{weatherData:k,wdError:I,buttons:D,title:O})})}),(0,n.jsx)(s.Z,{className:"mt-1",children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(N.Z,{weatherData:k,wdError:I,location:j})})}),(0,n.jsx)(s.Z,{className:"mt-1",id:"forecast-next-days",children:(0,n.jsx)(m.Z,{children:(0,n.jsx)(x.Z,{weatherData:k,wdError:I,expand:!0})})}),j&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("hr",{}),(0,n.jsx)(v.Z,{location:j,admList:[A,E]})]})]}),(0,n.jsxs)(d.Z,{className:"mb-0",children:[(0,n.jsx)(d.Z.Item,{href:"/".concat(t,"/meteo"),children:l.Z.t("world")}),(0,n.jsx)(d.Z.Item,{href:"/".concat(t,"/meteo/").concat((0,u.rE)(j.country)),children:j.country}),(0,n.jsx)(d.Z.Item,{href:"/".concat(t,"/meteo/").concat((0,u.rE)(j.country),"/").concat((0,u.rE)("".concat(A.name,"-").concat(A.admin1))),children:A.localtAltName||A.name}),(0,n.jsx)(d.Z.Item,{href:"/".concat(t,"/meteo/").concat((0,u.rE)(j.country),"/").concat((0,u.rE)("".concat(A.name,"-").concat(A.admin1)),"/").concat((0,u.rE)("".concat(y.name,"-").concat(y.admin2))),children:y.localtAltName||y.name}),(0,n.jsx)(d.Z.Item,{active:!0,children:T})]})]})}},891:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/[lweather]/[locname]/[locationId]",function(){return t(8150)}])},5412:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var n=t(2122),r=t(9756),c=t(4184),l=t.n(c),o=t(7294),i=t(6792),s=t(8358),m=o.forwardRef((function(e,a){var t=e.bsPrefix,c=e.active,m=e.children,d=e.className,u=e.as,h=void 0===u?"li":u,f=e.linkAs,p=void 0===f?s.Z:f,Z=e.linkProps,x=e.href,N=e.title,v=e.target,j=(0,r.Z)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),b=(0,i.vE)(t,"breadcrumb-item");return o.createElement(h,(0,n.Z)({ref:a},j,{className:l()(b,d,{active:c}),"aria-current":c?"page":void 0}),c?m:o.createElement(p,(0,n.Z)({},Z,{href:x,title:N,target:v}),m))}));m.displayName="BreadcrumbItem",m.defaultProps={active:!1,linkProps:{}};var d=m,u=o.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.listProps,m=e.children,d=e.label,u=e.as,h=void 0===u?"nav":u,f=(0,r.Z)(e,["bsPrefix","className","listProps","children","label","as"]),p=(0,i.vE)(t,"breadcrumb");return o.createElement(h,(0,n.Z)({"aria-label":d,className:c,ref:a},f),o.createElement("ol",(0,n.Z)({},s,{className:l()(p,null==s?void 0:s.className)}),m))}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}},u.Item=d;var h=u}},function(e){e.O(0,[774,445,941,228,351,767,30,690,210],(function(){return a=891,e(e.s=a);var a}));var a=e.O();_N_E=a}]);