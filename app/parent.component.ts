import {Component} from '@angular/core';
import {SharedService} from './shared.service';
import {ChildComponent} from './child.component';
import {ChildSiblingComponent} from './child-sibling.component';
@Component({
    selector: 'parent-component',
    template: `

        <div style="border-style: double ;">
        <h1>Parent</h1>

        <form novalidate class="simple-form">
           <input type="text" [(ngModel)]="child1Title" name="name1"  />
        </form>

            <child-component (notify)="onNotify($event)"></child-component>
            <child-sibling-component [title]="child1Title" (notify)="onNotify($event)"></child-sibling-component>
            <child-sibling-component [title]="child2Title"></child-sibling-component>

        </div>
    `,
    providers: [SharedService],
    directives: [ChildComponent, ChildSiblingComponent]
})
export class ParentComponent{
   child1Title:string = '1-This text is passed to child';
   child2Title:string = '2-This text is passed to child';

   onNotify(message:string):void {
     this.child1Title=message;
   }
}
