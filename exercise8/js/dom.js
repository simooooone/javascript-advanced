var UTIL = (function(params) {
    var sub = params.dom = params.dom || {};
    var doc = document;
    var $ = function (domElement) {
        if (domElement.indexOf('#') === 0){
            try {
                return doc.getElementsById(domElement.substring(1,domElement.length));
            } catch(e) {
                console.log(e);
            }
        } else {
            try {
                return doc.getElementsByTagName(domElement);
            } catch(e) {
                console.log(e);
            }
        }
    }
    
    var domReady = function(funct) {
        document.addEventListener('DOMContentLoaded', function(){ 
            if (typeof funct === "function") {
                funct();
            }
        }, false);
    };

    //Public Methods and Properties
    sub.$ = $;
    sub.domReady = domReady;

    return params;
})(UTIL || {});