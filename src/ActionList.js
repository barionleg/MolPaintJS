/*
 * MolPaintJS
 * Copyright 2017 Leibniz-Institut f. Pflanzenbiochemie 
 *  
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *  
 */
var molPaintJS = (function (molpaintjs) {
    "use strict";

    molpaintjs.ActionList = function () {

        /* 
         * this class stores all atomic actions of a user. A single 
         * user action (e.g. adding a residue) may be composed of 
         * several atomic actions.
         */
        var actions = [];

        return {
            /**
             * add a single atomic action
             * @param a the single (atomic) action
             */
            addAction : function (a) {
                actions.push(a);
            },

            /**
             * append a whole action list
             * @param al the ActionList object to append
             */
            addActionList : function (al) {
                for(var a of al.getActions()) {
                    actions.push(a);
                }
            },

            /**
             * @return the array of atomic actions
             */
            getActions : function () {
                return actions;
            }
        };
    }
    return molpaintjs;
}(molPaintJS || {}));
