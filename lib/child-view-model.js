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
    ChildViewModel.prototype.ReverseMin = function () {
        var result = this.minValue * 2;
        return result.toString();
    };
    ChildViewModel.prototype.ReverseMax = function () {
        var result = this.maxValue / 2;
        return result.toString();
    };
    return ChildViewModel;
}());
exports.ChildViewModel = ChildViewModel;
//# sourceMappingURL=child-view-model.js.map