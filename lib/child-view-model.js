"use strict";
var ChildViewModel = (function () {
    function ChildViewModel() {
        this._hasValue = false;
    }
    Object.defineProperty(ChildViewModel.prototype, "minValue", {
        get: function () { return this._minValue; },
        set: function (newMinValue) {
            if (this._minValue != newMinValue) {
                this._minValue = newMinValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChildViewModel.prototype, "maxValue", {
        get: function () { return this._maxValue; },
        set: function (newMaxValue) {
            if (this._maxValue != newMaxValue) {
                this._maxValue = newMaxValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChildViewModel.prototype, "hasValue", {
        get: function () { return this._hasValue; },
        set: function (newHasValue) { },
        enumerable: true,
        configurable: true
    });
    ChildViewModel.prototype.AssignInputValue = function (value) {
        this.minValue = value / 2;
        this.maxValue = value * 2;
    };
    ChildViewModel.prototype.Reverse = function (reverseType, titleChange) {
        var output = "";
        if (reverseType == 'min') {
            var result = this.minValue * 2;
            output = result.toString();
        }
        else {
            var result = this.maxValue / 2;
            output = result.toString();
        }
        titleChange.emit(output);
    };
    return ChildViewModel;
}());
exports.ChildViewModel = ChildViewModel;
//# sourceMappingURL=child-view-model.js.map