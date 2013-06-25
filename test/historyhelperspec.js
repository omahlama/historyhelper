var Backbone;

describe("HistoryHelper", function() {
    "use strict";

    beforeEach(function() {
        Backbone = {
            history : {
                navigate: function() {}
            }
        };

        HistoryHelper.init();

        spyOn(Backbone.history, "navigate");
        spyOn(window.history, "go");
    });

    it("goes to the first url", function() {
        HistoryHelper.go("/");
        expect(Backbone.history.navigate).toHaveBeenCalledWith("/", {trigger: true});
    });

    it("goes to second urls", function() {
        HistoryHelper.go("/");
        HistoryHelper.go("/books");
        expect(Backbone.history.navigate.calls.length).toEqual(2);
    });

    it("goes back in history to the first url", function() {
        // Given
        HistoryHelper.go("/");
        HistoryHelper.go("/books");

        // When
        HistoryHelper.go("/")

        // Then
        expect(window.history.go).toHaveBeenCalledWith(-1);
    });

    it("only uses history to go forward", function() {
        // Given
        HistoryHelper.go("/");
        HistoryHelper.go("/books");
        HistoryHelper.go("/");

        // When
        HistoryHelper.go("/books");

        // Then
        expect(window.history.go.calls.length).toEqual(1);
        expect(Backbone.history.navigate.calls.length).toEqual(3);
    });

    it("maintains state on back and forward buttons", function() {
        // Given
        HistoryHelper.go("/");
        HistoryHelper.go("/books");
        HistoryHelper.go("/books/3");

        // When
        // Called from the application router, because the user has pressed back
        HistoryHelper.go("/books", true);

        // Then
        expect(window.history.go.calls.length).toEqual(0);
    });
});