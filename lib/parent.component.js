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
var child_component_1 = require('./child.component');
var child_sibling_component_1 = require('./child-sibling.component');
var ParentComponent = (function () {
    function ParentComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.child1Title = '1';
        this.child2Title = '10';
        this.tmp2 = "";
        var tmp = this._sharedService.dataArray;
    }
    ParentComponent.prototype.getShared = function () {
        var tmp = this._sharedService.dataArray;
        this.tmp2 = tmp[0];
        //  this._sharedService=SharedService.dataArray;
    };
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'parent-component',
            template: "\n\n        <div style=\"border-style: double ;\">\n        <h1>Parent</h1>\n\n        <form novalidate class=\"simple-form\">\n           First child input  :  <input type=\"text\" [(ngModel)]=\"child1Title\" name=\"name1\"  />\n           <br/>\n           Second child input :<input type=\"text\" [(ngModel)]=\"child2Title\" name=\"name2\"  />\n        </form>\n        <span>\n            <div>\n                <input type=\"text\" [ngModel]=\"tmp2\" name=\"dataArray\"  />\n                <button (click)=\"getShared()\"> Get Shared Data</button>\n            </div>\n        </span>\n\n            <br/>\n            <div> Child 1\n            <child-component [(title)]=\"child1Title\" ></child-component>\n            </div>\n            <br/>\n            <div> Child 2\n            <child-component [(title)]=\"child2Title\" ></child-component>\n            </div>\n\n\n\n\n          <!--  <child-sibling-component [title]=\"child1Title\" (notify)=\"onNotify($event)\"></child-sibling-component>\n            <child-sibling-component [title]=\"child2Title\"></child-sibling-component>  -->\n\n        </div>\n    ",
            providers: [shared_service_1.SharedService],
            directives: [child_component_1.ChildComponent, child_sibling_component_1.ChildSiblingComponent]
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map