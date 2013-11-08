require(["dojo/dom", "dojo/_base/window", "dojo/domReady!"],
    function (dom, window) {
        "use strict";

        var display,
            fixtureIsSetUp = false;

        module("Calculator", {
            setup: function () {
                if (!fixtureIsSetUp) {
                    var iframe = dom.byId("webPageUnderTest").contentWindow;
                    window.setContext(iframe.window, iframe.window.document);
                    display = dom.byId("accumulator");
                    fixtureIsSetUp = true;
                }
            },
            teardown: function () {
                dom.byId("clear").click();
                strictEqual(display.innerHTML, "0");
            }
        });

        test("1 + 4 = 5", function () {
            dom.byId("number1").click();
            strictEqual(display.innerHTML, "1");
            dom.byId("plus").click();
            strictEqual(display.innerHTML, "1");
            dom.byId("number4").click();
            strictEqual(display.innerHTML, "4");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "5");
        });

        test("5 - 9 = -4", function () {
            dom.byId("number5").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("minus").click();
            strictEqual(display.innerHTML, "5");
            dom.byId("number9").click();
            strictEqual(display.innerHTML, "9");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "-4");
        });

        test("2 * 7 = 14", function () {
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("multiply").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("number7").click();
            strictEqual(display.innerHTML, "7");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "14");
        });

        test("3 / 2 = 1.5", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("divide").click();
            strictEqual(display.innerHTML, "3");
            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");
            dom.byId("equals").click();
            strictEqual(display.innerHTML, "1.5");
        });

        test("3 / 2 + 8 * 5 - 6 = 41.5", function () {
            dom.byId("number3").click();
            strictEqual(display.innerHTML, "3");

            dom.byId("divide").click();
            strictEqual(display.innerHTML, "3");

            dom.byId("number2").click();
            strictEqual(display.innerHTML, "2");

            dom.byId("plus").click();
            strictEqual(display.innerHTML, "2");

            dom.byId("number8").click();
            strictEqual(display.innerHTML, "8");

            dom.byId("multiply").click();
            strictEqual(display.innerHTML, "8");

            dom.byId("number5").click();
            strictEqual(display.innerHTML, "5");

            dom.byId("minus").click();
            strictEqual(display.innerHTML, "5");

            dom.byId("number6").click();
            strictEqual(display.innerHTML, "6");

            dom.byId("equals").click();
            strictEqual(display.innerHTML, "41.5");
        });

    });