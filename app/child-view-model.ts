
export class ChildViewModel {

    private _minValue: number;
    public get minValue(): number { return this._minValue; }
    public set minValue(newMinValue: number)
     {
       if (this._minValue!=newMinValue) { this._minValue=newMinValue; }
     }

    private _maxValue: number;
    public get maxValue(): number { return this._maxValue; }
    public set maxValue(newMaxValue: number)
    {
      if (this._maxValue!=newMaxValue) { this._maxValue=newMaxValue; }
    }

    private _hasValue: boolean = false;
    public get hasValue(): boolean { return this._hasValue; }
    public set hasValue(newHasValue: boolean) {}

    public AssignInputValue(value: number)
    {
      this.minValue = value /2 ;
      this.maxValue = value *2 ;
    }

    public ReverseMin() : string
    {
      var result= this.minValue*2;
      return result.toString();
    }
    public ReverseMax() : string
    {
      var result= this.maxValue/2
      return result.toString();
    }

}