import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SharedService} from './shared.service'
import { ChildViewModel } from './child-view-model'

@Component({
    selector: 'child-component',
    template: `
        <div style="border-style: groove;">
          <h1>I am a child (1)</h1>
          <div>

                <input type="text" [(ngModel)]="_viewModel._maxValue"  (change)="onMaxChange()" name="name1"  />

                <input type="text" [(ngModel)]="_viewModel._minValue"  (change)="onMinChange()" name="name1"  />

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
    this._viewModel._minValue=result/2;
    this._viewModel._maxValue=result*2;
  }



    data: string[] = [];
    constructor(
        private _sharedService: SharedService) { }
    ngOnInit():any {
        this.data = this._sharedService.dataArray;
    }

    onMaxChange() {
      this.titleChange.emit(this._viewModel._maxValue);
    }
    onMinChange() {
      this.titleChange.emit(this._viewModel._minValue);
    }
}
