require(["dojo/dom", "dojo/on", "Operator.js", "Accumulator.js", "dojo/domReady!"],
    function (dom, on, Operator, Accumulator) {
        "use strict";
        var operand1 = null,
            operand2 = null,
            operator = null,
            clearOperands = function () {
                operand1 = null;
                operand2 = null;
            },
            clearOperator = function () {
                operator = null;
            },
            clearAccumulator = function () {
                Accumulator.clear();
            };

        on(dom.byId("clear"), "click", function () {
            clearOperands();
            clearOperator();
            clearAccumulator();
        });
        on(dom.byId("one"), "click", function () {
            Accumulator.enterDigit("1");
        });
        on(dom.byId("two"), "click", function () {
            Accumulator.enterDigit("2");
        });
        on(dom.byId("three"), "click", function () {
            Accumulator.enterDigit("3");
        });
        on(dom.byId("four"), "click", function () {
            Accumulator.enterDigit("4");
        });
        on(dom.byId("five"), "click", function () {
            Accumulator.enterDigit("5");
        });
        on(dom.byId("six"), "click", function () {
            Accumulator.enterDigit("6");
        });
        on(dom.byId("seven"), "click", function () {
            Accumulator.enterDigit("7");
        });
        on(dom.byId("eight"), "click", function () {
            Accumulator.enterDigit("8");
        });
        on(dom.byId("nine"), "click", function () {
            Accumulator.enterDigit("9");
        });
        on(dom.byId("zero"), "click", function () {
            Accumulator.enterDigit("0");
        });

        on(dom.byId("plusMinus"), "click", function () {
            Accumulator.togglePlusMinus();
        });

        on(dom.byId("decimalPoint"), "click", function () {
            Accumulator.enterDecimalPoint();
        });

        on(dom.byId("plus"), "click", function () {
            if (operator === null) {
                operand1 = Accumulator.getValue();
            } else {
                operand2 = Accumulator.getValue();
                operand1 = operator(operand1, operand2);
            }
            operator = Operator.add;
            Accumulator.getReadyForNextOperand();
        });
        on(dom.byId("minus"), "click", function () {
            operator = Operator.subtract;
            operand1 = Accumulator.getValue();
            Accumulator.getReadyForNextOperand();
        });
        on(dom.byId("multiply"), "click", function () {
            operator = Operator.multiply;
            operand1 = Accumulator.getValue();
            Accumulator.getReadyForNextOperand();
        });
        on(dom.byId("divide"), "click", function () {
            operator = Operator.divide;
            operand1 = Accumulator.getValue();
            Accumulator.getReadyForNextOperand();
        });

        on(dom.byId("equals"), "click", function () {
            if (operator !== null) {
                operand2 = Accumulator.getValue();
                var answer = operator(operand1, operand2);
                var answerAsString = answer.toString();
                Accumulator.setInnerHtml(answerAsString);
                Accumulator.getReadyForNextOperand();
                clearOperands();
                clearOperator();
            }
        });
    });