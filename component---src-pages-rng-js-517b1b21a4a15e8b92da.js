(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3tzC":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var n=t("KQm4"),r=t("q1tI"),l=t.n(r),c=t("wx14"),o=t("zLVn"),m=t("TSYQ"),i=t.n(m),s=t("vUet"),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,r=e.pill,m=e.className,u=e.as,v=void 0===u?"span":u,d=Object(o.a)(e,["bsPrefix","variant","pill","className","as"]),b=Object(s.a)(t,"badge");return l.a.createElement(v,Object(c.a)({ref:a},d,{className:i()(m,b,r&&b+"-pill",n&&b+"-"+n)}))}));u.displayName="Badge",u.defaultProps={pill:!1};var v=u,d=t("3Z9Z"),b=t("JI6e"),E=t("QojX"),h=t("cWnB"),p=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.striped,m=e.bordered,u=e.borderless,v=e.hover,d=e.size,b=e.variant,E=e.responsive,h=Object(o.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(s.a)(t,"table"),f=i()(n,p,b&&p+"-"+b,d&&p+"-"+d,r&&p+"-striped",m&&p+"-bordered",u&&p+"-borderless",v&&p+"-hover"),g=l.a.createElement("table",Object(c.a)({},h,{className:f,ref:a}));if(E){var y=p+"-responsive";return"string"==typeof E&&(y=y+"-"+E),l.a.createElement("div",{className:y},g)}return g})),f=t("vrFN"),g=t("jWx0");function y(){var e=Object(r.useState)({one:9,rone:!0,two:9,rtwo:!0,three:9,rthree:!0,four:9,rfour:!0}),a=e[0],t=e[1],c=Object(r.useState)([]),o=c[0],m=c[1],i=function(e){var n,r=e.target,l="checkbox"===r.type?r.checked:r.value,c=r.id;console.log(e.target),t(Object.assign({},a,((n={})[c]=l,n)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{title:"Draw Test"}),l.a.createElement(d.a,null,l.a.createElement(g.a,{activeKey:"notrng"}),l.a.createElement(b.a,{className:"pt-5"},l.a.createElement(E.a,{onSubmit:function(e){e.preventDefault();var r=[a.rone?Math.floor(10*Math.random()):a.one,a.rtwo?Math.floor(10*Math.random()):a.two,a.rthree?Math.floor(10*Math.random()):a.three,a.rfour?Math.floor(10*Math.random()):a.four];console.log(r),function(e){t(Object.assign({},a,{one:e[0],two:e[1],three:e[2],four:e[3]}));var r=l.a.createElement("tr",null,l.a.createElement(v,{pill:!0,className:"m-1",variant:"primary"},e[0]),l.a.createElement(v,{pill:!0,className:"m-1",variant:"secondary"},e[1]),l.a.createElement(v,{pill:!0,className:"m-1",variant:"danger"},e[2]),l.a.createElement(v,{pill:!0,className:"m-1",variant:"info"},e[3]));m([r].concat(Object(n.a)(o)))}(r)}},l.a.createElement(E.a.Row,null,l.a.createElement(b.a,null,l.a.createElement(E.a.Group,{controlId:"one"},l.a.createElement(E.a.Control,{type:"number",placeholder:9,onChange:i,value:a.one,min:0,max:9}),l.a.createElement(E.a.Label,null,"First number"))),l.a.createElement(b.a,null,l.a.createElement(E.a.Group,{controlId:"rone"},l.a.createElement(E.a.Check,{type:"checkbox",label:"Random?",onChange:i,checked:a.rone})))),l.a.createElement(E.a.Row,null,l.a.createElement(b.a,null,l.a.createElement(E.a.Group,{controlId:"two"},l.a.createElement(E.a.Control,{type:"number",placeholder:9,onChange:i,value:a.two,min:0,max:9}),l.a.createElement(E.a.Label,null,"Second number"))),l.a.createElement(b.a,null,l.a.createElement(E.a.Group,{controlId:"rtwo"},l.a.createElement(E.a.Check,{type:"checkbox",label:"Random?",onChange:i,checked:a.rtwo})))),l.a.createElement(E.a.Row,null,l.a.createElement(b.a,null,l.a.createElement(E.a.Group,{controlId:"three"},l.a.createElement(E.a.Control,{type:"number",placeholder:9,onChange:i,value:a.three,min:0,max:9}),l.a.createElement(E.a.Label,null,"Third number"))),l.a.createElement(b.a,null,l.a.createElement(E.a.Group,{controlId:"rthree"},l.a.createElement(E.a.Check,{type:"checkbox",label:"Random?",onChange:i,checked:a.rthree})))),l.a.createElement(E.a.Row,null,l.a.createElement(b.a,null,l.a.createElement(E.a.Group,{controlId:"four"},l.a.createElement(E.a.Control,{type:"number",placeholder:9,onChange:i,value:a.four,min:0,max:9}),l.a.createElement(E.a.Label,null,"Fourth number"))),l.a.createElement(b.a,null,l.a.createElement(E.a.Group,{controlId:"rfour"},l.a.createElement(E.a.Check,{type:"checkbox",label:"Random?",onChange:i,checked:a.rfour})))),l.a.createElement(E.a.Row,null,l.a.createElement(b.a,null,l.a.createElement(h.a,{type:"submit"},"Draw")),l.a.createElement(b.a,null,l.a.createElement(h.a,{variant:"warning",onClick:function(){return m([])}},"Clear"))))),l.a.createElement(b.a,{md:6,className:"pt-5"},l.a.createElement("h5",null,"Generated Numbers"),l.a.createElement(p,null,o))))}},jWx0:function(e,a,t){"use strict";var n=t("Wbzz"),r=t("q1tI"),l=t.n(r),c=t("JI6e"),o=t("wx14"),m=t("zLVn"),i=t("TSYQ"),s=t.n(i),u=(t("2W6z"),t("JCAc")),v=t("vUet"),d=t("rQNl"),b=t("VWqr"),E=t("ILyh"),h={variant:void 0,active:!1,disabled:!1},p=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,c=e.disabled,i=e.className,u=e.variant,d=e.action,h=e.as,p=e.eventKey,f=e.onClick,g=Object(m.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(v.a)(t,"list-group-item");var y=Object(r.useCallback)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();f&&f(e)}),[c,f]);return l.a.createElement(b.a,Object(o.a)({ref:a},g,{eventKey:Object(E.b)(p,g.href),as:h||(d?g.href?"a":"button":"div"),onClick:y,className:s()(i,t,n&&"active",c&&"disabled",u&&t+"-"+u,d&&t+"-action")}))}));p.defaultProps=h,p.displayName="ListGroupItem";var f=p,g={variant:void 0,horizontal:void 0},y=l.a.forwardRef((function(e,a){var t,n=Object(u.a)(e,{activeKey:"onSelect"}),r=n.className,c=n.bsPrefix,i=n.variant,b=n.horizontal,E=n.as,h=void 0===E?"div":E,p=Object(m.a)(n,["className","bsPrefix","variant","horizontal","as"]),f=Object(v.a)(c,"list-group");return t=b?!0===b?"horizontal":"horizontal-"+b:null,l.a.createElement(d.a,Object(o.a)({ref:a},p,{as:h,className:s()(r,f,i&&f+"-"+i,t&&f+"-"+t)}))}));y.defaultProps=g,y.displayName="ListGroup",y.Item=f;var w=y,N=t("vYJ8"),k=t("YwZP");a.a=function(e){var a=e.children,t=k.globalHistory.location.pathname.split("/");t=t.map((function(e){return e.length>0?e:"home"}));var o=Object(r.useState)(!(!t[1]||"account"!==t[1])),m=o[0],i=o[1];return l.a.createElement(c.a,{xs:"auto",className:"pl-0"},l.a.createElement("aside",{className:"text-center"},l.a.createElement(w,{activeKey:t[1],defaultActiveKey:"home",className:"sitenav text-left",as:"nav"},l.a.createElement(w.Item,{action:!0,eventKey:"home",as:n.Link,to:"/"},"Home"),l.a.createElement(w.Item,{action:!0},"How to play"),l.a.createElement(w.Item,{action:!0,eventKey:"account",onClick:function(){i(!m),Object(n.navigate)("/account/")},className:"submenu"},"Account"),l.a.createElement(N.a,{in:m},l.a.createElement(w,{activeKey:t[2]},l.a.createElement(w.Item,{action:!0,as:n.Link,eventKey:"login",to:"/account/login"},"Login"),l.a.createElement(w.Item,{action:!0,as:n.Link,eventKey:"home",to:"/account/"},"Profile"),l.a.createElement(w.Item,{action:!0,as:n.Link,eventKey:"register",to:"/account/register"},"Register"),l.a.createElement(w.Item,{action:!0,as:n.Link,eventKey:"recover",to:"/account/recover"},"Recover Password"))),l.a.createElement(w.Item,{action:!0},"Promo"),l.a.createElement(w.Item,{action:!0},"News"),l.a.createElement(w.Item,{action:!0},"Play"),l.a.createElement(w.Item,{action:!0},"Paito"),l.a.createElement(w.Item,{action:!0,eventKey:"rng",as:n.Link,to:"/rng"},"Test Draw")),a))}}}]);
//# sourceMappingURL=component---src-pages-rng-js-517b1b21a4a15e8b92da.js.map