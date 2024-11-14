import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrl: './section7.component.scss',
})
export class Section7Component implements OnInit{
  time: string[] = ['עד עכשיו', 'שנה', 'חצי שנה', '3 חודשים', 'חודש אחרון'];
  title = 'זמן';
  chartTitle= 'תחלואה חוזרת- גיל והתחסנות'
  info = 'מספר המאומתים החוזרים מכלל האוכלוסיה לפי קבוצות גיל בחלוקה בין מאומתים חוזרים שהיו מחוסנים לפחות פעם אחת ביום האימות הנוסף לבין מאומתים חוזרים שלא התחסנו כלל. ניתן להציג את הנתונים כאחוז מסך המאומתים בקבוצת הגיל עבור כל אחת מקבוצות המצב החיסוני. מאומתים חוזרים - מי שנבדקו ונמצאו חיוביים פעם נוספת לנגיף COVID-19 בבדיקת PCR או בבדיקת אנטיגן מפוקחת (החל מה 5.1.2022) , החל מ-90 יום לאחר הגילוי הקודם, בין אם הופיעו אצלם תסמינים ובין אם לא, בין אם הם חולים, החלימו או נפטרו.'
  private _data1 = new BehaviorSubject([9, 4, 6, 15, 12, 86, 102, 63, 89, 45]);
  private _data2 = new BehaviorSubject([9, 4, 6, 15, 12, 86, 102, 63, 89, 45]);
  data1 = this._data1.asObservable();
  data2 = this._data2.asObservable();

  data1Tosend!: number[];
  data2Tosend!: number[];

  ngOnInit(): void {
    this.data1.subscribe((data)=>{
    this.data1Tosend=data
    })
    this.data2.subscribe((data)=>{
      this.data2Tosend=data
      })
  }
  changeData(event: string) {
    if (event === 'חודש אחרון') {
      this._data1.next([200, 312, 90, 603, 100, 500, 102, 400, 89, 95]);
      this._data2.next([300, 300, 200, 10, 80, 13, 156, 50, 86, 10]);
    } else if (event === '3 חודשים') {
      this._data1.next([112, 25, 45, 32, 60, 600, 405, 186, 201, 200]);
      this._data2.next([356, 200, 161, 52, 700, 37, 506, 42, 324, 700]);
    } else if (event === 'חצי שנה') {
      this._data1.next([45, 81, 110, 12, 170, 136, 12, 558, 60, 403]);
      this._data2.next([1112, 608, 58, 169, 125, 148, 1526, 129, 1000, 198]);
    } else if (event === 'שנה') {
      this._data1.next([500, 181, 2000, 212, 270, 23, 2208, 1058, 1200, 803]);
      this._data2.next([2112, 1608, 900, 369, 425, 448, 3526, 329, 3000, 398]);
    } else if (event === 'עד עכשיו') {
      this._data1.next([856, 681, 610, 61, 970, 536, 6208, 6058, 4200, 603]);
      this._data2.next([
        12112, 10608, 3900, 1069, 1025, 1048, 1526, 1029, 6000, 998,
      ]);
    }
    console.log(this.data1Tosend);
  }
}
