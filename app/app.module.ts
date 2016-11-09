import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {FromComponentComponent} from "./from-component.component";

import {BrowserModule} from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-ng2/main';
import {RatioModule} from "./ratio.module";
import {MyComponent} from "./mycomponent";
// import {ClickableModule} from "./clickable.module";

@NgModule({
    imports: [
        BrowserModule,
        AgGridModule.withNg2ComponentSupport(),
        RatioModule,
        // ClickableModule
    ],
    declarations: [
        AppComponent,
        FromComponentComponent,
        MyComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
