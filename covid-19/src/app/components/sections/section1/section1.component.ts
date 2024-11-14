import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss'
})
export class Section1Component {
  chartTitle:string='מספר מאושפזים - יומי'
  info:string = 'מספר החולים היומי במחלת נגיף COVID-19 המאושפזים בבתי חולים בחלוקה לפי מצב רפואי : קשה (כולל קריטי), בינוני וקל.'
  show: boolean = false;
  title1 ='מצב מאושפזים';
  radio1options = ['קשה','בינוני','קל']

  title2 ='זמן';
  radio2options = ['עד עכשיו','שנה','חצי שנה' ,'3 חודשים','חודש אחרון']

  private _startDate = new BehaviorSubject(new Date('2024-03-10'));
  private _endDate = new BehaviorSubject(new Date('2024-04-10'));
  private _checkBoxSelection = new BehaviorSubject([true,true,true])
  startDate = this._startDate.asObservable();
  endDate = this._endDate.asObservable();
  checkBoxSelection = this._checkBoxSelection.asObservable()

  changeDataBySelections(event: any[]) {
    
     this._checkBoxSelection.next(event[0])
     if(event[1]==='עד עכשיו'){
      this._startDate.next(new Date('2020-03-02'))
     }
     else if(event[1]==='שנה'){
      this._startDate.next(new Date('2023-04-10'))
     }
     else if(event[1]==='חצי שנה'){
      this._startDate.next(new Date('2023-10-10'))
     }
     else if(event[1]==='3 חודשים'){
      this._startDate.next(new Date('2024-01-10'))
     }
     else if(event[1]==='חודש אחרון'){
      this._startDate.next(new Date('2024-03-10'))
     }



  }
}
