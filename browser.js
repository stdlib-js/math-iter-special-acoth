// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,v,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,u,f,l,s,p,y,d,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))u+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,o;for(e=[],o=0,n=x.exec(r);n;)(t=r.slice(o,x.lastIndex-n[0].length)).length&&e.push(t),e.push(O(n)),o=x.lastIndex,n=x.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function T(r){var t,e;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var F,k=Object.prototype,N=k.toString,I=k.__defineGetter__,V=k.__defineSetter__,P=k.__lookupGetter__,$=k.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=k,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,t,e.get),a&&V&&V.call(r,t,e.set),r};var C=F;function B(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var R=/./;function G(r){return"boolean"==typeof r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function X(r,t){return null!=r&&M.call(r,t)}var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",q=Z()?function(r){var t,e,n;if(null==r)return W.call(r);e=r[z],t=X(r,z);try{r[z]=void 0}catch(t){return W.call(r)}return n=W.call(r),t?r[z]=e:delete r[z],n}:function(r){return W.call(r)},D=Boolean,H=Boolean.prototype.toString,J=Z();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return G(r)||K(r)}B(Q,"isPrimitive",G),B(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!G(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(er)return er;if(rr)return rr;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;B(ar,"REGEXP",cr);var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var t,e,n,o;if(("Object"===(e=q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=cr.exec(n.toString()))return t[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}B(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!ur(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(fr));var sr="function"==typeof R||"object"==typeof ir||"function"==typeof or?function(r){return lr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?lr(r).toLowerCase():t};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var dr=Number,gr=dr.prototype.toString,br=Z();function vr(r){return"object"==typeof r&&(r instanceof dr||(br?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function hr(r){return yr(r)||vr(r)}B(hr,"isPrimitive",yr),B(hr,"isObject",vr);var wr,mr="function"==typeof Y&&"symbol"==typeof Y("foo")&&X(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Sr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!ur(r)}(r)&&(t=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!t||!X(r,"constructor")&&X(t,"constructor")&&pr(t.constructor)&&"[object Function]"===q(t.constructor)&&X(t,"isPrototypeOf")&&pr(t.isPrototypeOf)&&(t===Er||function(r){var t;for(t in r)if(!X(r,t))return!1;return!0}(r)))}function xr(r,t,e){var n,o,i,a,c,u;if(u=typeof(c=r),null===c||"object"!==u&&"function"!==u||!pr(c.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(t))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Sr(t)?(X(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return B(o={},"next",(function(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:yr(e.value)?t(e.value):n.invalid,done:!1}})),B(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&B(o,mr,(function(){return xr(r[mr](),t,n)})),o}function Or(r){return r!=r}var Ur,Tr="function"==typeof Uint32Array,Fr="function"==typeof Uint32Array?Uint32Array:null,kr="function"==typeof Uint32Array?Uint32Array:void 0;Ur=function(){var r,t,e;if("function"!=typeof Fr)return!1;try{t=new Fr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Tr&&e instanceof Uint32Array||"[object Uint32Array]"===q(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Nr,Ir=Ur,Vr="function"==typeof Float64Array,Pr="function"==typeof Float64Array?Float64Array:null,$r="function"==typeof Float64Array?Float64Array:void 0;Nr=function(){var r,t,e;if("function"!=typeof Pr)return!1;try{t=new Pr([1,3.14,-3.14,NaN]),e=t,r=(Vr&&e instanceof Float64Array||"[object Float64Array]"===q(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr,Br=Nr,Rr="function"==typeof Uint8Array,Gr="function"==typeof Uint8Array?Uint8Array:null,Lr="function"==typeof Uint8Array?Uint8Array:void 0;Cr=function(){var r,t,e;if("function"!=typeof Gr)return!1;try{t=new Gr(t=[1,3.14,-3.14,256,257]),e=t,r=(Rr&&e instanceof Uint8Array||"[object Uint8Array]"===q(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Zr,Wr=Cr,Mr="function"==typeof Uint16Array,Xr="function"==typeof Uint16Array?Uint16Array:null,Yr="function"==typeof Uint16Array?Uint16Array:void 0;Zr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Mr&&e instanceof Uint16Array||"[object Uint16Array]"===q(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr,qr={uint16:Zr,uint8:Wr};(zr=new qr.uint16(1))[0]=4660;var Dr=52===new qr.uint8(zr.buffer)[0],Hr=!0===Dr?1:0,Jr=new Br(1),Kr=new Ir(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Hr]}var rt=!0===Dr?1:0,tt=new Br(1),et=new Ir(tt.buffer);function nt(r,t){return tt[0]=r,et[rt]=t>>>0,tt[0]}var ot=Number.POSITIVE_INFINITY,it=dr.NEGATIVE_INFINITY,at=1023,ct=.6931471803691238,ut=1.9082149292705877e-10,ft=.41421356237309503,lt=-.2928932188134525,st=1.862645149230957e-9,pt=5551115123125783e-32,yt=9007199254740992,dt=.6666666666666666;function gt(r){var t,e,n,o,i,a,c,u,f,l;if(r<-1||Or(r))return NaN;if(-1===r)return it;if(r===ot)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<ft){if(n<st)return n<pt?r:r-r*r*.5;r>lt&&(l=0,o=r,e=1)}return 0!==l&&(n<yt?(i=(l=((e=Qr(f=1+r))>>20)-at)>0?1-(f-r):r-(f-1),i/=f):(l=((e=Qr(f=r))>>20)-at,i=0),(e&=1048575)<434334?f=nt(f,1072693248|e):(l+=1,f=nt(f,1071644672|e),e=1048576-e>>2),o=f-1),t=.5*o*o,0===e?0===o?l*ct+(i+=l*ut):l*ct-((u=t*(1-dt*o))-(l*ut+i)-o):(u=(c=(a=o/(2+o))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===l?o-(t-a*(t+u)):l*ct-(t-(a*(t+u)+(l*ut+i))-o))}var bt=1/(1<<28);function vt(r){return function(r){var t,e;return Or(r)||r<-1||r>1?NaN:1===r?ot:-1===r?it:(r<0&&(t=!0,r=-r),r<bt?t?-r:r:(e=r<.5?.5*gt((e=r+r)+e*r/(1-r)):.5*gt((r+r)/(1-r)),t?-e:e))}(1/r)}return function(r){return xr(r,vt)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAcoth=t();
//# sourceMappingURL=browser.js.map