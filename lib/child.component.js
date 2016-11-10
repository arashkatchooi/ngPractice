"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shared_service_1 = require('./shared.service');
var ChildComponent = (function () {
    function ChildComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.titleValue = "";
        this.titleChange = new core_1.EventEmitter();
        this.data = [];
    }
    Object.defineProperty(ChildComponent.prototype, "title", {
        get: function () {
            return this.titleValue;
        },
        set: function (val) {
            this.titleValue = val;
            this.titleChange.emit(this.titleValue);
        },
        enumerable: true,
        configurable: true
    });
    ChildComponent.prototype.ngOnInit = function () {
        this.data = this._sharedService.dataArray;
    };
    ChildComponent.prototype.onChange = function () {
        this.titleChange.emit(this.titleValue);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChildComponent.prototype, "titleChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChildComponent.prototype, "title", null);
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child-component',
            template: "\n        <div style=\"border-style: groove;\">\n          <h1>I am a child (1)</h1>\n          <div>\n\n                <input type=\"text\" [(ngModel)]=\"titleValue\"  (change)=\"onChange()\" name=\"name1\"  />\n                <hr/>\n\n          </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map