// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__7804__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7805__i = 0, G__7805__a = new Array(arguments.length -  0);
while (G__7805__i < G__7805__a.length) {G__7805__a[G__7805__i] = arguments[G__7805__i + 0]; ++G__7805__i;}
  args = new cljs.core.IndexedSeq(G__7805__a,0);
} 
return G__7804__delegate.call(this,args);};
G__7804.cljs$lang$maxFixedArity = 0;
G__7804.cljs$lang$applyTo = (function (arglist__7806){
var args = cljs.core.seq(arglist__7806);
return G__7804__delegate(args);
});
G__7804.cljs$core$IFn$_invoke$arity$variadic = G__7804__delegate;
return G__7804;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7807__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7808__i = 0, G__7808__a = new Array(arguments.length -  0);
while (G__7808__i < G__7808__a.length) {G__7808__a[G__7808__i] = arguments[G__7808__i + 0]; ++G__7808__i;}
  args = new cljs.core.IndexedSeq(G__7808__a,0);
} 
return G__7807__delegate.call(this,args);};
G__7807.cljs$lang$maxFixedArity = 0;
G__7807.cljs$lang$applyTo = (function (arglist__7809){
var args = cljs.core.seq(arglist__7809);
return G__7807__delegate(args);
});
G__7807.cljs$core$IFn$_invoke$arity$variadic = G__7807__delegate;
return G__7807;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
