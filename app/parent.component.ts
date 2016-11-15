import {Component} from '@angular/core';
import {SharedService} from './shared.service';
import {ChildComponent} from './child.component';
import {ChildSiblingComponent} from './child-sibling.component';
@Component({
    selector: 'parent-component',
    template: `
        <div class="main">
        <h1>Parent</h1>
        <div class="container">
        <form novalidate>
           <div class="form-group">
             <label for="firstChild">First child input</label>
             <input type="text" class="form-control"  [(ngModel)]="child1Title" name="name1"  />
             </div>
           <br/>
           <div class="form-group">
             <label for="secondChild">Second child input:</label>
             <input type="text" class="form-control"  [(ngModel)]="child2Title" name="name2"  />
           </div>
        </form>
        </div>
        <span>
            <div>
                <label> Shared data between parent and children is : {{this.sharedData}} </label>
            </div>
        </span>

            <br/>
            <div>
            <child-component [(title)]="child1Title" ></child-component>
            </div>
            <br/>
            <div>
            <child-component [(title)]="child2Title" ></child-component>
            </div>
        </div>
    `,
    styles: [`
      .main {
            display: inline-block;
            font-size: large;
            color: black;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #cacfd2 ;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 100%;
            border-radius: 4px 0 0 4px;
          }
      `]
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
