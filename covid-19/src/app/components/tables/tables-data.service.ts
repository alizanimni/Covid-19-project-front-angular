import { Injectable, OnInit } from '@angular/core';
import { Interface } from 'readline';
import { BehaviorSubject } from 'rxjs';
import { State } from './interface';
import { log } from 'console';
import { NgZone } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TablesDataService implements OnInit {
  constructor(private ngZone: NgZone) {}

  private _table2DataSub = new BehaviorSubject<State[]>([]);
  tables2Data = this._table2DataSub.asObservable();

  states = [
    'אוסטריה',
    'אוסטרליה',
    'אורוגוואי',
    'אינדונזיה',
    'בלגיה',
    'ברזיל',
    'גאורגיה',
    'גרמניה',
    'הודו',
    'וייטנאם',
    'טנזיה',
    'כווית',
    'ליטא',
    'מונקו',
    'מצרים',
    'נפאל',
    'סין',
    'פולין',
    'צרפת',
    'קטר',
    'רוסיה',
    'שוויץ',
    'תאילנד',
    'תימן',
  ];
  colors = [
    1, 2, 3, 3, 3, 2, 1, 1, 2, 2, 2, 1, 3, 3, 2, 3, 1, 2, 3, 2, 3, 1, 1, 2,
  ];
  entering = [
    3345, 2780, 1006, 250, 780, 369, 1208, 2300, 1489, 103, 304, 23, 450, 115,
    512, 607, 802, 423, 789, 56, 345, 956, 852, 36,
  ];
  citizenc = [
    205, 312, 94, 12, 45, 21, 201, 115, 204, 9, 24, 1, 52, 13, 26, 58, 122, 123,
    106, 5, 58, 118, 87, 3,
  ];
  notCitizenc = [
    12, 40, 11, 2, 4, 1, 21, 21, 15, 2, 6, 1, 5, 2, 3, 11, 20, 16, 8, 0, 6, 8,
    4, 1,
  ];

  columnClickes: number[] = [0, 0, 0, 0, 0, 0];
  fullData: State[] = [];
  saveData: State[] = [];
  names:string[]=[]
  time:string=''
  ngOnInit(): void {}

  createDataArr() {
    this.fullData = [];
    this.states.map((state, i) => {
      const newState: State = {
        name: this.states[i],
        color: this.getColor(this.colors[i]),
        entering: this.entering[i],
        verifyCitizens: this.citizenc[i],
        verifyForeginers: this.notCitizenc[i],
        percent: (
          ((this.citizenc[i] + this.notCitizenc[i]) / this.entering[i]) *
          100
        ).toFixed(2),
      };

      this.fullData.push(newState);
    });

    this._table2DataSub.next(this.fullData);
    console.log(this.fullData);
  
  }

  getColor(color: number) {
    if (color === 1) {
      return 'yellow';
    } else if (color === 2) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  filterDataBySearch(names: string[], time: string) {
    this.names=names
    this.time=time
    this.dataByTime(time);
    if (names.length === 0) {
      this._table2DataSub.next(this.fullData);

      return;
    }

    const selectedstatesData = this.fullData.filter((entry) =>
      names.includes(entry.name)
    );
    this._table2DataSub.next(selectedstatesData);
    this.fullData=selectedstatesData
    this.saveData=[...selectedstatesData]
    console.log(selectedstatesData);
  }

  dataByTime(time: string) {
    console.log(time);
      this.createDataArr();
    if (time === 'חודש אחרון') {

      return;
    }
    if (time === 'חצי שנה') {
      this.doubleData(5.4);
      return;
    }
    if (time === '3 חודשים') {
      this.doubleData(2.5);
      return;
    }
    if (time === 'שנה') {
      this.doubleData(15);
      return;
    }
    if (time === 'עד עכשיו') {
      this.doubleData(33);
      return;
    }
  }

  doubleData(number: number) {
    let newData = [...this.fullData];
    console.log(newData);

    newData.map((state) => {
      (state.entering = Math.floor(state.entering * (number - 1))),
        (state.verifyCitizens = Math.floor(
          state.verifyCitizens * (number + 5)
        )),
        (state.verifyForeginers = Math.floor(
          state.verifyForeginers * (number + 3)
        )),
        (state.percent = (
          ((state.verifyCitizens + state.verifyForeginers) / state.entering) *
          100
        ).toFixed(2));
    });

    this.fullData = newData;
  }

  sortData(columnNumber: number) {
    let click = this.columnClickes[columnNumber - 1] + 1;
    this.columnClickes = [0, 0, 0, 0, 0, 0];
    this.columnClickes[columnNumber - 1] = click;
    if(click === 1){
      this.createDataArr()
      this.filterDataBySearch(this.names,this.time)
    }
    if(click===3 && columnNumber!==1){
      this.createDataArr()
      this.filterDataBySearch(this.names,this.time)
      this.columnClickes = [0, 0, 0, 0, 0, 0];
      return
    }
    switch (columnNumber) {
      case 1:
       this.fullData.reverse()    
        break;
      case 2:
        this.sortByColor(click)
        console.log(this.fullData);
        break;
      case 3:
        this.sortByNumber(2)
        break;
      case 4:
        this.sortByNumber(3)
        break;
      case 5:
        this.sortByNumber(4)
        break;
      case 6:
        this.sortByNumber(5)
        break;
    }

        this._table2DataSub.next([...this.fullData])    
  }
  sortByColor(click:number){
    console.log(this.fullData);
    
    if(click===2){
      this.fullData.reverse()
    }
    else if(click===1){
    this.fullData.sort((a, b) => {
      const colorOrder:{ [key: string]: number } = { 'yellow': 1, 'orange': 2, 'red': 3 };
      return colorOrder[a.color] - colorOrder[b.color];
    });      
    }
  }


  sortByNumber(number:number){
    if(this.columnClickes[number]===2){
      this.fullData.reverse()
      return
    }
   
     if(number===2){
      this.ngZone.run(() => {
        this.fullData.sort((a, b) => b.entering - a.entering);
      });        
     }
     else if(number===3){
      this.ngZone.run(() => {
        this.fullData.sort((a, b) => b.verifyCitizens - a.verifyCitizens);;
      });      
     }
     else if(number === 4){
      this.ngZone.run(() => {
        this.fullData.sort((a, b) => b.verifyForeginers - a.verifyForeginers);
      });
     }
     else if(number === 5){
      this.ngZone.run(() => {
        this.fullData.sort((a, b) => parseInt(b.percent) - parseInt(a.percent));
      });
     }
     
  }
}
