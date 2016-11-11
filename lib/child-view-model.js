"use strict";
var ChildViewModel = (function () {
    function ChildViewModel(onCallback) {
        this.onCallback = onCallback;
        this._hasValue = false;
        this.onCallback = onCallback;
    }
    Object.defineProperty(ChildViewModel.prototype, "minValue", {
        get: function () { return this._minValue; },
        set: function (newMinValue) {
            if (this._minValue != newMinValue) {
                this._minValue = newMinValue;
                var result = this.minValue * 2;
                this.onCallback(result);
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
                var result = this.maxValue / 2;
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
    return ChildViewModel;
}());
exports.ChildViewModel = ChildViewModel;
//# sourceMappingURL=child-view-model.js.map