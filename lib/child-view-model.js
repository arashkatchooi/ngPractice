"use strict";
var ChildViewModel = (function () {
    function ChildViewModel() {
        this._hasValue = false;
    }
    Object.defineProperty(ChildViewModel.prototype, "minValue", {
        get: function () { return this._minValue; },
        set: function (newMinValue) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChildViewModel.prototype, "maxValue", {
        get: function () { return this._maxValue; },
        set: function (newmaxValue) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChildViewModel.prototype, "hasValue", {
        get: function () { return this._hasValue; },
        set: function (newHasValue) { },
        enumerable: true,
        configurable: true
    });
    return ChildViewModel;
}());
exports.ChildViewModel = ChildViewModel;
//# sourceMappingURL=child-view-model.js.map