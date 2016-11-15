import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SharedService} from './shared.service'
import { ChildViewModel } from './child-view-model'

@Component({
    selector: 'child-component',
    template: `
        <div style="border-style: groove;">
          <h3>Child</h3>
          <div>I am identical with my siblings, I get one input from my parent and multiply it to two</div>
          <hr/>
          <div>
                input:
                <input type="text" [(ngModel)]="_viewModel.value"  name="name1"  /> x 2 =
                <label> {{_viewModel.doubleValue}} </label>
                <div>
                  <label> Send Data through injected service. </label>
                  <label > Shared Data is : {{data}}. click on send to put {{_viewModel.doubleValue}} in to shared location</label>
                  <button (click)="addData()"> Send </button>
                </div>
                <hr/>

          </div>
        </div>
    `
})
export class ChildComponent implements OnInit{

  // inputValue : string ="";
  @Output() titleChange= new EventEmitter<string>();
  private _viewModel: ChildViewModel = new ChildViewModel(this.titleChange);

  @Input()
  get title() {
    // return this.inputValue;
  }

  set title(val) {
    var result = parseInt(val);
    this._viewModel.AssignInputValue(result);
  }

    data: string[] = [];
    constructor(
        private _sharedService: SharedService) { }
    ngOnInit():any {
        this.data = this._sharedService.dataArray;
    }

     onChange() {
      //  var reverse=this._viewModel.Reverse(reverseType,this.titleChange);
        this.titleChange.emit();
     }


    addData(){
        this._sharedService.insertData(this._viewModel.doubleValue);

    }
}
