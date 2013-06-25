$(function() {
    "use strict";

    var MyRouter = (function () {
        function updateHistory(url) {
            HistoryHelper.go(url, true);
        }

        function renderTemplate(templateId, data) {
            var contents = $(templateId).html();
            $("#view").html(_.template(contents, data));
        }

        return Backbone.Router.extend({
            routes: {
                "": "index",
                ":category/": "category",
                ":category/:item": "item"
            },

            index: function () {
                updateHistory("");
                renderTemplate("#mainview");
            },

            category: function (category) {
                updateHistory(category + "/");
                renderTemplate("#" + category);
            },

            item: function (category, item) {
                updateHistory(category + "/" + item);
                renderTemplate("#item", { category: category, item: item});
            }
        });
    })();

    $("#view").on("click", "a", function() {
        var url = $(this).attr("href");
        HistoryHelper.go(url, false);
        return false;
    });

    new MyRouter();
    Backbone.history.start();
});