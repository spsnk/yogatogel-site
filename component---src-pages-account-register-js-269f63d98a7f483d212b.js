(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8jRI":function(e,r,t){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,r){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],o(t),o(n))}function c(e){try{return decodeURIComponent(e)}catch(a){for(var r=e.match(n),t=1;t<r.length;t++)r=(e=o(r,t).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(r){var o=c(n[0]);o!==n[0]&&(t[n[0]]=o)}n=a.exec(e)}t["%C2"]="�";for(var l=Object.keys(t),i=0;i<l.length;i++){var u=l[i];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}},"8yz6":function(e,r,t){"use strict";e.exports=function(e,r){if("string"!=typeof e||"string"!=typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},Bnag:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,r){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,r,t){var n=t("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},J4zp:function(e,r,t){var n=t("wTVA"),a=t("m0LI"),o=t("ZhPi"),c=t("wkBT");e.exports=function(e,r){return n(e)||a(e,r)||o(e,r)||c()}},Pmem:function(e,r,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},RIqP:function(e,r,t){var n=t("Ijbi"),a=t("EbDI"),o=t("ZhPi"),c=t("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||c()}},WkPL:function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},ZhPi:function(e,r,t){var n=t("WkPL");e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},"cr+I":function(e,r,t){"use strict";var n=t("J4zp"),a=t("RIqP");function o(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==t.return||t.return()}finally{if(i)throw o}}}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var l=t("Pmem"),i=t("8jRI"),u=t("8yz6");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,r){return r.encode?r.strict?l(e):encodeURIComponent(e):e}function f(e,r){return r.decode?i(e):e}function p(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function d(e){var r=(e=p(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function y(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,r){s((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var t=function(e){var r;switch(e.arrayFormat){case"index":return function(e,t,n){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return function(e,t,n){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return function(r,t,n){var a="string"==typeof t&&t.includes(e.arrayFormatSeparator),o="string"==typeof t&&!a&&f(t,e).includes(e.arrayFormatSeparator);t=o?f(t,e):t;var c=a||o?t.split(e.arrayFormatSeparator).map((function(r){return f(r,e)})):null===t?t:f(t,e);n[r]=c};default:return function(e,r,t){void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var c,l=o(e.split("&"));try{for(l.s();!(c=l.n()).done;){var i=c.value,m=u(r.decode?i.replace(/\+/g," "):i,"="),p=n(m,2),d=p[0],g=p[1];g=void 0===g?null:["comma","separator"].includes(r.arrayFormat)?g:f(g,r),t(f(d,r),g,a)}}catch(I){l.e(I)}finally{l.f()}for(var b=0,E=Object.keys(a);b<E.length;b++){var v=E[b],h=a[v];if("object"==typeof h&&null!==h)for(var w=0,k=Object.keys(h);w<k.length;w++){var j=k[w];h[j]=y(h[j],r)}else a[v]=y(h,r)}return!1===r.sort?a:(!0===r.sort?Object.keys(a).sort():Object.keys(a).sort(r.sort)).reduce((function(e,r){var t=a[r];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[r]=function e(r){return Array.isArray(r)?r.sort():"object"==typeof r?e(Object.keys(r)).sort((function(e,r){return Number(e)-Number(r)})).map((function(e){return r[e]})):r}(t):e[r]=t,e}),Object.create(null))}r.extract=d,r.parse=g,r.stringify=function(e,r){if(!e)return"";s((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var t=function(t){return r.skipNull&&null==e[t]||r.skipEmptyString&&""===e[t]},n=function(e){switch(e.arrayFormat){case"index":return function(r){return function(t,n){var o=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[[m(r,e),"[",o,"]"].join("")]:[[m(r,e),"[",m(o,e),"]=",m(n,e)].join("")])}};case"bracket":return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[[m(r,e),"[]"].join("")]:[[m(r,e),"[]=",m(n,e)].join("")])}};case"comma":case"separator":return function(r){return function(t,n){return null==n||0===n.length?t:0===t.length?[[m(r,e),"=",m(n,e)].join("")]:[[t,m(n,e)].join(e.arrayFormatSeparator)]}};default:return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[m(r,e)]:[[m(r,e),"=",m(n,e)].join("")])}}}}(r),o={},c=0,l=Object.keys(e);c<l.length;c++){var i=l[c];t(i)||(o[i]=e[i])}var u=Object.keys(o);return!1!==r.sort&&u.sort(r.sort),u.map((function(t){var a=e[t];return void 0===a?"":null===a?m(t,r):Array.isArray(a)?a.reduce(n(t),[]).join("&"):m(t,r)+"="+m(a,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var t=u(e,"#"),a=n(t,2),o=a[0],c=a[1];return Object.assign({url:o.split("?")[0]||"",query:g(d(e),r)},r&&r.parseFragmentIdentifier&&c?{fragmentIdentifier:f(c,r)}:{})},r.stringifyUrl=function(e,t){t=Object.assign({encode:!0,strict:!0},t);var n=p(e.url).split("?")[0]||"",a=r.extract(e.url),o=r.parse(a,{sort:!1}),c=Object.assign(o,e.query),l=r.stringify(c,t);l&&(l="?".concat(l));var i=function(e){var r="",t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(i="#".concat(m(e.fragmentIdentifier,t))),"".concat(n).concat(l).concat(i)}},m0LI:function(e,r){e.exports=function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return t}}},wTVA:function(e,r){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},yfXO:function(e,r,t){"use strict";t.r(r);var n=t("cr+I"),a=t.n(n),o=t("q1tI"),c=t.n(o),l=t("3Z9Z"),i=t("JI6e"),u=t("QojX"),s=t("cWnB"),m=t("vrFN");r.default=function(e){var r=e.location,t=a.a.parse(r.search).ref||"";return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:"Daftar akun"}),c.a.createElement(l.a,null,c.a.createElement(i.a,null,c.a.createElement("section",null,c.a.createElement("h2",null,"Pendaftaran"),c.a.createElement("h5",null,"Silahkan mengisi form pendafataran dibawah ini dengan benar"),c.a.createElement(u.a,{className:"form-register"},c.a.createElement(u.a.Group,{as:u.a.Row,controlId:"form-register-username"},c.a.createElement(u.a.Label,{column:!0,md:3},"Username"),c.a.createElement(i.a,null,c.a.createElement(u.a.Control,{type:"text",placeholder:"username"}),c.a.createElement(u.a.Text,{className:"text-muted"},"Minimal 6 karakter, tidak ada karakter khusus."))),c.a.createElement(u.a.Group,{as:u.a.Row,controlId:"form-register-password"},c.a.createElement(u.a.Label,{column:!0,md:3},"Password"),c.a.createElement(i.a,null,c.a.createElement(u.a.Control,{type:"password",placeholder:"password"}),c.a.createElement(u.a.Text,{className:"text-muted"},"Minimal 8 karakter, minimal satu angka dan satu huruf."))),c.a.createElement(u.a.Group,{as:u.a.Row,controlId:"form-register-passwordconfirm"},c.a.createElement(u.a.Label,{column:!0,md:3},"Konfirmasi Password"),c.a.createElement(i.a,null,c.a.createElement(u.a.Control,{type:"password",placeholder:"password"}),c.a.createElement(u.a.Text,{className:"text-muted"},"Masukkan kata sandi Anda lagi."))),c.a.createElement(u.a.Group,{as:u.a.Row,controlId:"form-register-email"},c.a.createElement(u.a.Label,{column:!0,md:3},"Email"),c.a.createElement(i.a,null,c.a.createElement(u.a.Control,{type:"email",placeholder:"email@gmail.com"}))),c.a.createElement(u.a.Group,{as:u.a.Row,controlId:"form-register-phone"},c.a.createElement(u.a.Label,{column:!0,md:3},"No. Telefon"),c.a.createElement(i.a,null,c.a.createElement(u.a.Control,{type:"text",placeholder:"555-5555"}))),c.a.createElement(u.a.Group,{as:u.a.Row,controlId:"form-register-bank"},c.a.createElement(u.a.Label,{column:!0,md:3},"Bank"),c.a.createElement(i.a,null,c.a.createElement(u.a.Control,{as:"select",defaultValue:"bank",custom:!0},c.a.createElement("option",{disabled:!0,value:"bank"},"Bank"),c.a.createElement("option",{value:"bca"},"BCA"),c.a.createElement("option",{value:"bni"},"BNI"),c.a.createElement("option",{value:"bri"},"BRI"),c.a.createElement("option",{value:"mdn"},"Mandiri")))),c.a.createElement(u.a.Group,{as:u.a.Row,controlId:"form-register-fullname"},c.a.createElement(u.a.Label,{column:!0,md:3},"Nama Lengkap"),c.a.createElement(i.a,null,c.a.createElement(u.a.Control,{type:"text",placeholder:"Nama lengkap"}))),c.a.createElement(u.a.Group,{as:u.a.Row,controlId:"form-register-bankaccount"},c.a.createElement(u.a.Label,{column:!0,md:3},"Nomor Rekening"),c.a.createElement(i.a,null,c.a.createElement(u.a.Control,{type:"text",placeholder:"Nomor Rekening"}))),c.a.createElement(u.a.Group,{as:u.a.Row,controlId:"form-register-referral"},c.a.createElement(u.a.Label,{column:!0,md:3},"Referral"),c.a.createElement(i.a,null,c.a.createElement(u.a.Control,{type:"text",placeholder:"referral username",defaultValue:t}))),c.a.createElement(l.a,null,c.a.createElement(i.a,{md:{offset:3}},c.a.createElement(s.a,{type:"submit",variant:"warning"},"Register"))))))))}}}]);
//# sourceMappingURL=component---src-pages-account-register-js-269f63d98a7f483d212b.js.map