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
var child_view_model_1 = require('./child-view-model');
var ChildComponent = (function () {
    function ChildComponent(_sharedService) {
        this._sharedService = _sharedService;
        // inputValue : string ="";
        this.titleChange = new core_1.EventEmitter();
        this._viewModel = new child_view_model_1.ChildViewModel(this.titleChange);
        this.data = [];
    }
    Object.defineProperty(ChildComponent.prototype, "title", {
        get: function () {
            // return this.inputValue;
        },
        set: function (val) {
            var result = parseInt(val);
            this._viewModel.AssignInputValue(result);
        },
        enumerable: true,
        configurable: true
    });
    ChildComponent.prototype.ngOnInit = function () {
        this.data = this._sharedService.dataArray;
    };
    ChildComponent.prototype.onChange = function () {
        //  var reverse=this._viewModel.Reverse(reverseType,this.titleChange);
        this.titleChange.emit();
    };
    ChildComponent.prototype.addData = function () {
        this._sharedService.insertData(this._viewModel.doubleValue);
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
            template: "\n        <div style=\"border-style: groove;\">\n          <h3>Child</h3>\n          <div>I am identical with my siblings, I get one input from my parent and multiply it to two</div>\n          <hr/>\n          <div>\n                input:\n                <input type=\"text\" [(ngModel)]=\"_viewModel.value\"  name=\"name1\"  /> x 2 =\n                <label> {{_viewModel.doubleValue}} </label>\n                <div>\n                  <label> Send Data through injected service. </label>\n                  <label > Shared Data is : {{data}}. click on send to put {{_viewModel.doubleValue}} in to shared location</label>\n                  <button (click)=\"addData()\"> Send </button>\n                </div>\n                <hr/>\n\n          </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map