(ns learnreactplayerrc.core
    (:require [reagent.core :as reagent]))

;; -------------------------
;; Views
(defn home-page []
  (let [react-player (aget js/window "deps" "react-player")]
    [:div
     [:h2 "Zef Style"]
     [:> react-player {:url "https://youtu.be/uMK0prafzw0"}]]))


(defn ^:export main []
  (reagent/render [home-page]
                  (.getElementById js/document "app")))

