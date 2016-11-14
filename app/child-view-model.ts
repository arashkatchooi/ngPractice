
import {EventEmitter} from '@angular/core';
export class ChildViewModel {

    constructor(public titleChange:  EventEmitter<string>)
    {
      this.titleChange=titleChange;
    }

    private titleChange : EventEmitter<string>;

    private _doubleValue: number;
    public get doubleValue(): number { return this._doubleValue; }
    public set doubleValue(newDoubleValue: number)
     {
       if (this._doubleValue!=newDoubleValue) {
         this._doubleValue=newDoubleValue;
         var result= this.doubleValue;
        //  if (this.titleChange!=null)
        //  this.titleChange.emit(result);
       }
     }

    private _value: number;
    public get value(): number { return this._value; }
    public set value(newValue: number)
    {
      if (this._value!=newValue) {
        this._value=newValue;
        var result= this.value;
        // this.titleChange.emit(result);
        //  if (this.titleChange!=null)
        //  this.titleChange.emit(result);

      }
    }

    private _hasValue: boolean = false;
    public get hasValue(): boolean { return this._hasValue; }
    public set hasValue(newHasValue: boolean) {}

    public AssignInputValue(value: number)
    {
      this.doubleValue = value *2 ;
      this.value = value  ;
    }

}
