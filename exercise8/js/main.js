//Open the json file and then populate learnjs.html with the data from the json file. 
//document.getElementsByTagName()
//document.getElementById()
//innerHTML();
var MAINAPP = (function(params, util) {
    
    util.dom.domReady(function() {
        util.json.loadJSON('data/data.json',  function() {
            util.dom.$('h2')[0].innerHTML = util.json.jsonObj.app.heading;
            for (let i = 0; i < util.dom.$('li').length; i++) {
                let itemContent = util.dom.$('#b' + (i+1));
                itemContent.innerHTML = util.json.jsonObj.app.items[i];
            }
        });
    });

    return params;
})(MAINAPP || {}, UTIL);
