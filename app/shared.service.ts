import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
    dataArray: string[] = [];

    insertData(data: string){
      //  this.dataArray.unshift(data);
      this.dataArray.length=0;
      this.dataArray.splice(0,0,data);
    }
}
