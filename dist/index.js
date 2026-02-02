"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=d(function(z,y){
var q=require('@stdlib/array-base-arraylike2object/dist');function b(a,r,t,i,o,c){var e,s,n;for(e=!1,s=i,n=0;n<a.length;n++)!e&&o.call(c,a[n],n,a)&&(e=!0),r[s]=e,s+=t;return r}function j(a,r,t,i,o,c){var e,s,n,g,v,l,u;for(e=a.data,s=r.data,n=a.accessors[0],g=r.accessors[1],v=!1,l=i,u=0;u<e.length;u++)!v&&o.call(c,n(e,u),u,a)&&(v=!0),g(s,l,v),l+=t;return s}function k(a,r,t,i,o,c){var e=q(a),s=q(r);return e.accessorProtocol||s.accessorProtocol?j(e,s,t,i,o,c):(b(a,r,t,i,o,c),r)}y.exports=k
});var p=d(function(C,h){
var m=require('@stdlib/array-base-filled/dist'),x=f();function B(a,r,t){var i=m(!1,a.length);return x(a,i,1,0,r,t)}h.exports=B
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=p(),R=f();O(P,"assign",R);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
