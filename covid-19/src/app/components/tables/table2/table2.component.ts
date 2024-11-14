import { TablesDataService } from './../tables-data.service';
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
import { State } from '../interface';
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.scss',
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
export class Table2Component implements OnInit {
  constructor(private tablesDataService: TablesDataService) {}
  column1ClickCounter: number = 0;
  column2ClickCounter: number = 0;
  column3ClickCounter: number = 0;
  columnClicks:number[]=[0,0,0,0,0,0]
  columnClicked: number | null = null;

  title: string = 'מאומתים הנכנסים לישראל לפי מדינות';
  info: string =
    'מספר החולים היומי במחלת נגיף COVID-19 המאושפזים בבתי חולים בחלוקה לפי מצב רפואי : קשה (כולל קריטי), בינוני וקל.';
  rorate: string = 'errow-icon';

  firstOriginalData: any[] = [];
  buttonText = ' , מדינות נבחרו ';
  placeholderText=' מדינות נבחרו '

  tableFunctions = new Table1Functions();

  statesInfoSub: State[] = [];

  statesNumber!: number;
  isRotated: boolean = false;
  showSearch: boolean = false;
  checkedCheckboxes: any = {};

  stateInTableOriginalArange: any = [];
  hoapitalsInfoInTable!: any;
  filteredstates: any[] = [];


  time:string[]=['עד עכשיו','שנה','חצי שנה' ,'3 חודשים','חודש אחרון']
  selectedTime: string = this.time[4]; // Variable to store the selected time  
  checkboxStates: string[] = [];
  uncheckboxStates: string[] = [];

  update = '27.03.2024';
  statesNames:string[]=[]
  ngOnInit(): void {
    this.tablesDataService.tables2Data.subscribe((statesArr) => {
      console.log(statesArr);

      this.statesInfoSub = statesArr;
      this.hoapitalsInfoInTable = statesArr;
      this.statesNumber = statesArr.length;
      console.log(this.statesInfoSub);
      
    });
this.tablesDataService.createDataArr();
this.createCheckboxNames()
  }
  createCheckboxNames(){
    this.statesInfoSub.map((state)=>{
      this.checkedCheckboxes[state.name]=false
      this.statesNames.push(state.name)
    })
    console.log(this.checkedCheckboxes);
    
  }
  onClickInput() {
    this.checkboxStates=this.getCheckedCheckboxes()
    this.uncheckboxStates=this.getUncheckboxStates()
    console.log(this.checkboxStates);
  }

  displayedColumns: string[] = [
    'percent',
    'verifyForeginers',
    'verifyCitizens',
    'entering',
    'color',
    'state',
  ]; // Columns to display

  sortData(columnNumber: number) {

      this.tablesDataService.sortData(columnNumber)
      console.log(this.statesInfoSub);
     this.columnClicks = this.tablesDataService.columnClickes
      
  }

  toggleRotate(): void {
    this.isRotated = !this.isRotated;
    this.showSearch = !this.showSearch;
    if(this.showSearch===false){
      this.uncheckboxStates=[]
      this.checkboxStates=[]
    }
  }

  searchstatesInput(searchText: any) {
    let text = searchText.target.value;
    if (text === '') {
      this.uncheckboxStates = this.statesNames;
      return;
    }
    this.uncheckboxStates = this.statesNames.filter((state) =>
      state.includes(text)
    );
  }

  onCheckboxChange(state: string, event: any) {
    this.checkedCheckboxes[state] = event.target.checked;
  }

  getCheckedCheckboxes() {
    return Object.keys(this.checkedCheckboxes).filter(
      (state) => this.checkedCheckboxes[state]
    );
  }

  getUncheckboxStates() {
    return Object.keys(this.checkedCheckboxes).filter(
      (state) => !this.checkedCheckboxes[state]
    );
  }

  filterSearch() {
    this.checkboxStates = this.getCheckedCheckboxes();
    console.log(this.checkboxStates);
    this.tablesDataService.filterDataBySearch(this.checkboxStates, this.selectedTime)
    this.toggleRotate();    
  }


onRadioChange(event: any) {
  this.selectedTime = event.target.value; // Update the selectedTime variable with the value of the selected radio button
  console.log('Selected time:', this.selectedTime);
}
}
