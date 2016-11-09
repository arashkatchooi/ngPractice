import {Component, Input} from '@angular/core';
import {SharedService} from './shared.service'


@Component({
    selector: 'child-sibling-component',
    template: `
    <div style="border-style: groove;">
        <h1>I am a child (2)</h1>
        <span>{{data}}</span>
        <form novalidate class="simple-form">
          <input type="text" [(ngModel)]="data" name="name1"  />
          <input type="text" [(ngModel)]="title" name="name2"  />
          <button (click)="addData()">  <span>{{data}}</span></button>
          <span>{{data}}</span>
        </form>
        <hr/>

      </div>

    `
})
export class ChildSiblingComponent{

    @Input() title:string ="";
    data: string = 'Testing data';
    data2: string ='more data';

    constructor(
        private _sharedService: SharedService){}
    addData(){
        this._sharedService.insertData(this.data);
        this.data = '';
    }
}
