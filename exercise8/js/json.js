var UTIL = (function(params) {

    var sub = params.json = params.json || {};

    var jsonObj = {};

    var loadJSON = function(path, code) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                sub.jsonObj = JSON.parse(xobj.responseText);
                code();
            }
        };
        xobj.send(null);

    };

    sub.jsonObj = jsonObj;
    sub.loadJSON = loadJSON;

    return params;
})(UTIL || {});