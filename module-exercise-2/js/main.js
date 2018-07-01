var MAINAPP = (function(nsp) {
    var quiz = nsp.quiz,
        domU = nsp.dom,
        $ = nsp.dom.$;

    var domReady = function(funct) {
        document.addEventListener('DOMContentLoaded', function(){ 
            if (typeof funct === "function") {
                funct();
            }
        }, false);
    },

    initQuiz = function() {
        domU.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
            quiz.initialize();
            quiz.checkAnswer($('#q01_ans')[0].value);
        });
    };

    /*
    Setup
    */

    domReady(function() {
        initQuiz();
    });

    return nsp;

})(MAINAPP || {});