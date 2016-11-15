import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
    dataArray: string[] = [];

    insertData(data: string){
      //  this.dataArray.unshift(data);
      this.dataArray.length=0;
      this.dataArray.splice(0,0,data);
    }

    getData :Promise<string[]> ()
    {
      //return Promise.resolve(this.dataArray);
      // only with delay it works but without delay it doesn't
      return new Promise<string[]> (resolve =>
      setTimeout(resolve,2000)).then(()=> this.dataArray);
    }


}
