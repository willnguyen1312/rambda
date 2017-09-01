(function(c,d){typeof exports==='object'&&typeof module!=='undefined'?d(exports):typeof define==='function'&&define.amd?define(['exports'],d):d(c.R={});})(this,function(e){'use strict';function helper(g,x,y){if(x===void 0){return function(h,j){return helper(g,h,j);};}else if(y===void 0){return function(k){return helper(g,x,k);};}if(y[g]!==void 0){return y[g](x);}}function curry(l){return function(x,y){if(y===void 0){return function(m){return l(x,m);};}return l(x,y);};}function curryThree(n){return function(x,y,z){if(y===void 0){var helper=function helper(q,r){return n(x,q,r);};return curry(helper);}else if(z===void 0){return function(s){return n(x,y,s);};}return n(x,y,z);};}function mathHelper(t,x,y){switch(t){case'+':return x+y;case'-':return x-y;case'/':return x/y;case'*':return x*y;case'%':return x%y;}}var u=curryThree(mathHelper);function oppositeHelper(v,x,y){if(x===void 0){return function(w,A){return oppositeHelper(v,w,A);};}else if(y===void 0){return function(B){return oppositeHelper(v,x,B);};}if(x[v]!==void 0){return x[v](y);}}function propHelper(C,x){if(x===void 0){return function(D){return propHelper(C,D);};}return x[C];}function simpleHelper(E,x){if(x===void 0){return function(G){return simpleHelper(E,G);};}if(x[E]!==void 0){return x[E]();}}function addIndex(H){return function(I){for(var J=0,newFn=function newFn(){for(var K=arguments.length,L=Array(K),M=0;M<K;M++){L[M]=arguments[M];}return I.apply(null,[].concat(L,[J++]));},N=arguments.length,O=Array(N>1?N-1:0),P=1;P<N;P++){O[P-1]=arguments[P];}return H.apply(null,[newFn].concat(O));};}function adjust(Q,R,S){var U=S.concat();return U.map(function(V,W){if(W===R){return Q(S[R]);}return V;});}var X=curryThree(adjust);function filter(Y,Z){var a1=-1,b1=0,c1=Z.length,d1=[];while(++a1<c1){var e1=Z[a1];if(Y(e1)){d1[b1++]=e1;}}return d1;}var f1=curry(filter);function all(g1,h1){if(arguments.length===1){return function(i1){return all(g1,i1);};}return f1(g1,h1).length===h1.length;}function any(fn,k1){var l1=0;while(l1<k1.length){if(fn(k1[l1])){return!0;}l1++;}return!1;}var m1=curry(any);function allPass(n1,x){if(arguments.length===1){return function(o1){return allPass(n1,o1);};}return!m1(function(p1){return!p1(x);})(n1);}function anyPass(q1,x){if(arguments.length===1){return function(r1){return anyPass(q1,r1);};}return m1(function(s1){return s1(x);})(q1);}function append(t1,u1){var v1=u1.concat();v1.push(t1);return v1;}var w1=curry(append);function both(x,y){return function(x1){return x(x1)&&y(x1);};}var y1=curry(both);function compose(){for(var z1=arguments.length,A1=Array(z1),B1=0;B1<z1;B1++){A1[B1]=arguments[B1];}return function(C1){var D1=A1.slice();while(D1.length>0){C1=D1.pop()(C1);}return C1;};}function type(a){if(a===null){return'Null';}else if(a===void 0){return'Undefined';}else if(a.freeze!==void 0){return'Object';}else if(Array.isArray(a)){return'Array';}else if(typeof a==='boolean'){return'Boolean';}else if(typeof a==='number'){return'Number';}else if(typeof a==='string'){return'String';}else if(a instanceof RegExp){return'RegExp';}var E1=a.toString();if(E1.startsWith('async')){return'Async';}else if(E1==='[object Promise]'){return'Promise';}else if(E1.includes('function')||E1.includes('=>')){return'Function';}return'Object';}function equals(a,b){if(a===b){return!0;}var F1=type(a);if(F1!==type(b)){return!1;}if(F1==='Array'){var G1=Array.from(a),H1=Array.from(b);return G1.sort().toString()===H1.sort().toString();}if(F1==='Object'){var I1=Object.keys(a);if(I1.length===Object.keys(b).length){if(I1.length===0){return!0;}var J1=!0;I1.map(function(K1){if(J1){var L1=type(a[K1]),M1=type(b[K1]);if(L1===M1){if(L1==='Object'){if(Object.keys(a[K1]).length===Object.keys(b[K1]).length){if(Object.keys(a[K1]).length!==0){if(!equals(a[K1],b[K1])){J1=!1;}}}else{J1=!1;}}else if(!equals(a[K1],b[K1])){J1=!1;}}else{J1=!1;}}});return J1;}}return!1;}var N1=curry(equals);function contains(O1,P1){var Q1=-1,R1=!1;while(++Q1<P1.length&&!R1){if(N1(P1[Q1],O1)){R1=!0;}}return R1;}var S1=curry(contains),toConsumableArray=function(T1){if(Array.isArray(T1)){for(var i=0,U1=Array(T1.length);i<T1.length;i++)U1[i]=T1[i];return U1;}else{return Array.from(T1);}};function curry$1(f){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return function(){for(var V1=arguments.length,p=Array(V1),W1=0;W1<V1;W1++){p[W1]=arguments[W1];}return function(o){return o.length>=f.length?f.apply(void 0,toConsumableArray(o)):curry$1(f,o);}([].concat(toConsumableArray(a),p));};}var dec=function(x){return x-1;};function defaultTo(X1,Y1){if(arguments.length===1){return function(Z1){return defaultTo(X1,Z1);};}return Y1===void 0||!(type(Y1)===type(X1))?X1:Y1;}function drop(a2,a){return a.slice(a2);}var b2=curry(drop);function dropLast(c2,a){return a.slice(0,-c2);}var d2=curry(dropLast);function either(x,y){return function(e2){return x(e2)||y(e2);};}var f2=curry(either),inc=function(x){return x+1;};function find(fn,h2){return h2.find(fn);}var i2=curry(find);function findIndex(fn,k2){var l2=k2.length,m2=-1;while(++m2<l2){if(fn(k2[m2])){return m2;}}return-1;}var n2=curry(findIndex);function flatten(o2,p2){p2=p2===void 0?[]:p2;for(var i=0;i<o2.length;i++){if(Array.isArray(o2[i])){flatten(o2[i],p2);}else{p2.push(o2[i]);}}return p2;}function has(q2,r2){return r2[q2]!==void 0;}var s2=curry(has);function head(a){if(typeof a==='string'){return a[0]||'';}return a[0];}function ifElse(t2,u2,v2){return function(w2){if(t2(w2)===!0){return u2(w2);}return v2(w2);};}var x2=curryThree(ifElse);function indexOf(x,y2){var z2=-1,A2=y2.length;while(++z2<A2){if(y2[z2]===x){return z2;}}return-1;}var B2=curry(indexOf);function baseSlice(C2,D2,E2){var F2=-1,G2=C2.length;E2=E2>G2?G2:E2;if(E2<0){E2+=G2;}G2=D2>E2?0:E2-D2>>>0;D2>>>=0;var H2=Array(G2);while(++F2<G2){H2[F2]=C2[F2+D2];}return H2;}function init(a){if(typeof a==='string'){return a.slice(0,-1);}return a.length?baseSlice(a,0,-1):[];}function last(a){if(typeof a==='string'){return a[a.length-1]||'';}return a[a.length-1];}function map(fn,J2){var K2=-1,L2=J2.length,M2=Array(L2);while(++K2<L2){M2[K2]=fn(J2[K2]);}return M2;}var N2=curry(map);function match(O2,P2){var Q2=P2.match(O2);return Q2===null?[]:Q2;}var R2=curry(match);function merge(S2,T2){return Object.assign({},S2,T2);}var U2=curry(merge);function omit(V2,W2){if(arguments.length===1){return function(X2){return omit(V2,X2);};}if(W2===void 0||W2===null){return void 0;}if(typeof V2==='string'){V2=V2.split(',').map(function(x){return x.trim();});}var Y2={};for(var Z2 in W2){if(!V2.includes(Z2)){Y2[Z2]=W2[Z2];}}return Y2;}function partialCurry(fn){var b3=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(c3){if(type(fn)==='Async'||type(fn)==='Promise'){return new Promise(function(d3,e3){fn(U2(c3,b3)).then(d3).catch(e3);});}return fn(U2(c3,b3));};}function path(f3,g3){if(arguments.length===1){return function(h3){return path(f3,h3);};}if(g3===null||g3===void 0){return void 0;}var i3=g3,j3=0;if(typeof f3==='string'){f3=f3.split('.');}while(j3<f3.length){if(i3===null||i3===void 0){return void 0;}i3=i3[f3[j3]];j3++;}return i3;}function pick(k3,l3){if(arguments.length===1){return function(m3){return pick(k3,m3);};}if(!(type(l3)==='Object')){return void 0;}if(type(k3)==='String'){k3=k3.split(',').map(function(x){return x.trim();});}var n3={},o3=0;while(o3<k3.length){if(k3[o3]in l3){n3[k3[o3]]=l3[k3[o3]];}o3++;}return n3;}function pluck(p3,q3){var r3=[];N2(function(s3){if(!(s3[p3]===void 0)){r3.push(s3[p3]);}},q3);return r3;}var t3=curry(pluck);function prepend(u3,v3){var w3=v3.concat();w3.unshift(u3);return w3;}var x3=curry(prepend);function prop(y3,z3){return z3[y3];}var A3=curry(prop);function propEq(B3,C3,D3){return D3[B3]===C3;}var E3=curryThree(propEq);function range(F3,G3){for(var H3=[],i=F3;i<G3;i++){H3.push(i);}return H3;}function reduce(fn,J3,K3){return K3.reduce(fn,J3);}var L3=curryThree(reduce);function repeat(a,M3){var N3=Array(M3);return N3.fill(a);}var O3=curry(repeat);function replace(P3,Q3,R3){return R3.replace(P3,Q3);}var S3=curryThree(replace);function sort(fn,U3){var V3=U3.concat();return V3.sort(fn);}var W3=curry(sort);function sortBy(fn,Y3){var Z3=Y3.concat();return Z3.sort(function(a,b){var a4=fn(a),b4=fn(b);return a4<b4?-1:a4>b4?1:0;});}var c4=curry(sortBy);function split(d4,e4){return e4.split(d4);}var f4=curry(split);function splitEvery(g4,a){g4=g4>1?g4:1;var h4=[],i4=0;while(i4<a.length){h4.push(a.slice(i4,i4+=g4));}return h4;}var j4=curry(splitEvery);function tap(fn,l4){fn(l4);return l4;}var m4=curry(tap);function tail(n4){return b2(1,n4);}function take(o4,a){if(a===void 0){return function(p4){return take(o4,p4);};}else if(typeof a==='string'){return a.slice(0,o4);}return baseSlice(a,0,o4);}var q4=curry(take);function takeLast(r4,a){var s4=a.length;r4=r4>s4?s4:r4;if(typeof a==='string'){return a.slice(s4-r4);}r4=s4-r4;return baseSlice(a,r4,s4);}var t4=curry(takeLast);function test(u4,v4){return v4.search(u4)!==-1;}var w4=curry(test);function uniq(x4){var y4=-1,z4=[];while(++y4<x4.length){var A4=x4[y4];if(!S1(A4,z4)){z4.push(A4);}}return z4;}function update(B4,C4,D4){var E4=D4.concat();return E4.fill(C4,B4,B4+1);}var F4=curryThree(update);function values(G4){var H4=[];for(var I4 in G4){H4.push(G4[I4]);}return H4;}var J4=u('+'),always=function always(x){return function(){return x;};},complement=function complement(fn){return function(L4){return!fn(L4);};},M4=oppositeHelper('concat'),N4=u('/'),O4=helper('endsWith'),F=function F(){return!1;},identity=function identity(x){return x;},P4=helper('includes'),Q4=helper('join'),R4=helper('lastIndexOf'),S4=propHelper('length'),T4=u('%'),U4=u('*'),not=function not(x){return!x;},V4=helper('padEnd'),W4=helper('padStart'),X4=simpleHelper('reverse'),Y4=helper('startsWith'),Z4=u('-'),T=function T(){return!0;},a5=simpleHelper('toLowerCase'),b5=simpleHelper('toString'),c5=simpleHelper('toUpperCase'),d5=simpleHelper('trim');e.add=J4;e.always=always;e.complement=complement;e.concat=M4;e.divide=N4;e.endsWith=O4;e.F=F;e.identity=identity;e.includes=P4;e.join=Q4;e.lastIndexOf=R4;e.length=S4;e.modulo=T4;e.multiply=U4;e.not=not;e.padEnd=V4;e.padStart=W4;e.reverse=X4;e.startsWith=Y4;e.subtract=Z4;e.T=T;e.toLower=a5;e.toString=b5;e.toUpper=c5;e.trim=d5;e.addIndex=addIndex;e.adjust=X;e.all=all;e.allPass=allPass;e.anyPass=anyPass;e.any=m1;e.append=w1;e.both=y1;e.compose=compose;e.contains=S1;e.curry=curry$1;e.dec=dec;e.defaultTo=defaultTo;e.drop=b2;e.dropLast=d2;e.either=f2;e.inc=inc;e.equals=N1;e.filter=f1;e.find=i2;e.findIndex=n2;e.flatten=flatten;e.has=s2;e.head=head;e.ifElse=x2;e.indexOf=B2;e.init=init;e.last=last;e.map=N2;e.match=R2;e.merge=U2;e.omit=omit;e.partialCurry=partialCurry;e.path=path;e.pick=pick;e.pluck=t3;e.prepend=x3;e.prop=A3;e.propEq=E3;e.range=range;e.reduce=L3;e.repeat=O3;e.replace=S3;e.sort=W3;e.sortBy=c4;e.split=f4;e.splitEvery=j4;e.tap=m4;e.tail=tail;e.take=q4;e.takeLast=t4;e.test=w4;e.type=type;e.uniq=uniq;e.update=F4;e.values=values;Object.defineProperty(e,'__esModule',{value:!0});});