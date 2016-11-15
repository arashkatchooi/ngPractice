import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SharedService} from './shared.service'
import { ChildViewModel } from './child-view-model'

@Component({
    selector: 'child-component',
    template: `
        <div class="childrens">
          <h3>Child</h3>
          <div>I am identical with my siblings, I get one input from my parent and multiply it to two</div>
          <hr/>
          <div >
                input:
                <input type="text" [(ngModel)]="_viewModel.value"  name="name1"  /> x 2 =
                <label> {{_viewModel.doubleValue}} </label>
                <div>
                  <label> Send Data through injected service. </label>
                  <label > Shared Data is : {{data}}. click on send to put {{_viewModel.doubleValue}} in to shared location</label>
                  <button class="btn btn-primary" (click)="addData()"> Send </button>
                </div>
                <hr/>

          </div>
        </div>
    `,
    styles: [`
      .childrens {
            display: inline-block;
            font-size: medium;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 15.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
          }
      `]
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
