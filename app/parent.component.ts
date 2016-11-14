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
                <input type="text" [ngModel]="tmp2" name="dataArray"  />
                <button (click)="getShared()"> Get Shared Data</button>
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




          <!--  <child-sibling-component [title]="child1Title" (notify)="onNotify($event)"></child-sibling-component>
            <child-sibling-component [title]="child2Title"></child-sibling-component>  -->

        </div>
    `,
    providers: [SharedService],
    directives: [ChildComponent, ChildSiblingComponent]
})
export class ParentComponent implements OnInit {

  constructor(private _sharedService: SharedService )
  {
    let tmp: Observable<string[]>=this._sharedService.dataArray;
  }

   child1Title:string = '1';
   child2Title:string = '10';
   tmp2 : string = "" ;

   getShared(){
     let  tmp: Observable<string[]>=this._sharedService.dataArray;
     this.tmp2= tmp[0];
    //  this._sharedService=SharedService.dataArray;
   }
}
