// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__4563__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__4563__auto__)){
return or__4563__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__7761 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__7761) : cljs.core.atom.call(null,G__7761));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_7764 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_7764){
return (function (){
var _STAR_always_update_STAR_7765 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7765;
}});})(_STAR_always_update_STAR_7764))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7764;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args7766 = [];
var len__5621__auto___7769 = arguments.length;
var i__5622__auto___7770 = (0);
while(true){
if((i__5622__auto___7770 < len__5621__auto___7769)){
args7766.push((arguments[i__5622__auto___7770]));

var G__7771 = (i__5622__auto___7770 + (1));
i__5622__auto___7770 = G__7771;
continue;
} else {
}
break;
}

var G__7768 = args7766.length;
switch (G__7768) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7766.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__7777_7781 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__7778_7782 = null;
var count__7779_7783 = (0);
var i__7780_7784 = (0);
while(true){
if((i__7780_7784 < count__7779_7783)){
var v_7785 = chunk__7778_7782.cljs$core$IIndexed$_nth$arity$2(null,i__7780_7784);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_7785);

var G__7786 = seq__7777_7781;
var G__7787 = chunk__7778_7782;
var G__7788 = count__7779_7783;
var G__7789 = (i__7780_7784 + (1));
seq__7777_7781 = G__7786;
chunk__7778_7782 = G__7787;
count__7779_7783 = G__7788;
i__7780_7784 = G__7789;
continue;
} else {
var temp__4425__auto___7790 = cljs.core.seq(seq__7777_7781);
if(temp__4425__auto___7790){
var seq__7777_7791__$1 = temp__4425__auto___7790;
if(cljs.core.chunked_seq_QMARK_(seq__7777_7791__$1)){
var c__5366__auto___7792 = cljs.core.chunk_first(seq__7777_7791__$1);
var G__7793 = cljs.core.chunk_rest(seq__7777_7791__$1);
var G__7794 = c__5366__auto___7792;
var G__7795 = cljs.core.count(c__5366__auto___7792);
var G__7796 = (0);
seq__7777_7781 = G__7793;
chunk__7778_7782 = G__7794;
count__7779_7783 = G__7795;
i__7780_7784 = G__7796;
continue;
} else {
var v_7797 = cljs.core.first(seq__7777_7791__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_7797);

var G__7798 = cljs.core.next(seq__7777_7791__$1);
var G__7799 = null;
var G__7800 = (0);
var G__7801 = (0);
seq__7777_7781 = G__7798;
chunk__7778_7782 = G__7799;
count__7779_7783 = G__7800;
i__7780_7784 = G__7801;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
