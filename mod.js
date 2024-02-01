// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,e,n,i,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,e,n,o;for(e=[],o=0,n=x.exec(r);n;)(t=r.slice(o,x.lastIndex-n[0].length)).length&&e.push(t),e.push(F(n)),o=x.lastIndex,n=x.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function k(r){return"string"==typeof r}function N(r){var t,e,n;if(!k(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=T(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return U.apply(null,e)}var I,V=Object.prototype,P=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,B=V.__lookupGetter__,R=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(B.call(r,t)||R.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var G=I;function L(r,t,e){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Z=/./;function W(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return M&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&z.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=X()?function(r){var t,e,n;if(null==r)return Y.call(r);e=r[H],t=q(r,H);try{r[H]=void 0}catch(t){return Y.call(r)}return n=Y.call(r),t?r[H]=e:delete r[H],n}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return W(r)||tr(r)}function nr(){return new Function("return this;")()}L(er,"isPrimitive",W),L(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!W(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;L(pr,"REGEXP",yr);var dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function vr(r){return null!==r&&"object"==typeof r}function gr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}L(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!dr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(vr));var br="function"==typeof Z||"object"==typeof sr||"function"==typeof lr?function(r){return gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?gr(r).toLowerCase():t};function wr(r){return"function"===br(r)}function hr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&wr(r.next)}function mr(r){return"number"==typeof r}var jr=Number,Ar=jr.prototype.toString;var _r=X();function Er(r){return"object"==typeof r&&(r instanceof jr||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Sr(r){return mr(r)||Er(r)}L(Sr,"isPrimitive",mr),L(Sr,"isObject",Er);var Or="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var Ur,xr=Object,Fr=Object.getPrototypeOf;Ur=wr(Object.getPrototypeOf)?Fr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Tr=Ur;var kr=Object.prototype;function Nr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!dr(r)}(r)&&(t=function(r){return null==r?null:(r=xr(r),Tr(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&wr(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&wr(t.isPrototypeOf)&&(t===kr||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Ir(r,t){return Nr(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Vr(r,t,e){var n,o,i,a;if(!hr(r))throw new TypeError(N("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(t))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Ir(n,e)))throw i;return L(o={},"next",u),L(o,"return",c),Or&&wr(r[Or])&&L(o,Or,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:mr(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Vr(r[Or](),t,n)}}function Pr(r){return r!=r}var $r="function"==typeof Uint32Array;var Cr="function"==typeof Uint32Array?Uint32Array:null;var Br,Rr="function"==typeof Uint32Array?Uint32Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Cr)return!1;try{t=new Cr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=($r&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Gr=Br,Lr="function"==typeof Float64Array;var Zr="function"==typeof Float64Array?Float64Array:null;var Wr,Mr="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Zr)return!1;try{t=new Zr([1,3.14,-3.14,NaN]),e=t,r=(Lr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Xr=Wr,Yr="function"==typeof Uint8Array;var zr="function"==typeof Uint8Array?Uint8Array:null;var qr,Dr="function"==typeof Uint8Array?Uint8Array:void 0;qr=function(){var r,t,e;if("function"!=typeof zr)return!1;try{t=new zr(t=[1,3.14,-3.14,256,257]),e=t,r=(Yr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Hr=qr,Jr="function"==typeof Uint16Array;var Kr="function"==typeof Uint16Array?Uint16Array:null;var Qr,rt="function"==typeof Uint16Array?Uint16Array:void 0;Qr=function(){var r,t,e;if("function"!=typeof Kr)return!1;try{t=new Kr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Jr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rt:function(){throw new Error("not implemented")};var tt,et={uint16:Qr,uint8:Hr};(tt=new et.uint16(1))[0]=4660;var nt=52===new et.uint8(tt.buffer)[0],ot=!0===nt?1:0,it=new Xr(1),at=new Gr(it.buffer);function ut(r){return it[0]=r,at[ot]}var ct=!0===nt?1:0,ft=new Xr(1),lt=new Gr(ft.buffer);function st(r,t){return ft[0]=r,lt[ct]=t>>>0,ft[0]}var pt=Number.POSITIVE_INFINITY,yt=jr.NEGATIVE_INFINITY;var dt=.6931471803691238,vt=1.9082149292705877e-10;function gt(r){var t,e,n,o,i,a,u,c,f,l;if(r<-1||Pr(r))return NaN;if(-1===r)return yt;if(r===pt)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<.41421356237309503){if(n<1.862645149230957e-9)return n<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,e=1)}return 0!==l&&(n<9007199254740992?(i=(l=((e=ut(f=1+r))>>20)-1023)>0?1-(f-r):r-(f-1),i/=f):(l=((e=ut(f=r))>>20)-1023,i=0),(e&=1048575)<434334?f=st(f,1072693248|e):(l+=1,f=st(f,1071644672|e),e=1048576-e>>2),o=f-1),t=.5*o*o,0===e?0===o?l*dt+(i+=l*vt):l*dt-((c=t*(1-.6666666666666666*o))-(l*vt+i)-o):(c=(u=(a=o/(2+o))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?o-(t-a*(t+c)):l*dt-(t-(a*(t+c)+(l*vt+i))-o))}function bt(r){return function(r){var t,e;return Pr(r)||r<-1||r>1?NaN:1===r?pt:-1===r?yt:(r<0&&(t=!0,r=-r),r<3.725290298461914e-9?t?-r:r:(e=r<.5?.5*gt((e=r+r)+e*r/(1-r)):.5*gt((r+r)/(1-r)),t?-e:e))}(1/r)}function wt(r){return Vr(r,bt)}export{wt as default};
//# sourceMappingURL=mod.js.map
