(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ByV4:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),o=a("3Z9Z"),i=a("jWx0");t.default=function(){return c.a.createElement(o.a,null,c.a.createElement(i.a,null))}},jWx0:function(e,t,a){"use strict";var n=a("Wbzz"),c=a("q1tI"),o=a.n(c),i=a("JI6e"),r=a("wx14"),l=a("zLVn"),s=a("TSYQ"),m=a.n(s),v=(a("2W6z"),a("JCAc")),u=a("vUet"),f=a("rQNl"),d=a("VWqr"),b=a("ILyh"),p={variant:void 0,active:!1,disabled:!1},y=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.active,i=e.disabled,s=e.className,v=e.variant,f=e.action,p=e.as,y=e.eventKey,E=e.onClick,I=Object(l.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(u.a)(a,"list-group-item");var g=Object(c.useCallback)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();E&&E(e)}),[i,E]);return o.a.createElement(d.a,Object(r.a)({ref:t},I,{eventKey:Object(b.b)(y,I.href),as:p||(f?I.href?"a":"button":"div"),onClick:g,className:m()(s,a,n&&"active",i&&"disabled",v&&a+"-"+v,f&&a+"-action")}))}));y.defaultProps=p,y.displayName="ListGroupItem";var E=y,I={variant:void 0,horizontal:void 0},g=o.a.forwardRef((function(e,t){var a,n=Object(v.a)(e,{activeKey:"onSelect"}),c=n.className,i=n.bsPrefix,s=n.variant,d=n.horizontal,b=n.as,p=void 0===b?"div":b,y=Object(l.a)(n,["className","bsPrefix","variant","horizontal","as"]),E=Object(u.a)(i,"list-group");return a=d?!0===d?"horizontal":"horizontal-"+d:null,o.a.createElement(f.a,Object(r.a)({ref:t},y,{as:p,className:m()(c,E,s&&E+"-"+s,a&&E+"-"+a)}))}));g.defaultProps=I,g.displayName="ListGroup",g.Item=E;var h=g,w=a("vYJ8"),K=a("YwZP");t.a=function(e){var t=e.children,a=K.globalHistory.location.pathname.replace("/yogatogel-site","").split("/");a=a.map((function(e){return e.length>0?e:"home"}));var r=Object(c.useState)(a.length>1&&"account"===a[1]),l=r[0],s=r[1];return o.a.createElement(i.a,{xs:"auto",className:"pl-0"},o.a.createElement("aside",{className:"text-center"},o.a.createElement(h,{activeKey:a[1],defaultActiveKey:"home",className:"sitenav text-left",as:"nav"},o.a.createElement(h.Item,{action:!0,eventKey:"home",as:n.Link,to:"/"},"Home"),o.a.createElement(h.Item,{action:!0},"How to play"),o.a.createElement(h.Item,{action:!0,eventKey:"account",onClick:function(){s(!l),Object(n.navigate)("/account/")},className:"submenu"},"Account"),o.a.createElement(w.a,{in:l},o.a.createElement(h,{activeKey:a[2]},o.a.createElement(h.Item,{action:!0,as:n.Link,eventKey:"login",to:"/account/login"},"Login"),o.a.createElement(h.Item,{action:!0,as:n.Link,eventKey:"home",to:"/account/"},"Profile"),o.a.createElement(h.Item,{action:!0,as:n.Link,eventKey:"register",to:"/account/register"},"Register"),o.a.createElement(h.Item,{action:!0,as:n.Link,eventKey:"recover",to:"/account/recover"},"Recover Password"))),o.a.createElement(h.Item,{action:!0},"Promo"),o.a.createElement(h.Item,{action:!0},"News"),o.a.createElement(h.Item,{action:!0},"Play"),o.a.createElement(h.Item,{action:!0},"Paito"),o.a.createElement(h.Item,{action:!0,eventKey:"rng",as:n.Link,to:"/rng"},"Test Draw")),t))}}}]);
//# sourceMappingURL=component---src-pages-account-recover-js-8978e3a35dfc28a904e7.js.map