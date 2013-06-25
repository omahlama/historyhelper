var HistoryHelper = (function() {
    "use strict";

    var stack, pointer;

    function init() {
        stack = [];
        pointer = -1;
    }

    function go(url, skipHistory) {
        var i, len, diff;

        for(i=0, len= stack.length; i<len; i++) {
            if(stack[i] === url) {
                diff = i - pointer;
                pointer = i;
                stack = stack.slice(0, pointer+1);

                if(!skipHistory && diff !== 0) {
                    window.history.go(diff);
                }
                return;
            }
        }

        stack = stack.slice(0, pointer+1);
        stack.push(url);
        pointer = stack.length - 1;

        Backbone.history.navigate(url, {trigger: !skipHistory});
    }

    init();

    return {
        go: go,
        init: init
    };
})();

