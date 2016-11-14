"use strict";
var ChildViewModel = (function () {
    function ChildViewModel(titleChange) {
        this.titleChange = titleChange;
        this._hasValue = false;
        this.titleChange = titleChange;
    }
    Object.defineProperty(ChildViewModel.prototype, "doubleValue", {
        get: function () { return this._doubleValue; },
        set: function (newDoubleValue) {
            if (this._doubleValue != newDoubleValue) {
                this._doubleValue = newDoubleValue;
                var result = this.doubleValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChildViewModel.prototype, "value", {
        get: function () { return this._value; },
        set: function (newValue) {
            if (this._value != newValue) {
                this._value = newValue;
                var result = this.value;
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
        this.doubleValue = value * 2;
        this.value = value;
    };
    return ChildViewModel;
}());
exports.ChildViewModel = ChildViewModel;
//# sourceMappingURL=child-view-model.js.map