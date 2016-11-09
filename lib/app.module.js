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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require("./app.component");
var from_component_component_1 = require("./from-component.component");
var main_1 = require('ag-grid-ng2/main');
var ratio_module_1 = require("./ratio.module");
var parent_component_1 = require("./parent.component");
var child_component_1 = require('./child.component');
var child_sibling_component_1 = require('./child-sibling.component');
// import { FORM_DIRECTIVES } from '@angular/forms';
// import {ClickableModule} from "./clickable.module";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                main_1.AgGridModule.withNg2ComponentSupport(),
                ratio_module_1.RatioModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                from_component_component_1.FromComponentComponent,
                parent_component_1.ParentComponent,
                child_component_1.ChildComponent,
                child_sibling_component_1.ChildSiblingComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map