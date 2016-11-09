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
var ChildSiblingComponent = (function () {
    function ChildSiblingComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.title = "";
        this.data = 'Testing data';
        this.data2 = 'more data';
    }
    ChildSiblingComponent.prototype.addData = function () {
        this._sharedService.insertData(this.data);
        this.data = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildSiblingComponent.prototype, "title", void 0);
    ChildSiblingComponent = __decorate([
        core_1.Component({
            selector: 'child-sibling-component',
            template: "\n    <div style=\"border-style: groove;\">\n        <h1>I am a child (2)</h1>\n        <span>{{data}}</span>\n        <form novalidate class=\"simple-form\">\n          <input type=\"text\" [(ngModel)]=\"data\" name=\"name1\"  />\n          <input type=\"text\" [(ngModel)]=\"title\" name=\"name2\"  />\n          <button (click)=\"addData()\">  <span>{{data}}</span></button>\n          <span>{{data}}</span>\n        </form>\n        <hr/>\n\n      </div>\n\n    "
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], ChildSiblingComponent);
    return ChildSiblingComponent;
}());
exports.ChildSiblingComponent = ChildSiblingComponent;
//# sourceMappingURL=child-sibling.component.js.map