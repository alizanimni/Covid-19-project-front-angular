import { Table1Functions } from '../tables-functions';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import * as _ from 'lodash';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
import { log } from 'console';
@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrl: './table1.component.scss',
  animations: [
    trigger('rotateIcon', [
      state(
        'true',
        style({
          transform: 'rotate(180deg)', // Rotate 180 degrees
        })
      ),
      state(
        'false',
        style({
          transform: 'rotate(0deg)', // No rotation
        })
      ),
      transition('false => true', animate('500ms ease-in')), // Animation duration and timing
      transition('true => false', animate('500ms ease-out')),
    ]),
  ],
})
export class Table1Component implements OnInit {
  column1ClickCounter: number = 0;
  column2ClickCounter: number = 0;
  column3ClickCounter: number = 0;
  columnClicked: number | null = null;
  hospitalsNames = [
    'מעייני הישועה',
    'הלל יפה',
    'לניאדו',
    'בלינסון',
    'תל השומר',
    'יוספטל',
    'רמב"ם',
    'פוריה',
    'אסותא-חיפה',
    'זיו',
    'מאיר',
    'שערי צדק',
    'הדסה',
    'וולפסון',
    'שיבא',
    'ברזילי',
    'בית לוינשטיין',
    'העמק',
    'שער מנשה',
  ];
  generalOccupancy = [
    8, 9.1, 3, 6, 4, 7.5, 13, 5.2, 7, 25, 36, 21, 4, 2, 16.2, 6, 3.2, 8, 5.3,
  ];
  internalOccupancy = [
    5, 6, 2, 10, 16, 7, 2, 11, 3, 8, 1.6, 2.5, 7.4, 2.8, 9.1, 3, 7, 2.7, 5.2,
  ];

  title: string = 'תפוסת המיטות בביה"ח';
  info: string =
    'מספר החולים היומי במחלת נגיף COVID-19 המאושפזים בבתי חולים בחלוקה לפי מצב רפואי : קשה (כולל קריטי), בינוני וקל.';
  rorate: string = 'errow-icon';

  firstOriginalData: any[] = [];
  buttonText = ' בתי חולים  מוסדות נבחרו ';

  tableFunctions = new Table1Functions();
  private _hospitalsInfo = new BehaviorSubject<any>([]);
  hospitalsInfoSub = this._hospitalsInfo.asObservable();

  hospitalsNumber!: number;
  isRotated: boolean = false;
  showSearch: boolean = false;
  checkedCheckboxes: any = {};

  hospitalInTableOriginalArange: any = [];
  hoapitalsInfoInTable!: any;
  filteredHospitals: any[] = [...this.hospitalsNames];

  checkedHospitals: string[] = [];
  unCheckedHospitals: string[] = [...this.hospitalsNames];

  update = '27.03.2024';

  ngOnInit(): void {
    this.hospitalsInfoSub.subscribe((hospitalsArr) => {
      this.hoapitalsInfoInTable = hospitalsArr;
      this.hospitalsNumber = hospitalsArr.length;
    });
    this.initialfirstOriginalData();
  }
  initialfirstOriginalData() {
    for (let i = 0; i < this.hospitalsNames.length; i++) {
      this.firstOriginalData.push({
        column1: `${this.generalOccupancy[i]}`,
        column2: `${this.internalOccupancy[i]}`,
        column3: this.hospitalsNames[i],
      });
      this.checkedCheckboxes[this.hospitalsNames[i]] = false;
    }
    console.log(this.firstOriginalData);
    this._hospitalsInfo.next(this.firstOriginalData);
    this.hospitalInTableOriginalArange = [...this.firstOriginalData];
    console.log(this.hospitalInTableOriginalArange);
  }

  displayedColumns: string[] = ['column1', 'column2', 'column3']; // Columns to display

  sortData(columnNumber: number) {
    let data = [...this.hoapitalsInfoInTable];
    const sortedData = this.tableFunctions.sortArr(data, columnNumber);

    if (sortedData.length === 0) {
      console.log('hi');

      this._hospitalsInfo.next(this.hospitalInTableOriginalArange);
      this.hoapitalsInfoInTable = _.cloneDeep(
        this.hospitalInTableOriginalArange
      );
    } else {
      this._hospitalsInfo.next(sortedData);
      this.hoapitalsInfoInTable = sortedData;
      console.log(this.hospitalInTableOriginalArange);
    }

    this.updateClickes();
    this.columnClicked = columnNumber;
  }

  updateClickes() {
    this.column1ClickCounter = this.tableFunctions.column[0];
    this.column2ClickCounter = this.tableFunctions.column[1];
    this.column3ClickCounter = this.tableFunctions.column[2];
  }

  toggleRotate(): void {
    this.isRotated = !this.isRotated;
    this.showSearch = !this.showSearch;
  }

  searchHospitalsInput(searchText: any) {
    let text = searchText.target.value;
    if (text === '') {
      this.unCheckedHospitals = this.hospitalsNames;
      return;
    }
    this.unCheckedHospitals = this.hospitalsNames.filter((hospital) =>
      hospital.includes(text)
    );
  }

  onCheckboxChange(hospital: string, event: any) {
    this.checkedCheckboxes[hospital] = event.target.checked;
  }

  getCheckedCheckboxes() {
    return Object.keys(this.checkedCheckboxes).filter(
      (hospital) => this.checkedCheckboxes[hospital]
    );
  }

  getUncheckedHospitals() {
    return Object.keys(this.checkedCheckboxes).filter(
      (hospital) => !this.checkedCheckboxes[hospital]
    );
  }

  filterSearch() {
    this.toggleRotate();
    this.checkedHospitals = this.getCheckedCheckboxes();
    console.log(this.checkedHospitals);

    if (this.checkedHospitals.length === 0) {
      this._hospitalsInfo.next(this.firstOriginalData);
      this.hospitalInTableOriginalArange = [...this.firstOriginalData]; // Cloning the original data
      return;
    }
    this.unCheckedHospitals = this.getUncheckedHospitals();
    const selectedHospitalsData = this.firstOriginalData.filter((entry) =>
      this.checkedHospitals.includes(entry.column3)
    );
    this._hospitalsInfo.next(selectedHospitalsData);
    this.hospitalInTableOriginalArange = [...selectedHospitalsData]; // Cloning the original data
    this.filteredHospitals = [
      ...this.checkedHospitals,
      ...this.unCheckedHospitals,
    ];

    console.log(this.filteredHospitals);

    console.log(this.hospitalInTableOriginalArange);
  }
}
