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
        var _this = this;
        this._sharedService = _sharedService;
        this.child1Title = '1';
        this.child2Title = '10';
        this._sharedService.getData().then(function (dataArray) { return _this.sharedData = dataArray; });
    }
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'parent-component',
            template: "\n        <div class=\"main\">\n        <h1>Parent</h1>\n        <div class=\"container\">\n        <form novalidate>\n           <div class=\"form-group\">\n             <label for=\"firstChild\">First child input:</label>\n             <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"child1Title\" name=\"name1\"  />\n             </div>\n           <br/>\n           <div class=\"form-group\">\n             <label for=\"secondChild\">Second child input:</label>\n             <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"child2Title\" name=\"name2\"  />\n           </div>\n           <div>\n               <label> Shared data between parent and children is : {{this.sharedData}} </label>\n           </div>\n        </form>\n\n        <br/>\n          <div class=\"jumbotron span8\">\n            <div>\n            <child-component [(title)]=\"child1Title\" ></child-component>\n            </div>\n            <br/>\n            <div>\n            <child-component [(title)]=\"child2Title\" ></child-component>\n            </div>\n          </div>\n        </div>\n    ",
            styles: ["\n      .main {\n            display: inline-block;\n            font-size: large;\n            color: black;\n            padding: 0.8em 0.7em 0 0.7em;\n            background-color: #cacfd2 ;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 100%;\n            border-radius: 4px 0 0 4px;\n          }\n      "],
            providers: [shared_service_1.SharedService],
            directives: [child_component_1.ChildComponent, child_sibling_component_1.ChildSiblingComponent]
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map