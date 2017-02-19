// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('learnreactplayerrc.core');
goog.require('cljs.core');
goog.require('reagent.core');
learnreactplayerrc.core.home_page = (function learnreactplayerrc$core$home_page(){
var react_player = (window["deps"]["react-player"]);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Zef Style"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,react_player,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"https://youtu.be/uMK0prafzw0"], null)], null)], null);
});
learnreactplayerrc.core.main = (function learnreactplayerrc$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learnreactplayerrc.core.home_page], null),document.getElementById("app"));
});
goog.exportSymbol('learnreactplayerrc.core.main', learnreactplayerrc.core.main);
