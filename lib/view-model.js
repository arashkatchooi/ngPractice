"use strict";
var ViewModel = (function () {
    function ViewModel() {
    }
    Object.defineProperty(ViewModel.prototype, "minValue", {
        get: function () { return this._minValue; },
        set: function (newMinValue) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "maxValue", {
        get: function () { return this._maxValue; },
        set: function (newmaxValue) { },
        enumerable: true,
        configurable: true
    });
    return ViewModel;
}());
exports.ViewModel = ViewModel;
//# sourceMappingURL=view-model.js.map