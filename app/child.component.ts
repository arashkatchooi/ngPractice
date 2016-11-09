import {Component, OnInit} from '@angular/core';
import {SharedService} from './shared.service'

@Component({
    selector: 'child-component',
    template: `
        <h1>I am a child</h1>
        <div>

            

        </div>
    `
})
export class ChildComponent implements OnInit{
    data: string[] = [];
    constructor(
        private _sharedService: SharedService) { }
    ngOnInit():any {
        this.data = this._sharedService.dataArray;
    }
}
