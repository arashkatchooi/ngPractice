import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SharedService} from './shared.service'
import { ChildViewModel } from './child-view-model'

@Component({
    selector: 'child-component',
    template: `
        <div style="border-style: groove;">
          <h1>I am a child </h1>
          <div>

                <input type="text" [(ngModel)]="_viewModel.maxValue"  (change)="onMaxChange()" name="name1"  />
                <input type="text" [(ngModel)]="_viewModel.minValue"  (change)="onMinChange()" name="name2"  />
                <button (click)="addData()"> Send Data To Parent </button>
                <label > {{data}}</label>
                <hr/>

          </div>
        </div>
    `
})
export class ChildComponent implements OnInit{

  private _viewModel: ChildViewModel = new ChildViewModel();

  // inputValue : string ="";
  @Output() titleChange= new EventEmitter<string>();

  @Input()
  get title() {
    // return this.inputValue;
  }

  set title(val) {
    var result = parseInt(val);
    this._viewModel.AssignInputValue(result);
    // this._viewModel._minValue=result /2;
  }

    data: string[] = [];
    constructor(
        private _sharedService: SharedService) { }
    ngOnInit():any {
        this.data = this._sharedService.dataArray;
    }

    onMaxChange() {
      var reverse=this._viewModel.ReverseMax();
      this.titleChange.emit(reverse);
    }
    onMinChange() {
      var reverse=this._viewModel.ReverseMin();
      this.titleChange.emit(reverse);
    }

    addData(){
        this._sharedService.insertData(this._viewModel.minValue +  this._viewModel.maxValue);

    }
}
