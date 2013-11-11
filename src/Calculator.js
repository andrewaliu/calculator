require([
    "dojo/dom",
    "dojo/on",
    "CalculatorNumber.js",
    "Operator.js",
    "CalculatorObject.js",
    "dojo/domReady!"],

    function (dom,
              on,
              CalculatorNumber,
              Operator,
              CalculatorObject) {

        "use strict";

        var calculator = new CalculatorObject(),

            attachEventHandlerForClearButton = function () {
                on(dom.byId("clear"), "click", function () {
                    calculator.clear();
                });
            },

            attachEventHandlerForNumberButton = function (digit) {
                on(dom.byId("number" + digit), "click", function () {
                    calculator.addDigit(digit);
                });
            },

            attachEventHandlersForNumberPadButtons = function () {
                var i;
                for (i = 0; i < 10; i += 1) {
                    attachEventHandlerForNumberButton(i.toString());
                }

                on(dom.byId("toggleSign"), "click", function () {
                    calculator.toggleSign();
                });

                on(dom.byId("decimalPoint"), "click", function () {
                    calculator.addDecimalPoint();
                });
            },

            attachEventHandlersForOperatorButtons = function () {
                on(dom.byId("plus"), "click", function () {
                    calculator.plus();
                });

                on(dom.byId("minus"), "click", function () {
                    calculator.minus();
                });

                on(dom.byId("multiplyBy"), "click", function () {
                    calculator.multiplyBy();
                });

                on(dom.byId("divideBy"), "click", function () {
                    calculator.divideBy();
                });
            },

            attachEventHandlerForEqualsButton = function () {
                on(dom.byId("equals"), "click", function () {
                    calculator.equals();
                });

            },

            attachEventHandlers = function () {
                attachEventHandlerForClearButton();
                attachEventHandlersForNumberPadButtons();
                attachEventHandlersForOperatorButtons();
                attachEventHandlerForEqualsButton();
            };

        attachEventHandlers();
        calculator.clear();
    });