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
           First child input  :  <input type="text" [(ngModel)]="child1Title" name="name1"  />
           <br/>
           Second child input :<input type="text" [(ngModel)]="child2Title" name="name2"  />
        </form>
        <span>
            <div>
                <label> Shared data between parent and children is : {{this.sharedData}} </label>
            </div>
        </span>

            <br/>
            <div> Child 1
            <child-component [(title)]="child1Title" ></child-component>
            </div>
            <br/>
            <div> Child 2
            <child-component [(title)]="child2Title" ></child-component>
            </div>
        </div>
    `,
    providers: [SharedService],
    directives: [ChildComponent, ChildSiblingComponent]
})
export class ParentComponent {

  constructor(private _sharedService: SharedService )
  {
    this._sharedService.getData().then(dataArray => this.sharedData = dataArray);
  }

   child1Title:string = '1';
   child2Title:string = '10';
   tmp2 : string = "" ;

}
