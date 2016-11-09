import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {FromComponentComponent} from "./from-component.component";
import {AgGridModule} from 'ag-grid-ng2/main';
import {RatioModule} from "./ratio.module";
import {ParentComponent} from "./parent.component";
import {ChildComponent} from './child.component';
import {ChildSiblingComponent} from './child-sibling.component';
// import { FORM_DIRECTIVES } from '@angular/forms';
// import {ClickableModule} from "./clickable.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withNg2ComponentSupport(),
        RatioModule,
        // ClickableModule
    ],
    declarations: [
        AppComponent,
        FromComponentComponent,
        ParentComponent,
        ChildComponent,
        ChildSiblingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
