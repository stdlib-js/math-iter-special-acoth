// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAcoth=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var t,e,a;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!n(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==t)&&(a=4294967295+a+1),a<0?(e=(-a).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(t),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function E(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var A=String.fromCharCode,_=isNaN,T=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,u,f,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=O(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function F(r){return"string"==typeof r}function V(r){var t,n,e;if(!F(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=B(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var k,N=Object.prototype,I=N.toString,P=N.__defineGetter__,C=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===I.call(n))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(L.call(r,t)||R.call(r,t)?(e=r.__proto__,r.__proto__=N,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,n.get),u&&C&&C.call(r,t,n.set),r};var $=k;function G(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var M=/./;function X(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&z.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=W()?function(r){var t,n,e;if(null==r)return Y.call(r);n=r[H],t=q(r,H);try{r[H]=void 0}catch(t){return Y.call(r)}return e=Y.call(r),t?r[H]=n:delete r[H],e}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=W();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return X(r)||tr(r)}function er(){return new Function("return this;")()}G(nr,"isPrimitive",X),G(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof global?global:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!X(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ar)return ar;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr,yr=/^\s*function\s*([^(]*)/i;G(sr,"REGEXP",yr),pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var br=pr;function vr(r){return null!==r&&"object"==typeof r}var gr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(vr);function dr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=yr.exec(e.toString()))return t[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}G(vr,"isObjectLikeArray",gr);var wr="function"==typeof M||"object"==typeof lr||"function"==typeof fr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?dr(r).toLowerCase():t};function hr(r){return"function"===wr(r)}var mr=/./;function jr(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Er(r){return"boolean"==typeof r}var Ar=Boolean.prototype.toString;var _r=W();function Tr(r){return"object"==typeof r&&(r instanceof K||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Or(r){return Er(r)||Tr(r)}function Sr(){return new Function("return this;")()}jr(Or,"isPrimitive",Er),jr(Or,"isObject",Tr);var xr="object"==typeof self?self:null,Ur="object"==typeof window?window:null,Br="object"==typeof global?global:null,Fr="object"==typeof globalThis?globalThis:null;var Vr=function(r){if(arguments.length){if(!Er(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Sr()}if(Fr)return Fr;if(xr)return xr;if(Ur)return Ur;if(Br)return Br;throw new Error("unexpected error. Unable to resolve global object.")}(),kr=Vr.document&&Vr.document.childNodes,Nr=Int8Array;function Ir(){return/^\s*function\s*([^(]*)/i}var Pr=/^\s*function\s*([^(]*)/i;function Cr(r){return null!==r&&"object"==typeof r}jr(Ir,"REGEXP",Pr);var Lr=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Cr);function Rr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Pr.exec(e.toString()))return t[1]}return Cr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}jr(Cr,"isObjectLikeArray",Lr);var $r="function"==typeof mr||"object"==typeof Nr||"function"==typeof kr?function(r){return Rr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Rr(r).toLowerCase():t};function Gr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===$r(r)}(r.next)}function Mr(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Xr(r){return"number"==typeof r}var Zr=Number,Wr=Zr.prototype.toString;var Yr=W();function zr(r){return"object"==typeof r&&(r instanceof Zr||(Yr?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function qr(r){return Xr(r)||zr(r)}Mr(qr,"isPrimitive",Xr),Mr(qr,"isObject",zr);var Dr="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var Hr=/./;function Jr(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Kr(r){return"boolean"==typeof r}var Qr=Boolean.prototype.toString;var rt=W();function tt(r){return"object"==typeof r&&(r instanceof K||(rt?function(r){try{return Qr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nt(r){return Kr(r)||tt(r)}function et(){return new Function("return this;")()}Jr(nt,"isPrimitive",Kr),Jr(nt,"isObject",tt);var ot="object"==typeof self?self:null,it="object"==typeof window?window:null,ut="object"==typeof global?global:null,at="object"==typeof globalThis?globalThis:null;var ct=function(r){if(arguments.length){if(!Kr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return et()}if(at)return at;if(ot)return ot;if(it)return it;if(ut)return ut;throw new Error("unexpected error. Unable to resolve global object.")}(),ft=ct.document&&ct.document.childNodes,lt=Int8Array;function st(){return/^\s*function\s*([^(]*)/i}var pt=/^\s*function\s*([^(]*)/i;function yt(r){return null!==r&&"object"==typeof r}Jr(st,"REGEXP",pt);var bt=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(yt);function vt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pt.exec(e.toString()))return t[1]}return yt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Jr(yt,"isObjectLikeArray",bt);var gt="function"==typeof Hr||"object"==typeof lt||"function"==typeof ft?function(r){return vt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?vt(r).toLowerCase():t};function dt(r){return"function"===gt(r)}var wt=Object,ht=/./;function mt(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function jt(r){return"boolean"==typeof r}var Et=Boolean.prototype.toString;var At=W();function _t(r){return"object"==typeof r&&(r instanceof K||(At?function(r){try{return Et.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Tt(r){return jt(r)||_t(r)}function Ot(){return new Function("return this;")()}mt(Tt,"isPrimitive",jt),mt(Tt,"isObject",_t);var St="object"==typeof self?self:null,xt="object"==typeof window?window:null,Ut="object"==typeof global?global:null,Bt="object"==typeof globalThis?globalThis:null;var Ft=function(r){if(arguments.length){if(!jt(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ot()}if(Bt)return Bt;if(St)return St;if(xt)return xt;if(Ut)return Ut;throw new Error("unexpected error. Unable to resolve global object.")}(),Vt=Ft.document&&Ft.document.childNodes,kt=Int8Array;function Nt(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;function Pt(r){return null!==r&&"object"==typeof r}mt(Nt,"REGEXP",It);var Ct=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Pt);function Lt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=It.exec(e.toString()))return t[1]}return Pt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}mt(Pt,"isObjectLikeArray",Ct);var Rt="function"==typeof ht||"object"==typeof kt||"function"==typeof Vt?function(r){return Lt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Lt(r).toLowerCase():t};var $t,Gt,Mt=Object.getPrototypeOf;Gt=Object.getPrototypeOf,$t="function"===Rt(Gt)?Mt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Xt=$t;var Zt=Object.prototype;function Wt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(t=function(r){return null==r?null:(r=wt(r),Xt(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&dt(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&dt(t.isPrototypeOf)&&(t===Zt||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Yt(r,t){return Wt(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",t))}function zt(r,t,n){var e,o,i,u;if(!Gr(r))throw new TypeError(V("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!hr(t))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=Yt(e,n)))throw i;return G(o={},"next",a),G(o,"return",c),Dr&&hr(r[Dr])&&G(o,Dr,f),o;function a(){var n;return u?{done:!0}:(n=r.next()).done?(u=!0,n):{value:Xr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return zt(r[Dr](),t,e)}}function qt(r){return r!=r}var Dt="function"==typeof Uint32Array;var Ht="function"==typeof Uint32Array?Uint32Array:null;var Jt,Kt="function"==typeof Uint32Array?Uint32Array:void 0;Jt=function(){var r,t;if("function"!=typeof Ht)return!1;try{r=function(r){return Dt&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new Ht(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kt:function(){throw new Error("not implemented")};var Qt=Jt,rn="function"==typeof Float64Array;var tn="function"==typeof Float64Array?Float64Array:null;var nn,en="function"==typeof Float64Array?Float64Array:void 0;nn=function(){var r,t;if("function"!=typeof tn)return!1;try{r=function(r){return rn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new tn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?en:function(){throw new Error("not implemented")};var on=nn,un="function"==typeof Uint8Array;var an="function"==typeof Uint8Array?Uint8Array:null;var cn,fn="function"==typeof Uint8Array?Uint8Array:void 0;cn=function(){var r,t;if("function"!=typeof an)return!1;try{r=function(r){return un&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new an(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fn:function(){throw new Error("not implemented")};var ln=cn,sn="function"==typeof Uint16Array;var pn="function"==typeof Uint16Array?Uint16Array:null;var yn,bn="function"==typeof Uint16Array?Uint16Array:void 0;yn=function(){var r,t;if("function"!=typeof pn)return!1;try{r=function(r){return sn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new pn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?bn:function(){throw new Error("not implemented")};var vn,gn={uint16:yn,uint8:ln};(vn=new gn.uint16(1))[0]=4660;var dn=52===new gn.uint8(vn.buffer)[0],wn=!0===dn?1:0,hn=new on(1),mn=new Qt(hn.buffer);function jn(r){return hn[0]=r,mn[wn]}var En=!0===dn?1:0,An=new on(1),_n=new Qt(An.buffer);function Tn(r,t){return An[0]=r,_n[En]=t>>>0,An[0]}var On=Number.POSITIVE_INFINITY,Sn=Zr.NEGATIVE_INFINITY;var xn=.6931471803691238,Un=1.9082149292705877e-10;function Bn(r){var t,n,e,o,i,u,a,c,f,l;if(r<-1||qt(r))return NaN;if(-1===r)return Sn;if(r===On)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(i=(l=((n=jn(f=1+r))>>20)-1023)>0?1-(f-r):r-(f-1),i/=f):(l=((n=jn(f=r))>>20)-1023,i=0),(n&=1048575)<434334?f=Tn(f,1072693248|n):(l+=1,f=Tn(f,1071644672|n),n=1048576-n>>2),o=f-1),t=.5*o*o,0===n?0===o?l*xn+(i+=l*Un):l*xn-((c=t*(1-.6666666666666666*o))-(l*Un+i)-o):(c=(a=(u=o/(2+o))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===l?o-(t-u*(t+c)):l*xn-(t-(u*(t+c)+(l*Un+i))-o))}function Fn(r){return function(r){var t,n;return qt(r)||r<-1||r>1?NaN:1===r?On:-1===r?Sn:(r<0&&(t=!0,r=-r),r<3.725290298461914e-9?t?-r:r:(n=r<.5?.5*Bn((n=r+r)+n*r/(1-r)):.5*Bn((r+r)/(1-r)),t?-n:n))}(1/r)}return function(r){return zt(r,Fn)}}));
//# sourceMappingURL=index.js.map