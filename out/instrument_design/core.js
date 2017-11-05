// Compiled by ClojureScript 1.9.473 {}
goog.provide('instrument_design.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil_isometric.core');
goog.require('quil.middleware');
instrument_design.core.setup = (function instrument_design$core$setup(){
quil.core.ortho.call(null,(-0.5 * window.innerWidth),(0.5 * window.innerWidth),(-0.5 * window.innerHeight),(0.5 * window.innerHeight),(-1),(20000));

return cljs.core.PersistentArrayMap.EMPTY;
});
instrument_design.core.update_state = (function instrument_design$core$update_state(state){
return state;
});
instrument_design.core.draw_state = (function instrument_design$core$draw_state(state){
quil.core.stroke_weight.call(null,(20));

quil.core.background.call(null,(255));

quil.core.fill.call(null,(255));

quil.core.stroke.call(null,(0),(120));

quil_isometric.core.grid.call(null,(20));

quil.core.stroke.call(null,(0));

quil.core.push_matrix.call(null);

quil.core.translate.call(null,(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2)));

quil.core.rotate_x.call(null,(- (quil_isometric.core.PI / (6))));

quil.core.rotate_y.call(null,(quil.core.radians.call(null,(45)) + quil.core.sin.call(null,quil.core.map_range.call(null,quil.core.mouse_x.call(null),(0),quil.core.width.call(null),(0),(quil_isometric.core.PI / (2))))));

quil.core.box.call(null,(200));

return quil.core.pop_matrix.call(null);
});
instrument_design.core.instrument_design = (function instrument_design$core$instrument_design(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"instrument-design",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,instrument_design.core.update_state))?(function() { 
var G__8502__delegate = function (args){
return cljs.core.apply.call(null,instrument_design.core.update_state,args);
};
var G__8502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8503__i = 0, G__8503__a = new Array(arguments.length -  0);
while (G__8503__i < G__8503__a.length) {G__8503__a[G__8503__i] = arguments[G__8503__i + 0]; ++G__8503__i;}
  args = new cljs.core.IndexedSeq(G__8503__a,0);
} 
return G__8502__delegate.call(this,args);};
G__8502.cljs$lang$maxFixedArity = 0;
G__8502.cljs$lang$applyTo = (function (arglist__8504){
var args = cljs.core.seq(arglist__8504);
return G__8502__delegate(args);
});
G__8502.cljs$core$IFn$_invoke$arity$variadic = G__8502__delegate;
return G__8502;
})()
:instrument_design.core.update_state),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,instrument_design.core.setup))?(function() { 
var G__8505__delegate = function (args){
return cljs.core.apply.call(null,instrument_design.core.setup,args);
};
var G__8505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8506__i = 0, G__8506__a = new Array(arguments.length -  0);
while (G__8506__i < G__8506__a.length) {G__8506__a[G__8506__i] = arguments[G__8506__i + 0]; ++G__8506__i;}
  args = new cljs.core.IndexedSeq(G__8506__a,0);
} 
return G__8505__delegate.call(this,args);};
G__8505.cljs$lang$maxFixedArity = 0;
G__8505.cljs$lang$applyTo = (function (arglist__8507){
var args = cljs.core.seq(arglist__8507);
return G__8505__delegate(args);
});
G__8505.cljs$core$IFn$_invoke$arity$variadic = G__8505__delegate;
return G__8505;
})()
:instrument_design.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,instrument_design.core.draw_state))?(function() { 
var G__8508__delegate = function (args){
return cljs.core.apply.call(null,instrument_design.core.draw_state,args);
};
var G__8508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8509__i = 0, G__8509__a = new Array(arguments.length -  0);
while (G__8509__i < G__8509__a.length) {G__8509__a[G__8509__i] = arguments[G__8509__i + 0]; ++G__8509__i;}
  args = new cljs.core.IndexedSeq(G__8509__a,0);
} 
return G__8508__delegate.call(this,args);};
G__8508.cljs$lang$maxFixedArity = 0;
G__8508.cljs$lang$applyTo = (function (arglist__8510){
var args = cljs.core.seq(arglist__8510);
return G__8508__delegate(args);
});
G__8508.cljs$core$IFn$_invoke$arity$variadic = G__8508__delegate;
return G__8508;
})()
:instrument_design.core.draw_state));
});
goog.exportSymbol('instrument_design.core.instrument_design', instrument_design.core.instrument_design);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),instrument_design.core.instrument_design,new cljs.core.Keyword(null,"host-id","host-id",742376279),"instrument-design"], null));
}

//# sourceMappingURL=core.js.map