(ns instrument-design.core
  (:require [quil.core :as q :include-macros true]
            [quil-isometric.core :refer [grid]]
            [quil.middleware :as m])
  (:require-macros [quil-isometric.core :refer [with-iso]]))

(defn setup []
  (q/ortho (* -0.5 (.-innerWidth js/window))
           (* 0.5 (.-innerWidth js/window))
           (* -0.5 (.-innerHeight js/window))
           (* 0.5 (.-innerHeight js/window))
           -1 20000)
  {})

(defn update-state [state]
  state)

(defn draw-state [state]
  (q/stroke-weight 20)
  (q/background 255)
  (q/fill 255)
  (q/stroke 0 120)
  (grid 20)
  (q/stroke 0)
  (with-iso
    (q/box 200)))
  

(q/defsketch instrument-design
  :host "instrument-design"
  :size [(.-innerWidth js/window)
         (.-innerHeight js/window)]
  :renderer :p3d
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
