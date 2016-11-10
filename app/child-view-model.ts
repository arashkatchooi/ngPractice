
export class ChildViewModel {

    private _minValue: number;
    public get minValue(): number { return this._minValue; }
    public set minValue(newMinValue: number) {}

    private _maxValue: number;
    public get maxValue(): number { return this._maxValue; }
    public set maxValue(newmaxValue: number) {}

    public _hasValue: boolean = false;
    public get hasValue(): boolean { return this._hasValue; }
    public set hasValue(newHasValue: boolean) {}
}
