import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SharedService} from './shared.service'

@Component({
    selector: 'child-component',
    template: `
        <div style="border-style: groove;">
          <h1>I am a child (1)</h1>
          <div>

                <input type="text" [(ngModel)]="titleValue"  (change)="onChange()" name="name1"  />
                <hr/>

          </div>
        </div>
    `
})
export class ChildComponent implements OnInit{

  titleValue : string ="";
  @Output() titleChange= new EventEmitter<string>();

  @Input()
  get title() {

    return this.titleValue;
  }

  set title(val) {
    this.titleValue = val;
    this.titleChange.emit(this.titleValue);
  }



    data: string[] = [];
    constructor(
        private _sharedService: SharedService) { }
    ngOnInit():any {
        this.data = this._sharedService.dataArray;
    }

    onChange() {
      this.titleChange.emit(this.titleValue);
    }
}
