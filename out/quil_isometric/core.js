// Compiled by ClojureScript 1.9.473 {}
goog.provide('quil_isometric.core');
goog.require('cljs.core');
goog.require('quil.core');
quil_isometric.core.PI = Math.PI;
quil_isometric.core.grid = (function quil_isometric$core$grid(u){
quil.core.push_matrix.call(null);

var n__7737__auto___8555 = (3);
var i_8556 = (0);
while(true){
if((i_8556 < n__7737__auto___8555)){
var tr__8398__auto___8557 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)),(-1000)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8398__auto___8557);

quil.core.scale.call(null,(1),0.86026);

var tr__8404__auto___8558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.radians.call(null,(i_8556 * (120)))], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__8404__auto___8558);

var seq__8551_8559 = cljs.core.seq.call(null,cljs.core.range.call(null,(-1000),quil.core.width.call(null),u));
var chunk__8552_8560 = null;
var count__8553_8561 = (0);
var i__8554_8562 = (0);
while(true){
if((i__8554_8562 < count__8553_8561)){
var n_8563 = cljs.core._nth.call(null,chunk__8552_8560,i__8554_8562);
quil.core.line.call(null,n_8563,(-1000),n_8563,(1000));

var G__8564 = seq__8551_8559;
var G__8565 = chunk__8552_8560;
var G__8566 = count__8553_8561;
var G__8567 = (i__8554_8562 + (1));
seq__8551_8559 = G__8564;
chunk__8552_8560 = G__8565;
count__8553_8561 = G__8566;
i__8554_8562 = G__8567;
continue;
} else {
var temp__4657__auto___8568 = cljs.core.seq.call(null,seq__8551_8559);
if(temp__4657__auto___8568){
var seq__8551_8569__$1 = temp__4657__auto___8568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8551_8569__$1)){
var c__7633__auto___8570 = cljs.core.chunk_first.call(null,seq__8551_8569__$1);
var G__8571 = cljs.core.chunk_rest.call(null,seq__8551_8569__$1);
var G__8572 = c__7633__auto___8570;
var G__8573 = cljs.core.count.call(null,c__7633__auto___8570);
var G__8574 = (0);
seq__8551_8559 = G__8571;
chunk__8552_8560 = G__8572;
count__8553_8561 = G__8573;
i__8554_8562 = G__8574;
continue;
} else {
var n_8575 = cljs.core.first.call(null,seq__8551_8569__$1);
quil.core.line.call(null,n_8575,(-1000),n_8575,(1000));

var G__8576 = cljs.core.next.call(null,seq__8551_8569__$1);
var G__8577 = null;
var G__8578 = (0);
var G__8579 = (0);
seq__8551_8559 = G__8576;
chunk__8552_8560 = G__8577;
count__8553_8561 = G__8578;
i__8554_8562 = G__8579;
continue;
}
} else {
}
}
break;
}
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}
var G__8580 = (i_8556 + (1));
i_8556 = G__8580;
continue;
} else {
}
break;
}

return quil.core.pop_matrix.call(null);
});
quil_isometric.core.with_iso = (function quil_isometric$core$with_iso(var_args){
var args__7934__auto__ = [];
var len__7927__auto___8584 = arguments.length;
var i__7928__auto___8585 = (0);
while(true){
if((i__7928__auto___8585 < len__7927__auto___8584)){
args__7934__auto__.push((arguments[i__7928__auto___8585]));

var G__8586 = (i__7928__auto___8585 + (1));
i__7928__auto___8585 = G__8586;
continue;
} else {
}
break;
}

var argseq__7935__auto__ = ((((2) < args__7934__auto__.length))?(new cljs.core.IndexedSeq(args__7934__auto__.slice((2)),(0),null)):null);
return quil_isometric.core.with_iso.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7935__auto__);
});

quil_isometric.core.with_iso.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","push-matrix","quil.core/push-matrix",1356326676,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","translate","quil.core/translate",150889028,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","width","quil.core/width",-1537906636,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","height","quil.core/height",944941411,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","rotate-x","quil.core/rotate-x",-690231514,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil-isometric.core","PI","quil-isometric.core/PI",-1658496463,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","rotate-y","quil.core/rotate-y",-1583490073,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","radians","quil.core/radians",692195933,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(45)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","sin","quil.core/sin",-2144718409,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","map-range","quil.core/map-range",662354359,null)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","mouse-x","quil.core/mouse-x",-1987443017,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","width","quil.core/width",-1537906636,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil-isometric.core","PI","quil-isometric.core/PI",-1658496463,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})(),body,(function (){var x__7656__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("quil.core","pop-matrix","quil.core/pop-matrix",310892617,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7656__auto__);
})())));
});

quil_isometric.core.with_iso.cljs$lang$maxFixedArity = (2);

quil_isometric.core.with_iso.cljs$lang$applyTo = (function (seq8581){
var G__8582 = cljs.core.first.call(null,seq8581);
var seq8581__$1 = cljs.core.next.call(null,seq8581);
var G__8583 = cljs.core.first.call(null,seq8581__$1);
var seq8581__$2 = cljs.core.next.call(null,seq8581__$1);
return quil_isometric.core.with_iso.cljs$core$IFn$_invoke$arity$variadic(G__8582,G__8583,seq8581__$2);
});


quil_isometric.core.with_iso.cljs$lang$macro = true;

//# sourceMappingURL=core.js.map