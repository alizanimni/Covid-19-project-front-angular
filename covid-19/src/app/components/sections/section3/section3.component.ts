import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss',
})
export class Section3Component {
  show: boolean = false;
  title1 = 'משתנה';
  radio1options = ['חולים פעילים', 'חולים קשים'];
  radio2options = ['מספר מוחלט', 'ל-100 אלף תושבים'];

  private _data1 = new BehaviorSubject([45, 81, 110, 12, 170, 136, 12, 558, 60, 403]);
  private _data2 = new BehaviorSubject([1112, 608, 58, 169, 125, 148, 1526, 129, 1000, 198]);
  private _data3 = new BehaviorSubject([356, 200, 161, 52, 700, 37, 506, 42, 324, 700]);
  data1 = this._data1.asObservable();
  data2 = this._data2.asObservable();
  data3 = this._data3.asObservable();

  changeData(event: string[]) {
    if (event[0] === 'חולים קשים') {
      if (event[1] === 'ל-100 אלף תושבים') {
        this._data1.next([112, 25, 45, 32, 60, 600, 405, 186, 201, 200]);
        this._data2.next([356, 200, 161, 52, 700, 37, 506, 42, 324, 700]);
        this._data3.next([42, 500, 78, 38, 112, 108, 369, 400, 103, 500]);
      } else {
        this._data1.next([200, 312, 90, 603, 100, 500, 102, 400, 89, 95]);
        this._data2.next([300, 300, 200, 10, 80, 13, 156, 50, 86, 10]);
        this._data3.next([356, 200, 161, 52, 700, 37, 506, 42, 324, 700]);
      }
    } else {
      if (event[1] === 'ל-100 אלף תושבים') {
        this._data1.next([45, 81, 110, 12, 170, 136, 12, 558, 60, 403]);
        this._data2.next([1112, 608, 58, 169, 125, 148, 1526, 129, 1000, 198]);
        this._data3.next([356, 200, 161, 52, 700, 37, 506, 42, 324, 700]);
      } else {
        this._data1.next([500, 181, 2000, 212, 270, 23, 2208, 1058, 1200, 803]);
        this._data2.next([
          2112, 1608, 900, 369, 425, 448, 3526, 329, 3000, 398,
        ]);
        this._data3.next([356, 200, 161, 52, 700, 37, 506, 42, 324, 700]);
      }
    }
  }
}
