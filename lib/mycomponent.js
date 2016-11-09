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
var parentComponent = (function () {
    function parentComponent() {
    }
    parentComponent = __decorate([
        core_1.Component({
            selector: 'parent-component',
            template: "\n        <h1>Parent</h1>\n        <div>\n            <child-component></child-component>\n            <child-sibling-component></child-sibling-component>\n        </div>\n    ",
            providers: [shared_service_1.SharedService],
            directives: [child_component_1.ChildComponent, child_sibling_component_1.ChildSiblingComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], parentComponent);
    return parentComponent;
}());
exports.parentComponent = parentComponent;
//# sourceMappingURL=mycomponent.js.map