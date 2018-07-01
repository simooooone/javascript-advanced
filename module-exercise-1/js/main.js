var MAINAPP = (function(nsp, $, domU, strU) {

    var initQuiz = function() {
        domU.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
            initialize();
            checkAnswer($('#q01_ans')[0].value);
        });
    };

    /*
    Setup
    */
    UTIL.domReady(function() {
        initQuiz();
    });
    
})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string);