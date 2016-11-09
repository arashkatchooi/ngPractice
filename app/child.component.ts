import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SharedService} from './shared.service'

@Component({
    selector: 'child-component',
    template: `
        <div style="border-style: groove;">
          <h1>I am a child (1)</h1>
          <div>

                <input type="text" [(ngModel)]="data" (change)="onChange()" name="name1"  />
                <hr/>

          </div>
        </div>
    `
})
export class ChildComponent implements OnInit{

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    data: string[] = [];
    constructor(
        private _sharedService: SharedService) { }
    ngOnInit():any {
        this.data = this._sharedService.dataArray;
    }

    onChange() {
    this.notify.emit(this.data);
    }
}
