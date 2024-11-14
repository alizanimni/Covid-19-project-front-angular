import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.scss'
})
export class Section6Component {
   title1:string='הצג לפי'
   title2:string='זמן'
   chartTitle = 'פילוח מדדים שונים על פי גיל ומין'
   info = 'פילוח המאומתים לנגיף COVID-19 לפי קבוצות גיל באוכלוסייה ולפי פילוח זכר ונקבה ניתן לסנן את נתוני המאומתים לפי קבוצות: חולים קשה, מונשמים ונפטרים'
   radio1options:string[]=['מאומתים','נפטרים','מונשמים','מצב קשה','מאושפזים']
   radio2options:string[]=['עד עכשיו','שנה','חצי שנה' ,'3 חודשים','חודש אחרון']

 
   private _data1 = new BehaviorSubject([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1]);
   private _data2 = new BehaviorSubject([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19]);

   data1 = this._data1.asObservable();
   data2 = this._data2.asObservable();

 
   changeData(event: string[]) {
     const selection =   this.getSlectionAsNumber(event)

     if(selection[0]===0){
       if(selection[1]===0){
        this._data1.next([          -8.98, -7.52, -6.65, -20.72, -4.85,
          -3.71, -2.76, -2.07, -9.70, -1.47]);
        this._data2.next([         8.84, 7.42, 6.57, 20.68, 4.83,
          3.74, 6.80, 11.14, 1.79, 1.59]);
       }
       else if(selection[1]===1){
        this._data1.next([-22, -13, -5.2, -11.34, -2, -23.81, -18.69, -16.21, -9, -17.1])
        this._data2.next([21.56, 12.8, 10.9, 13.8, 6.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===2){
        this._data1.next([-5.2, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -22, -13.1])
        this._data2.next([7.56, 12.8, 15.9, 13.8, 18.5, 15.5, 29.19, 3.9, 18.23, 19.3])
       }
       else if(selection[1]===3){
        this._data1.next([-26.25, -23, -29.2, -12.34, -15.3, -21.81, -12.69, -16.21, -11, -15.9])
        this._data2.next([15.02, 13.8, 17.9, 15.8, 12.5, 12.5, 16.69, 12.9, 16, 12.5])
       }
       else if(selection[1]===4){
    this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
    this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
     }
     else if(selection[0]===1){
      if(selection[1]===0){
        this._data1.next([          -18.81, -17.5, -26.5, -20.72, -2.85,
          -13.78, -22.76, -12.07, -6.70, -8.47]);
        this._data2.next([         8.84, 7.42, 6.57, 20.68, 4.83,
          3.74, 6.80, 11.14, 1.79, 1.59]);
       }
       else if(selection[1]===1){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===2){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===3){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===4){
    this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
    this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
     }
     else if(selection[0]===2){
      if(selection[1]===0){
        this._data1.next([          -8.98, -7.52, -6.65, -20.72, -4.85,
          -3.71, -2.76, -2.07, -9.70, -1.47]);
        this._data2.next([         8.84, 7.42, 6.57, 20.68, 4.83,
          3.74, 6.80, 11.14, 1.79, 1.59]);
       }
       else if(selection[1]===1){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===2){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===3){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===4){
    this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
    this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
     }
     else if(selection[0]===3){
      if(selection[1]===0){
        this._data1.next([          -8.98, -7.52, -6.65, -20.72, -4.85,
          -3.71, -2.76, -2.07, -9.70, -1.47]);
        this._data2.next([         8.84, 7.42, 6.57, 20.68, 4.83,
          3.74, 6.80, 11.14, 1.79, 1.59]);
       }
       else if(selection[1]===1){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===2){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===3){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===4){
    this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
    this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
     }
     else if(selection[0]===4){
      if(selection[1]===0){
        this._data1.next([          -8.98, -7.52, -6.65, -20.72, -4.85,
          -3.71, -2.76, -2.07, -9.70, -1.47]);
        this._data2.next([         8.84, 7.42, 6.57, 20.68, 4.83,
          3.74, 6.80, 11.14, 1.79, 1.59]);
       }
       else if(selection[1]===1){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===2){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===3){
        this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
        this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
       else if(selection[1]===4){
    this._data1.next([-12, -2, -13.2, -22.34, -23, -11.81, -12.69, -6.21, -28, -13.1])
    this._data2.next([1.56, 3.8, 15.9, 3.8, 12.5, 23.5, 25.69, 12.9, 10, 19])
       }
     }

   }

  getSlectionAsNumber(selection:string[]){
let newSelection:number[]=[]
    for(let i=0 ;i<this.radio1options.length ; i++){
      if(selection[0]=== this.radio1options[i]){
          newSelection[0]=i
          break
      }  
    }

    for(let i=0 ;i<this.radio2options.length ; i++){
      if(selection[1]=== this.radio2options[i]){
          newSelection[1]=i

      }  
    }

              return newSelection  
  }

}
