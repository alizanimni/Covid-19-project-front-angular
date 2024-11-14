import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {
  chartTitle:string='אחוז נבדקים חיוביים'
  info:string = 'אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך כלל הנבדקים. נבדק - מי שעבר בדיקה לאיתור של הנגיף (ללא בדיקות נלוות לקביעת החלמה) בבדיקת PCR או בבדיקת אנטיגן מפוקחות (החל מה 5.1.2022).'
  show: boolean = false;
  title1 ='זמן';
  radio1options = ['עד עכשיו','שנה','חצי שנה' ,'3 חודשים','חודש אחרון']

  private _data1 = new BehaviorSubject([45, 81, 110, 12, 170, 136, 12, 558, 60, 403]);
  private _data2 = new BehaviorSubject([1112, 608, 58, 169, 125, 148, 1526, 129, 1000, 198]);

  data1 = this._data1.asObservable();
  data2 = this._data2.asObservable();


  changeData(event: string[]) {
    if (event[0] === 'חולים קשים') {
      if (event[1] === 'ל-100 אלף תושבים') {
        this._data1.next([112, 25, 45, 32, 60, 600, 405, 186, 201, 200]);
        this._data2.next([356, 200, 161, 52, 700, 37, 506, 42, 324, 700]);

      } else {
        this._data1.next([200, 312, 90, 603, 100, 500, 102, 400, 89, 95]);
        this._data2.next([300, 300, 200, 10, 80, 13, 156, 50, 86, 10]);

      }
    } else {
      if (event[1] === 'ל-100 אלף תושבים') {
        this._data1.next([45, 81, 110, 12, 170, 136, 12, 558, 60, 403]);
        this._data2.next([1112, 608, 58, 169, 125, 148, 1526, 129, 1000, 198]);

      } else {
        this._data1.next([500, 181, 2000, 212, 270, 23, 2208, 1058, 1200, 803]);
        this._data2.next([
          2112, 1608, 900, 369, 425, 448, 3526, 329, 3000, 398,
        ]);
 
      }
    }
  }
}
