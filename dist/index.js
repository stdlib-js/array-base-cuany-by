"use strict";var d=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var f=d(function(z,y){
var q=require('@stdlib/array-base-arraylike2object/dist');function b(a,r,s,i,o,c){var e,t,n;for(e=!1,t=i,n=0;n<a.length;n++)!e&&o.call(c,a[n],n,a)&&(e=!0),r[t]=e,t+=s;return r}function j(a,r,s,i,o,c){var e,t,n,g,v,l,u;for(e=a.data,t=r.data,n=a.accessors[0],g=r.accessors[1],v=!1,l=i,u=0;u<e.length;u++)!v&&o.call(c,n(e,u),u,a)&&(v=!0),g(t,l,v),l+=s;return t}function k(a,r,s,i,o,c){var e=q(a),t=q(r);return e.accessorProtocol||t.accessorProtocol?j(e,t,s,i,o,c):(b(a,r,s,i,o,c),r)}y.exports=k
});var p=d(function(C,h){
var m=require('@stdlib/array-base-filled/dist'),x=f();function B(a,r,s){var i=m(!1,a.length);return x(a,i,1,0,r,s)}h.exports=B
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=p(),R=f();O(P,"assign",R);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
