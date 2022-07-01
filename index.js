// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterAcoth=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var n=function(){return r.apply(this,arguments)};n.prototype=r.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var e=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:function(){return t[r]}})})),n}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(t,r,n){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&a&&a.call(t,r,n.set),t},y=e,p=l,v=n()?y:p;var b=function(t,r,n){v(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(t){return"boolean"==typeof t};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,g=_;var A=function(t){return g.call(t)},h=Object.prototype.hasOwnProperty;var O=function(t,r){return null!=t&&h.call(t,r)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=_;var N=A,T=function(t){var r,n,e;if(null==t)return P.call(t);n=t[S],r=U(t,S);try{t[S]=void 0}catch(r){return P.call(t)}return e=P.call(t),r?t[S]=n:delete t[S],e},F=j()?T:N,I=Boolean.prototype.toString;var x=F,V=function(t){try{return I.call(t),!0}catch(t){return!1}},B=j();var G=function(t){return"object"==typeof t&&(t instanceof Boolean||(B?V(t):"[object Boolean]"===x(t)))},k=m,C=G;var L=s,M=function(t){return k(t)||C(t)},R=G;L(M,"isPrimitive",m),L(M,"isObject",R);var X=M;var Y=function(){return new Function("return this;")()},z="object"==typeof self?self:null,D="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},H="object"==typeof q?q:null;module.exports=H;var J=X.isPrimitive,K=Y,Q=z,W=D,Z=t(Object.freeze({__proto__:null}));var $=function(t){if(arguments.length){if(!J(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return K()}if(Q)return Q;if(W)return W;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},tt=$(),rt=tt.document&&tt.document.childNodes,nt=Int8Array,et=d,ot=rt,ut=nt;var it=function(){return"function"==typeof et||"object"==typeof ut||"function"==typeof ot};var at=function(){return/^\s*function\s*([^(]*)/i},ft=at;s(ft,"REGEXP",at());var ct=ft,lt=F;var yt=Array.isArray?Array.isArray:function(t){return"[object Array]"===lt(t)},pt=yt;var vt=function(t){return null!==t&&"object"==typeof t};s(vt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!pt(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(vt));var bt=vt;var st=F,dt=ct.REGEXP,mt=function(t){return bt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var wt=function(t){var r,n,e;if(("Object"===(n=st(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=dt.exec(e.toString()))return r[1]}return mt(t)?"Buffer":n},jt=wt;var _t=wt;var gt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?jt(t).toLowerCase():r},At=function(t){return _t(t).toLowerCase()},ht=it()?At:gt;var Ot=function(t){return"function"===ht(t)},Et=Ot;var Ut=function(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&Et(t.next)};var St=function(t){return"number"==typeof t},Pt=Number,Nt=Pt.prototype.toString;var Tt=F,Ft=Pt,It=function(t){try{return Nt.call(t),!0}catch(t){return!1}},xt=j();var Vt=function(t){return"object"==typeof t&&(t instanceof Ft||(xt?It(t):"[object Number]"===Tt(t)))},Bt=St,Gt=Vt;var kt=s,Ct=function(t){return Bt(t)||Gt(t)},Lt=Vt;kt(Ct,"isPrimitive",St),kt(Ct,"isObject",Lt);var Mt=Ct,Rt=O;var Xt=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Rt(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Yt=yt;var zt=function(t){return"object"==typeof t&&null!==t&&!Yt(t)},Dt=Object.getPrototypeOf;var qt=function(t){return t.__proto__},Ht=F,Jt=qt;var Kt=function(t){var r=Jt(t);return r||null===r?r:"[object Function]"===Ht(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Qt=Dt,Wt=Kt,Zt=Ot(Object.getPrototypeOf)?Qt:Wt;var $t=zt,tr=Ot,rr=function(t){return null==t?null:(t=Object(t),Zt(t))},nr=O,er=F,or=Object.prototype;var ur=function(t){var r;return!!$t(t)&&(!(r=rr(t))||!nr(t,"constructor")&&nr(r,"constructor")&&tr(r.constructor)&&"[object Function]"===er(r.constructor)&&nr(r,"isPrototypeOf")&&tr(r.isPrototypeOf)&&(r===or||function(t){var r;for(r in t)if(!nr(t,r))return!1;return!0}(t)))},ir=ur,ar=O;var fr=s,cr=Ot,lr=Ut,yr=Mt.isPrimitive,pr=Xt,vr=function(t,r){return ir(r)?(ar(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")};var br=function t(r,n,e){var o,u,i,a;if(!lr(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!cr(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=vr(o,e)))throw i;return fr(u={},"next",f),fr(u,"return",c),pr&&cr(r[pr])&&fr(u,pr,l),u;function f(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:yr(t.value)?n(t.value):o.invalid,done:!1}}function c(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return t(r[pr](),n,o)}},sr=br;var dr=function(t){return t!=t},mr=F,wr="function"==typeof Uint32Array;var jr="function"==typeof Uint32Array?Uint32Array:null,_r=function(t){return wr&&t instanceof Uint32Array||"[object Uint32Array]"===mr(t)},gr=jr;var Ar=function(){var t,r;if("function"!=typeof gr)return!1;try{r=new gr(r=[1,3.14,-3.14,4294967296,4294967297]),t=_r(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var hr="function"==typeof Uint32Array?Uint32Array:void 0,Or=function(){throw new Error("not implemented")},Er=Ar()?hr:Or,Ur=F,Sr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null,Nr=function(t){return Sr&&t instanceof Float64Array||"[object Float64Array]"===Ur(t)},Tr=Pr;var Fr=function(){var t,r;if("function"!=typeof Tr)return!1;try{r=new Tr([1,3.14,-3.14,NaN]),t=Nr(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var Ir="function"==typeof Float64Array?Float64Array:void 0,xr=function(){throw new Error("not implemented")},Vr=Fr()?Ir:xr,Br=F,Gr="function"==typeof Uint8Array;var kr="function"==typeof Uint8Array?Uint8Array:null,Cr=function(t){return Gr&&t instanceof Uint8Array||"[object Uint8Array]"===Br(t)},Lr=kr;var Mr=function(){var t,r;if("function"!=typeof Lr)return!1;try{r=new Lr(r=[1,3.14,-3.14,256,257]),t=Cr(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Rr="function"==typeof Uint8Array?Uint8Array:void 0,Xr=function(){throw new Error("not implemented")},Yr=Mr()?Rr:Xr,zr=F,Dr="function"==typeof Uint16Array;var qr="function"==typeof Uint16Array?Uint16Array:null,Hr=function(t){return Dr&&t instanceof Uint16Array||"[object Uint16Array]"===zr(t)},Jr=qr;var Kr=function(){var t,r;if("function"!=typeof Jr)return!1;try{r=new Jr(r=[1,3.14,-3.14,65536,65537]),t=Hr(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Qr,Wr="function"==typeof Uint16Array?Uint16Array:void 0,Zr=function(){throw new Error("not implemented")},$r={uint16:Kr()?Wr:Zr,uint8:Yr};(Qr=new $r.uint16(1))[0]=4660;var tn=52===new $r.uint8(Qr.buffer)[0],rn=Er,nn=!0===tn?1:0,en=new Vr(1),on=new rn(en.buffer);var un=function(t){return en[0]=t,on[nn]},an=Er,fn=!0===tn?1:0,cn=new Vr(1),ln=new an(cn.buffer);var yn=function(t,r){return cn[0]=t,ln[fn]=r>>>0,cn[0]},pn=yn,vn=Number.POSITIVE_INFINITY,bn=Pt.NEGATIVE_INFINITY;var sn=dr,dn=un,mn=pn,wn=vn,jn=bn,_n=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))},gn=.6931471803691238,An=1.9082149292705877e-10;var hn=function(t){var r,n,e,o,u,i,a,f,c,l;if(t<-1||sn(t))return NaN;if(-1===t)return jn;if(t===wn)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=dn(c=1+t))>>20)-1023)>0?1-(c-t):t-(c-1),u/=c):(l=((n=dn(c=t))>>20)-1023,u=0),(n&=1048575)<434334?c=mn(c,1072693248|n):(l+=1,c=mn(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?l*gn+(u+=l*An):l*gn-((f=r*(1-.6666666666666666*o))-(l*An+u)-o):(f=(a=(i=o/(2+o))*i)*_n(a),0===l?o-(r-i*(r+f)):l*gn-(r-(i*(r+f)+(l*An+u))-o))},On=dr,En=hn,Un=vn,Sn=bn;var Pn=function(t){var r,n;return On(t)||t<-1||t>1?NaN:1===t?Un:-1===t?Sn:(t<0&&(r=!0,t=-t),t<3.725290298461914e-9?r?-t:t:(n=t<.5?.5*En((n=t+t)+n*t/(1-t)):.5*En((t+t)/(1-t)),r?-n:n))};var Nn=function(t){return Pn(1/t)};return function(t){return sr(t,Nn)}}));
//# sourceMappingURL=index.js.map
