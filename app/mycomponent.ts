import {Component} from '@angular/core';
import {SharedService} from './shared.service';
import {ChildComponent} from './child.component';
import {ChildSiblingComponent} from './child-sibling.component';
@Component({
    selector: 'parent-component',
    template: `
        <h1>Parent</h1>
        <div>
            <child-component></child-component>
            <child-sibling-component></child-sibling-component>
        </div>
    `,
    providers: [SharedService],
    directives: [ChildComponent, ChildSiblingComponent]
})
export class parentComponent{

} 
